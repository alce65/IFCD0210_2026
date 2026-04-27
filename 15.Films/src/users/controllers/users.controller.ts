import { env } from '../../config/env.ts';
import debug from 'debug';
import type { UsersRepo } from '../repos/users.repo.ts';
import type { NextFunction, Request, Response } from 'express';
import type { RegisterUserData, User } from '../../zod/user.schemas.ts';
import { HttpError } from '../../errors/http-error.ts';
import type { LoginResult } from '../../types/login.ts';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';

const log = debug(`${env.PROJECT_NAME}:controller:users`);
log('Loading users controller...');

export class UsersController {
    #repo: UsersRepo;
    constructor(repo: UsersRepo) {
        this.#repo = repo;
    }


    async register(req: Request, res: Response, next: NextFunction) {
        try {
            const userData: RegisterUserData = req.body; // Validate this data in a real application
            const user: User = await this.#repo.register(userData);
            return res.status(201).json(user);
        } catch (error) {
            log('Error registering user: %O', error);
            const finalError = new HttpError(
                500,
                'Internal Server Error',
                'Failed to register user',
                {
                    cause: error,
                },
            );
            return next(finalError);
        }
    }
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const loginData = req.body; // Validate this data in a real application
            const loginResult: LoginResult = await this.#repo.login(loginData);
            return res.json(loginResult);
        } catch (error) {
            log('Error logging in user: %O', error);
            if (error instanceof PrismaClientKnownRequestError) {
                const finalError = new HttpError(
                    401,
                    'Unauthorized',
                    'Invalid email or password',
                    {
                        cause: error,
                    },
                );
                return next(finalError);
            } else {
                const finalError = new HttpError(
                    500,
                    'Internal Server Error',
                    'Failed to login user',
                    {
                        cause: error,
                    },
                );
                return next(finalError);
            }
        }
    }

    // async getProfile(req: Request, res: Response) { ... }
    // async updateProfile(req: Request, res: Response) { ... }
}
