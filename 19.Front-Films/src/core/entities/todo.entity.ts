import { z } from 'zod';

export const TodoModelSchema = z.object({
    id: z.string(),
    title: z.string().trim().min(1),
    completed: z.boolean(),
    createdAt: z.string(),
});

export type Todo = z.infer<typeof TodoModelSchema>;
