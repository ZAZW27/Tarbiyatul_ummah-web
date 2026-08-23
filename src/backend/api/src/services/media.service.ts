import { Prisma } from '@prisma/client';
import { prisma } from '../lib/prisma.js';

export const getMediaItems = async (page: number, limit: number, categories: string[]) => {
    const skip = (page - 1) * limit;

    const categoryFilter: Prisma.ItemWhereInput =
        categories.length > 0
            ? {
                  OR: categories.map((cat) => ({
                      category: {
                          cat_name: {
                              contains: cat,
                              mode: 'insensitive' as const, 
                          },
                      },
                  })),
              }
            : {};

    return await prisma.item.findMany({
        where: {
            price: null,
            status: 'active',
            ...categoryFilter,
        },
        include: {
            category: true,
        },
        orderBy: [{ create_at: 'desc' }], // Matches your schema exactly (create_at)
        take: limit,
        skip: skip,
    });
};
