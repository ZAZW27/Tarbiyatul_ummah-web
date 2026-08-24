import { Router } from 'express';
import { requireAdmin } from '../middleware/auth.middleware.js';
import * as categoriesController from '../controllers/categories.controller.js';

const router = Router();

router.get('/', categoriesController.getCategories);

router.post('/', requireAdmin, categoriesController.createCategory);
router.delete('/:id', requireAdmin, categoriesController.deleteCategory);

export default router;
