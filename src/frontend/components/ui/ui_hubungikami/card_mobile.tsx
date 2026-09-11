import Image from 'next/image';

interface CardHubungiMobileProps {
    bgImageSrc: string;
    bgImageAlt: string;
    title: string;
    description: string;
    buttonIconSrc: string;
    buttonIconAlt: string;
    buttonText: string;
}

export function CardHubungiMobile({
    bgImageSrc,
    bgImageAlt,
    title,
    description,
    buttonIconSrc,
    buttonIconAlt,
    buttonText,
}: CardHubungiMobileProps) {
    return (
        <div className="grid grid-cols-1 items-center justify-center border border-b-2 border-emerald-500 overflow-hidden shadow-lg shadow-black/3 rounded-t-4xl rounded-b-lg">
            <div id="top" className="relative w-full ">
                <Image
                    src={bgImageSrc}
                    alt={bgImageAlt}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 mt-6 mx-4 flex items-top justify-top ">
                    <h2 className="text-white text-center items-center justify-center text-4xl font-bold">
                        {title}
                    </h2>
                </div>
            </div>

            <div id="middle" className="py-4 px-4 w-full">
                <p className="text-center">{description}</p>
            </div>

            <div id="bottom" className="flex flex-col items-center justify-center w-full pb-4 ">
                <button className="  bg-green-500 p-2 cursor-pointer justify-center items-center flex flex-row rounded-full w-[90%] ">
                    <div className="flex flex-row items-center justify-center gap-6 w-full py-1">
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
    );
}
