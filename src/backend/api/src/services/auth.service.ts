import bcrypt from 'bcryptjs';
import Jwt from 'jsonwebtoken';
import { prisma } from '../lib/prisma.js';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

if (!JWT_SECRET) {
    throw new Error('JWT Secret is not configured!');
}

export const authenticateUser = async (username: string, passwordString: string) => {
    const user = await prisma.user.findUnique({
        where: { username: String(username) },
    });

    if (!user) throw new Error('Invalid username!');

    const isValidPassword = await bcrypt.compare(passwordString, user.password_hash);
    if (!isValidPassword) throw new Error('Invalid password!');

    await prisma.user.update({
        where: { id: user.id },
        data: { last_login: new Date() },
    });

    const token = Jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
        expiresIn: '3d',
    });

    return token;
};
