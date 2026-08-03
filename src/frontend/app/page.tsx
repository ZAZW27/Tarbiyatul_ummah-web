import Image from 'next/image';


// 

export default function Homepage() {
    return (
     <main className=" flex flex-col  gap-16  max-w-7xl mx-auto px-4 py-8 sm:px-6 bg-gray-100">

        {/* Selamat datang sampai tentang kami */}
        <section id="hero" className="w-full">
            <div className="flex h-64 w-full items-center justify-center border-2 border-dashed border-gray-500">
                <span className="text-gray-300">placeholder: Hero section</span>
            </div>
        </section>

       
        <section id="visi_misi_program" className="grid grid-cols-1 gap-8 md:grid-cols-2">
             {/* untuk program */}
            <div className="order-2 flex h-64 items-center justify-center  border-2 border-dashed border-gray-500">
                <span className="text-gray-400">Placeholder: program </span>
            </div>

    
        {/* untuk section visi misi   */}

        <div className="order-1 flex h-64 items-center justify-center border-2 border-dashed border-gray-500">
            <span className="text-gray-400">Placeholder visi misi</span>
        </div>
      

        </section>

        {/* untuk section sasaran pelayanan */}
        <section id="sasaran_pelayanan">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            <div className="h-32 border-2 border-dashed border-gray-400"></div>
            <div className="h-32 border-2 border-dashed border-gray-400"></div>
            <div className="hidden h-32 border-2 border-dashed border-gray-400"></div>
            <div className="hidden h-32 border-2 border-dashed border-gray-400"></div>
            <div className="hidden h-32 border-2 border-dashed border-gray-400"></div>
        </div>
        </section>

                {/* untuk section sasaran pelayanan */}
        <section id="fasilitas_pelayanan">
        <div className=" grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="h-48 border-2 border-dashed border-gray-400"></div>
                <div className="h-48 border-2 border-dashed border-gray-400"></div>
        </div>
        </section>


                {/* untuk section sasaran pelayanan */}
        <section id="galeri_section">
            <div className="flex h-48 w-full items-center justify-center border-2 border-dashed border-gray-400">
                <span className="text-gray-500">Placehodler: Galeri</span>
            </div>
        </section>


                {/* untuk section sasaran pelayanan */}
        <section id="produk_section">
            <div className="flex h-44 w-full items-center justify-center border-2 border-dashed border-gray-400">
                <section className="text-gray-500">Placeholde: produk </section>
            </div>

        </section>


     </main>
    );
}
