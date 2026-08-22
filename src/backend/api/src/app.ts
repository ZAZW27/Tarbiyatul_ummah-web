import express from 'express';
import cors from 'cors';
import marketRoutes from './routes/market.routes.js';

const app = express();

// Middleware
app.use(express.json());
app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true,
    }),
);

// Mount Routes
app.use('/api/market', marketRoutes);

export default app;
