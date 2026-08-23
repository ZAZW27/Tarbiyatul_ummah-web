import { Prisma } from '@prisma/client';
import { prisma } from '../lib/prisma.js';

export const getMediaItems = async (page: number, limit: number, categories: string[]) => {
    const skip = (page - 1) * limit;

    const categoryFilter: Prisma.ItemWhereInput =
        categories.length > 0
            ? {
                  item_categories: {
                      some: {
                          category: {
                              cat_name: {
                                  in: categories,
                                  mode: 'insensitive' as const,
                              },
                          },
                      },
                  },
              }
            : {};

    return await prisma.item.findMany({
        where: {
            OR: [
                { price: null },
                { stock: 0 }
            ],
            status: 'active',
            ...categoryFilter,
        },
        include: {
            item_categories: {
                include: {
                    category: true,
                },
            },
        },
        orderBy: [{ create_at: 'desc' }],
        take: limit,
        skip: skip,
    });
};