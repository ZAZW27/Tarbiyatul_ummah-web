import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Routes imports
import marketRoutes from './routes/market.routes.js';
import mediaRoutes from './routes/media.routes.js';
import itemRoutes from './routes/items.routes.js';

import { login, logout } from './controllers/auth.controller.js';

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    }),
);

// Auth routes
app.post('/api/auth/login', login);
app.post('/api/auth/logout', logout);
// Mount Routes
app.use('/api/market', marketRoutes);
app.use('/api/media', mediaRoutes);
app.use('/api/items', itemRoutes);

export default app;
