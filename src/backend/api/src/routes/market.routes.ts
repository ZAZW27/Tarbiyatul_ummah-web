import { Router } from 'express';
import { fetchCatalog, buyItem } from '../controllers/market.controller.js';

const router = Router();

router.get('/', fetchCatalog);
router.post('/purchase', buyItem);
export default router;
