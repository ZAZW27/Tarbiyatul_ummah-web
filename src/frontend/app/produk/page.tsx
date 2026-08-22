// import CardProduk from '@/components/ui/ui_produk/card_produk';
import ModalTambahProduk from '@/components/ui/ui_produk/modal_tambah_produk';

export default function Produk() {
    return (
        <main className="min-h-screen bg-[#EBF4F6] mb-16 ">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 pt-8">
                <section
                    id="page_intro"
                    className="flex flex-col items-center justify-center text-center mb-8 px-2"
                >
                    <div className="flex w-full items-center justify-center gap-4 mb-4">
                        <hr className="w-full border-t-3 border-emerald-600" />
                        <h1 className="whitespace-nowrap text-lg font-bold md:text-xl">
                            Kerajinan Tangan
                        </h1>
                        <hr className="w-full border-t-3 border-emerald-600" />
                    </div>

                    <p className="flex text-center">
                        Anak - anak LKSA Tarbiyatul Ummah memiliki karya-karya kerajinan tangan yang
                        dapat anda beli sebagai salah satu bentuk donasi kepada LKSA.
                    </p>

                    <p className="flex text-center mt-4">
                        Sebelum membeli, silahkan perhatikan ketentuan pembelian dibawah ini dengan
                        teliti
                    </p>
                </section>

                <section id="card_disclaimer" className="flex justify-center mb-12 px-2">
                    <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden">
                        <div className=" bg-[#EC9A00] text-center text-white md:text-base py-4">
                            <h1>Ketentuan Pembelian</h1>
                        </div>

                        <div className=" text-start md:text-lg pl-4 py-4 leading-relaxed">
                            <p>
                                Anda diharapkan untuk membaca setiap ketentuan berikut dengan teliti
                                sebelum melakukan pembelian :
                            </p>
                            <ol className="list-decimal space-y-3 text-justify pl-6 pr-12 mt-4">
                                <li>
                                    {' '}
                                    Transaksi hanya dapat dilakukan secara langsung di tempat LKSA
                                    Tarbiyatul Ummah dengan staff terkait{' '}
                                </li>
                                <li>
                                    {' '}
                                    Pengantaran barang tidak tersedia, sehingga pembeli harus
                                    langsung datang ke LKSA tarbiyatul Ummah Untuk melakukan
                                    pembayaran{' '}
                                </li>
                                <li>
                                    {' '}
                                    Pembelian barang harus didiskusikan lebih lanjut dengan pengurus
                                    melalui whatsapp{' '}
                                </li>
                                <li>
                                    {' '}
                                    Pembelian akan dibatalkan jika pembeli tidak memiliki kabar
                                    dalam periode waktu yang telah diterapkan{' '}
                                </li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section id="tambah_produk" className="mb-12 px-2">
                    <ModalTambahProduk />
                    {/* //        
            //   // Sementara: cukup log dulu. Nanti kalau grid produk sudah
            //   // dinamis (ambil data dari backend), sambungkan ke situ
            //   // supaya produk baru langsung muncul tanpa reload.
            //   console.log("Produk baru ditambahkan:", produkBaru);
            // }} */}
                </section>
            </div>
        </main>
    );
}
