'use client';
// import Link from 'next/link';
import Image from 'next/image';

export default function footer() {
    return (
        <footer className="bg-emerald-600">
            <div className="mx-auto max-w-7xl p-8 grid grid-cols-1 gap-y-6 divide-y divide-white md:divide-none md:grid-cols-3 md:gap-x-12">
                <div className="flex flex-col border-b border-white items-center pb-8 md:border-none md:pb-0 lg:justify-start lg:items-start ">
                    <div className="mb-4 flex items-center space-x-4">
                        <Image
                            src="/images/logo_lksa.png"
                            alt="logo LKSA"
                            className="h-12 w-12 shrink-0"
                            height={48}
                            width={48}
                        />
                        <span className="text-xl font-medium leading-tight">LKSA </span>
                        <div className="h-10 w-0.5 bg-white"></div>
                        <div className="flex flex-col">
                            <span className="text-sm font-medium leading-tight text-white">
                                Tarbiyatul Ummah{' '}
                            </span>
                            <span className="text-sm font-medium leading-tight text-white">
                                Balikpapan
                            </span>
                        </div>
                    </div>
                    <p className="text-center text-sm text-white md:text-justify">
                        LKSA Tarbiyatul Ummah merupakan panti asuhan yang merawat dan mendidik
                        anak-anak yatim piatu. LKSA Tarbiyatul Ummah menyediakan berbagai fasilitas
                        dan program pembinaan yang bertujuan untuk mendukung perkembangan anak
                        secara moral, spiritual, dan sosial. Anak-anak tidak hanya mendapatkan
                        pendidikan formal, tetapi juga dibekali pendidikan akhlak dan agama
                    </p>
                    <div className="text-white hidden md:block">
                        <h2 className="mb-1 mt-4 text-sm font-semibold text-heading ">Donasi</h2>
                        <ul className="text-body font-medium">
                            <li className="mb-4">
                                <span className="text-white text-sm font-light">
                                    Anda dapat melakukan donasi melalui nomor rekening atau kode
                                    QRIS dibawah ini. <br /> nomor rekening : 000000000000000000
                                    <br /> Kode QRIS :
                                </span>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">
                                    <Image
                                        src="/images/qris_dummy.png"
                                        alt=""
                                        className=""
                                        width={180}
                                        height={180}
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col text-white">
                    <h2 className="mb-6 text-sm font-semibold   text-white">Hubungi Kami</h2>
                    <ul className="space-y-6 text-sm text-white">
                        <li className="flex items-center space-x-3">
                            <Image
                                src="/icons/instagram_icon.png"
                                alt=""
                                className="h-auto w-auto"
                                width={30}
                                height={30}
                            />
                            <a href="https://flowbite.com/" className="hover:underline">
                                tarbiyatul.ummah.bpn
                            </a>
                        </li>

                        <li className="flex items-center space-x-3">
                            <Image
                                src="/icons/telephone_icon.png"
                                alt=""
                                className="h-auto w-auto"
                                width={30}
                                height={30}
                            />
                            <a href="https://flowbite.com/" className="hover:underline">
                                08214161683655 (Ketua LKSA)
                            </a>
                        </li>

                        <li className="flex items-center space-x-3">
                            <Image
                                src="/icons/email_icon.png"
                                alt=""
                                className="h-auto w-auto"
                                width={30}
                                height={30}
                            />
                            <a href="https://flowbite.com/" className="hover:underline">
                                lksatarbiyatulummahbpn@gmail.com
                            </a>
                        </li>

                        <div className="text-white hidden md:block">
                            <li className="mb-4 font-semibold">
                                <a href="#" className="hover:underline">
                                    Program Kami
                                </a>
                            </li>
                            <li className="mb-1">
                                <a href="#" className="hover:underline">
                                    Pendidikan
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:underline">
                                    Keagamaan
                                </a>
                            </li>
                        </div>
                    </ul>
                </div>

                <div className="flex flex-col gap-8 text-white">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-heading ">Lokasi</h2>
                        <div className="flex flex-row items-start justify-between gap-4">
                            <a href="https://maps.app.goo.gl/GoU95qQ2JHdGywiK6">
                                <p className="text-white text-sm font-light">
                                    Kalimantan Timur, Balikpapan Jl. Soekarno Hatta KM 8 RT 68,
                                    Kelurahan Batu Ampar Balikpapan Utara
                                </p>
                            </a>
                            <div className=" h-40 w-40 shrink-0 overflow-hidden rounded ">
                                <a href="https://maps.app.goo.gl/GoU95qQ2JHdGywiK6">
                                    <Image
                                        src="/images/lksa_map.png"
                                        alt=""
                                        className="justify-center items-center"
                                        width={180}
                                        height={180}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8 text-white md:hidden">
                    <div>
                        <h2 className="mb-2 text-sm font-semibold text-heading ">Tentang Kami</h2>
                        <h2 className="mb-2 text-sm font-semibold text-heading ">Galeri LKSA</h2>
                        <h2 className="mb-6 text-sm font-semibold text-heading ">
                            Kerajinan Tangan
                        </h2>
                    </div>
                </div>

                <div className="flex flex-col gap-8 text-white md:hidden">
                    <div>
                        <h2 className="mb-2 text-sm font-semibold text-heading ">Program</h2>
                        <p className="mb-2 text-xs  text-heading ">Pendidikan</p>
                        <p className="mb-2 text-xs  text-heading">Keagamaan</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
