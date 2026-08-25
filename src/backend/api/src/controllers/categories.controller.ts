import { Request, Response } from 'express';
import { AuthRequest } from '../middleware/auth.middleware.js';
import * as categoriesService from '../services/categories.service.js';
import { validateData } from '../utils/typeValidate.js';

export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await categoriesService.getAllCategories();
        res.status(200).json({ success: true, data: categories });
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

export const createCategory = async (req: AuthRequest, res: Response) => {
    try {
        const { cat_name, cat_type } = req.body;
        const errors: string[] = [];

        errors.push(
            ...validateData(cat_name, 'cat_name', {
                type: 'string',
                required: true,
                minLength: 2,
            }),
        );

        errors.push(
            ...validateData(cat_type, 'cat_type', {
                type: 'string',
                required: true,
            }),
        );

        if (errors.length === 0 && cat_type !== 'media' && cat_type !== 'market') {
            errors.push("cat_type must be either 'media' or 'market'");
        }

        if (errors.length > 0) {
            return res.status(400).json({ success: false, error: errors });
        }

        const newCategory = await categoriesService.createCategoryRecord(
            String(cat_name),
            String(cat_type),
        );
        res.status(201).json({ success: true, data: newCategory });
    } catch (error: any) {
        console.error('Error creating category:', error);

        if (error.code === 'P2002') {
            return res
                .status(400)
                .json({ success: false, error: ['Category name already exists'] });
        }
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

export const deleteCategory = async (req: AuthRequest, res: Response) => {
    try {
        const id = req.params.id;

        const errors = validateData(id, 'id', {
            type: 'number',
            required: true,
            integer: true,
            coerce: true,
        });

        if (errors.length > 0) {
            return res.status(400).json({ success: false, error: errors });
        }

        await categoriesService.deleteCategoryRecord(Number(id));
        res.status(200).json({ success: true, message: 'Category deleted successfully' });
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error or Category currently in use',
        });
    }
};
