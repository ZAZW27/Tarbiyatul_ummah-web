import Image from 'next/image';

interface CardSasaranProps {
    title: string;
}

export function CardSasaranPelayanan({ title }: CardSasaranProps) {
    return (
        <div className=" lg:mx-4 cursor-pointer p-4 whitespace-pre-line h-full relative flex flex-col items-center justify-center tracking-wide bg-linear-to-b from-teal-400 to-teal-500 overflow-hidden shadow-lg/30 rounded-2xl text-white   min-h-[110px]">
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

            <h1 className="whitespace-pre-line text-lg text-center">{title}</h1>
        </div>
    );
}
