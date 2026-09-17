import Image from 'next/image';

export default function HubungiKami() {
    return (
        <main className="flex min-h-[70vh] w-full flex-col items-center justify-center bg-gray-100 px-4 py-12">
            {/* Header */}
            <section id="header" className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center pb-1.5">
                    <p className="border-b-2 border-emerald-500 px-16 pb-1 text-xl font-bold text-emerald-600 md:px-24 lg:text-2xl">
                        Donasi
                    </p>
                </div>

                <p className="mx-auto mt-4 max-w-xl text-center text-neutral-700 md:text-lg">
                    Anda dapat menyalurkan donasi kepada LKSA Tarbiyatul Ummah melalui nomor
                    rekening di bawah ini
                </p>
            </section>

            {/* Kartu Rekening (Tengah) */}
            <section
                id="rekening"
                className="my-8 flex w-full max-w-md flex-col items-center justify-center rounded-2xl border border-emerald-200 bg-white p-6 text-center shadow-sm"
            >
                <div className="text-xl font-bold tracking-wide text-neutral-800 md:text-2xl">
                    <p>0630-01-001560-53-5 - BRI</p>
                </div>

                <div className="mt-2 text-sm text-black md:text-base">
                    <p>NAMA: PANTI ASUHAN TARBIYATUL UMMAH</p>
                </div>
            </section>

            {/* Ucapan Terimakasih */}
            <section id="footer-donasi" className="text-center">
                <p className="text-neutral-700 md:text-xl">
                    Terimakasih Banyak atas bantuan yang anda berikan 😊
                </p>
            </section>
        </main>
    );
}
