'use client';
import { Fragment, useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { updateAdminItem } from '@/service/admin.service';
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const statusOption: Array<'active' | 'sold'> = ['active', 'sold'];

interface ModalEditProdukProps {
    id: number;
    nama: string;
    deskripsi: string;
    harga: number;
    stock: number;
    status: 'active' | 'sold';
    gambar: string; // URL gambar yang sudah ada (dari field image_url di database)
    onSuccess?: () => void;
}

export default function ModalEditProduk({
    id,
    nama,
    deskripsi,
    harga,
    stock,
    status: statusAwal,
    gambar,
    onSuccess,
}: ModalEditProdukProps) {
    const router = useRouter(); // Inisialisasi router

    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const [form, setForm] = useState({
        nama,
        deskripsi,
        harga: String(harga),
        stock: String(stock),
    });
    const [status, setStatus] = useState<string>(statusAwal);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(gambar); // default: gambar lama

    const handleClose = () => {
        if (isSubmitting) return;
        setIsOpen(false);
        setErrorMsg(null);
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setImageFile(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.SubmitEvent & { nativeEvent: SubmitEvent }) => {
        e.preventDefault();

        if (!form.nama || !form.harga || form.stock === undefined || !form.deskripsi) {
            setErrorMsg('Nama, Harga, Stock, dan deskripsi wajib diisi ya');
            return;
        }

        setIsSubmitting(true);
        setErrorMsg(null);
        try {
            const formData = new FormData();
            formData.append('title', form.nama);
            formData.append('description', form.deskripsi);
            formData.append('price', form.harga);
            formData.append('stock', form.stock);
            formData.append('status', status);

            // Gambar cuma dikirim kalau admin pilih file baru.
            if (imageFile) {
                formData.append('image', imageFile);
            }

            await updateAdminItem(id, formData);
            (toast.success('Produk berhasil Di EDIT!', {
                className:
                    '!bg-yellow-600 !text-white !border-white  !mt-12 !py-4 !px-6 !text-base',
            }),
                handleClose());
            router.refresh();
            onSuccess?.();
        } catch (err) {
            setErrorMsg(
                err instanceof Error ? err.message : 'Terjadi kesalahan saat mengubah produk',
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <button id="edit" onClick={() => setIsOpen(true)} className="cursor-pointer">
                <Image
                    src="/images/icon_edit.png"
                    alt="icon edit"
                    width={50}
                    height={50}
                    className="w-10 h-auto object-contain"
                />
            </button>

            <Transition show={isOpen} as={Fragment}>
                <Dialog onClose={handleClose} className="relative z-50">
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
                    </TransitionChild>

                    <div className="fixed inset-0 flex items-end justify-center sm:items-center sm:p-4">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-250"
                            enterFrom="opacity-0 translate-y-8 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-8 sm:translate-y-0 sm:scale-95"
                        >
                            <DialogPanel className="flex max-h-[92vh] w-full flex-col overflow-y-auto rounded-t-3xl bg-white p-6 sm:max-h-[85vh] sm:max-w-md sm:rounded-3xl">
                                <div className="mb-4 flex items-center justify-between">
                                    <DialogTitle className="text-lg font-semibold text-gray-800">
                                        Edit Produk
                                    </DialogTitle>
                                    <button
                                        onClick={handleClose}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        ✕
                                    </button>
                                </div>

                                {errorMsg && (
                                    <div className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600">
                                        {errorMsg}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* gambar */}
                                    <div className="flex flex-col items-center justify-center gap-3 mb-10">
                                        <label
                                            htmlFor="foto-edit"
                                            className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-gray-200"
                                        >
                                            {previewUrl ? (
                                                <Image
                                                    src={previewUrl}
                                                    alt="Preview"
                                                    className="h-full w-full object-cover"
                                                    width={250}
                                                    height={250}
                                                />
                                            ) : (
                                                <span className="text-xs text-gray-400">
                                                    Tidak ada gambar
                                                </span>
                                            )}
                                        </label>
                                        <input
                                            id="foto-edit"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />
                                        <label
                                            htmlFor="foto-edit"
                                            className="cursor-pointer rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600"
                                        >
                                            Ganti Foto
                                        </label>
                                    </div>

                                    <Listbox value={status} onChange={setStatus}>
                                        <div className="relative">
                                            <ListboxButton className="flex w-full items-center justify-between rounded-full bg-gray-800 px-4 py-2 text-sm font-medium text-white">
                                                <span className="truncate capitalize">
                                                    {status}
                                                </span>
                                                <span>▾</span>
                                            </ListboxButton>
                                            <ListboxOptions className="absolute z-10 mt-1 w-full rounded-lg bg-white py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none">
                                                {statusOption.map((opt) => (
                                                    <ListboxOption
                                                        key={opt}
                                                        value={opt}
                                                        className="cursor-pointer px-4 py-2 data-focus:bg-sky-50"
                                                    >
                                                        {opt}
                                                    </ListboxOption>
                                                ))}
                                            </ListboxOptions>
                                        </div>
                                    </Listbox>

                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Nama Produk
                                        </label>
                                        <input
                                            type="text"
                                            name="nama"
                                            value={form.nama}
                                            onChange={handleInputChange}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Deskripsi produk
                                        </label>
                                        <textarea
                                            name="deskripsi"
                                            value={form.deskripsi}
                                            onChange={handleInputChange}
                                            rows={3}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Harga produk
                                        </label>
                                        <input
                                            type="number"
                                            name="harga"
                                            min={0}
                                            value={form.harga}
                                            onChange={handleInputChange}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none"
                                        />
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Stock
                                        </label>
                                        <input
                                            type="number"
                                            name="stock"
                                            min={0}
                                            value={form.stock}
                                            onChange={handleInputChange}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none"
                                        />
                                    </div>

                                    <div className="flex gap-3 pt-2">
                                        <button
                                            type="button"
                                            onClick={handleClose}
                                            disabled={isSubmitting}
                                            className="flex-1 rounded-full bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600 disabled:opacity-50"
                                        >
                                            Batal
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex-1 rounded-full bg-green-500 py-3 font-semibold text-white transition hover:bg-green-600 disabled:opacity-60"
                                        >
                                            {isSubmitting ? 'Menyimpan...' : 'Simpan Perubahan'}
                                        </button>
                                    </div>
                                </form>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
