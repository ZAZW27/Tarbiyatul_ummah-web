'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { TombolHijau } from '@/components/ui/buttons';
import { Poppins } from 'next/font/google';
import Link from 'next/link';

const poppinsTitle = Poppins({
    weight: ['700'],
    subsets: ['latin'],
    display: 'swap',
});

export default function HomePageHero() {
    const sectionRef = useRef<HTMLElement>(null);
    const [offsetY, setOffsetY] = useState(0);

    const tickingRef = useRef(false);
    const visibleRef = useRef(true);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                visibleRef.current = entry.isIntersecting;
                if (entry.isIntersecting) scheduleUpdate();
            },
            { rootMargin: '100px 0px' },
        );
        observer.observe(section);

        const update = () => {
            tickingRef.current = false;
            if (!visibleRef.current) return;

            const rect = section.getBoundingClientRect();
            const next = rect.top * -0.4;

            setOffsetY((prev) => (Math.abs(prev - next) < 0.5 ? prev : next));
        };

        const scheduleUpdate = () => {
            if (tickingRef.current) return;
            tickingRef.current = true;
            requestAnimationFrame(update);
        };

        const onScroll = () => {
            if (!visibleRef.current) return;
            scheduleUpdate();
        };

        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-140 md:min-h-130 overflow-hidden mb-4"
        >
            <div
                className="absolute left-0 w-full will-change-transform"
                style={{
                    top: '-15%',
                    height: '130%',
                    transform: `translate3d(0, ${offsetY}px, 0)`,
                }}
            >
                <Image
                    alt="LKSA Tarbiyatul Ummah"
                    src="/images/hero_image_LKSA.webp"
                    fill
                    quality={10}
                    priority
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-cover"
                />
                {/* right to left gradient */}
                <div className="absolute inset-0 bg-linear-to-r from-black/60 via-transparent to-transparent" />
                {/* bottom to top gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-emerald-950/95 via-black/70 to-black/60" />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-140 md:min-h-130 px-6 py-12 md:p-16 max-w-7xl mx-auto">
                <div className="order-2 md:order-1">
                    <div className="flex gap-5">
                        <div className="w-0.5 bg-emerald-400 rounded-full self-stretch" />

                        <div className="flex flex-col items-start text-left">
                            <p className="text-white/95 text-base md:text-lg leading-relaxed mb-4 max-w-md font-normal">
                                Anak-anak adalah penerus bangsa yang perlu dirawat, dididik, dan
                                dijaga dengan baik. Merekalah yang akan menjadi penggerak dan
                                pemimpin bangsa ini di masa depan.
                            </p>

                            <p className="text-white/75 text-sm md:text-base leading-relaxed mb-8 max-w-md font-normal">
                                LKSA Tarbiyatul Ummah Balikpapan memberikan berbagai fasilitas dan
                                program untuk mendukung perkembangan anak secara moral, spiritual,
                                dan juga sosial agar menjadi pribadi yang baik dan peduli terhadap
                                sesama.
                            </p>
                            <Link href="/about">
                                <TombolHijau>
                                    <span>Tentang Kami</span>
                                </TombolHijau>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-start md:items-end order-1 md:order-2">
                    <span className="text-emerald-400 text-xs md:text-sm font-semibold tracking-[0.3em] mb-3">
                        SELAMAT DATANG
                    </span>
                    <h1
                        className={`text-white text-4xl md:text-6xl text-left md:text-right leading-[1.05] tracking-tight font-bold ${poppinsTitle.className}`}
                    >
                        LKSA
                        <br />
                        Tarbiyatul
                        <br />
                        Ummah
                    </h1>
                    <div className="w-16 h-0.5 bg-emerald-400 mt-5 rounded-full md:self-end" />
                </div>
            </div>
        </section>
    );
}
