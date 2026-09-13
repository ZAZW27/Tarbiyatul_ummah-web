'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { logoutAdmin } from '@/service/auth.service';

import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

import BubbleField from '../misc/BubbleField';

const navigation = [
    { name: 'Homepage', href: '/' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Hubungi Kami ', href: '/hubungi_kami' },
    { name: 'Galeri', href: '/galeri' },
    { name: 'Kerajinan Tangan', href: '/produk' },
    { name: 'Donasi', href: '/donasi' },
];

function classNames(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

interface headerProps {
    isAdmin?: boolean;
}

export default function Header({ isAdmin = false }: headerProps) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await logoutAdmin();
            router.push('/');
            router.refresh();
        } catch (error) {
            console.error('Gagal melakukan Logout, terjadi kesalahan: ', error);
        }
    };

    const AuthButton = ({ isMobile = false }: { isMobile?: boolean }) => {
        const baseClass = isMobile
            ? 'block px-4 py-2 text-white hover:bg-emerald-800/70 w-full text-left font-medium rounded-md transition-colors'
            : 'relative text-white font-medium px-4 py-2 rounded-full border border-white/25 hover:border-white/60 hover:bg-white/10 transition-all duration-300';

        return isAdmin ? (
            <button
                onClick={() => {
                    handleLogout();
                    if (isMobile) setMobileMenuOpen(false);
                }}
                className={`${baseClass} text-red-200 hover:text-red-100`}
            >
                Logout
            </button>
        ) : (
            <Link
                href="/auth"
                onClick={() => {
                    if (isMobile) setMobileMenuOpen(false);
                }}
                className={baseClass}
            >
                Login
            </Link>
        );
    };

    return (
        <>
            <nav
                className="
                    sticky top-0 z-50
                    bg-gradient-to-r from-emerald-950 via-emerald-800 to-emerald-600
                    shadow-lg shadow-emerald-950/30
                    after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0
                    after:h-px after:bg-white/15
                "
            >
                <BubbleField variant="nav" />

                <div className="relative mx-auto px-6 md:px-14 lg:px-16 h-20">
                    <div className="relative flex h-20 items-center justify-between">
                        <div className="flex flex-1 items-center justify-left sm:items-center sm:justify-start mr-4">
                            <div className="flex items-center space-x-2">
                                <div className="flex shrink-0 items-center">
                                    <Image
                                        alt="Your Company"
                                        src="/images/logo_lksa.png"
                                        className="h-12 w-auto sm:h-16"
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div className="flex items-center space-x-2 sm:space-x-2 md:space-x-2">
                                    <span className="text-lg font-medium text-white tracking-wide sm:text-xl md:text-xl">
                                        LKSA
                                    </span>
                                    <div className="h-8 w-0.5 bg-white/80 sm:h-10"></div>
                                    <div className="flex flex-col justify-center min-w-0">
                                        <span className="text-xs font-medium leading-tight text-white sm:text-sm truncate">
                                            Tarbiyatul Ummah{' '}
                                        </span>
                                        <span className="text-xs font-medium leading-tight text-white sm-text-sm truncate">
                                            Balikpapan
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden lg:block lg:ml-auto">
                                <div className="flex items-center space-x-2">
                                    {navigation.map((item) => {
                                        const isCurrent = pathname === item.href;
                                        return (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                aria-current={isCurrent ? 'page' : undefined}
                                                className={classNames(
                                                    'rounded-full px-4 py-2 text-sm font-medium transition-all duration-200',
                                                    isCurrent
                                                        ? 'bg-white/15 text-white shadow-inner shadow-white/10 backdrop-blur-sm'
                                                        : 'text-white/75 hover:text-white hover:bg-white/10',
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        );
                                    })}
                                    <div className="ml-2">
                                        <AuthButton />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 lg:hidden">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:bg-white/10 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-white"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon aria-hidden="true" className="block size-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <Dialog
                open={mobileMenuOpen}
                onClose={setMobileMenuOpen}
                className="relative z-50 lg:hidden"
            >
                <DialogBackdrop
                    transition
                    className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
                ></DialogBackdrop>

                <div className="fixed inset-0 flex justify-start">
                    <DialogPanel
                        transition
                        className="
                            relative flex w-full max-w-rs flex-1 transform flex-col
                            bg-gradient-to-tr from-emerald-950 via-emerald-800 to-emerald-600
                            pb-4 pt-5 transition duration-300 ease-in-out
                            data-closed:translate-x-full
                        "
                    >
                        <BubbleField variant="drawer" />

                        <div className="absolute right-4 top-4 z-10">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="rounded-md p-1 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            >
                                <span className="sr-only">Close Sidebar</span>
                                <XMarkIcon aria-hidden="true" className="size-6 text-white" />
                            </button>
                        </div>

                        <div className="relative mt-16 px-2 space-y-1">
                            {navigation.map((item) => {
                                const isCurrent = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        aria-current={isCurrent ? 'page' : undefined}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={classNames(
                                            isCurrent
                                                ? 'bg-white/15 text-white shadow-inner shadow-white/10'
                                                : 'text-white/80 hover:bg-white/10 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium transition-colors',
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                            <AuthButton isMobile={true} />
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
}
