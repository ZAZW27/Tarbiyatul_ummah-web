import { prisma } from '../lib/prisma.js';

export const getMarketItems = async (
    page: number = 1,
    limit: number = 10,
    categories: string[] = [],
) => {
    const skip = (page - 1) * limit;

    const categoryFilter =
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
            price: { not: null },
            stock: { gt: 0 },
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

export const executePurchase = async (itemId: number, quantity: number) => {
    await prisma.$executeRaw`CALL process_purchase(${itemId}, ${quantity})`;
};
