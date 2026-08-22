import { prisma } from '../lib/prisma.js';

export const getMarketItems = async () => {
    return await prisma.$queryRaw`SELECT * FROM vw_market_catalog`;
};

export const executePurchase = async (itemId: number, quantity: number) => {
    await prisma.$executeRaw`CALL process_purchase(${itemId}, ${quantity})`;
};
