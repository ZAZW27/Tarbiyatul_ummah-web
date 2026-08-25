import { prisma } from '../lib/prisma.js';

export const getAllCategories = async () => {
    return await prisma.category.findMany({
        orderBy: { cat_name: 'asc' },
    });
};

export const createCategoryRecord = async (cat_name: string, cat_type: string) => {
    return await prisma.category.create({
        data: {
            cat_name,
            cat_type,
        },
    });
};

export const deleteCategoryRecord = async (id: number) => {
    return await prisma.category.delete({
        where: { id },
    });
};
