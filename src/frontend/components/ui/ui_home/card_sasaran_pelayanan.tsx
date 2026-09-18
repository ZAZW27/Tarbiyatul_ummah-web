'use client';
import Image from 'next/image';
import Link from 'next/link';

interface CardSasaranProps {
    title: string;
}

export function CardSasaranPelayanan({ title }: CardSasaranProps) {
    return (
        <Link href="/about#sasaran_layanan">
            <div className=" lg:mx-4 cursor-pointer p-4 whitespace-pre-line h-full relative flex flex-col items-center justify-center tracking-wide bg-linear-to-b from-teal-400 to-teal-500 overflow-hidden rounded-2xl text-white min-h-[110px] shadow-md/30 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_15px_25px_-5px_rgba(0,0,0,0.25),0_0_20px_theme(colors.teal.400/30%)]">
                {/* ORNAMENT AREA */}

                <Image
                    src="/images/new_ornamen_batik_bawah.webp"
                    alt="Ornamen batik bawah"
                    width={120}
                    height={120}
                    className="absolute -bottom-2 -left-2 opacity-50"
                />

                <Image
                    src="/images/new_ornamen_batik_atas.webp"
                    alt="Ornamen batik bawah"
                    width={160}
                    height={160}
                    className="absolute -top-2 -right-2 opacity-50"
                />

                <h1 className="whitespace-pre-line text-lg text-center">{title}</h1>
            </div>
        </Link>
    );
}
