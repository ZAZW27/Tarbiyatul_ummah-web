import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

// ROUTER IMPORTS
import marketRouter from './routes/market.js';

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (_, res) => {
    res.json({ message: 'API is running and healthy!' });
});

app.use('/api/market', marketRouter);

export default app;
