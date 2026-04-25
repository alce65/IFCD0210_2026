
import { env } from '../config/env.ts';
import debug from 'debug';
import { AuthService } from '../services/auth.ts';
import type { AppPrismaClient } from '../config/db-config.ts';
import type { LoginUserData, RegisterUserData } from '../zod/user.schemas.ts';

const log = debug(`${env.PROJECT_NAME}:repo:users`);
log('Loading users repo...');

export class UsersRepo {
    #prisma: AppPrismaClient;
    constructor(prisma: AppPrismaClient) {
        this.#prisma = prisma;
    }

    async register(userData: RegisterUserData) {
        console.log(userData);
        const hashedPassword = await AuthService.hash(userData.password);
        const result = await this.#prisma.user.create({
            data: {
                email: userData.email,
                password: hashedPassword,
                profile: {
                    create: userData.profile,
                },
            },
            include: {
                profile: true,
            },
            // omit: {
            //     password: true,
            // },
        });

        return result;
    }

    async login(userData: LoginUserData) {
        const loginError = new Error('Invalid login')

        const result = await this.#prisma.user.findUnique({
            where: {
                email: userData.email,
            },
            omit: {
                password: false,
            },
        });

        if (result === null) {
            throw loginError;
        }

        // userData.password -> desencriptada
        // result.password -> encriptado

        const isValid = await AuthService.compare(
            userData.password,
            result.password,
        );

        if (!isValid ) {
            throw loginError;
        }

        return {
            id: result.id, email: result.email
        }
    }
}
