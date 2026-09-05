'use client';
import { useState, useEffect } from 'react'; // Failed linting, but keep it here for now
import { useRouter } from 'next/navigation';
import CardProduk from './card_produk';
import { Produk } from '@/types/produk';

interface ProdukListProps {
    produkIn: Produk[];
}

export default function ProdukList({ produkIn }: ProdukListProps) {
    const router = useRouter(); // Failed linting, but keep it here for now
    const [produkData, setprodukData] = useState(produkIn); // Failed linting, but keep it here for now

    if (produkData.length === 0) {
        return (
            <div className="flex items-center justify-center text-3xl text-black">
                <h1>Belum ada produk yang tersedia</h1>
            </div>
        );
    }
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {produkData.map((produk) => (
                <CardProduk key={produk.id} {...produk} />
            ))}
        </div>
    );
}
