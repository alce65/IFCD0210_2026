import { env } from '../../config/env.ts';
import debug from 'debug';
import type { UsersRepo } from '../repos/users.repo.ts';
import type { NextFunction, Request, Response } from 'express';
import type {
    LoginUserData,
    ProfileDTO,
    RegisterUserData,
    User,
    UserUpdateDTO,
} from '../../zod/user.schemas.ts';
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
            log('Registering new user...');
            const userData: RegisterUserData = req.body;
            // Validated previously with zod middleware
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
            log('Logging in user...');
            const loginData: LoginUserData = req.body;
            // Validated previously with zod middleware
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
            }
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

    async getAllUsers(req: Request, res: Response, next: NextFunction) {
        try {
            log('Getting all users...');
            const users: User[] = await this.#repo.getAllUsers();
            return res.json(users);
        } catch (error) {
            log('Error getting all users: %O', error);
            const finalError = new HttpError(
                500,
                'Internal Server Error',
                'Failed to get users',
                {
                    cause: error,
                },
            );
            return next(finalError);
        }
    }

    async getUserById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            // Validated previously with zod middleware
            log('Get User: %O', id);
            const user: User = await this.#repo.getUserById(id);
            return res.json(user);
        } catch (error) {
            log('Error getting user by id: %O', error);
            if (
                error instanceof PrismaClientKnownRequestError &&
                error.code === 'P2025'
            ) {
                const finalError = new HttpError(
                    404,
                    'Not Found',
                    'User not found',
                    {
                        cause: error,
                    },
                );
                return next(finalError);
            }

            const finalError = new HttpError(
                500,
                'Internal Server Error',
                'Failed to get user',
                {
                    cause: error,
                },
            );
            return next(finalError);
        }
    }

    async updateUser(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            // Validated previously with zod middleware
            log('Updating user with ID: %O', id);
            const userData: UserUpdateDTO = req.body;
            // Validated previously with zod middleware
            const user: User = await this.#repo.updateUser(id, userData);
            return res.json(user);
        } catch (error) {
            log('Error updating user: %O', error);
            if (
                error instanceof PrismaClientKnownRequestError &&
                error.code === 'P2025'
            ) {
                const finalError = new HttpError(
                    404,
                    'Not Found',
                    'User not found',
                    {
                        cause: error,
                    },
                );
                return next(finalError);
            }

            const finalError = new HttpError(
                500,
                'Internal Server Error',
                'Failed to update user',
                {
                    cause: error,
                },
            );
            return next(finalError);
        }
    }

    async updateProfileUser(req: Request, res: Response, next: NextFunction) {
        try {
            log('Updating user profile...');
            const id = Number(req.params.id);
            // Validate previously with zod middleware
            const profileData: Partial<ProfileDTO> = req.body; // Validate this data in a real application
            const user: User = await this.#repo.updateUserProfile(
                id,
                profileData,
            );
            return res.json(user);
        } catch (error) {
            log('Error updating user profile: %O', error);
            if (
                error instanceof PrismaClientKnownRequestError &&
                error.code === 'P2025'
            ) {
                const finalError = new HttpError(
                    404,
                    'Not Found',
                    'User not found',
                    {
                        cause: error,
                    },
                );
                return next(finalError);
            }

            const finalError = new HttpError(
                500,
                'Internal Server Error',
                'Failed to update user profile',
                {
                    cause: error,
                },
            );
            return next(finalError);
        }
    }

    async deleteUser(req: Request, res: Response, next: NextFunction) {
        try {
            const id = Number(req.params.id);
            // Validated previously with zod middleware
            log('Deleting user with ID: %O', id);
            await this.#repo.deleteUser(id);
            return res.status(204).end();
        } catch (error) {
            log('Error deleting user: %O', error);
            if (
                error instanceof PrismaClientKnownRequestError &&
                error.code === 'P2025'
            ) {
                const finalError = new HttpError(
                    404,
                    'Not Found',
                    'User not found',
                    {
                        cause: error,
                    },
                );
                return next(finalError);
            }

            const finalError = new HttpError(
                500,
                'Internal Server Error',
                'Failed to delete user',
                {
                    cause: error,
                },
            );
            return next(finalError);
        }
    }
}
