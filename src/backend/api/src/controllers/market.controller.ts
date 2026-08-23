import { Request, Response } from 'express';
import { validateData } from '../utils/typeValidate.js';
import * as marketService from '../services/market.service.js';

export const fetchCatalog = async (req: Request, res: Response) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const { category } = req.query;

        let categories: string[] = [];
        if (category) {
            if (Array.isArray(category)) {
                categories = category.map((c) => String(c).trim()).filter(Boolean);
            } else {
                categories = String(category)
                    .split(',')
                    .map((c) => c.trim())
                    .filter(Boolean);
            }
        }

        const items = await marketService.getMarketItems(page, limit, categories);

        res.status(200).json({
            success: true,
            page: page,
            limit: limit,
            active_filter: categories,
            data: items,
        });
    } catch (error) {
        console.error('Error fetching market items:', error);
        res.status(500).json({ error: 'Failed to fetch market items' });
    }
};

export const buyItem = async (req: Request, res: Response) => {
    try {
        const { itemId, quantity } = req.body;

        const errors: string[] = [];

        errors.push(
            ...validateData(quantity, 'quantity', {
                required: true,
                type: 'number',
                integer: true,
                min: 1,
            }),
        );

        errors.push(
            ...validateData(itemId, 'itemId', {
                required: true,
                type: 'number',
                integer: true,
                min: 1,
            }),
        );

        if (errors.length > 0) {
            return res.status(400).json({
                error: errors,
            });
        }

        await marketService.executePurchase(Number(itemId), Number(quantity));
        res.status(200).json({ message: 'Purchase completed successfully!' });
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        } else {
            res.status(400).json({ error: 'Purchase failed' });
        }
    }
};
