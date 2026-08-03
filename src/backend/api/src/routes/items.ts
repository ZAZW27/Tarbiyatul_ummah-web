import { Router, Response } from 'express';
import multer from 'multer';
import { prisma } from '../db.js';
import { requireAdmin, AuthRequest } from '../middleware/auth.js';
import { imagekit } from '../lib/imagekit.js';

const router = Router();

// Lock down all routes in this file
router.use(requireAdmin);

const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

// POST /api/items - Create New Item
router.post('/', upload.single('image'), async (req: AuthRequest, res: Response) => {
    try {
        const { title, description, price, category } = req.body;

        // Validation
        const missingFields = [];
        if (!title) missingFields.push('title');
        if (!description) missingFields.push('deskripsi');
        if (!req.file) missingFields.push('File gambar');
        if (missingFields.length > 0) {
            return res.status(400).json({
                success: false,
                message: `${missingFields.join(', ')} harus terisi!`,
            });
        }

        // 1. Upload to ImageKit
        const uploadResponse = await imagekit.upload({
            file: req.file!.buffer,
            fileName: `lksa_${Date.now()}_${req.file!.originalname}`,
            folder: '/lksa_items',
        });

        // 2. Parse price (null for Media gallery, number for Market)
        const parsedPrice = price && !isNaN(Number(price)) ? Number(price) : null;

        // 3. Save to Neon Postgres
        const newItem = await prisma.item.create({
            data: {
                title: String(title),
                description: String(description),
                image_url: uploadResponse.url,
                file_id: uploadResponse.fileId,
                price: parsedPrice,
                status: 'active',
                category: category ? String(category) : null,
            },
        });

        return res.status(201).json({
            success: true,
            data: newItem,
        });
    } catch (error) {
        console.error('Error creating item:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

// PUT /api/items/:id - Update Item Details
router.put('/:id', upload.single('image'), async (req: AuthRequest, res: Response) => {
    try {
        const itemId = Number(req.params.id);
        const { title, description, price, status, category } = req.body;

        if (isNaN(itemId)) {
            return res.status(400).json({ success: false, message: 'Invalid item ID.' });
        }

        const updateData: any = {};
        if (title !== undefined) updateData.title = String(title);
        if (description !== undefined) updateData.description = String(description);

        if (price !== undefined) {
            updateData.price =
                price === 'null' || price === null || price === '' ? null : Number(price);
        }

        if (status !== undefined) updateData.status = String(status);
        if (category !== undefined) updateData.category = String(category);

        if (req.file) {
            const oldItem = await prisma.item.findUnique({ where: { id: itemId } });

            const uploadResponse = await imagekit.upload({
                file: req.file.buffer,
                fileName: `lksa_${Date.now()}_${req.file.originalname}`,
                folder: '/lksa_items',
            });

            updateData.image_url = uploadResponse.url;
            updateData.file_id = uploadResponse.fileId;

            if (oldItem && oldItem.file_id) {
                try {
                    await imagekit.deleteFile(oldItem.file_id);
                } catch (ikError) {
                    console.warn(`Failed to delete old ImageKit file ${oldItem.file_id}:`, ikError);
                }
            }
        }

        if (Object.keys(updateData).length === 0) {
            return res.status(400).json({ success: false, message: 'No data provided to update.' });
        }

        const updatedItem = await prisma.item.update({
            where: { id: itemId },
            data: updateData,
        });

        return res.status(200).json({
            success: true,
            data: updatedItem,
        });
    } catch (error) {
        console.error('Error updating item:', error);
        return res
            .status(500)
            .json({ success: false, message: 'Internal Server Error or Item Not Found' });
    }
});

// DELETE /api/items/:id - Delete Item & Image
router.delete('/:id', async (req: AuthRequest, res: Response) => {
    try {
        const itemId = Number(req.params.id);

        if (isNaN(itemId)) {
            return res.status(400).json({ success: false, message: 'Invalid item ID.' });
        }

        const item = await prisma.item.findUnique({
            where: { id: itemId },
        });

        if (!item) {
            return res.status(404).json({ success: false, message: 'Item not found.' });
        }

        // Delete from ImageKit if file_id exists
        if (item.file_id) {
            try {
                await imagekit.deleteFile(item.file_id);
            } catch (ikError) {
                console.warn(`Failed to delete ImageKit file ${item.file_id}:`, ikError);
            }
        }

        // Delete from Postgres
        await prisma.item.delete({
            where: { id: itemId },
        });

        return res.status(200).json({
            success: true,
            message: 'Item and ImageKit asset deleted successfully.',
        });
    } catch (error) {
        console.error('Error deleting item:', error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

export default router;
