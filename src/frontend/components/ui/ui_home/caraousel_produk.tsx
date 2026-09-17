'use client';
import { Produk } from '@/types/produk';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { Inter } from 'next/font/google';

interface ProdukCarouselHomeProps {
    produkList: Produk[];
}

export const secondaryFont = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-secondary', //
});

export default function ProdukCarausel({ produkList }: ProdukCarouselHomeProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (!scrollContainerRef.current) return;
        const scrollAmount = 320; // Jarak geser per klik
        scrollContainerRef.current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    if (produkList.length === 0) {
        return (
            <div className="py-12 text-center text-sm text-neutral-400">
                Belum ada produk unggulan yang ditampilkan.
            </div>
        );
    }

    return (
        <div className="relative w-full">
            {/* Navigasi Panah (Desktop) */}
            <div className="mb-4 flex items-center justify-between px-2">
                <div>
                    <h2 className="text-2xl lg:pl-4 font-bold tracking-tight text-neutral-900 text-center">
                        Karya & Produk Anak-Anak LKSA Tarbiyatul Ummah
                    </h2>
                </div>

                <div className="hidden gap-2 sm:flex">
                    <button
                        onClick={() => scroll('left')}
                        aria-label="Geser ke kiri"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:bg-neutral-100 hover:text-black active:scale-95"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        aria-label="Geser ke kanan"
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-sm transition hover:bg-neutral-100 hover:text-black active:scale-95"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Container Carousel (Snap Scroll) */}
            <div
                ref={scrollContainerRef}
                className={`flex gap-5 overflow-x-auto scroll-smooth py-2 px-1 snap-x snap-mandatory scrollbar-none [&::-webkit-scrollbar]:hidden ${
                    produkList.length <= 4 ? 'lg:justify-center' : 'justify-start'
                }`}
            >
                {produkList.map((item) => (
                    <article
                        key={item.id}
                        className="group relative flex w-57.5 shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-neutral-200/70 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:w-65"
                    >
                        {/* Gambar Produk */}
                        <div className="relative aspect-4/4 w-full overflow-hidden rounded-xl bg-neutral-100">
                            <Image
                                src={item.image_url || '/images/dummy_produk_pic.png'}
                                alt={item.title}
                                fill
                                sizes="(max-width: 640px) 230px, 260px"
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            {item.status && (
                                <span className="absolute top-2 left-2 rounded-md bg-black/60 px-2 py-0.5 text-[10px] font-semibold tracking-wider text-white uppercase backdrop-blur-sm">
                                    {item.status}
                                </span>
                            )}
                        </div>

                        {/* Deskripsi & Judul */}
                        <div className="mt-3 flex flex-1 flex-col justify-between">
                            <div>
                                <h3 className="truncate text-base font-semibold text-neutral-800">
                                    {item.title}
                                </h3>
                                <p className="mt-1 line-clamp-2 text-xs text-black">
                                    {item.description}
                                </p>
                            </div>

                            <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-3">
                                <div>
                                    <span className="block text-[10px] text-black">Harga</span>
                                    <p className={`${secondaryFont.className}`}>
                                        Rp {Number(item.price || 0).toLocaleString('id-ID')}
                                    </p>
                                </div>

                                <Link
                                    href="/produk"
                                    className="rounded-lg bg-emerald-400 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-neutral-700"
                                >
                                    Detail
                                </Link>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
