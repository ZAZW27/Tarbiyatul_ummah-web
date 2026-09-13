'use client';

import { useState } from 'react';
import Image from 'next/image';
import ModalGaleri from './modal_galeri';

export default function CardGaleri() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className="
                    group relative overflow-hidden
                    rounded-2xl
                    bg-white
                    shadow-md
                    transition duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                "
            >
                {/* Foto */}
                <div
                    className="relative h-48 w-full cursor-pointer overflow-hidden"
                    onClick={() => setIsOpen(true)}
                >
                    <Image
                        src="/images/galeri.png"
                        alt="Kegiatan Bersama Anak-Anak"
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-x-0 bottom-0 bg-black/60 px-4 py-3 text-white">
                        <h2 className="text-base font-bold">
                            Kegiatan Bersama Anak-Anak
                        </h2>

                        <p className="mt-1 line-clamp-2 text-xs">
                            Kegiatan kerja bakti bersama anak-anak dalam
                            rangka memperingati HUT Kemerdekaan RI.
                        </p>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <ModalGaleri
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </>
    );
}