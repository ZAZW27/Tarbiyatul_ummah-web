import { Request, Response } from 'express';
import * as mediaService from '../services/media.service.js';

export const fetchMedia = async (req: Request, res: Response) => {
    try {
        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 10;
        const { category } = req.query;

        const categories = category
            ? String(category)
                  .split(',')
                  .map((c) => c.trim())
                  .filter(Boolean)
            : [];

        const items = await mediaService.getMediaItems(page, limit, categories);

        res.status(200).json({
            success: true,
            page: page,
            limit: limit,
            active_filter: categories,
            data: items,
        });
    } catch (error) {
        console.error('Error fetching medai items:', error);
        res.status(500).json({
            success: false,
            error: 'Internal Server Error :(',
        });
    }
};
