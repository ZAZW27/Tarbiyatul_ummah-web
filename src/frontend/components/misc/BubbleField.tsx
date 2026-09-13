type BubbleFieldProps = {
    variant?: 'nav' | 'drawer';
};

export default function BubbleField({ variant = 'nav' }: BubbleFieldProps) {
    const bubbles =
        variant === 'nav'
            ? [
                  { cx: 15, cy: 12, r: 2.5, o: 0.9 },
                  { cx: 35, cy: 55, r: 1.5, o: 0.7 },
                  { cx: 55, cy: 22, r: 1.8, o: 0.8 },
                  { cx: 20, cy: 45, r: 1.2, o: 0.6 },
                  { cx: 70, cy: 40, r: 2, o: 0.75 },
                  { cx: 90, cy: 15, r: 1.4, o: 0.65 },
                  { cx: 110, cy: 50, r: 2.2, o: 0.85 },
                  { cx: 45, cy: 8, r: 1.3, o: 0.55 },
                  { cx: 130, cy: 25, r: 1.6, o: 0.7 },
                  { cx: 150, cy: 60, r: 1.2, o: 0.5 },
                  { cx: 170, cy: 18, r: 1.8, o: 0.65 },
                  { cx: 5, cy: 65, r: 1.5, o: 0.6 },
                  { cx: 190, cy: 45, r: 1.3, o: 0.45 },
                  { cx: 220, cy: 30, r: 1, o: 0.35 },
                  { cx: 250, cy: 15, r: 0.9, o: 0.25 },
              ]
            : [
                  { cx: 20, cy: 30, r: 2, o: 0.8 },
                  { cx: 50, cy: 80, r: 1.4, o: 0.6 },
                  { cx: 90, cy: 50, r: 1.7, o: 0.75 },
                  { cx: 30, cy: 130, r: 1.3, o: 0.55 },
                  { cx: 70, cy: 180, r: 2.1, o: 0.85 },
                  { cx: 110, cy: 110, r: 1.2, o: 0.5 },
                  { cx: 25, cy: 230, r: 1.6, o: 0.65 },
                  { cx: 60, cy: 280, r: 1.4, o: 0.6 },
                  { cx: 100, cy: 320, r: 1.9, o: 0.7 },
                  { cx: 15, cy: 370, r: 1.1, o: 0.45 },
                  { cx: 45, cy: 420, r: 1.5, o: 0.55 },
                  { cx: 80, cy: 460, r: 1.3, o: 0.4 },
                  { cx: 130, cy: 400, r: 1, o: 0.3 },
                  { cx: 20, cy: 520, r: 0.9, o: 0.25 },
              ];

    return (
        <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox={variant === 'nav' ? '0 0 1200 80' : '0 0 180 600'}
            preserveAspectRatio="none"
        >
            <defs>
                <filter id={`bubble-blur-${variant}`} x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="0.4" />
                </filter>
            </defs>
            <g filter={`url(#bubble-blur-${variant})`}>
                {bubbles.map((b, i) => (
                    <circle key={i} cx={b.cx} cy={b.cy} r={b.r} fill="#6ee7b7" opacity={b.o} />
                ))}
            </g>
        </svg>
    );
}
