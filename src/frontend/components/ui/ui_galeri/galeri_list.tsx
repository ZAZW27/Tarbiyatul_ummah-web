'use client';
import CardGaleri from './card_galeri';
import { Gallery } from '@/types/gallery';

interface GalleryListProps {
    GaleriIn: Gallery[];
    isAdmin: boolean;
}

export default function GalleryList({ GaleriIn, isAdmin }: GalleryListProps) {
    // const router = useRouter(); // Failed linting, but keep it here for now
    // const [galleryData, setgalleryData] = useState(GaleriIn); // Failed linting, but keep it here for now

    if (GaleriIn.length === 0) {
        return (
            <div className="flex items-center justify-center text-3xl text-black">
                <h1>Belum ada Media yang tersedia</h1>
            </div>
        );
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-start">
            {GaleriIn.map((gallery) => (
                <CardGaleri key={gallery.id} {...gallery} priority={true} isAdmin={isAdmin} />
            ))}
        </div>
    );
}
