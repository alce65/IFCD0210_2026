import { fileURLToPath } from 'node:url';
import { Role } from '../../generated/prisma/client.ts';
import type { RegisterUserData } from '../zod/user.schemas.ts';
import { filmSeed, reviewSeed, userSeed } from './db.seed.ts';


const FILMS = [
  {
    "title": "The Shawshank Redemption",
    "year": 1994,
    "director": "Frank Darabont",
    "duration": 142,
    "rate": 9.3,
    "poster": "https://www.imdb.com/title/tt0111161/",
    "genres": [
        "Drama",
        "Crime"
    ]
  },
  {
    "title": "The Godfather",
    "year": 1972,
    "director": "Francis Ford Coppola",
    "duration": 175,
    "rate": 9.2,
    "poster": "https://www.imdb.com/title/tt0068646/",
    "genres": [
        "Drama",
        "Crime"
    ]
  },
  {
    "title": "The Dark Knight",
    "year": 2008,
    "director": "Christopher Nolan",
    "duration": 152,
    "rate": 9.0,
    "poster": "https://www.imdb.com/title/tt0468569/",
    "genres": [
        "Action",
        "Crime",
        "Drama"
    ]
  },
];

const GENRES = [
  { "name": "Action" },
  { "name": "Drama" },
  { "name": "Crime" },
];


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
