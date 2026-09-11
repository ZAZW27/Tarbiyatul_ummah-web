import Image from 'next/image';

export default function HubungiKami() {
    return (
        <main className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 bg-gray-100">
            <section
                id="header"
                className="lg:col-span-2 border border-dashed border-gray-500 mt-4 items-center justify-center lg:text-2xl "
            >
                <div className="flex items-center justify-center pb-1.5 w-full ">
                    <p className="font-bold text-emerald-600 text-xl border-b-2 border-emerald-500 px-18 pb-1 md:px-26 lg:px-44">
                        Hubungi Kami
                    </p>
                </div>

                <div className="flex items-center justify-center">
                    <p className="text-center flex mx-4 mt-4 ">
                        Anda dapat menyalurkan donasi kepada LKSA Tarbiyatul Ummah melalui nomor
                        rekening di bawah ini
                    </p>
                </div>
            </section>

            <section
                id="rekening"
                className="border border-dashed border-gray-500 text-center justify-cente lg:text-start lg:pl-46 lg:pt-8 lg:text-2xl"
            >
                <div className="BCA">
                    <p>1287192011829 - BCA</p>
                </div>

                <div className="ke_qris">
                    <p>(Nama Yang Bersangkutan Akan Ditaruh Disini)</p>
                </div>

                <div className="flex px-4 lg:pl-46 mt-4 lg:hidden">
                    Anda juga dapat meng-scan kode QRIS dibawah ini sebagai salah satu metode donasi
                </div>

                <div className=" hidden lg:block lg:mt-6 lg:pr-12">
                    Anda juga dapat meng-scan kode QRIS disamping ini sebagai salah satu metode
                    donasi
                </div>
            </section>

            <section
                id="gambar_qris"
                className="flex items-center justify-center border border-dashed border-gray-500 lg:pr-8"
            >
                <div id="GambarMap" className="  mx-4  my-4">
                    <Image
                        src="/images/kode_qris.png"
                        alt="gambar kode qris"
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            <section className="flex items-center justify-center border border-dashed border-gray-500  mb-8 lg:col-span-2 lg:text-2xl">
                <div className="flex items-center justify-center text-center mx-4">
                    <p>Terimakasih Banyak atas bantuan yang anda berikan 😊</p>
                </div>
            </section>
        </main>
    );
}
