import Image from 'next/image';

interface CardSasaranLayananAboutProps {
    title: string;
}

export function CardSasaranLayananAbout({ title }: CardSasaranLayananAboutProps) {
    return (
        <div className=" lg:mx-4 cursor-pointer w-full p-4 whitespace-pre-line h-full relative flex flex-col items-center justify-center tracking-wide bg-linear-to-b from-[#009689] to-teal-600 overflow-hidden shadow-lg/30 rounded-2xl text-white    ">
            {/* ORNAMENT AREA */}

            <Image
                src="/images/ornamen_batik_bawah.png"
                alt="Ornamen batik bawah"
                width={120}
                height={120}
                className="absolute -bottom-2 -left-2 opacity-50"
            />

            <Image
                src="/images/ornamen_batik_atas.png"
                alt="Ornamen batik bawah"
                width={160}
                height={160}
                className="absolute -top-2 -right-2 opacity-50"
            />

            <h1 className="mt-8 whitespace-pre-line text-lg font-bold text-center">{title}</h1>
            <hr className="mt-8 w-[90%] border-t-[2px] border-white opacity-100  " />
        </div>
    );
}
