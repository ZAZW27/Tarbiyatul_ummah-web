import { getMarketCatalog } from '@/service/market.service';
import ProdukCarausel from './caraousel_produk';
import { Produk } from '@/types/produk';

export default async function ProdukSectionServer() {
    let dataProduk: Produk[] = [];

    try {
        const response = await getMarketCatalog();
        dataProduk = response.data;
    } catch (err) {
        console.error('Gagal mengambil data produk di home:', err);
    }

    return <ProdukCarausel produkList={dataProduk} />;
}
