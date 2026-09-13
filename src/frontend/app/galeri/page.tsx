import CardGaleri from '@/components/ui/ui_galeri/card_galeri';

export default function GaleriPage() {
    return (
        <main className="px-6 py-10">
            {/* Judul halaman */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold">
                    Galeri
                </h1>

                <p className="mt-2 text-gray-600">
                    Dokumentasi kegiatan Tarbiyatul Ummah
                </p>
            </div>

            {/* Daftar Galeri */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                <CardGaleri />
                <CardGaleri />
                <CardGaleri />
            </div>
        </main>
    );
}