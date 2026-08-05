import './globals.css';
import Header from '../components/layout/header';
import Footer from '../components/layout/footer';

export const metadata = {
    title: 'Tarbiyatul Ummah Web',
    description: 'Deskripsi website Anda',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="id">
            <body>
                <Header />

                <main>{children}</main>

                <Footer />
            </body>
        </html>
    );
}
