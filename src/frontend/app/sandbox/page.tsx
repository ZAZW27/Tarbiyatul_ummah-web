// import HomePageHero from "@/components/ui/homepage_hero";
// import { TentangKamiButton } from "@/components/ui/buttons";

// import VisiMisiCard from "@/components/ui/card_visi_misi"
// import ProgramKamiSection from "@/components/ui/programkami_section"
// import { CardSasaranPelayanan } from '@/components/ui/ui_home/card_sasaran_pelayanan';
// import { CardFasilitasMasjid, CardFasilitasMotor } from '@/components/ui/ui_home/card_fasilitas';
// import { CardVisiTujuanAbout } from '@/components/ui/ui_about/card_visi_tujuan_about';
// import {
//     CardProgramKeagamaan,
//     CardProgramPendidikan,
// } from '@/components/ui/ui_about/card_program_about';
// import { CardSasaranLayananAbout } from '@/components/ui/ui_about/card_sasaran_layanan_about';
// import { CardHubungiMobile } from '@/components/ui/ui_hubungikami/card_mobile';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ContactRows } from '@/components/ui/ui_hubungikami/contacs_row';

// import { CardHubungiDesktop } from '@/components/ui/ui_hubungikami/card_desktop';
import CardProduk from '@/components/ui/ui_produk/card_produk';

export default function SandBox() {
    return (
        <main className="min-h-screen bg-gray-200 px-8 py-20 ">
            <h1 className="mb-8 border-b-2 border-gray-200 pb-2 text-xl font-semibold">
                Component Sandbox
            </h1>

            <section>
                {/* <h2 className="mb-4 text-xl font-semibold">1. Homepage_hero (ukuran mobile)</h2> */}
                {/* <div className="">
                  <ContactRows 
                  IconImageSrc=""
                  IconImageAlt=""
                  title=""
                  description=""
                  />
                </div> */}

                <div>
                    <CardProduk />
                </div>

                {/* <div className="">
                    <CardFasilitasMotor/>
                </div> */}

                {/* <div className="pt-20">
                    <ProgramKamiSection/>
                </div> */}

                {/* <div className="min-h-screen p-5 ">
                 <TentangKamiButton> <p>Tentang Kami</p>  </TentangKamiButton>

                </div> */}
            </section>
        </main>
    );
}
