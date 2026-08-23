import { Request, Response } from 'express';
import { validateData } from '../utils/typeValidate.js';

import * as marketService from '../services/market.service.js';
import { error } from 'console';

export const fetchCatalog = async (req: Request, res: Response) => {
    try {
        const items = await marketService.getMarketItems();
        res.status(200).json(items);
    } catch (error) {
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
