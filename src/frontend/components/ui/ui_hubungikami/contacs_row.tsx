import Image from 'next/image';

interface ContactRowsProps {
    IconImageSrc: string;
    IconImageAlt: string;
    title: string;
    description: string;
}

export function ContactRows({ IconImageSrc, IconImageAlt, title, description }: ContactRowsProps) {
    return (
        <div className="flex flex-row w-full  ">
            <div id="icon" className="mr-4 hidden md:block">
                <Image
                    src={IconImageSrc}
                    alt={IconImageAlt}
                    width={500}
                    height={500}
                    className="w-6 h-6 object-cover md:w-10 md:h-10"
                />
            </div>
            <div className="flex flex-col items-start justify-start text-sm lg:text-lg">
                <div>
                    <h1 className="font-extrabold">{title}</h1>
                </div>

                <div>
                    <p className="overflow-clip">{description}</p>
                </div>
            </div>
        </div>
    );
}
