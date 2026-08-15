// import Image from "next/image";
import { ProgramCardPendidikan, ProgramCardKeagamaan } from './card_program';

export default function ProgramKamiSection() {
    return (
        <section className="flex flex-col  w-full overflow-hidden  md:rounded-2xl shadow-2xl/40 ">
            <div className="flex w-full flex-col items-center lg:items-start pt-12">
                <h1 className="font-semibold text-black text-xl md:text-2xl">Program Kami</h1>
                <hr className="mt-2 w-full border-t-[3px] border-green-600 opacity-100" />
            </div>

            <div className="bg-gray-200 mt-6  flex  flex-col w-full  md:rounded-2xl  p-6 md:p-8 items-center">
                <h1 className="text-black text-start  md:px-8">
                    LKSA kami memiliki program-program yang bertujuan untuk mendukung perkembangan
                    anak-anak dalam segi moral, spiritual, serta sosial.
                </h1>

                <div className="flex flex-col gap-6 mt-6 w-full items-center">
                    <ProgramCardPendidikan />
                    <ProgramCardKeagamaan />
                </div>
            </div>
        </section>
    );
}
