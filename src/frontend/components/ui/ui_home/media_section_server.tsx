import { getMediaCatalog } from '@/service/media.service';
import MediaCarausel from './carausel_galeri';
import { Gallery } from '@/types/gallery';

export default async function MediaSectionServer() {
    let dataGaleri: Gallery[] = [];

    try {
        const response = await getMediaCatalog();
        dataGaleri = response.data;
    } catch (err) {
        console.error('Gagal mengambil data produk di home:', err);
    }

    return <MediaCarausel mediaList={dataGaleri} />;
}
