// import Link from 'next/link';
import Image from 'next/image';
import AboutPageHero from '@/components/ui/aboutpage_hero';
import { CardVisiTujuanAbout } from '@/components/ui/ui_about/card_visi_tujuan_about';
import {
    CardProgramPendidikan,
    CardProgramKeagamaan,
} from '@/components/ui/ui_about/card_program_about';
import { CardSasaranLayananAbout } from '@/components/ui/ui_about/card_sasaran_layanan_about';
import { CardFasilitasMasjid } from '@/components/ui/ui_home/card_fasilitas';
import { CardFasilitasMotor } from '@/components/ui/ui_home/card_fasilitas';

export default function AboutPage() {
    return (
        <main className="flex flex-col w-full  gap-12  bg-gray-100">
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
                    <p className="mt-4 md:text-xl text-lg">
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
                className="grid grid-cols-2 gap-4  items-top lg:grid-cols-3 px-4 lg:px-8"
            >
                <div className="order-1 flex h-full w-full">
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

            <section id="program" className="flex flex-col gap-6 w-full ">
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

            <section id="sasaran_layanan" className=" gap-4   mx-4 lg:mx-8 ">
                <div className="text-emerald-500 text-xl font-semibold border-l-4 border-emerald-500 lg:mx-4 mt-12 lg:text-3xl mb-6">
                    <p className="pl-2">Sasaran Pelayanan</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
                    <div className=" flex  h-full w-full border-2 border-dashed border-gray-400">
                        <CardSasaranLayananAbout title="Anak-anak tidak mampu " />
                    </div>

                    <div className="flex  h-full border-2 border-dashed border-gray-400">
                        <CardSasaranLayananAbout title="Fakir Miskin" />
                    </div>

                    <div className="flex  h-full border-2 border-dashed border-gray-400">
                        <CardSasaranLayananAbout title="Yatim Piatu" />
                    </div>

                    <div className=" flex  h-full border-2 border-dashed border-gray-400">
                        <CardSasaranLayananAbout title="Drop Out" />
                    </div>

                    <div className=" flex h-full border-2 border-dashed border-gray-400">
                        <CardSasaranLayananAbout title="Anak-Anak Terlantar" />
                    </div>
                </div>
            </section>

            <section
                id="fasilitas_pelayanan"
                className="grid grid-cols-1 gap-4 md:grid-cols-2 mx-4 lg:mx-10 "
            >
                <div className="text-emerald-500 text-xl font-semibold border-l-4 border-emerald-500  mt-12 lg:text-3xl">
                    <p className="pl-2">Sasaran Pelayanan</p>
                </div>
                <div className="col-span-1 flex md:col-span-2 h-auto border-2 border-dashed border-gray-400">
                    <p className="text-justify text-lg md:text-xl ">
                        LKSA Tarbiyatul Ummah memiliki dua fasilitas pelayanan yang bertujuan untuk
                        memastikan kelancaran kegiatan operasional LKSA. Fasilitas-fasilitas
                        tersebut juga berfungsi untuk membantu anak-anak LKSA menjalankan
                        kegiatannya sehari-hari.
                        <br /> <br />
                        Berikut adalah fasilitas pelayanan yang tersedia di LKSA Tarbiyatul Ummah
                        Balikpapan :
                    </p>
                </div>

                <div className="flex h-full border-2 border-dashed border-gray-400">
                    <CardFasilitasMasjid />
                </div>

                <div className="relative flex flex-col items-center justify-center">
                    <p className=" text-justify lg:text-center lg:mx-44 text-lg md:text-xl mb-4">
                        Di masjid inilah para santri melakukan kegiatan mulai dari shalat berjamaah,
                        hafalan&tahsin Al-Qur’an, taklim, dan kegiatan pembelajaran lainnya.
                    </p>
                </div>

                <div className=" flex  h-full border-2 border-dashed border-gray-400 ">
                    <CardFasilitasMotor />
                </div>

                <div className="relative flex flex-col items-center justify-center">
                    <p className=" text-justify lg:text-center lg:mx-44 text-lg md:text-xl">
                        Kendaraan pribadi pengurus LKSA yang berfungsi untuk menunjang kebutuhan
                        operasional LKSA agar dapat tetap berjalan dengan baik dan optimal
                    </p>
                </div>
            </section>

            <section
                id="struktur"
                className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2  pb-8  lg:pt-12 lg:pb-28 lg:border-none"
            >
                <div className="hidden lg:block font-bold text-emerald-500 tracking-wider text-2xl lg:text-3xl border-l-4 border-emerald-500 pl-4 mb-4 mx-10">
                    Struktur Pengurus LKSA Tarbiyatul Ummah
                </div>
                <div></div>

                <div className="flex  h-auto  items-center justify-center border-2 border-dashed border-gray-400 flex-col mx-4">
                    <div className=" lg:hidden font-bold text-[#029141]  tracking-wider border-x-4 w-full text-center border-emerald-500 mx-4">
                        STRUKTUR LKSA
                    </div>

                    <div>
                        <p className="hidden lg:block text-justify lg:text-center mx-4 lg:mx-44 text-lg md:text-xl">
                            LKSA Tarbiyatul Ummah dikelola oleh pengurus yang berkomitmen untuk
                            memberikan pelayanan terbaik bagi anak anak binaan.
                        </p>
                    </div>
                </div>

                <div className="lg:hidden">
                    <p className="text-justify lg:text-center mx-4 lg:mx-44 text-lg md:text-xl lg:hidden">
                        LKSA Tarbiyatul Ummah dikelola oleh pengurus yang berkomitmen untuk
                        memberikan pelayanan terbaik bagi anak anak binaan.
                    </p>
                </div>

                <div className="flex  h-auto  mx-4 items-center justify-center border-2 border-dashed border-gray-400">
                    <Image
                        alt="Your Company"
                        src="/images/struktur_lksa.png"
                        className=" object-cover w-full h-full lg:w-64 shadow-md"
                        width={1000}
                        height={1000}
                    />
                </div>
            </section>
        </main>
    );
}
