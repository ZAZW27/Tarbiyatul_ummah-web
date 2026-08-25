import { API_BASE_URL, buildQueryParams } from './config';

export const getMediaCatalog = async (
    page: number = 1,
    limit: number = 10,
    categories?: string[],
) => {
    const queryString = buildQueryParams(page, limit, categories);

    const response = await fetch(`${API_BASE_URL}/media?${queryString}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch media catalog');
    }

    return response.json();
};
