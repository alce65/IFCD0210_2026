import * as z from "zod";
import { ZodError } from "zod";
import debug from 'debug';

export const EnvSchema = z.object({
    PORT: z.coerce.number(),
    NODE_ENV: z.enum(['dev', 'prod', 'test']),
    DEBUG: z.string().optional(),
    PROJECT_NAME: z.string(),
});

export type Env = z.infer<typeof EnvSchema>
export let env: Env

try {
    env = EnvSchema.parse(process.env);
    const log = debug(`${env.PROJECT_NAME}:env`);
    log("Loading environment variables.");
} catch (error) {
    console.log(error as ZodError)
    process.exit(1)
}
