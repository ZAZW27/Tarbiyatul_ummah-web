import './globals.css';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

// import type { Metadata } from 'next';
// Impor font dari modul Google Fonts bawaan Next.js
import { Inclusive_Sans } from 'next/font/google';
import { Inter } from 'next/font/google';

const inclusiveSans = Inclusive_Sans({
    weight: '400', // Inclusive Sans di Google Fonts hanya memiliki weight 400 (Regular)
    subsets: ['latin'],
    display: 'swap',
});

// 1. Define your different font here
export const secondaryFont = Inter({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-secondary', // This creates a custom CSS variable
});

export const metadata = {
    title: 'Tarbiyatul Ummah Web',
    description: 'Deskripsi website Anda',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="id">
            <body
                className={`bg-gray-200 ${inclusiveSans.className} ${secondaryFont.variable} font-sans`}
            >
                <Header />

                <main>{children}</main>

                <Footer />
            </body>
        </html>
    );
}
