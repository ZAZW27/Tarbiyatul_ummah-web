import { prisma } from '../lib/prisma.js';

export const getAllAdminItems = async () => {
    return await prisma.item.findMany({
        include: {
            item_categories: {
                include: { category: true },
            },
        },
        orderBy: { create_at: 'desc' },
    });
};

export const getAdminItemById = async (id: number) => {
    return await prisma.item.findUnique({
        where: { id },
        include: {
            item_categories: {
                include: { category: true },
            },
        },
    });
};

export const createItemRecord = async (data: {
    title: string;
    description?: string;
    price?: number | null;
    stock?: number;
    category_ids?: number[];
    image_url: string;
    file_id?: string;
    status?: string;
}) => {
    const { category_ids, ...rest } = data;

    return await prisma.item.create({
        data: {
            ...rest,
            item_categories:
                category_ids && category_ids.length > 0
                    ? {
                          create: category_ids.map((catId) => ({
                              category: { connect: { id: catId } },
                          })),
                      }
                    : undefined,
        },
        include: {
            item_categories: { include: { category: true } },
        },
    });
};

export const updateItemRecord = async (id: number, data: any, category_ids?: number[]) => {
    if (category_ids !== undefined) {
        await prisma.itemCategory.deleteMany({ where: { item_id: id } });
        if (category_ids.length > 0) {
            await prisma.itemCategory.createMany({
                data: category_ids.map((catId) => ({ item_id: id, category_id: catId })),
                skipDuplicates: true,
            });
        }
    }

    return await prisma.item.update({
        where: { id },
        data,
        include: {
            item_categories: { include: { category: true } },
        },
    });
};

export const deleteItemRecord = async (id: number) => {
    return await prisma.item.delete({
        where: { id },
    });
};
