'use client';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import Image from 'next/image';
import { deleteAdminItem } from '@/service/admin.service';

interface modalDeleteProdukProps {
    id: number;
    nama: string;
    onSuccess?: () => void;
}

export default function ModalDeleteProduk({ id, nama, onSuccess }: modalDeleteProdukProps) {
    const [openDelete, setOpenDelete] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const handleDelete = async () => {
        setIsSubmitting(true);
        setErrorMsg(null);
        try {
            await deleteAdminItem(id); // Memanggil API hapus dengan ID
            setOpenDelete(false);
            if (onSuccess) onSuccess(); // Memicu pembaruan data di parent komponen
        } catch (err) {
            setErrorMsg(
                err instanceof Error ? err.message : 'Terjadi kesalahan saat menghapus produk',
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        if (isSubmitting) return; // Cegah penutupan saat sedang loading
        setOpenDelete(false);
        setErrorMsg(null);
    };

    return (
        <>
            <button id="delete" onClick={() => setOpenDelete(true)} className="cursor-pointer">
                <Image
                    src="/images/icon_delete.png"
                    alt="icon delete"
                    width={50}
                    height={50}
                    className="w-10 h-auto object-contain"
                />
            </button>
            <Dialog open={openDelete} onClose={handleClose} className="relative z-10">
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
                />

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <DialogPanel
                            transition
                            className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
                        >
                            <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10">
                                        <ExclamationTriangleIcon
                                            aria-hidden="true"
                                            className="size-6 text-red-400"
                                        />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <DialogTitle
                                            as="h3"
                                            className="text-base font-semibold text-white"
                                        >
                                            Hapus Produk
                                        </DialogTitle>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-400">
                                                Apakah anda yakin ingin menghapus produk
                                                <span className="font-bold text-white">
                                                    {' '}
                                                    {nama}
                                                </span>
                                                ? tindakan ini tidak akan bisa di balikkan. Pastikan
                                                anda benar-benar yakin untuk menghapus produk ini.
                                            </p>
                                        </div>
                                        {/* if error */}
                                        {errorMsg && (
                                            <div className="mt-3 rounded-lg bg-red-500/10 px-3 py-2 text-sm text-red-400">
                                                {errorMsg}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button
                                    type="button"
                                    onClick={handleDelete}
                                    disabled={isSubmitting}
                                    className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto"
                                >
                                    {isSubmitting ? 'MENGHAPUS...' : 'HAPUS PRODUK'}
                                </button>
                                <button
                                    type="button"
                                    data-autofocus
                                    onClick={handleClose}
                                    disabled={isSubmitting}
                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto"
                                >
                                    Batalkan
                                </button>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    );
}
