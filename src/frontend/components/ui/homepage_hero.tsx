'use client';
import Image from 'next/image';
import { TombolHijau } from '@/components/ui/buttons';
import { Poppins } from 'next/font/google';

const poppinsTitle = Poppins({
    weight: ['700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function HomePageHero() {
    return (
        <section className="relative flex flex-col w-full md:grid md:grid-cols-2 md:min-h-[400px] mb-4 overflow-hidden">
            {/* Hero section mobile */}
            <div className="relative w-full md:hidden order-1">
                <div className="flex items-center justify-center pb-1.5 w-full mb-2 py-4">
                    <p className="font-bold text-xs border-b-2 border-emerald-500 px-28 pb-1">
                        Selamat Datang
                    </p>
                </div>

                <div className="relative">
                    <Image
                        alt="Your Company"
                        src="/images/hero_image_LKSA.png"
                        className="h-full w-full"
                        width={1000}
                        height={500}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-1 left-4 z-10">
                        <h1 className="text-white font-bold text-2xl leading-tight">LKSA</h1>
                        <h1 className="text-white font-bold text-xl leading-tight">
                            TARBIYATUL UMMAH
                        </h1>
                    </div>

                    <div className="absolute bottom-1 right-2 z-10">
                        <p className="text-white font-light text-xs leading-tight">
                            {'Tentang Kami >>'}
                        </p>
                    </div>
                </div>
            </div>

            <div className=" hidden md:block absolute inset-0 z-0">
                <div>
                    <Image
                        alt="Your Company"
                        src="/images/hero_image_LKSA.png"
                        className="h-full w-full object-cover"
                        fill
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
            </div>

            <div className="relative z-10 order-2 md:order-1 flex flex-col justify-center items-center md:items-start p-8 md:p-16  bg-gray-200 md:bg-transparent text-justify md:text-left">
                <p className="text-black text-md  md:text-lg md:text-white font-medium leading-relaxed mb-4 max-w-md ">
                    Anak - anak adalah penerus bangsa yang perlu dirawat, dididik, dan dijaga dengan
                    baik. Merekalah yang akan menjadi penggerak dan pemimpin bangsa ini di masa
                    depan.
                </p>

                <p className="text-black text-md  md:text-lg md:text-white font-medium leading-relaxed mb-8 max-w-md">
                    LKSA Tarbiyatul Ummah Balikpapan Memberikan berbagai fasilitas dan program untuk
                    mendukung perkembangan anak secara moral, spiritual, dan juga sosial agar
                    menjadi pribadi yang baik dan peduli terhadap sesama
                </p>
                <TombolHijau>
                    {' '}
                    <p>Tentang Kami</p>{' '}
                </TombolHijau>
            </div>

            <div className="relative z-10 hidden md:flex order-2 flex-col justify-end items-end p-8 md:p-16">
                <h1
                    className={`    text-white text-5xl  text-right leading-tight tracking-wide font-bold ${poppinsTitle.className}`}
                >
                    LKSA <br /> TARBIYATUL UMMAH
                </h1>
            </div>
        </section>
    );
}
