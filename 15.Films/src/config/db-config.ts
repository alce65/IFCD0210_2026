import { env } from './env.ts';
import debug from 'debug';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client.ts';

const log = debug(`${env.PROJECT_NAME}:configDB`);

log('Loaded database connection...');

export const globalOmit = {
    user: {
        password: true,
    },
} as const;

export type AppPrismaClient = PrismaClient<never, typeof globalOmit>;

export const connectDB = async (): Promise<AppPrismaClient> => {
    const adapter = new PrismaPg({
        user: env.PGUSER,
        password: env.PGPASSWORD,
        host: env.PGHOST,
        port: env.PGPORT,
        database: env.PGDATABASE,
    });
    const prisma = new PrismaClient({
        adapter,
        omit: globalOmit,
    });

    try {
        await prisma.$connect();
        const [info] = (await prisma.$queryRaw`SELECT current_database()`) as {
            current_database: string;
        }[];
        log('Database connection established successfully.');
        log('Connected to database:', info?.current_database);
        prisma.$disconnect();
    } catch (error) {
        log('Error connecting to the database:', error);
        throw error;
    }
    return prisma;
};
