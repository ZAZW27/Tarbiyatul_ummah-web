'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getAdminItems } from '@/service/admin.service';
import { logoutAdmin } from '@/service/auth.service';

interface AuthContextType {
    isAdmin: boolean;
    isLoading: boolean; // true saat pertama kali cek sesi — cegah tombol admin "kedip" sebelum tau statusnya
    checkSession: () => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const checkSession = async () => {
        try {
            await getAdminItems(); // cookie admin_session otomatis ikut terkirim oleh browser
            setIsAdmin(true);
        } catch {
            setIsAdmin(false); // 401/403 dari backend → bukan admin (atau sesi habis)
        } finally {
            setIsLoading(false);
        }
    };

    // Cek status setiap kali app pertama kali loading
    useEffect(() => {
        checkSession();
    }, []);

    const logout = async () => {
        await logoutAdmin(); // backend yang hapus cookie
        setIsAdmin(false);
    };

    return (
        <AuthContext.Provider value={{ isAdmin, isLoading, checkSession, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth harus dipakai di dalam <AuthProvider>');
    return ctx;
}
