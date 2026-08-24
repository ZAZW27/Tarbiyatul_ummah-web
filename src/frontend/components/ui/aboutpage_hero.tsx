import Image from 'next/image';
import { TombolHijau } from '@/components/ui/buttons';
import { Poppins } from 'next/font/google';

// const poppinsTitle = Poppins({
//     weight: ['700'],
//     subsets: ['latin'],
//     display: 'swap',
// });

export default function AboutPageHero() {
    return (
        <section className="relative flex flex-col w-full  md:min-h-[300px] mb-4 overflow-hidden">
            {/* Hero section mobile */}
            <div className="relative w-full md:hidden order-1 ">
                <div className="flex items-center justify-center pb-1.5 w-full mb-2 py-4">
                    <p className="font-bold text-xs border-b-2 border-emerald-500 px-18 pb-1">
                        Tentang LKSA Tarbiyatul Ummah
                    </p>
                </div>

                <div className="relative shadow-xl shadow-black">
                    <Image
                        alt="Your Company"
                        src="/images/about_hero.png"
                        className="h-32 w-full"
                        width={1000}
                        height={700}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                </div>
            </div>

            <div className=" hidden md:block absolute inset-0 z-0">
                <div>
                    <Image
                        alt="Your Company"
                        src="/images/about_hero.png"
                        className="h-full w-full object-cover"
                        fill
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>
            </div>

            <div className=" hidden md:block  absolute top-0 left-0 z-10 order-2 md:order-1 flex flex-col justify-center items-center md:items-start pl-8 md:pl-16 md:pt-8 bg-gray-200 md:bg-transparent text-center md:text-left">
                <p className="text-black text-md  md:text-4xl md:text-white font-extrabold leading-relaxed mb-4 max-w-md ">
                    Tentang LKSA Tarbiyatul Ummah
                </p>
            </div>
        </section>
    );
}
