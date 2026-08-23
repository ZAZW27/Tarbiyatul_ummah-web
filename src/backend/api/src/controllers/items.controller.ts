import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.middleware.js'; 
import * as itemsService from '../services/items.service.js';
import { imagekit } from '../lib/imagekit.js';

export const getItemsAdmin = async (req: AuthRequest, res: Response) => {
    try {
        const items = await itemsService.getAllAdminItems();
        res.status(200).json({ success: true, data: items });
    } catch (error) {
        console.error('Error fetching admin items:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

export const getItemById = async (req: AuthRequest, res: Response) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) return res.status(400).json({ success: false, message: 'Invalid ID' });

        const item = await itemsService.getAdminItemById(id);
        if (!item) return res.status(404).json({ success: false, message: 'Item not found' });

        res.status(200).json({ success: true, data: item });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

export const createItem = async (req: AuthRequest, res: Response) => {
    try {
        const { title, description, price, stock, category_ids, status } = req.body;

        if (!title || !req.file) {
            return res
                .status(400)
                .json({ success: false, message: 'Title and image file are required!' });
        }

        const uploadResponse = await imagekit.upload({
            file: req.file.buffer,
            fileName: `panti_${Date.now()}_${req.file.originalname}`,
            folder: '/panti_items',
        });

        let parsedCategoryIds: number[] = [];
        if (category_ids) {
            try {
                parsedCategoryIds =
                    typeof category_ids === 'string' ? JSON.parse(category_ids) : category_ids;
                parsedCategoryIds = parsedCategoryIds.map(Number);
            } catch {
                parsedCategoryIds = [Number(category_ids)].filter(Boolean);
            }
        }

        const newItem = await itemsService.createItemRecord({
            title: String(title),
            description: description ? String(description) : undefined,
            price: price !== undefined && price !== '' ? Number(price) : null,
            stock: stock !== undefined ? Number(stock) : 0,
            category_ids: parsedCategoryIds,
            image_url: uploadResponse.url,
            file_id: uploadResponse.fileId,
            status: status ? String(status) : 'active',
        });

        res.status(201).json({ success: true, data: newItem });
    } catch (error) {
        console.error('Error creating item:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

export const updateItem = async (req: AuthRequest, res: Response) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) return res.status(400).json({ success: false, message: 'Invalid ID' });

        const { title, description, price, stock, category_ids, status } = req.body;
        const updateData: any = {};

        if (title !== undefined) updateData.title = String(title);
        if (description !== undefined) updateData.description = String(description);
        if (price !== undefined)
            updateData.price = price === null || price === '' ? null : Number(price);
        if (stock !== undefined) updateData.stock = Number(stock);
        if (status !== undefined) updateData.status = String(status);

        if (req.file) {
            const uploadResponse = await imagekit.upload({
                file: req.file.buffer,
                fileName: `panti_${Date.now()}_${req.file.originalname}`,
                folder: '/panti_items',
            });
            updateData.image_url = uploadResponse.url;
        }

        let parsedCategoryIds: number[] | undefined = undefined;
        if (category_ids !== undefined) {
            try {
                parsedCategoryIds =
                    typeof category_ids === 'string' ? JSON.parse(category_ids) : category_ids;
                parsedCategoryIds = (parsedCategoryIds as any[]).map(Number);
            } catch {
                parsedCategoryIds = [Number(category_ids)].filter(Boolean);
            }
        }

        const updated = await itemsService.updateItemRecord(id, updateData, parsedCategoryIds);
        res.status(200).json({ success: true, data: updated });
    } catch (error) {
        console.error('Error updating item:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

export const deleteItem = async (req: AuthRequest, res: Response) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) return res.status(400).json({ success: false, message: 'Invalid ID' });

        await itemsService.deleteItemRecord(id);
        res.status(200).json({ success: true, message: 'Item deleted successfully.' });
    } catch (error) {
        console.error('Error deleting item:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error or Not Found' });
    }
};
