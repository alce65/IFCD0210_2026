import { env } from './env.ts';
import debug from 'debug';
import { connectDB } from './db-config.ts';
import { Role } from '../../generated/prisma/client.ts';
import type { RegisterUserData } from '../zod/user.schemas.ts';
import FILMS from '../../data/films.json' with { type: 'json' };
import GENRES from '../../data/genres.json' with { type: 'json' };
import { AuthService } from '../services/auth.ts';
import { fileURLToPath } from 'node:url';
import type { FilmCreateDTO, GenreCreateDTO } from '../zod/film.schemas.ts';

const log = debug(`${env.PROJECT_NAME}:configDB`);

log('Loaded database connection...');


const USERS: RegisterUserData[] = [
    {
        email: 'erni@sample.com',
        password: '123456',
        role: Role.ADMIN,
        profile: {
            firstName: 'Ernestina',
            surname: 'Ada',
            avatar: '/avatars/admin.png',
        },
    },
    {
        email: 'pepe@sample.com',
        password: '123456',
        role: Role.EDITOR,
        profile: {
            firstName: 'Pepe',
            surname: 'Pérez',
            avatar: '/avatars/editor.png',
        },
    },
    {
        email: 'ursula@sample.com',
        password: '123456',
        role: Role.USER,
        profile: {
            firstName: 'Ursula',
            surname: 'Martín',
            avatar: '/avatars/user.png',
        },
    },
];

export const filmSeed = async (films: FilmCreateDTO[], genres: GenreCreateDTO[]) => {
    const prisma = await connectDB();
    log('Seeding to database...');

    await prisma.review.deleteMany();
    await prisma.film.deleteMany();
    await prisma.genre.deleteMany();

    await prisma.genre.createMany({
        data: genres,
    });

    for (const film of films) {
        await prisma.film.create({
            data: {
                title: film.title,
                year: film.year,
                director: film.director,
                duration: film.duration,
                rate: film.rate,
                poster: film.poster,
                genres: {
                    connect: film.genres.map((genre) => ({ name: genre })),
                },
            },
        });
    }
};

export const userSeed = async (users: RegisterUserData[]) => {
    const prisma = await connectDB();
    log('Seeding users to database...');

    await prisma.review.deleteMany();
    await prisma.profile.deleteMany();
    await prisma.user.deleteMany();

    for (const user of users) {
        const hashedPassword = await AuthService.hash(user.password);

        await prisma.user.create({
            data: {
                email: user.email,
                password: hashedPassword,
                role: user.role,
                profile: {
                    create: user.profile,
                },
            },
        });
    }
};

export const reviewSeed = async () => {
    const prisma = await connectDB();
    log('Seeding reviews to database...');

    await prisma.review.deleteMany();

    const users = await prisma.user.findMany();
    const films = await prisma.film.findMany();

    for (const user of users) {
        for (const film of films.slice(0, 3)) {
            // Limit to 3 reviews per user for demo purposes
            await prisma.review.create({
                data: {
                    rate: Math.floor(Math.random() * 5) + 1,
                    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    user: {
                        connect: { id: user.id },
                    },
                    film: {
                        connect: { id: film.id },
                    },
                },
            });
        }
    }
};

export const seed = async () => {
    await filmSeed(FILMS, GENRES);
    await userSeed(USERS);
    await reviewSeed();
};


// Run seed if this file is executed directly
const currentFilePath = fileURLToPath(import.meta.url);
const processFilePath = process.argv[1];

if (currentFilePath === processFilePath) {
    console.log('Starting seed');
    seed()
        .then(() => {
            console.log('Seed completed successfully.');
            process.exit(0);
        })
        .catch((error) => {
            console.error('Error seeding the database:', error);
            process.exit(1);
        });
}
