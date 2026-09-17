import Image from 'next/image';

interface CardHubungiMobileProps {
    bgImageSrc: string;
    bgImageAlt: string;
    title: string;
    description: string;
    buttonIconSrc: string;
    buttonIconAlt: string;
    buttonText: string;
    href: string;
    priority?: boolean;
}

export function CardHubungiMobile({
    bgImageSrc,
    bgImageAlt,
    title,
    description,
    buttonText,
    href,
    priority = false,
}: CardHubungiMobileProps) {
    return (
        <div className="grid grid-cols-1 items-center justify-center border border-b-2 border-emerald-500 overflow-hidden shadow-lg shadow-black/3 rounded-t-4xl rounded-b-lg bg-white">
            <div id="top" className="relative w-full">
                <Image
                    src={bgImageSrc}
                    alt={bgImageAlt}
                    width={500}
                    height={500}
                    priority={priority}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 mt-6 mx-4 flex items-start justify-center">
                    <h2 className="text-white text-center text-4xl font-bold drop-shadow-md">
                        {title}
                    </h2>
                </div>
            </div>

            <div id="middle" className="py-4 px-4 w-full text-neutral-700">
                <p className="text-center">{description}</p>
            </div>

            <div id="bottom" className="flex flex-col items-center justify-center w-full pb-4">
                {/* Mengganti <button> menjadi <a> */}
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 transition-colors p-2 cursor-pointer justify-center items-center flex flex-row rounded-full w-[90%] text-white font-medium shadow-sm"
                >
                    <div className="flex flex-row items-center justify-center gap-3 w-full py-1">
                        {/* Aktifkan kembali ikon jika diperlukan */}
                        {/* {buttonIconSrc && (
                            <div className="flex items-center">
                                <Image
                                    src={buttonIconSrc}
                                    alt={buttonIconAlt}
                                    width={24}
                                    height={24}
                                    className="h-6 w-6 object-contain"
                                />
                            </div>
                        )} */}

                        <div className="flex items-center">
                            <p>{buttonText}</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
