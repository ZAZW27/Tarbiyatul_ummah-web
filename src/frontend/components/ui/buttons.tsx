import React from 'react';

export function TombolHijau({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className="bg-emerald-700 hover:bg-emerald-300 text-white py-2 px-12 rounded-3xl cursor-pointer "
            {...props}
        >
            {children}
        </button>
    );
}
