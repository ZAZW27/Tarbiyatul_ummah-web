import { Router } from 'express';
import { fetchMedia } from '../controllers/media.controller.js';

const router = Router();

router.get('/', fetchMedia);

export default router;
