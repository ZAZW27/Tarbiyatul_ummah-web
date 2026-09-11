import Image from 'next/image';

interface CardHubungiDesktopProps {
    bgImageSrc: string;
    bgImageAlt: string;
    title: string;
    description: string;
    buttonIconSrc: string;
    buttonIconAlt: string;
    buttonText: string;
}

export function CardHubungiDesktop({
    bgImageSrc,
    bgImageAlt,
    title,
    description,
    buttonIconSrc,
    buttonIconAlt,
    buttonText,
}: CardHubungiDesktopProps) {
    return (
        <div className="flex flex-row w-full   border border-b-2 border-emerald-500 overflow-hidden shadow-lg bg-white shadow-black/3 rounded-3xl">
            <div className="relative w-auto">
                <Image
                    src={bgImageSrc}
                    alt={bgImageAlt}
                    width={500}
                    height={500}
                    className="w-72 h-full object-cover"
                />
            </div>

            <div className="flex flex-col items-start  h-full justify-between py-6 w-full pl-6 pr-6">
                <div id="top" className="text-black font-bold text-2xl leading-snug mb-6">
                    <h1>{title}</h1>
                </div>

                <div id="middle" className="my-auto leading-relaxed mb-6">
                    <h1>{description}</h1>
                </div>

                <div id="bottom" className="w-full">
                    <button className="  bg-green-500 p-2 cursor-pointer justify-center items-center flex flex-row rounded-full w-[95%] ">
                        <div className="flex flex-row items-center justify-center gap-6 w-full ">
                            <div className="flex items-center">
                                <Image
                                    src={buttonIconSrc}
                                    alt={buttonIconAlt}
                                    width={30}
                                    height={30}
                                    className=""
                                />
                            </div>

                            <div className="flex items-center">
                                <p>{buttonText}</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
}
