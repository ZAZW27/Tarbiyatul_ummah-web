import express from 'express';
import cors from 'cors';

// Routes imports
import marketRoutes from './routes/market.routes.js';
import mediaRoutes from './routes/media.routes.js';

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
app.use('/api/media', mediaRoutes);

export default app;
