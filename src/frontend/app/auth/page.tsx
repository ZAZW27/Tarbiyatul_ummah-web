'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { loginAdmin } from '@/service/auth.service';
import Image from 'next/image';

export default function Login() {
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg(null);

        try {
            const data = await loginAdmin(username, password); // failed linting (data is declatred but never used) - sengaja 
            router.push('/produk');
            router.refresh();
        } catch (err) {
            setErrorMsg(
                err instanceof Error ? err.message : 'Terjadi kesalahan tidak terduga saat login',
            );
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main>
            <div className="flex min-h-full flex-col justify-center px-6 pt-30 pb-30 lg:px-8 bg-emerald-700">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Image
                        alt="Your Company"
                        src="/images/logo_lksa.png"
                        className="mx-auto h-26 w-auto"                        
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
                        Silahkan Login ke Akun Anda{' '}
                    </h2>
                </div>

                {/* Area Notifikasi Error */}
                {errorMsg && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded mb-6 text-sm font-medium">
                        {errorMsg}
                    </div>
                )}

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label
                                htmlFor="username"
                                className="block text-sm/6 font-medium text-gray-100"
                            >
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    value={username}
                                    id="username"
                                    name="username"
                                    type="username"
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                    placeholder="Masukan Username anda disini"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label
                                    htmlFor="password"
                                    className="block text-sm/6 font-medium text-gray-100"
                                >
                                    Passworddd
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    value={password}
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Masukan password disini ya"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`mt-4 w-full text-white font-bold py-3 rounded-full transition-colors ${
                                    isLoading
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-[#00A651] hover:bg-emerald-700'
                                }`}
                            >
                                {isLoading ? 'Memverifikasi...' : 'Masuk'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
