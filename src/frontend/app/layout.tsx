import './globals.css';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { cookies } from 'next/headers';
import { Toaster } from 'sonner';
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

// wmefo

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    const cookieStore = cookies();
    const isAdmin = (await cookieStore).has('admin_session');
    return (
        <html lang="id">
            <body
                className={`bg-gray-200 ${inclusiveSans.className} ${secondaryFont.variable} font-sans`}
            >
                <Header isAdmin={isAdmin} />

                <main>{children}</main>
                <Toaster position="top-center" richColors />

                <Footer />
            </body>
        </html>
    );
}
