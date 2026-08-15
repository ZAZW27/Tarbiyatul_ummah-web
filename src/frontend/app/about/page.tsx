// import Link from 'next/link';
import Image from 'next/image';
import AboutPageHero from '@/components/ui/aboutpage_hero';
import { CardVisiTujuanAbout } from '@/components/ui/ui_about/card_visi_tujuan_about';
import {
    CardProgramPendidikan,
    CardProgramKeagamaan,
} from '@/components/ui/ui_about/card_program_about';
import { CardSasaranLayananAbout } from '@/components/ui/ui_about/card_sasaran_layanan_about';

export default function AboutPage() {
    return (
        <main className="flex flex-col w-full  gap-16  bg-gray-100">
            <section id="banner_utama" className="w-full">
                <div className="flex h-auto w-full items-center justify-center ">
                    <AboutPageHero />
                </div>
            </section>

            <section id="hero" className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className=" flex flex-col h-auto w-full items-center justify-center text-justify px-4 lg:px-16 md:text-start md:items-start md:justify-start  ">
                    <p className=" text-emerald-500 text-xl lg:text-3xl font-semibold border-b-3 border-emerald-500 px-2 md:px-1 ">
                        LKSA TARBIYATUL UMMAH
                    </p>
                    <p className="mt-4 md:text-xl">
                        LKSA Tarbiyatul Ummah Balikpapan adalah lembaga sosial yang berperan penting
                        dalam merawat dan mendidik anak-anak yatim piatu dengan program pendidikan
                        dan keagamaan. LKSA ini berdiri pada tanggal 01 juni 2026 di Balikpapan.{' '}
                        <br /> <br />
                        LKSA Tarbiyatul Ummah menyediakan berbagai fasilitas dan program pembinaan
                        yang bertujuan untuk mendukung perkembangan anak secara moral, spiritual,
                        dan juga sosial. <br /> <br />
                        Disini anak-anak tidak hanya mendapatkan pendidikan formal, tetapi juga
                        dibekali pendidikan akhlak dan juga agama.
                    </p>
                </div>

                <div className=" flex h-auto w-auto items-center justify-center rounded-4xl  px-4 lg:mr-12">
                    <Image
                        alt="Your Company"
                        src="/images/plang_lksa_mobile.png"
                        className=" md:rounded-2xl object-cover w-full h-auto shadow-md"
                        width={1000}
                        height={1000}
                    />
                </div>
            </section>

            <section
                id="visi_misi_tujuan"
                className="grid grid-cols-2 gap-4 justify-center items-center lg:grid-cols-3 px-4 lg:px-8"
            >
                <div className="order-1 flex h-full items-center justify-center w-full">
                    <CardVisiTujuanAbout
                        title="VISI LKSA"
                        description="Menjadikan LKSA Yang Mandiri dan Professional"
                    />
                </div>

                <div className="order-2 flex h-full items-center justify-center w-full  ">
                    <CardVisiTujuanAbout
                        title="MISI LKSA"
                        description="Membangun Generasi Robbani"
                    />
                </div>

                <div className="order-3 col-span-2 lg:col-span-1 flex h-full items-center justify-center w-full">
                    <CardVisiTujuanAbout
                        title="TUJUAN LKSA"
                        description="Advokasi pendidikan dan dakwah bagi anak-anak tidak mampu, fakir,
                   miskin, yatim piatu, 
                  terlantar, dan putus sekolah"
                    />
                </div>
            </section>

            <section id="program" className="flex flex-col gap-6 w-full mt-10">
                <div className="text-emerald-500 text-xl font-semibold border-l-4 border-emerald-500 mx-4 lg:mx-12 mt-12 lg:text-3xl">
                    <p className="pl-2">Program LKSA Tarbiyatul Ummah</p>
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 px-4 lg:px-12">
                    <div className="flex h-full border-2 border-dashed border-gray-400">
                        <CardProgramPendidikan />
                    </div>

                    <div className="flex  h-full border-2 border-dashed border-gray-400">
                        <CardProgramKeagamaan />
                    </div>
                </div>
            </section>

            <section
                id="sasaran_layanan"
                className="grid grid-cols-1 gap-4 lg:grid-cols-5  mx-4 lg:mx-8 "
            >
                <div className=" flex  h-full w-full border-2 border-dashed border-gray-400">
                    <CardSasaranLayananAbout title="Yatim Piatu" />
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
