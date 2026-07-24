import { Router, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import Jwt from 'jsonwebtoken';
import { prisma } from '../db.js';
import 'dotenv/config';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

router.post('/login', async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({
                seccess: false,
                message: 'Username and password are required!',
            });
        }

        // Check username
        const fetchUser = await prisma.admin.findUnique({
            where: { username: String(username) },
        });

        if (!fetchUser) {
            return res.status(401).json({
                success: false,
                message: 'Invalid username!',
            });
        }

        // Check if password is correct / the same
        const isValidPassowrd = await bcrypt.compare(password, fetchUser.password_hash);

        if (!isValidPassowrd) {
            return res.status(401).json({
                success: false,
                message: 'Invalid password!',
            });
        }

        // Update activity log
        await prisma.admin.update({
            where: { id: fetchUser.id },
            data: { last_login: new Date() },
        });

        // Create active session token
        const token = Jwt.sign({ id: fetchUser.id, username: fetchUser.username }, JWT_SECRET, {
            expiresIn: '3d',
        });

        res.cookie('admin_session', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 3 * 24 * 60 * 60 * 1000, // 3 days limit
        });

        return res.status(200).json({
            success: true,
            message: 'Login successful!',
        });
    } catch (error) {
        console.error('Login Error:', error);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
});

router.post('/logout', (req: Request, res: Response) => {
    res.clearCookie('admin_session', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
    });

    return res.status(200).json({
        success: true,
        message: 'Logged out successfully!',
    });
});

import { requireAdmin, AuthRequest } from '../middleware/auth.js';
router.get('/me', requireAdmin, (req: AuthRequest, res) => {
    res.json({
        success: true,
        message: 'You have passed the gatekeeper!',
        admin_data: req.admin,
    });
});

export default router;
