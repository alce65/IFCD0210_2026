import type { JwtPayload } from 'jsonwebtoken';
import type { Role } from '../../generated/prisma/enums.ts';

export interface TokenPayload extends JwtPayload {
    id: number;
    email: string;
    role: Role;
}

export interface LoginResult {
    token: string;
    payload: TokenPayload;
}
