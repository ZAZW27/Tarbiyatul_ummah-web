import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
    user?: any;
    file?: any;
}

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

export const requireAdmin = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.cookies?.admin_session;

    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized: No session token' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res
            .status(401)
            .json({ success: false, message: 'Unauthorized: Invalid or expired token' });
    }
};
