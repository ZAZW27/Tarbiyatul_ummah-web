'use client';
import { Fragment, useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { updateAdminItem } from '@/service/admin.service';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

interface ModalEditMediaProps {
    id: number;
    nama: string;
    deskripsi: string;
    gambar: string; // URL gambar yang sudah ada (dari field image_url di database)
    onSuccess?: () => void;
}

const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4 MB (satuan bytes)
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
export default function ModalEditMedia({
    id,
    nama,
    deskripsi,
    gambar,
    onSuccess,
}: ModalEditMediaProps) {
    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const [form, setForm] = useState({
        nama,
        deskripsi,
    });
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

        // 1. Validasi format berkas
        if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
            setErrorMsg('Format gambar tidak didukung. Gunakan file JPG, PNG, atau WebP.');
            e.target.value = ''; // Reset input file
            setImageFile(null);
            setPreviewUrl(null);
            return;
        }

        // 2. Validasi ukuran berkas (maksimal 2 MB)
        if (file.size > MAX_FILE_SIZE) {
            setErrorMsg('Ukuran gambar terlalu besar. Maksimal ukuran adalah 2 MB.');
            e.target.value = ''; // Reset input file
            setImageFile(null);
            setPreviewUrl(null);
            return;
        }

        // Jika valid, hapus pesan error dan tampilkan preview
        setErrorMsg(null);

        setImageFile(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.SubmitEvent & { nativeEvent: SubmitEvent }) => {
        e.preventDefault();

        if (!form.nama || !form.deskripsi) {
            setErrorMsg('Nama,dan deskripsi wajib diisi ya');
            return;
        }

        setIsSubmitting(true);
        setErrorMsg(null);
        try {
            const formData = new FormData();
            formData.append('title', form.nama);
            formData.append('description', form.deskripsi);

            // Gambar cuma dikirim kalau admin pilih file baru.
            if (imageFile) {
                formData.append('image', imageFile);
            }

            await updateAdminItem(id, formData);
            (toast.success('MEDIA berhasil Di EDIT!', {
                className:
                    '!bg-yellow-600 !text-white !border-white  !mt-12 !py-4 !px-6 !text-base',
            }),
                handleClose());
            router.refresh();
            onSuccess?.();
        } catch (err) {
            setErrorMsg(
                err instanceof Error ? err.message : 'Terjadi kesalahan saat mengubah Media',
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
                    className="w-12 h-auto object-contain"
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
                                        Edit Media
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
                                    <div className="flex items-center gap-4">
                                        <label
                                            htmlFor="foto-edit"
                                            className="flex h-42 w-42 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-gray-200"
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
                                            accept="image/jpeg,image/png,image/webp"
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

                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Nama Media
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
