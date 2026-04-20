import { env } from "../.././config/env.ts";
import debug from 'debug';
import z from 'zod';

const log = debug(`${env.PROJECT_NAME}:entity:animal`);
log('Loaded module');


export const AnimalSchema = z.object({
    id: z.string(),
    name: z.string().nonempty(),
    englishName: z.string().nonempty(),
    sciName: z.string().nonempty(),
    group: z.string().nonempty(),
    image: z.url(),
    diet: z.string(),
    lifestyle: z.enum(['Diurno', 'Nocturno']),
    location: z.string(),
    slogan: z.string(),
});

// extract the inferred type
export type Animal = z.infer<typeof AnimalSchema>;

export const AnimalCreateSchema = AnimalSchema.omit({ id: true });
export const AnimalUpdateSchema = AnimalSchema.partial().omit({ id: true });

export type AnimalCreateDTO = z.infer<typeof AnimalCreateSchema>;
export type AnimalUpdateDTO = z.infer<typeof AnimalUpdateSchema>;
