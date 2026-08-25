import { API_BASE_URL } from './config';

const fetchOptions: RequestInit = {
    credentials: 'include',
};

export const getCategories = async () => {
    const response = await fetch(`${API_BASE_URL}/categories`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) throw new Error('Failed to fetch categories');
    return response.json();
};

export const createAdminCategory = async (cat_name: string, cat_type: string) => {
    const response = await fetch(`${API_BASE_URL}/categories`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cat_name, cat_type }),
        ...fetchOptions,
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to create category');
    return data;
};

export const deleteAdminCategory = async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
        method: 'DELETE',
        ...fetchOptions,
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message || 'Failed to delete category');
    return data;
};
