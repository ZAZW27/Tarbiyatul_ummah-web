import { Router } from 'express';
import { prisma } from '../db.js';
import { constrainedMemory } from 'process';

const router = Router();

router.get('/', async (req, res) => {
    try {
        // Pagination
        const page = Number(req.query.page) || 1;
        const limit = 10;
        const skip = (page - 1) * limit;

        // Filter system
        const { category } = req.query;
        const categories = category
            ? String(category)
                  .split(',')
                  .map((c) => c.trim())
            : [];

        const categoryFilter =
            categories.length > 0
                ? {
                      OR: categories.map((cat) => ({
                          category: {
                              contains: cat,
                          },
                      })),
                  }
                : {};

        // Fetching items
        const items = await prisma.item.findMany({
            where: {
                price: null,
                ...categoryFilter,
            },
            orderBy: [{ status: 'asc' }, { created_at: 'desc' }],
            take: limit,
            skip: skip,
        });

        res.json({
            succeed: true,
            page: page,
            limit: limit,
            active_filter: categories,
            data: items,
        });
    } catch (error) {
        console.error('Error fetching medie items:', error);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error :(',
        });
    }
});

export default router;
