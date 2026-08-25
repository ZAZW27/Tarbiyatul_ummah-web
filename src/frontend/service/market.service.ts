import { API_BASE_URL, buildQueryParams } from './config';

export const getMarketCatalog = async (
    page: number = 1,
    limit: number = 10,
    categories?: string[],
) => {
    const queryString = buildQueryParams(page, limit, categories);

    const response = await fetch(`${API_BASE_URL}/market?${queryString}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-store',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch market catalog');
    }

    return response.json();
};

export const buyMarketItem = async (itemId: number, quantity: number) => {
    const response = await fetch(`${API_BASE_URL}/market/buy`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId, quantity }),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.error || 'Failed to complete purchase');
    }

    return data;
};
