import { Router } from 'express';
import { fetchCatalog, buyItem } from '../controllers/market.controller.js';
import { requireAdmin } from '../middleware/auth.middleware.js';

const router = Router();

router.get('/', fetchCatalog);
router.post('/purchase', requireAdmin, buyItem);
export default router;
