'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ModalDeleteProduk from './modal_delete_produkt';
import { Produk } from '@/types/produk';
import Link from 'next/link';
import {Inter} from 'next/font/google';

interface CardProdukProps extends Produk {}

// 1. Define your different font here
export const secondaryFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-secondary', // This creates a custom CSS variable
});

export default function CardProduk(
    {
        title, 
        description, 
        image_url, 
        file_id, 
        price, 
        status
    }:CardProdukProps
) {
    // const isImageValid = .image_url && (produk.image_url.startsWith('http') || produk.image_url.startsWith('/'));
    const kontakWhatsapp = 6289602601506 // yusuf
    const[expandedDesc, setExpanedDesc] = useState(false)

    const formatHarga = (angka: Number) => `Rp ${angka.toLocaleString("id-ID")},00`
    const wa_link = ` https://wa.me/${kontakWhatsapp}?text=${encodeURIComponent(`Halo, saya tertarik dengan produk "${title}"`)}`

    const batasKarakter = 60;
    const cuttingEdge = description.length > batasKarakter
    const deskripsiFull = expandedDesc ? description : description.slice(0,batasKarakter) + (cuttingEdge ? "...": "");

    return (
        <div className="flex flex-col  bg-[#e6efeb]   outline-2 outline-[#72e5b5] rounded-xl max-w-56 lg:max-w-70 w-full mt-2 overflow-hidden ">
            {/* <div id="manipulation" className="flex flex-row items-end justify-end">
                    <div className="flex items-end justify-end">
                  <button id="edit">
                        <Image
                                            src= "/images/icon_edit.png"
                                            alt= "icon delete"
                                            width={500}
                                            height={500}
                                            className="w-14 h-auto object-contain"
                                        />
                    </button>
                    </div>
                    
                    
                                    <div className="flex items-end justify-end">
                    

                   
                        <ModalDeleteProduk/>
                  



                    </div>


                </div> */}

            <div id="thumbnail" className="flex items-center justify-center mb-4 ">
                <Image
                    src=  "/images/dummy_produk_pic.png"
                    alt="well well well this isn't supposes to happened"
                    width={2000}
                    height={2000}
                    className="w-76 h-auto object-contain "
                />
            </div>

            <div id="produk_info" className="flex flex-col items-start justify-start px-4.5 grow pb-4">
                <div id="title_produk" className="">
                    <h1 className="text-sm lg:text-lg font-bold ">{title}</h1>
                </div>

                <div id="harga_produk" className={`${secondaryFont.className}`}>
                    <h1 className="text-sm lg:text-lg ">{formatHarga(price)}</h1>
                </div>

                <div id="deskripsi_produk" className="pt-2 grow">
                    <p className="text-sm lg:text-lg"> Deskripsi :
                        {deskripsiFull} {cuttingEdge && (
                            <button
                            onClick= {()=> setExpanedDesc(!expandedDesc)}
                            className='text-sm text-gray-500 hover:underline'
                            >
                                {expandedDesc ? "Lihat Lebih sedikit" : "See More"}
                            </button>
                        ) }
                    </p>
                </div>
            </div>
            
            <div className="px-4" id="status_hubungi">
                    <div id="status_produk" className="">
                    <div className="flex items-start justify-start w-auto lg:w-40 h-auto bg-[#00A1B0] rounded-lg">
                        <h1 className="text-white text-sm lg:text-lg pl-2">Status : {status}</h1>
                    </div>
                </div>

                <div id="pesan" className="w-full mt-2 mb-6">
                    <Link href={wa_link}>
                    <button className="flex flex-row items-center justify-between w-full rounded-lg bg-[#0C5F4D] py-2.5 gap-2 h px-3">
                        
                        
                        <p className="text-white font-medium m-0 text-xs lg:text-md ">Hubungi Kami Melalui Whatsapp</p>
                        <Image
                            src="/images/icon_whatsapp_colored.png"
                            alt="Icon Whatsapp"
                            width={24}
                            height={24}
                            className="object-contain hidden lg:block"
                        />
                    </button>
                    </Link>
                </div>
            </div>
            
            
        </div>
    );
}
