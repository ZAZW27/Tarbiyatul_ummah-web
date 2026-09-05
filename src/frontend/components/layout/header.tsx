'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import {
    Dialog,
    DialogBackdrop,
    // DialogButton,
    DialogPanel,
    // Menu,
    // MenuButton,
    // MenuItem,
    // MenuItems,
} from '@headlessui/react';
// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
    { name: 'Homepage', href: '/' },
    { name: 'Tentang Kami', href: '/about' },
    { name: 'Hubungi Kami ', href: '/hubungi_kami' },
    { name: 'Galeri', href: '/galeri' },
    { name: 'Kerajinan Tangan', href: '/produk' },
    { name: 'Donasi', href: '/donasi' },
    { name: 'Login', href: '/auth' },
];

function classNames(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    return (
        <>
            <nav className=" sticky top-0 z-50 bg-emerald-600 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
                <div className="mx-auto  px-6 md:px-14  lg:px-16 h-20">
                    <div className="relative flex h-20 items-center justify-between">
                        {/* Mobile menu button*/}
                        {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"> */}
                        {/* Profile dropdown */}
                        {/* <Menu as="div" className="relative ml-3">
              <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <Image
                  alt=""
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                />
              </MenuButton>

              <MenuItems
                transition
                className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-gray-800 py-1 outline -outline-offset-1 outline-white/10 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                  >
                    Your profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-300 data-focus:bg-white/5 data-focus:outline-hidden"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div> */}

                        <div className="flex flex-1 items-center justify-left sm:items-center sm:justify-start">
                            <div className="flex items-center space-x-2 ">
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
                                    <div className="h-8 w-0.5 bg-white sm:h-10"></div>
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
                            <div className="hidden  lg:block  lg:ml-auto">
                                <div className="flex space-x-4">
                                    {navigation.map((item) => {
                                        const isCurrent = pathname === item.href;
                                        return (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                aria-current={isCurrent ? 'page' : undefined}
                                                className={classNames(
                                                    isCurrent
                                                        ? 'bg-emerald-900 text-white'
                                                        : 'text-gray-300 hover:bg-emerald-400 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium',
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 lg:hidden">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(true)}
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
                            >
                                <span className="absolute -inset-0.5" />
                                <span className="sr-only">Open main menu</span>
                                <Bars3Icon
                                    aria-hidden="true"
                                    className="block size-6 group-data-open:hidden"
                                />
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
                        className="relative flex w-full max-w-rs flex-1 transform flex-col bg-emerald-600 pb-4 pt-5 transition duration-300 ease-in-out data-closed:translate-x-full"
                    >
                        <div className="absolute right-4 top-4">
                            <button
                                type="button"
                                onClick={() => setMobileMenuOpen(false)}
                                className="rounded-md p-1 text-white hover:bg-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            >
                                <span className="sr-only">Close Sidebar</span>
                                <XMarkIcon
                                    aria-hidden="true"
                                    className="size-6 text-white"
                                ></XMarkIcon>
                            </button>
                        </div>

                        <div className="mt-16 px-2 space-y-1">
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
                                                ? 'bg-emerald-900 text-white'
                                                : 'text-gray-300 hover:bg-gray-400 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium',
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </>
    );
}
