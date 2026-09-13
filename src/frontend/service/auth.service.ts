import { API_BASE_URL } from './config';

export const loginAdmin = async (username: string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
        credentials: 'include',
    });

    const data = await response.json();

    if (!response.ok) {
        const msg = Array.isArray(data.error)
            ? data.error.join(', ')
            : data.error || data.message || 'Login failed, cek username dan password anda';
        throw new Error(msg);
    }

    return data;
};

export const logoutAdmin = async () => {
    const response = await fetch(`${API_BASE_URL}/auth/logout`, {
        method: 'POST',
        credentials: 'include',
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Logout failed');
    }

    return data;
};
