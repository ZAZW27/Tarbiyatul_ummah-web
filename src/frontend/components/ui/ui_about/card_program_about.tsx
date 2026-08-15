import Image from 'next/image';

export function CardProgramPendidikan() {
    return (
        <section className="relative flex flex-col rounded-xl overflow-hidden shadow-black/60 shadow-md w-full min-h-[200px]  md:text-lg lg:text-xl  px-4 py-4 isolate z-0 ">
            <Image
                alt="Your Company"
                src="/images/gambar_orang_nulis.jpg"
                className="object-cover"

                priority
                fill
            />
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 flex flex-col h-full ">
                <div className="text-[#11FF00]">
                    <h1 className="tracking-wide text-lg lg:text-lg font-bold ">1. Pendidikan</h1>
                </div>

                <div className="text-white text-justify">
                    <p>
                        Program pertama dalam LKSA Tarbiyatul Ummah adalah mengenai pendidikan.
                        santri LKSA disekolahkan di sekolah umum SD, SMP, SMA di sekitar LKSA yaitu
                        di daerah kilo delapan. pada sekolah-sekolah tersebut santri-santri LKSA
                        belajar ilmu-ilmu umum seperti matematika, bahasa, dan lainnya
                    </p>
                </div>
            </div>
        </section>
    );
}

export function CardProgramKeagamaan() {
    return (
        <section className="relative flex flex-col rounded-xl overflow-hidden shadow-black/60 shadow-md w-full min-h-[200px]  md:text-lg lg:text-xl  px-4 py-4 isolate z-0 ">
            <Image
                alt="Your Company"
                src="/images/gambar_orang_nulis.jpg"
                className="object-cover"

                priority
                fill
            />
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 flex flex-col h-full ">
                <div className="text-[#11FF00]">
                    <h1 className="tracking-wide text-lg font-bold lg:text-lg">2. Keagamaan</h1>
                </div>

                <div className="text-white text-justify">
                    <p>
                        Program kedua dalam LKSA Tarbiyatul Ummah berfokus pada pengajaran mengenai
                        agama islam. Santri LKSA mempelajari ilmu agama melalui aktivitas-aktivitas
                        seperti hafalan&Tahsin Al-Qur’an, dan taklin kitab. Mereka melaksanakan
                        kegiatan-kegiatan tersebut di masjid LKSA
                    </p>
                </div>
            </div>
        </section>
    );
}
