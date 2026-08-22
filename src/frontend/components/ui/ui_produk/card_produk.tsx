'use client';

// import { useState } from 'react';
import Image from 'next/image';
// import { Produk } from '@/types/produk';

export default function CardProduk() {
    return (
        <div className="flex flex-col  bg-[#DBEEFF] px-2  outline-2 outline-[#4CC6FF] rounded-xl max-w-90 w-full">
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
                    

                    <button id="delete">
                        <Image
                                            src= "/images/icon_delete.png"
                                            alt= "icon delete"
                                            width={500}
                                            height={500}
                                            className="w-14 h-auto object-contain"
                                        />
                    </button>
                    </div>


                </div> */}

            <div id="thumbnail" className="flex items-center justify-center mb-4 mt-6">
                <Image
                    src="/images/dummy_produk_pic.png"
                    alt="dummy product"
                    width={2000}
                    height={2000}
                    className="w-76 h-auto object-contain rounded-xl"
                />
            </div>

            <div id="produk_info" className="flex flex-col items-start justify-start px-4.5">
                <div id="title_produk" className="">
                    <h1 className="text-xl font-bold ">Kotak Pensil Dari Stik</h1>
                </div>

                <div id="harga_produk" className="">
                    <h1 className="text-lg  ">Rp 60.000, 00</h1>
                </div>

                <div id="deskripsi_produk" className="pt-2">
                    <p className="text-lg">
                        Kotak pensil dari stik yang ada stiker beruangnya, cocok untuk menaruh...see
                        more
                    </p>
                </div>

                <div id="status_produk" className="pt-4">
                    <div className="flex items-start justify-start w-40 h-auto bg-[#00A1B0] rounded-lg">
                        <h1 className="text-white pl-2">Status : Tersedia</h1>
                    </div>
                </div>

                <div id="pesan" className="w-full my-6">
                    <button className="flex flex-row items-center justify-between w-full rounded-lg bg-[#0C5F4D] py-2.5 gap-2 h px-3">
                        <p className="text-white font-medium m-0 ">Hubungi Kami Melalui Whatsapp</p>
                        <Image
                            src="/images/icon_whatsapp_colored.png"
                            alt="Icon Whatsapp"
                            width={24}
                            height={24}
                            className="object-contain"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
