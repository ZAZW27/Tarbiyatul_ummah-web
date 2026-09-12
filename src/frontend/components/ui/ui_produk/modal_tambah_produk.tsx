'use client';
import { Fragment, useState, ChangeEvent } from 'react';
import Image from 'next/image';
import { createAdminItem } from '@/service/admin.service';

import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    Transition,
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from '@headlessui/react';
// import { Plus, X, ChevronDown, ImagePlus, Loader2 } from "lucide-react";
// import { tambahProduk } from "@/services/produk";
// import { Produk } from "@/types/produk";

const statusOption: Array<'active' | 'inactive'> = ['active', 'inactive'];

// const KategoriOption = ['Kerajinan Tangan', 'Aksesoris', 'Lainnya'];

interface ModalTambahProdukProps {
    onSuccess?: () => void;
}

const formKosong = {
    nama: '',
    deskripsi: '',
    harga: '',
    stock:''
};

export default function ModalTambahProduk({ onSuccess }: ModalTambahProdukProps) {
    // Failed linting, but keep it here for now
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // Failed linting, but keep it here for now
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const [form, setForm] = useState(formKosong);
    const [status, setStatus] = useState<string>(statusOption[0]); // Default 'active'
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const resetForm = () => {
        setForm(formKosong);
        setStatus(statusOption[0]);
        setImageFile(null);
        setPreviewUrl(null);
        setErrorMsg(null);
    };

    const handleClose = () => {
        if (isSubmitting) return;
        setIsOpen(false);
        resetForm();
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setImageFile(file);
        setPreviewUrl(URL.createObjectURL(file));
    };

    const handleInputChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setForm((prev)=>({ ...prev, [name]:value}));
    }

    const handleSubmit = async (e: React.SubmitEvent & { nativeEvent: SubmitEvent }) => {
        e.preventDefault();

        if (!form.nama || !form.harga || !form.stock || !imageFile || !form.deskripsi) {
            setErrorMsg("Nama, Harga, Stock, Gambar, dan deskripsi wajib di isi ya");
            return
        }
        setIsSubmitting(true);
        setErrorMsg(null);
        try {
            const formData = new FormData();
            formData.append('title', form.nama);
            formData.append('description', form.deskripsi);
            formData.append('price', form.harga);
            formData.append('stock', form.stock);
            formData.append('status', status);
            formData.append('image', imageFile);
            
            await createAdminItem(formData);

            handleClose();
            if (onSuccess) onSuccess();
        } catch (err){
            setErrorMsg(err instanceof Error ? err.message: 'Terjadi Kesalahan saat ingin menambahkan produk');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <>
            <div className="flex justify-center">
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-2 rounded-full bg-green-600 px-8 py-3 font-semibold text-white shadow-md transition hover:bg-green-700"
                >
                    <p>+ Tambah Produk</p>
                </button>
            </div>

            <Transition show={isOpen} as={Fragment}>
                <Dialog onClose={handleClose} className="relative z-50">
                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-150"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/40" aria-hidden="true" />
                    </TransitionChild>

                    {/* Container: full screen di mobile, center di desktop */}
                    <div className="fixed inset-0 flex items-end justify-center sm:items-center sm:p-4">
                        <TransitionChild
                            as={Fragment}
                            enter="ease-out duration-250"
                            enterFrom="opacity-0 translate-y-8 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-8 sm:translate-y-0 sm:scale-95"
                        >
                            <DialogPanel className="flex max-h-[92vh] w-full flex-col overflow-y-auto rounded-t-3xl bg-white p-6 sm:max-h-[85vh] sm:max-w-md sm:rounded-3xl">
                                <div className="mb-4 flex items-center justify-between">
                                    <DialogTitle className="text-lg font-semibold text-gray-800">
                                        Tambah Produk
                                    </DialogTitle>
                                    <button
                                        onClick={handleClose}
                                        className="text-gray-400 hover:text-gray-600"
                                    >
                                        <h1>X</h1>
                                    </button>
                                </div>
                                {errorMsg && (
                                        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-3 rounded mb-4 text-sm">
                                            {errorMsg}
                                        </div>
                                    )}

                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Foto produk */}
                                    <div className="flex items-center gap-4">
                                        <label
                                            htmlFor="foto-produk"
                                            className="flex h-36 w-36 shrink-0 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-gray-200"
                                        >
                                            {previewUrl ? (
                                                <Image
                                                    src={previewUrl}
                                                    alt="Preview"
                                                    width={100}
                                                                            height={100}
                                                    className="h-full w-full object-cover"
                                                />
                                            ) : (
                                                <h1>+</h1>
                                            )}
                                        </label>
                                        <input
                                            id="foto-produk"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleFileChange}
                                            className="hidden"
                                        />
                                        <label
                                            htmlFor="foto-produk"
                                            className="cursor-pointer rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-600"
                                        >
                                            Tambahkan Foto
                                        </label>
                                    </div>

                                    {/* Status  */}
                                    <div className="grid grid-cols-2 gap-3">
                                        <Listbox value={status} onChange={setStatus}>
                                            {({ open }) => (
                                            <div className="relative">
                                                <ListboxButton className="flex w-full items-center justify-between rounded-full bg-gray-800 px-4 py-2 text-sm font-medium text-white">
                                                    <span className="truncate">
                                                        {status ?? 'Pilih Status'}
                                                    </span>
                                                    <h1>
                                                         <Image
                                                                           src={open ? "/icons/up_triangle.png" : "/icons/down_triangle.png"}
                                                                            alt="well well well this isn't supposes to happened"
                                                                            width={20}
                                                                            height={20}
                                                                            className="w-4 h-auto object-contain "
                                                                        />

                                                        
                                                    </h1>
                                                </ListboxButton>
                                                   <Transition
                    show={open}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >


                    <ListboxOptions className="absolute z-10 mt-1 w-full rounded-lg bg-slate-300 py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none">
                        {statusOption.map((opt) => (
                            <ListboxOption
                                key={opt}
                                value={opt}
                                className="cursor-pointer px-4 py-2 data-focus:bg-sky-50"
                            >
                                {opt}
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </Transition>
                                                {/* <ListboxOptions className="absolute z-10 mt-1 w-full rounded-lg  bg-slate-300 py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none">
                                                    {statusOption.map((opt) => (
                                                        <ListboxOption
                                                            key={opt}
                                                            value={opt}
                                                            className={({ active }) =>
                                                                `cursor-pointer px-4 py-2 ${active ? 'bg-sky-50' : ''}`
                                                            }
                                                        >
                                                            {opt}
                                                        </ListboxOption>
                                                    ))}
                                                </ListboxOptions> */}
                                            </div>
                                            )}
                                        </Listbox>

                                        {/* <Listbox value={kategori} onChange={setKategori}>
                                            <div className="relative">
                                                <ListboxButton className="flex w-full items-center justify-between rounded-full bg-gray-800 px-4 py-2 text-sm font-medium text-white">
                                                    <span className="truncate">
                                                        {kategori ?? 'Pilih Kategori'}
                                                    </span>
                                                    <h1>Down</h1>
                                                </ListboxButton>
                                                <ListboxOptions className="absolute z-10 mt-1 w-full rounded-lg bg-white py-1 text-sm shadow-lg ring-1 ring-black/5 focus:outline-none">
                                                    {KategoriOption.map((opt) => (
                                                        <ListboxOption
                                                            key={opt}
                                                            value={opt}
                                                            className={({ active }) =>
                                                                `cursor-pointer px-4 py-2 ${active ? 'bg-sky-50' : ''}`
                                                            }
                                                        >
                                                            {opt}
                                                        </ListboxOption>
                                                    ))}
                                                </ListboxOptions>
                                            </div>
                                        </Listbox> */}
                                    </div>

                                    {/* Nama Produk */}
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Nama Produk
                                        </label>
                                        <input
                                            type="text"
                                            name="nama"
                                            value={form.nama}
                                            onChange={handleInputChange}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none"
                                        />
                                    </div>

                                    {/* Deskripsi */}
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Deskripsi produk
                                        </label>
                                        <textarea
                                        name = "deskripsi"
                                            value={form.deskripsi}
                                            onChange={handleInputChange}
                                            rows={3}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none"
                                        />
                                    </div>

                                    {/* Harga */}
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            harga produk
                                        </label>
                                        <input
                                            type="number"
                                            name = "harga"
                                            min= "0"
                                            value={form.harga}
                                            onChange={handleInputChange}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none"
                                        />
                                    </div>

                                    {/* Harga */}
                                    <div>
                                        <label className="mb-1 block text-sm font-medium text-gray-700">
                                            Stok produk
                                        </label>
                                        <input
                                            type="number"
                                            name = "stock"
                                             min= "0"
                                            value={form.stock}
                                            onChange={handleInputChange}
                                            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none"
                                        />
                                    </div>

                                    {errorMsg && <p className="text-sm text-red-600">{errorMsg}</p>}

                                    {/* Tombol Batal & Tambahkan */}
                                    <div className="flex gap-3 pt-2">
                                        <button
                                            type="button"
                                            onClick={handleClose}
                                            disabled={isSubmitting}
                                            className="flex-1 rounded-full bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600 disabled:opacity-50"
                                        >
                                            Batal
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-green-500 py-3 font-semibold text-white transition hover:bg-green-600 disabled:opacity-60"
                                        >
                                            {isSubmitting}
                                            {isSubmitting ? 'Menyimpan...' : 'Tambahkan Produk'}
                                        </button>
                                    </div>
                                </form>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
