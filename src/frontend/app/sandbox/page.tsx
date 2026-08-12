// import HomePageHero from "@/components/ui/homepage_hero";
// import { TentangKamiButton } from "@/components/ui/buttons";

// import VisiMisiCard from "@/components/ui/card_visi_misi"
// import ProgramKamiSection from "@/components/ui/programkami_section"
import { CardSasaranPelayanan } from '@/components/ui/card_sasaran_pelayanan';

export default function SandBox() {
    return (
        <main className="min-h-screen bg-gray-200 px-8 py-20">
            <h1 className="mb-8 border-b-2 border-gray-200 pb-2 text-xl font-semibold">
                Component Sandbox
            </h1>

            <section>
                {/* <h2 className="mb-4 text-xl font-semibold">1. Homepage_hero (ukuran mobile)</h2> */}
                <div className="">
                    <CardSasaranPelayanan title="Anak-Anak Yatim Piatu" />
                </div>

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
