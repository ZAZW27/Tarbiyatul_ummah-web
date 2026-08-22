interface VisiTujuanProps {
    title: string;
    description: string;
}

export function CardVisiTujuanAbout({ title, description }: VisiTujuanProps) {
    return (
        <div className="lg:mx-4 cursor-pointer  whitespace-pre-line h-full relative flex flex-col items-center justify-start lg:justify-top  overflow-hidden tracking-wide bg-linear-to-b from-emerald-400 to-teal-500  shadow-lg/30 rounded-2xl text-white   min-h-[200px] w-full">
            <div className=" flex flex-col w-full items-center mt-6  p-4 ">
                <h1 className="font-extrabold text-xl md:text-2xl text-white text-center ">
                    {title}
                </h1>
                <hr className="mt-2 w-[90%] border-t-[3px] border-white opacity-100" />
            </div>

            <div className="text-white text-center  items-center text-lg md:text-xl lg:text-2xl px-3  mb-6 ">
                <p>{description}</p>
            </div>
        </div>
    );
}
