import './globals.css';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import { cookies } from 'next/headers';
import { Toaster } from 'sonner';
import type { Metadata } from 'next';
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

export const metadata: Metadata = {
    title: {
        default: 'LKSA Tarbiyatul Ummah Balikpapan',
        template: '%s | LKSA Tarbiyatul Ummah',
    },
    description:
        'LKSA Tarbiyatul Ummah Balikpapan - Lembaga Kesejahteraan Sosial Anak / Panti Asuhan yang membina anak yatim, piatu, fakir miskin, dan anak terlantar di Balikpapan.',
    keywords: [
        'tarbiyatul ummah',
        'panti balikpapan',
        'lksa balikpapan',
        'panti asuhan balikpapan',
        'yayasan tarbiyatul ummah',
        'donasi anak yatim balikpapan',
        'lembaga kesejahteraan sosial anak balikpapan',
        'panti asuhan kaltim',
        'sedekah balikpapan',
    ],
    icons: {
        icon: '/images/logo_lksa.png',
        shortcut: '/images/logo_lksa.png',
        apple: '/images/logo_lksa.png',
    },
    openGraph: {
        title: 'LKSA Tarbiyatul Ummah Balikpapan',
        description: 'Lembaga Kesejahteraan Sosial Anak / Panti Asuhan di Balikpapan.',
        url: 'https://your-domain.com', // Change this to your actual deployed domain
        siteName: 'LKSA Tarbiyatul Ummah',
        images: [
            {
                url: '/images/logo_lksa.png',
                width: 800,
                height: 600,
                alt: 'Logo LKSA Tarbiyatul Ummah',
            },
        ],
        locale: 'id_ID',
        type: 'website',
    },
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
