'use client';
import { Fragment, useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { createAdminItem } from '@/service/admin.service';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import { Dialog, DialogPanel, DialogTitle, TransitionChild, Transition } from '@headlessui/react';
// import { Plus, X, ChevronDown, ImagePlus, Loader2 } from "lucide-react";
// import { tambahProduk } from "@/services/produk";
// import { Produk } from "@/types/produk";

// const KategoriOption = ['Kerajinan Tangan', 'Aksesoris', 'Lainnya'];

interface ModalTambahMediaProps {
    onSuccess?: () => void;
}

const formKosong = {
    nama: '',
    deskripsi: '',
};

export default function ModalTambahMedia({ onSuccess }: ModalTambahMediaProps) {
    const router = useRouter(); // Inisialisasi router

    // Failed linting, but keep it here for now
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // Failed linting, but keep it here for now
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const [form, setForm] = useState(formKosong);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const resetForm = () => {
        setForm(formKosong);
        setImageFile(null);
        setPreviewUrl(null);
        setErrorMsg(null);
    };

    const handleClose = () => {
        if (isSubmitting) return;
        setIsOpen(false);
        resetForm();
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

        if (!form.nama || !imageFile || !form.deskripsi) {
            setErrorMsg('Judul gambar, Gambar, dan deskripsi wajib di isi ya');
            return;
        }
        setIsSubmitting(true);
        setErrorMsg(null);
        try {
            const formData = new FormData();
            formData.append('title', form.nama);
            formData.append('description', form.deskripsi);
            formData.append('image', imageFile);
            await createAdminItem(formData);
            (toast.success('Foto berhasil ditambahkan!', {
                className:
                    '!bg-white !text-green !border-emerald-700 !mt-12 !py-4 !px-6 !text-base',
            }),
                handleClose());
            router.refresh();
            if (onSuccess) onSuccess();
        } catch (err) {
            setErrorMsg(
                err instanceof Error
                    ? err.message
                    : 'Terjadi Kesalahan saat ingin menambahkan Media',
            );
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <>
            <div className="flex justify-center">
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-2 rounded-full bg-green-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-green-700"
                >
                    <p>+ Tambah Media</p>
                </button>
            </div>

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

                    {/* Container: full screen di mobile, center di desktop */}
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
                                        Tambah Media
                                    </DialogTitle>
                                    <button
                                        onClick={handleClose}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <h1>X</h1>
                                    </button>
                                </div>
                                {errorMsg && (
                                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded mb-4 text-sm">
                                        {errorMsg}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Foto produk */}
                                    <div className="flex items-center gap-4">
                                        <label
                                            htmlFor="foto-produk"
                                            className="flex h-36 w-36 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-gray-200"
                                        >
                                            {previewUrl ? (
                                                <Image
                                                    src={previewUrl}
                                                    alt="Preview"
                                                    width={100}
                                                    height={100}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <h1>+</h1>
                                            )}
                                        </label>
                                        <input
                                            id="foto-produk"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />
                                        <label
                                            htmlFor="foto-produk"
                                            className="cursor-pointer rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600"
                                        >
                                            Tambahkan Foto
                                        </label>
                                    </div>

                                    {/* Nama Produk */}
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Judul Foto
                                        </label>
                                        <input
                                            type="text"
                                            name="nama"
                                            value={form.nama}
                                            onChange={handleInputChange}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none"
                                        />
                                    </div>

                                    {/* Deskripsi */}
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Deskripsi Foto
                                        </label>
                                        <textarea
                                            name="deskripsi"
                                            value={form.deskripsi}
                                            onChange={handleInputChange}
                                            rows={3}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none"
                                        />
                                    </div>
                                    {errorMsg && <p className="text-sm text-red-600">{errorMsg}</p>}

                                    {/* Tombol Batal & Tambahkan */}
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
                                            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-green-500 py-3 font-semibold text-white transition hover:bg-green-600 disabled:opacity-60"
                                        >
                                            {isSubmitting}
                                            {isSubmitting ? 'Menyimpan...' : 'Tambahkan Produk'}
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
