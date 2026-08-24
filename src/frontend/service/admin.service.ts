import { API_BASE_URL } from './config';

const fetchOptions: RequestInit = {
    credentials: 'include',
};

export const getAdminItems = async () => {
    const response = await fetch(`${API_BASE_URL}/items`, {
        method: 'GET',
        ...fetchOptions,
    });
    if (!response.ok) throw new Error('Failed to fetch admin items');
    return response.json();
};

export const createAdminItem = async (formData: FormData) => {
    const response = await fetch(`${API_BASE_URL}/items`, {
        method: 'POST',
        body: formData,
        ...fetchOptions,
    });
    if (!response.ok) throw new Error('Failed to create item');
    return response.json();
};

export const updateAdminItem = async (id: number, formData: FormData) => {
    const response = await fetch(`${API_BASE_URL}/items/${id}`, {
        method: 'PUT',
        body: formData,
        ...fetchOptions,
    });
    if (!response.ok) throw new Error('Failed to update item');
    return response.json();
};

export const deleteAdminItem = async (id: number) => {
    const response = await fetch(`${API_BASE_URL}/items/${id}`, {
        method: 'DELETE',
        ...fetchOptions,
    });
    if (!response.ok) throw new Error('Failed to delete item');
    return response.json();
};
