import { Request, Response } from 'express';
import * as authService from '../services/auth.service.js';
import { validateData } from '../utils/typeValidate.js';

export const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;

        const errors: string[] = [];

        errors.push(
            ...validateData(username, 'username', {
                required: true,
                type: 'string',
                minLength: 3,
            }),
        );

        errors.push(
            ...validateData(password, 'password', {
                required: true,
                type: 'string',
                minLength: 12,
            }),
        );

        if (errors.length > 0) {
            return res.status(400).json({
                error: errors,
            });
        }

        const token = await authService.authenticateUser(username, password);

        res.cookie('admin_session', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({ success: true, message: 'Login successul!' });
    } catch (error: any) {
        res.status(401).json({ error: error.message || 'Authentication Failed' });
    }
};

export const logout = (req: Request, res: Response) => {
    res.clearCookie('admin_session', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
    });

    res.status(200).json({ success: true, message: 'Logged out successfully!' });
};
