import type { PrismaClient } from '../../generated/prisma/client.ts';
import type {
    ProfileCreateWithoutUserInput,
    UserCreateInput,
    UserCreateWithoutProfileInput,
    UserCreateWithoutReviewsInput,
} from '../../generated/prisma/models.ts';
import { env } from '../config/env.ts';
import debug from 'debug';
import { AuthService } from '../services/auth.ts';

const log = debug(`${env.PROJECT_NAME}:repo:users`);
log('Loading users repo...');

interface RegisterUserData {
  email: UserCreateInput['email'];
  password: UserCreateInput['password'];
  profile: ProfileCreateWithoutUserInput;
}


export class UsersRepo {
    #prisma: PrismaClient;
    constructor(prisma: PrismaClient) {
        this.#prisma = prisma;
    }

    async register(userData: RegisterUserData) {
        console.log(userData);
        userData.password = await AuthService.hash(userData.password);
        const result = await this.#prisma.user.create({
            data: {
                email: userData.email,
                password: userData.password,
                profile: {
                    create: userData.profile,
                },
            },
            include: {
                profile: true,
            },
            omit: {
                password: true,
            },
        });

        return result;
    }

    async login(
        userData: UserCreateWithoutProfileInput & UserCreateWithoutReviewsInput,
    ) {
        const loginError = new Error('Invalid login')

        const result = await this.#prisma.user.findUnique({
            where: {
                email: userData.email,
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
