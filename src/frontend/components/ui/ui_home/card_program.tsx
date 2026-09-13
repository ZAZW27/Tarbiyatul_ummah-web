import Image from 'next/image';

export function ProgramCardPendidikan() {
    return (
        <section className="cursor-pointer relative flex flex-col rounded-xl overflow-hidden w-full min-h-50 md:text-lg px-4 py-4 md:px-12 transition-all duration-300 ease-out shadow-md hover:-translate-y-1.5 hover:shadow-slate-700/30 hover:shadow-[0_10px_10px_0px_rgba(0,0,0,0.5),0_0_25px_var(--tw-shadow-color)]">
            <Image
                alt="Your Company"
                src="/images/gambar_orang_nulis.jpg"
                className="object-cover transition-transform duration-500 hover:scale-105"

                priority
                fill
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 flex flex-col h-full ">
                <div className="text-white">
                    <h1 className="tracking-wide text-lg font-medium">Pendidikan</h1>
                    <hr className="border-t-[2px] border-white w-full opacity-100" />
                </div>

                <div className="text-white">
                    <p>
                        program pendidikan LKSA yang berfokus kepada pendidikan formal untuk
                        anak-anak LKSA
                    </p>
                </div>

                <div className=" pt-12 mt-auto self-end text-white text-lg font-bold cursor-pointer">
                    {'>>'}
                </div>
            </div>
        </section>
    );
}

export function ProgramCardKeagamaan() {
    return (
        <section className="cursor-pointer relative flex flex-col rounded-xl overflow-hidden w-full min-h-50 md:text-lg px-4 py-4 md:px-12 transition-all duration-300 ease-out shadow-lg hover:-translate-y-1.5 hover:shadow-emerald-700/50 hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.5),0_0_25px_var(--tw-shadow-color)]">
            <Image
                alt="Your Company"
                src="/images/gambar_orang_nulis.jpg"
                className="object-cover"

                priority
                fill
            />
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 flex flex-col h-full ">
                <div className="text-white">
                    <h1 className="tracking-wide text-lg font-medium">Keagamaan</h1>
                    <hr className="border-t-[2px] border-white w-full opacity-100" />
                </div>

                <div className="text-white">
                    <p>
                        Program keagamaan bertujuan untuk mendukung perkembangan anak secara moral
                        dan spiritual.
                    </p>
                </div>

                <div className=" pt-12 mt-auto self-end text-white text-lg font-bold cursor-pointer">
                    {'>>'}
                </div>
            </div>
        </section>
    );
}
