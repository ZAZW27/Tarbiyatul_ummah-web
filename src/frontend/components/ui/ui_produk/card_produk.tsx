'use client';

import { useState, useEffect } from 'react'; // failed linting (useEffect was declared but never used) -- Biarin aja dulu
import Image from 'next/image';
import ModalDeleteProduk from './modal_delete_produkt';
import { Produk } from '@/types/produk';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import ModalEditProduk from './modal_edit_produk';
import ModalProduk from './modal_produk';

interface CardProdukProps extends Produk {
    isAdmin: boolean;
}

export const secondaryFont = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-secondary', // This creates a custom CSS variable
});

export default function CardProduk({
    id,
    title,
    description,
    image_url, // failed linting -- keep it here for now
    file_id, // failed linting -- keep it here for now
    price,
    stock,
    status,
    isAdmin,
    category,
}: CardProdukProps) {
    // const isImageValid = .image_url && (produk.image_url.startsWith('http') || produk.image_url.startsWith('/'));
    const kontakWhatsapp = 6289602601506; // yusuf
    const [expandedDesc, setExpanedDesc] = useState(false);

    const [isOpen, setIsOpen] = useState(false);

    const wa_link = ` https://wa.me/${kontakWhatsapp}?text=${encodeURIComponent(`Halo, saya tertarik dengan produk "${title}"`)}`;

    const batasKarakter = 40;
    const cuttingEdge = description.length > batasKarakter;
    const deskripsiFull = expandedDesc
        ? description
        : description.slice(0, batasKarakter) + (cuttingEdge ? '...' : '');

    return (
        <div
            className="
            transition duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
        relative flex flex-col bg-[#e6efeb] outline-2 outline-[#72e5b5] rounded-xl max-w-56 lg:max-w-70 w-full mt-2 overflow-hidden h-full"
        >
            {isAdmin && (
                <div
                    id="manipulation"
                    className="absolute top-2 right-2 z-10 flex flex-row gap-1 bg-white/10  rounded-md backdrop-blur-sm"
                >
                    <div className="flex items-end justify-end cursor-pointer">
                        <ModalEditProduk
                            id={id}
                            nama={title}
                            deskripsi={description}
                            harga={price}
                            stock={stock}
                            status={status}
                            gambar={image_url}
                        />
                    </div>

                    <div className="flex items-end justify-end cursor-pointer">
                        <ModalDeleteProduk id={id} nama={title} />
                    </div>
                </div>
            )}

            <div
                id="thumbnail"
                className="relative w-full h-48 lg:h-70 bg-[#e6efeb] overflow-hidden mb-4"
                onClick={() => setIsOpen(true)}
            >
                <Image
                    src={image_url || '/images/dummy_produk_pic.png'}
                    alt={title || 'Gambar Produk'}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                />
            </div>

            <div
                id="produk_info"
                className="flex flex-col items-start justify-start px-4 grow pb-4 w-full"
            >
                <div id="title_produk" className="w-full">
                    <h1 className="text-sm lg:text-lg font-bold ">{title}</h1>
                </div>

                <div id="harga_produk" className={`${secondaryFont.className}`}>
                    Rp {Number(price || 0).toLocaleString('id-ID')}
                </div>

                <div id="harga_produk" className={`${secondaryFont.className}`}>
                    <h1 className="text-sm lg:text-lg ">Stok Produk: {stock}</h1>
                </div>

                <div id="deskripsi_produk" className="pt-2 grow w-full">
                    {/* nambahin class break-all di sini */}
                    <p className="text-sm lg:text-base text-gray-700 break-all">
                        <span className="font-semibold">Deskripsi: </span>
                        {deskripsiFull}{' '}
                        {cuttingEdge && (
                            <button
                                onClick={() => setExpanedDesc(!expandedDesc)}
                                className="text-sm text-gray-500 hover:underline font-medium ml-1"
                            >
                                {expandedDesc ? 'Lihat Lebih sedikit' : 'See More'}
                            </button>
                        )}
                    </p>
                </div>
            </div>

            <div className="px-4 w-full" id="status_hubungi">
                <div id="status_produk" className="mb-3">
                    <div
                        className={`flex items-start justify-start w-auto lg:w-40 h-auto rounded-lg ${
                            status.toLowerCase() === 'sold' ? 'bg-yellow-400' : 'bg-[#00A1B0]'
                        }`}
                    >
                        {/* Saya juga mengubah warna teks menjadi hitam/gelap jika background kuning agar mudah dibaca */}
                        <h1
                            className={`text-sm lg:text-lg pl-2 ${
                                status.toLowerCase() === 'sold' ? 'text-gray-900' : 'text-white'
                            }`}
                        >
                            Status : {status}
                        </h1>
                    </div>
                </div>

                <div id="pesan" className="w-full mt-2 mb-6">
                    <Link
                        // Jika sold, href diarahkan ke '#' agar tidak memuat ulang halaman
                        href={status.toLowerCase() === 'sold' ? '#' : wa_link}
                        // Matikan interaksi klik pada Link jika statusnya sold
                        className={status.toLowerCase() === 'sold' ? 'pointer-events-none' : ''}
                        aria-disabled={status.toLowerCase() === 'sold'}
                    >
                        <button
                            disabled={status.toLowerCase() === 'sold'}
                            className={`flex flex-row items-center justify-between w-full rounded-lg py-2.5 gap-2 px-3 cursor-pointer ${
                                status.toLowerCase() === 'sold'
                                    ? 'bg-gray-400 cursor-not-allowed opacity-75' // Visual pas disabled
                                    : 'bg-[#0C5F4D] hover:bg-[#094d3e]' // Visual pas normal
                            }`}
                        >
                            <p className="text-white font-medium m-0 text-xs lg:text-md ">
                                Hubungi Kami Melalui Whatsapp
                            </p>
                            <Image
                                src="/images/icon_whatsapp_colored.png"
                                alt="Icon Whatsapp"
                                width={24}
                                height={24}
                                //  filter grayscale pada ikon jika status sold
                                className={`object-contain hidden lg:block ${
                                    status.toLowerCase() === 'sold' ? 'grayscale opacity-60' : ''
                                }`}
                            />
                        </button>
                    </Link>
                </div>
            </div>
            {/* Modal */}
            <ModalProduk
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
        </div>
    );
}
