import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

// ROUTER IMPORTS
import marketRouter from './routes/market.js';
import mediaRouter from './routes/media.js';
import authRouter from './routes/auth.js';
import itemRouter from './routes/items.js';

const app = express();

// MIDDLEWARE
app.use(
    cors({
        origin: 'http://localhost:3000',
        credentials: true,
    }),
);
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());

app.get('/', (_, res) => {
    res.json({ message: 'API is running and healthy!' });
});

// ROUTES
app.use('/api/market', marketRouter);
app.use('/api/media', mediaRouter);
app.use('/api/items', itemRouter);
app.use('/api/auth', authRouter);

export default app;
