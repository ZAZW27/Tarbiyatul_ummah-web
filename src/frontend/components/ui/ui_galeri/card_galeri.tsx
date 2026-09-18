'use client';

import { useState } from 'react';
import Image from 'next/image';
import ModalGaleri from './modal_galeri';
import { Gallery } from '@/types/gallery';
import ModalDeleteMedia from './modal_delete_media';
import ModalEditMedia from './modal_edit_media';

interface CardGalleryProps extends Gallery {
    isAdmin: boolean;
    priority?: boolean;
}

export default function CardGallery({
    id,
    title,
    description,
    price,
    stock,
    image_url,
    category,
    file_id,
    status,
    isAdmin,
    priority = true,
}: CardGalleryProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [expandedDesc, setExpanedDesc] = useState(false);

    const batasKarakter = 40;
    const cuttingEdge = description.length > batasKarakter;
    const deskripsiFull = expandedDesc
        ? description
        : description.slice(0, batasKarakter) + (cuttingEdge ? '...' : '');

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
                    className="relative h-60 md:h-80 w-full cursor-pointer overflow-hidden"
                    onClick={() => setIsOpen(true)}
                >
                    <Image
                        src={image_url || '/images/galeri.png'}
                        alt={title || 'Gambar Media'}
                        fill
                        className="object-cover transition duration-300 group-hover:scale-105"
                        priority={priority}
                    />

                    {isAdmin && (
                        <div
                            id="manipulation"
                            onClick={(e) => e.stopPropagation()}
                            className="absolute top-2 right-2 z-10 flex flex-row gap-1 bg-white/10  rounded-md backdrop-blur-sm"
                        >
                            <div className="flex items-end justify-end cursor-pointer">
                                <ModalEditMedia
                                    id={id}
                                    nama={title}
                                    deskripsi={description}
                                    gambar={image_url}
                                />
                            </div>

                            <div className="flex items-end justify-end cursor-pointer">
                                <ModalDeleteMedia id={id} nama={title} />
                            </div>
                        </div>
                    )}

                    {/* Overlay  */}
                    {/* TITLE */}
                    <div className="absolute inset-x-0 bottom-0 bg-black/60 px-4 py-3 text-white">
                        <h2 className="text-base font-bold">{title}</h2>

                        <p className="mt-1 text-xs truncate">{description}</p>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <ModalGaleri
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                isAdmin={isAdmin}
                title={title}
                id={id}
                description={description}
                price={price}
                stock={stock}
                status={status}
                image_url={image_url}
                file_id={file_id}
                category={category}
            />
        </>
    );
}
