import Image from 'next/image';
import { CardHubungiMobile } from '@/components/ui/ui_hubungikami/card_mobile';
import { CardHubungiDesktop } from '@/components/ui/ui_hubungikami/card_desktop';
import { ContactRows } from '@/components/ui/ui_hubungikami/contacs_row';
import { TombolHijau } from '@/components/ui/buttons';

export default function HubungiKami() {
    return (
        <main className="flex flex-col w-full gap-8 bg-gray-100">
            <section
                id="HubungiKami"
                className="flex flex-col items-center justify-center border border-dashed border-gray-400 "
            >
                <div className="flex flex-col justify-center items-center mt-4 mx-2">
                    <div className="flex items-center justify-center pb-1.5 w-full ">
                        <p className="font-bold text-emerald-600 text-xl border-b-2 border-emerald-500 px-18 pb-1 md:px-26 lg:px-44">
                            Hubungi Kami
                        </p>
                    </div>

                    <div className="">
                        <p className="text-center ">
                            Anda dapat menghubungi kami melalui metode-metode yang tersedia di bawah
                            ini
                        </p>
                    </div>
                </div>
            </section>

            <section
                id="CardHubungi"
                className=" grid grid-cols-1 lg:grid-cols-2 items-center justify-center  border border-dashed border-gray-400 lg:px-12"
            >
                {/* =============================== WHATSAPP SECTION ======================================== */}

                <div
                    id="WhatsappCard"
                    className="w-full  border border-dashed border-gray-400 py-4 px-4"
                >
                    <div id="mobile" className="md:hidden">
                        <CardHubungiMobile
                            bgImageSrc="/images/whatsapp.png"
                            bgImageAlt="bg whatsapp"
                            title="Hubungi Kami Melalui Whatsapp"
                            description="Anda dapat menghubungi kami melalui aplikasi pesan instan whatsapp dengan cara mengklik tombol dibawah ini"
                            buttonIconSrc="/icons/whatsapp_vector.png"
                            buttonIconAlt="icon whatsapp"
                            buttonText="Hubungi Kami Melalui Whatsapp"
                        />
                    </div>

                    <div id="tab_desktop" className="hidden md:block lg:block">
                        <CardHubungiDesktop
                            bgImageSrc="/images/whatsapp.png"
                            bgImageAlt="bg whatsapp"
                            title="Hubungi Kami Melalui Whatsapp"
                            description="Anda dapat menghubungi kami melalui aplikasi pesan instan whatsapp dengan cara mengklik tombol dibawah ini"
                            buttonIconSrc="/icons/whatsapp_vector.png"
                            buttonIconAlt="icon whatsapp"
                            buttonText="Hubungi Kami Melalui Whatsapp"
                        />
                    </div>
                </div>

                {/* =============================== EMAIL SECTION ======================================== */}

                <div
                    id="emailCard"
                    className="w-full  border border-dashed border-gray-400 py-4 px-4"
                >
                    <div id="mobile" className="md:hidden">
                        <CardHubungiMobile
                            bgImageSrc="/images/email.png"
                            bgImageAlt="bg Email"
                            title="Hubungi Kami Melalui Gmail"
                            description="Anda dapat menghubungi kami melalui Gmail dengan cara mengklik tombol dibawah ini"
                            buttonIconSrc="/icons/email_vector.png"
                            buttonIconAlt="icon email"
                            buttonText="Hubungi Kami Melalui Email"
                        />
                    </div>

                    <div id="tab_desktop" className="hidden md:block lg:block">
                        <CardHubungiDesktop
                            bgImageSrc="/images/email.png"
                            bgImageAlt="bg email"
                            title="Hubungi Kami Melalui Gmail"
                            description="Anda juga dapat menghubungi kami melalui Aplikasi Gmail dengan cara mengklik tombol yang ada  dibawah ini"
                            buttonIconSrc="/icons/email_vector.png"
                            buttonIconAlt="icon email"
                            buttonText="Hubungi Kami Melalui Gmail"
                        />
                    </div>
                </div>
            </section>

            {/* =============================== NOMOR TELPON ALAMAT  SECTION ======================================== */}

            <section
                id="NomorTeleponAlamat"
                className="  grid grid-cols-1 md:grid-cols-2 items-center justify-center lg:mx-10"
            >
                <div className="text-emerald-500 text-xl md:col-span-2  font-bold border-l-4 border-emerald-500 mx-4 lg:mx-6  lg:text-3xl">
                    <p className="pl-2">
                        Nomor Telepon dan Alamat LKSA Tarbiyatul Ummah Balikpapan
                    </p>
                </div>

                <div
                    id="InfoKontak"
                    className="w-full  flex flex-col justify-start items-start gap-6 my-8 px-4 lg:my-4 "
                >
                    <div>
                        <ContactRows
                            IconImageSrc="/images/icon_telepon.png"
                            IconImageAlt="icon telpon ijo"
                            title="KETUA LKSA"
                            description="082141683655 - Abdi Ahadi"
                        />
                    </div>

                    <div>
                        <ContactRows
                            IconImageSrc="/images/icon_email_hijau.png"
                            IconImageAlt="icon email ijo"
                            title="Email"
                            description="LKSAtarbiyatulUmmahBalikpapan@gmail.com"
                        />
                    </div>

                    <div>
                        <ContactRows
                            IconImageSrc="/images/icon_map_hijau.png"
                            IconImageAlt="icon map ijo"
                            title="Alamat"
                            description="Kalimantan Timur, Balikpapan Jl. Soekarno Hatta KM 8 RT 68, Kelurahan Batu Ampar Balikpapan Utara"
                        />
                    </div>
                </div>

                <div id="GambarMap" className="  mx-4  my-4">
                    <Image
                        src="/images/hubungi_kami_map.png"
                        alt="gambar map"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex items-center justify-center mb-6 lg:col-span-2 lg:mt-4">
                    <TombolHijau>
                        {' '}
                        <p>Dapatkan Alamat</p>{' '}
                    </TombolHijau>
                </div>
            </section>
        </main>
    );
}
