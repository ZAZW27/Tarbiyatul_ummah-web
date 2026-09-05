export interface Produk {
    id : number,
    title: string;
    description: string;
    image_url: string;
    file_id: string;
    price: number;
    status: 'active';
    category: string;
}
