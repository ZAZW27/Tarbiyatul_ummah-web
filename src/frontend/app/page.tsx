// import Image from 'next/image';
// import Link from 'next/link';
import HomePageHero from '@/components/ui/homepage_hero';
//
import ProgramKamiSection from '@/components/ui/ui_home/programkami_section';
import VisiMisiCard from '@/components/ui/ui_home/card_visi_misi';
import { CardSasaranPelayanan } from '@/components/ui/ui_home/card_sasaran_pelayanan';
import { CardFasilitasMasjid, CardFasilitasMotor } from '@/components/ui/ui_home/card_fasilitas';

export default function Homepage() {
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
                <div className="order-1 lg:order-2 flex h-auto items-center justify-center  border-2 border-dashed border-gray-500 mx-4 md:px-24">
                    <VisiMisiCard />
                </div>

                {/* untuk section visi misi   */}

                <div className="order-2 lg:order-1 flex h-auto items-center justify-center border-2 border-dashed border-gray-500 ">
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
                    <div className="h-32 border-2 border-dashed border-gray-400">
                        <CardSasaranPelayanan title="Anak-anak Yatim Piatu" />
                    </div>
                    <div className="h-32 border-2 border-dashed border-gray-400">
                        <CardSasaranPelayanan title="Anak-anak Tidak Mampu" />
                    </div>
                    <div className=" h-32 border-2 border-dashed border-gray-400">
                        <CardSasaranPelayanan title="Fakir Miskin" />
                    </div>
                    <div className=" h-32 border-2 border-dashed border-gray-400">
                        <CardSasaranPelayanan title="Drop Out" />
                    </div>
                    <div className=" col-span-2 md:col-span-1 h-32 border-2 border-dashed border-gray-400">
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
                    <div className=" border-2 border-dashed border-gray-400 lg:ml-16 ">
                        <CardFasilitasMasjid />
                    </div>
                    <div className=" border-2 border-dashed border-gray-400 lg:mr-16">
                        <CardFasilitasMotor />
                    </div>
                </div>
            </section>

            {/* untuk section sasaran pelayanan */}
            <section id="galeri_section">
                <div className="flex h-48 w-full items-center justify-center border-2 border-dashed border-gray-400">
                    <span className="text-gray-500">Placehodler: Galeri</span>
                </div>
            </section>

            {/* untuk section sasaran pelayanan */}
            <section id="produk_section">
                <div className="flex h-44 w-full items-center justify-center border-2 border-dashed border-gray-400">
                    <section className="text-gray-500">Placeholde: produk </section>
                </div>
            </section>
        </main>
    );
}
