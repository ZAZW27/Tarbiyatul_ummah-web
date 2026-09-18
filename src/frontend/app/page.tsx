// import Image from 'next/image';
// import Link from 'next/link';
import HomePageHero from '@/components/ui/homepage_hero';
// import ProdukSectionServer from '@/components/ui/ui_home/produk_section_server';
// import MediaSectionServer from '@/components/ui/ui_home/media_section_server';

import { getMediaCatalog } from '@/service/media.service';
import { getMarketCatalog } from '@/service/market.service';
//
import ProgramKamiSection from '@/components/ui/ui_home/programkami_section';
import VisiMisiCard from '@/components/ui/ui_home/card_visi_misi';
import { CardSasaranPelayanan } from '@/components/ui/ui_home/card_sasaran_pelayanan';
import { CardFasilitasMasjid, CardFasilitasMotor } from '@/components/ui/ui_home/card_fasilitas';
import ProdukCarausel from '@/components/ui/ui_home/caraousel_produk';
import MediaCarausel from '@/components/ui/ui_home/carausel_galeri';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function Homepage() {
    // Eksekusi kedua request secara paralel
    const [resMedia, resProduk] = await Promise.all([
        getMediaCatalog().catch(() => ({ data: [] })),
        getMarketCatalog().catch(() => ({ data: [] })),
    ]);
    return (
        <main className=" flex flex-col w-full  gap-16  bg-gray-100">
            {/* anak-anak adalah...sampai dengan tentang kami  */}
            <section id="hero" className="w-full">
                <div className="flex h-auto w-full items-center justify-center ">
                    <HomePageHero />
                </div>
            </section>

            <section
                id="visi_misi_program"
                className="grid grid-cols-1 gap-8 lg:grid-cols-2 md:px-16"
            >
                {/* untuk program */}
                <div className="order-1 lg:order-2 flex h-auto items-center justify-center    mx-4 md:px-24">
                    <VisiMisiCard />
                </div>

                {/* untuk section visi misi   */}

                <div className="order-2 lg:order-1 flex h-auto items-center justify-center    ">
                    <ProgramKamiSection />
                </div>
            </section>

            {/* untuk section sasaran pelayanan */}
            <section id="sasaran_pelayanan">
                <div className="flex w-full flex-col items-center lg:items-start pt-2 md:px-16 mb-12">
                    <h1 className="font-semibold text-black text-xl md:text-2xl">
                        Sasaran Pelayanan
                    </h1>
                    <hr className="mt-2 w-full border-t-[3px] border-green-600 opacity-100" />
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-5 px-4 lg:px-16">
                    <div className="h-32 ">
                        <CardSasaranPelayanan title="Anak-anak Yatim Piatu" />
                    </div>
                    <div className="h-32 ">
                        <CardSasaranPelayanan title="Anak-anak Tidak Mampu" />
                    </div>
                    <div className=" h-32 ">
                        <CardSasaranPelayanan title="Fakir Miskin" />
                    </div>
                    <div className=" h-32 ">
                        <CardSasaranPelayanan title="Drop Out" />
                    </div>
                    <div className=" col-span-2 md:col-span-1 h-32 ">
                        <CardSasaranPelayanan title="Terlantar" />
                    </div>
                </div>
            </section>

            {/* untuk section sasaran pelayanan */}
            <section id="fasilitas_pelayanan px-4 ">
                <div className="flex w-full flex-col items-center lg:items-start pt-2 md:px-16 mb-12">
                    <h1 className="font-semibold text-black text-xl md:text-2xl">
                        Fasilitas Pelayanan
                    </h1>
                    <hr className="mt-2 w-full border-t-[3px] border-green-600 opacity-100" />
                </div>
                <div className=" grid grid-cols-1 gap-6 md:grid-cols-2 px-4">
                    <div className="  lg:ml-16 ">
                        <Link href="/about#fasilitas_pelayanan">
                            <CardFasilitasMasjid />
                        </Link>
                    </div>
                    <div className="  lg:mr-16">
                        <Link href="/about#fasilitas_pelayanan">
                            <CardFasilitasMotor />
                        </Link>
                    </div>
                </div>
            </section>

            {/* untuk section sasaran pelayanan */}
            <section
                id="produk_section"
                className="w-full max-w-full overflow-hidden px-4 sm:px-6 "
            >
                <MediaCarausel mediaList={resMedia.data} />
            </section>

            {/* untuk section sasaran pelayanan */}
            <section
                id="produk_section"
                className="w-full max-w-full overflow-hidden px-4 sm:px-6 mb-20"
            >
                <ProdukCarausel produkList={resProduk.data} />
            </section>
        </main>
    );
}
