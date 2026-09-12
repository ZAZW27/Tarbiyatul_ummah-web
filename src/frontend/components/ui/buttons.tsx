import React from 'react';

export function TombolHijau({
    children,
    className = '',
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={`
                inline-flex items-center justify-center gap-2
                bg-emerald-700 text-white font-medium
                py-2.5 px-12 rounded-3xl cursor-pointer
                shadow-[0_4px_14px_0_rgba(4,120,87,0.35)]
                transition-all duration-300 ease-out
                hover:bg-emerald-600
                hover:shadow-[0_8px_24px_0_rgba(4,120,87,0.5)]
                hover:-translate-y-0.5
                active:translate-y-0
                active:shadow-[0_2px_8px_0_rgba(4,120,87,0.4)]
                focus-visible:outline-none
                focus-visible:ring-2 focus-visible:ring-emerald-400
                focus-visible:ring-offset-2
                ${className}
            `}
            {...props}
        >
            {children}
        </button>
    );
}
