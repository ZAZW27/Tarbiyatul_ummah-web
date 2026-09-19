'use client';
import Link from 'next/link';
import Image from 'next/image';
// fw

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
                        <span className="text-xl font-medium leading-tight text-white">LKSA </span>
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
                                    Anda dapat melakukan donasi melalui nomor rekening. <br /> nomor
                                    rekening : 0630-01-001560-53-5 - BRI <br /> Nama : NAMA: PANTI
                                    ASUHAN TARBIYATUL UMMAH
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col text-white">
                    <h2 className="mb-6 text-sm font-semibold   text-white">Hubungi Kami</h2>
                    <ol className="space-y-6 text-sm text-white">
                        <li className="flex items-center space-x-3">
                            <a
                                href="
                            https://www.instagram.com/tarbiyatul.ummah.bpn/"
                                aria-label="Follow us on instagram"
                                    target="_blank"
                                     rel="noopener noreferrer"
                            >
                                <Image
                                    src="/icons/instagram_white.png"
                                    alt=""
                                    className="h-auto w-auto"
                                    width={30}
                                    height={30}
                                />
                            </a>
                            <a
                                target="_blank"
                    rel="noopener noreferrer"
                                href="https://www.instagram.com/tarbiyatul.ummah.bpn/"
                                className="hover:underline"
                                aria-label="Follow us on instagram"
                            >
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
                            <a
                                target="_blank"
                                 rel="noopener noreferrer"
                                href="https://wa.me/6282141683655?text=Halo%20saya%20ingin%20bertanya"
                                className="hover:underline"
                                aria-label="Contact us on whatsapp"
                            >
                                082141683655 (Ketua LKSA)
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
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="mailto:Tarbiyatulummah888@gmail.com?subject=Pertanyaan%20Seputar%20Yayasan"
                                className="hover:underline"
                                aria-label="Contact us on Email"
                            >
                                Tarbiyatulummah888@gmail.com
                            </a>
                        </li>
                    </ol>

                    <div className="text-white hidden md:block">
                        <ol>
                            <li className="mt-4 font-semibold">
                                <Link href="/about#program">Program Kami</Link>
                            </li>
                            <li className="mb-1">
                                <Link href="/about#program">Pendidikan</Link>
                            </li>

                            <li className="pb-12">
                                <Link href="/about#program">Keagamaan</Link>
                            </li>

                            <li>
                                <a
                                    className="text-xs"
                                    href="http://www.freepik.com"
                                    aria-label="batik credits"
                                >
                                    the batik are Designed by GarryKillian / Freepik
                                </a>
                            </li>
                        </ol>
                    </div>
                </div>

                <div className="flex flex-col gap-8 text-white">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-heading ">Lokasi</h2>
                        <div className="flex flex-row items-start justify-between gap-4">
                            <a
                                href="https://maps.app.goo.gl/GoU95qQ2JHdGywiK6"
                                aria-label="Our Locations"
                            >
                                <p className="text-white text-sm font-light">
                                    Kalimantan Timur, Balikpapan Jl. Soekarno Hatta KM 8 RT 68,
                                    Kelurahan Graha Indah Balikpapan Utara
                                </p>
                            </a>

                            <div className=" h-40 w-40 shrink-0 overflow-hidden rounded ">
                                <a
                                    href="https://maps.app.goo.gl/GoU95qQ2JHdGywiK6"
                                    aria-label="Our Locations"
                                >
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
                        <Link href="/about">
                            {' '}
                            <h2 className="mb-2 text-sm font-semibold text-heading ">
                                Tentang Kami
                            </h2>
                        </Link>
                        <Link href="/galeri">
                            {' '}
                            <h2 className="mb-2 text-sm font-semibold text-heading ">
                                Galeri LKSA
                            </h2>
                        </Link>
                        <Link href="/produk">
                            {' '}
                            <h2 className="mb-2 text-sm font-semibold text-heading ">
                                Kerajinan Tangan
                            </h2>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-8 text-white md:hidden">
                    <div>
                        <Link href="/about#program">
                            {' '}
                            <h2 className="mb-2 text-sm font-semibold text-heading ">Program</h2>
                        </Link>
                        <Link href="/about#program">
                            {' '}
                            <p className="mb-2 text-sm font-semibold text-heading ">Pendidikan</p>
                        </Link>
                        <Link href="/about#program">
                            {' '}
                            <p className="mb-2 text-sm font-semibold text-heading ">Keagamaan</p>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
