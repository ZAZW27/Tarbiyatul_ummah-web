// import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="flex flex-col gap-16 max-w-7xl mx-auto px-4 py-8 sm:px-6 bg-gray-100">
            <section id="banner_utama" className="w-full">
                <div className="flex h-48 w-full items-center justify-center border-2 border-dashed border-gray-400 md:h-64">
                    <span className="text-gray-500">Placeholder: Banner Atas</span>
                </div>
            </section>

            <section id="hero" className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className=" flex h-auto w-full items-center justify-center border-2 border-dashed border-gray-400">
                    <span className="text-gray-500">Placeholder: hero Halaman About:text </span>
                </div>
                <div className=" flex h-auto w-full items-center justify-center border-2 border-dashed border-gray-400">
                    <span className="text-gray-500">Placeholder: hero Halaman About: gambar </span>
                </div>
            </section>

            <section
                id="visi_misi_tujuan"
                className="grid grid-cols-2 gap-4 justify-center items-center md:grid-cols-3"
            >
                <div className="order-1 flex h-auto items-center justify-center border-2 border-dashed border-gray-500">
                    <span className="text-gray-400">Placeholder visi, misi, dan tujuan</span>
                </div>

                <div className="order-2 flex h-auto items-center justify-center border-2 border-dashed border-gray-500">
                    <span className="text-gray-400">Placeholder visi, misi, dan tujuan</span>
                </div>

                <div className="order-3 col-span-2 md:col-span-1 flex h-auto items-center justify-center border-2 border-dashed border-gray-500">
                    <span className="text-gray-400">
                        Placeholder babando visi, misi, dan tujuan
                    </span>
                </div>
            </section>

            <section id="program" className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex h-32 border-2 border-dashed border-gray-400">
                    <span className="text-gray-500">Placeholder: program 1</span>
                </div>

                <div className="flex  h-32 border-2 border-dashed border-gray-400">
                    <span className="text-gray-500">Placeholder: program 1</span>
                </div>
            </section>

            <section id="sasaran_layanan" className="grid grid-cols-1 gap-4 md:grid-cols-5 ">
                <div className=" flex  h-12 border-2 border-dashed border-gray-400">
                    <span className="text-gray-500 ">PlaceHolder: Sasaran Layanan</span>
                </div>

                <div className="flex  h-12 border-2 border-dashed border-gray-400">
                    <span className="text-gray-500">PlaceHolder: Sasaran Layanan</span>
                </div>

                <div className="flex  h-12 border-2 border-dashed border-gray-400">
                    <span className="text-gray-500">PlaceHolder: Sasaran Layanan</span>
                </div>

                <div className=" flex  h-12 border-2 border-dashed border-gray-400">
                    <span className="text-gray-500">PlaceHolder: Sasaran Layanan</span>
                </div>

                <div className=" flex h-12 border-2 border-dashed border-gray-400">
                    <span className="text-gray-500">PlaceHolder: Sasaran Layanan</span>
                </div>
            </section>

            <section id="fasilitas_pelayanan" className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="col-span-1 flex md:col-span-2 h-auto border-2 border-dashed border-gray-400">
                    <span className="text-gray-500">Placeholder: Fasilitas Pelayanan: text</span>
                </div>

                <div className="flex  h-32 border-2 border-dashed border-gray-400">
                    <span className="text-gray-500">Placeholder: Fasilitas Pelayanan: masjid</span>
                </div>

                <div className=" flex  h-32 border-2 border-dashed border-gray-400">
                    <span className="text-gray-500">Placeholder: Fasilitas Pelayanan: motor</span>
                </div>
            </section>

            <section id="struktur" className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex  h-auto w-full items-center justify-center border-2 border-dashed border-gray-400">
                    <span className="text-gray-500">Placeholder: Struktur:text </span>
                </div>
                <div className="flex  h-auto w-full items-center justify-center border-2 border-dashed border-gray-400">
                    <span className="text-gray-500">Placeholder: struktur: gambar </span>
                </div>
            </section>
        </main>
    );
}
