'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type ParallaxBackgroundProps = {
    // img source
    src: string;
    // Alt text
    alt: string;
    // parallax speed
    speed?: number;
    // more classes
    className?: string;
    imageClassName?: string;
    // next.js priority toggler
    priority?: boolean;

    children?: React.ReactNode;
};

export default function ParallaxBackground({
    src,
    alt,
    speed = 0.4,
    className = '',
    imageClassName = '',
    priority = false,
    children,
}: ParallaxBackgroundProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [offsetY, setOffsetY] = useState(0);

    const tickingRef = useRef(false);
    const visibleRef = useRef(true);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                visibleRef.current = entry.isIntersecting;
                if (entry.isIntersecting) scheduleUpdate();
            },
            { rootMargin: '100px 0px' },
        );
        observer.observe(el);

        const update = () => {
            tickingRef.current = false;
            if (!visibleRef.current) return;

            const rect = el.getBoundingClientRect();
            const next = rect.top * -speed;

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
    }, [speed]);

    return (
        <div
            ref={wrapperRef}
            className={`absolute left-0 w-full will-change-transform ${className}`}
            style={{
                top: '-15%',
                height: '130%',
                transform: `translate3d(0, ${offsetY}px, 0)`,
            }}
        >
            <Image
                alt={alt}
                src={src}
                fill
                priority={priority}
                sizes="100vw"
                className={`object-cover ${imageClassName}`}
            />
            {children}
        </div>
    );
}
