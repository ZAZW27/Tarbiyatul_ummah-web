'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { loginAdmin } from '@/service/auth.service';
import Image from 'next/image';
import { toast } from 'sonner';

export default function Login() {
    const router = useRouter();

    const [showPassword, setShowPassword] = useState<boolean>(false);

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
            toast.success('Login berhasil! Selamat datang.');
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
                        height={100}
                        width={100}
                        priority
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
                                    type={showPassword ? 'text' : 'password'}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Masukan password disini ya"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                                <button
                    type="button" // PENTING: Wajib type="button" agar form tidak ikut tersubmit
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 focus:outline-none"
                    aria-label={showPassword ? 'Sembunyikan kata sandi' : 'Tampilkan kata sandi'}
                >
                    {showPassword ? (
                        // Ikon Mata Terbuka (Eye Off / Sembunyikan)
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                            />
                        </svg>
                    ) : (
                        // Ikon Mata Tertutup (Eye / Tampilkan)
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                        </svg>
                    )}
                </button>
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
