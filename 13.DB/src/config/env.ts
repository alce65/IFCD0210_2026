import * as z from 'zod';
import { ZodError } from 'zod';

export const EnvSchema = z.object({
    NODE_ENV: z.enum(['dev', 'prod', 'test']),
    PROJECT_NAME: z.string(),
    DEBUG: z.string().optional(),
    PGUSER: z.string(),
    PGPASSWORD: z.string(),
    PGHOST: z.string(),
    PGPORT: z.coerce.number(),
    PGDATABASE: z.string(),
    SQLITE_FILE: z.string()
});

export type Env = z.infer<typeof EnvSchema>;

export let env: Env;
try {
    env = EnvSchema.parse(process.env); // => throw Error
} catch (error) {
    console.log(error as ZodError);
    process.exit(1);
}
