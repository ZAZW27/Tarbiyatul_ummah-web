import Image from 'next/image';

export function CardFasilitasMasjid() {
    return (
        <div className="relative flex flex-col w-full items-center justify-center overflow-hidden rounded-2xl">
            <div className=" font-bold flex flex-col items-center opacity-80  z-10 w-40 absolute rounded-b-xl top-0 py-1 bg-green-700 text-white  ">
                Masjid
            </div>

            <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2 ">
                <Image
                    src="/icons/icon_masjid.png"
                    alt="Icon Masjid"
                    width={85}
                    height={85}
                    className=" w-16 h-16 sm:w-20 sm:h-20 md:w-30 md:h-30 object-contain drop-shadow-md"
                />
            </div>

            <Image
                src="/images/fasilitas_masjid.png"
                alt="Fasilitas Masjid"
                width={300}
                height={200}
                className="w-full object-cover"
            />

            <hr className="absolute bottom-3 inset-x-6  z-10 border-t-[3px] border-green-500 rounded-full " />
        </div>
    );
}

export function CardFasilitasMotor() {
    return (
        <div className="relative flex flex-col w-full items-center justify-center overflow-hidden rounded-2xl">
            <div className=" font-bold flex flex-col items-center opacity-80  z-10 w-50 absolute rounded-b-xl top-0 py-1 bg-green-700 text-white  ">
                Kendaraan Roda Dua
            </div>

            <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2 ">
                <Image
                    src="/icons/motor_icon.png"
                    alt="Icon Motor"
                    width={85}
                    height={85}
                    className=" w-16 h-16 sm:w-20 sm:h-20 md:w-30 md:h-30  object-contain drop-shadow-md"
                />
            </div>

            <Image
                src="/images/fasilitas_motor.png"
                alt="Fasilitas Kendaraan bermotor"
                width={300}
                height={200}
                className="w-full object-cover"
            />

            <hr className="absolute bottom-3 inset-x-6  z-10 border-t-[3px] border-green-500 rounded-full " />
        </div>
    );
}
