import CardGaleri from '@/components/ui/ui_galeri/card_galeri';
import { Gallery } from '@/types/gallery';
import { getMediaCatalog } from '@/service/media.service';
import GalleryList from '@/components/ui/ui_galeri/galeri_list';
import { cookies } from 'next/headers';
import ModalTambahMedia from '@/components/ui/ui_galeri/modal_tambah_media';

export const dynamic = 'force-dynamic';

export default async function GalleryPage() {
    const cookieStore = cookies();
    const isAdmin = (await cookieStore).has('admin_session');

    let dataGaleri: Gallery[] = [];
    let errorMsg: string | null = null;

    try {
        const response = await getMediaCatalog();
        dataGaleri = response.data;
    } catch (err) {
        errorMsg = err instanceof Error ? err.message : 'Terjadi kesalahan saat mengambil media';
    }

    if (errorMsg) {
        return <div></div>;
    }

    return (
        <main className="px-12 py-10">
            {/* Judul halaman */}
            <section
                id="page_intro"
                className="flex flex-col items-center justify-center text-center mb-20 px-2"
            >
                <div className="flex w-full items-center justify-center gap-4 mb-4">
                    <hr className="w-full border-t-3 border-emerald-600" />
                    <h1 className="whitespace-nowrap text-lg font-bold md:text-xl">
                        Galeri LKSA Tarbiyatul Ummah
                    </h1>
                    <hr className="w-full border-t-3 border-emerald-600" />
                </div>

                <p className="flex text-center">
                    Pada Halaman Ini anda dapat melihat berbagai dokumentasi terkait
                    kegiatan-kegiatan yang telah dilaksanakan di LKSA Tarbiyatul Ummah
                </p>
            </section>

            {isAdmin && (
                <section id="tambah_produk_real" className="mb-12 px-2">
                    <ModalTambahMedia />
                </section>
            )}

            {/* Daftar Galeri */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
                <GalleryList GaleriIn={dataGaleri} isAdmin={isAdmin} />
            </div>
        </main>
    );
}
