import { TombolHijau } from '@/components/ui/buttons';

export default function VisiMisiCard() {
    return (
        <section className="flex flex-col  items-center bg-white rounded-2xl shadow-lg/40 overflow-hidden">
            <div className="flex w-full flex-col px-8 pt-5 pb-4 bg-green-600 rounded-t-2xl ">
                <h1 className="text-white text-lg font-semibold mb-2 text-center">Visi & Misi</h1>
                <hr className="border-t-[3px] border-white w-full opacity-100" />
            </div>
            <div className="px-8 py-5">
                <p className="text-black text-justify text-lg">
                    LKSA Tarbiyatul Ummah memiliki visi dan misi yang bertujuan untuk memberikan
                    arah tujuan, panduan tindakan, serta menjadi sumber inspirasi dan motivasi bagi
                    semua anggota organisasi agar tetap semangat dalam menjalankan tugasnya untuk
                    menjadikan LKSA ini mandiri dan profesional
                </p>
            </div>

            <div className="px-8 pt-12 pb-8 ">
                <TombolHijau>
                    <p className="text-sm">Visi & Misi</p>
                </TombolHijau>
            </div>
        </section>
    );
}
