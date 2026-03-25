import * as z from "zod";
import { ZodError } from "zod";

export const EnvSchema = z.object({
  PORT: z.coerce.number(),
  NODE_ENV: z.enum(['dev', 'prod', 'test']),
  DEBUG: z.string().optional()
});

export type Env = z.infer<typeof EnvSchema>

export let env: Env
try {
    env = EnvSchema.parse(process.env) // => throw Error
} catch (error) {
    console.log(error as ZodError)
    process.exit(1)
}



