import Image from 'next/image';

export function ProgramCardPendidikan() {
    return (
        <section className="relative flex flex-col rounded-xl overflow-hidden shadow-2xl w-full min-h-[200px]  md:text-lg  px-4 py-4 md:px-12">
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
        <section className="relative flex flex-col rounded-xl overflow-hidden shadow-2xl w-full min-h-[200px]  md:text-lg  px-4 py-4 md:px-12">
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
