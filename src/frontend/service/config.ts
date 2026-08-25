
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export const buildQueryParams = (page: number, limit: number, categories?: string[]) => {
    const params = new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
    });

    if (categories && categories.length > 0) {
        categories.forEach((cat) => params.append('category', cat));
    }

    return params.toString();
};