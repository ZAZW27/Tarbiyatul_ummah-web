import { Router } from 'express';
import { prisma } from '../db.js';

const router = Router();

// GET /api/market
router.get('/', async (req, res) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = 10;
        const skip = (page - 1) * limit;

        const { category } = req.query;

        const items = await prisma.item.findMany({
            where: {
                price: {
                    not: null,
                },
                ...(category ? { category: String(category) } : {}),
            },
            orderBy: [{ status: 'asc' }, { created_at: 'desc' }],

            take: limit,
            skip: skip,
        });

        res.json({
            succeed: true,
            page: page,
            limit: limit,
            data: items,
        });
    } catch (error) {
        console.error('Error fethcing market items:', error);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error',
        });
    }
});

export default router;
