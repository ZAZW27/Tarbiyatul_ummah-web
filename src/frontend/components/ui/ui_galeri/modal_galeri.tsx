'use client';

import { Fragment } from 'react';
import Image from 'next/image';
import { Gallery } from '@/types/gallery';
import { Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react';

interface ModalGaleriProps extends Gallery {
    isOpen: boolean;
    onClose: () => void;
    isAdmin: boolean;
}

export default function ModalGaleri({
    isOpen,
    onClose,

    id,
    title,
    description,
    price,
    stock,
    image_url,
    file_id,
    status,
    category,
    isAdmin,
}: ModalGaleriProps) {
    return (
        <Transition show={isOpen} as={Fragment}>
            <Dialog onClose={onClose} className="relative z-50">
                {/* Background */}
                <TransitionChild
                    as={Fragment}
                    enter="ease-out duration-200"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/60" />
                </TransitionChild>

                {/* Modal */}
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-150"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <DialogPanel className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl">
                            {/* Header */}
                            <div className="sticky top-0 z-10 flex items-center justify-between bg-white px-6 py-4 border-b border-gray-100">
                                <DialogTitle className="text-xl font-bold text-[#008F4C]">
                                    Detail {title}
                                </DialogTitle>

                                <button
                                    onClick={onClose}
                                    className="text-xl font-bold text-gray-400 hover:text-gray-700"
                                >
                                    ✕
                                </button>
                            </div>

                            {/* Image */}
                            <div className="px-6">
                                <Image
                                    src={image_url || '/images/galeri.png'}
                                    alt={title || 'Gambar Media'}
                                    width={1200}
                                    height={800}
                                    className="h-auto w-full rounded-xl object-cover"
                                />
                            </div>

                            {/* Detail */}
                            <div className="px-6 py-5">
                                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

                                <p className="mt-3 leading-relaxed text-gray-600 break-all">
                                    {description}
                                </p>
                            </div>

                            {/* Footer */}
                            <div className="flex justify-end px-6 pb-5">
                                <button
                                    onClick={onClose}
                                    className="rounded-full bg-[#008F4C] px-6 py-2.5 font-semibold text-white transition hover:bg-[#007A40]"
                                >
                                    Tutup
                                </button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    );
}
