import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { decode } from 'punycode';

const JWT_SECRET = process.env.JWT_SECRET || 'waduh';

export interface AuthRequest extends Request {
    admin?: any;
}

export const requireAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.cookies?.admin_session;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized: No session cookie found!',
            });
        }

        const decoded = jwt.verify(token, JWT_SECRET);

        req.admin = decoded;
        next();
    } catch (error) {
        console.error('JWT Verification Failed:', error);
        return res.status(401).json({
            success: false,
            message: 'Unauthorized: Invalid or expired session.',
        });
    }
};
