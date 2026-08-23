import { Router } from 'express';
import multer from 'multer';
import { requireAdmin } from '../middleware/auth.middleware.js';
import * as itemsController from '../controllers/items.controller.js';

const router = Router();
const upload = multer({
    storage: multer.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

router.use(requireAdmin);

router.get('/', itemsController.getItemsAdmin);
router.get('/:id', itemsController.getItemById);
router.post('/', upload.single('image'), itemsController.createItem);
router.put('/:id', upload.single('image'), itemsController.updateItem);
router.delete('/:id', itemsController.deleteItem);

export default router;
