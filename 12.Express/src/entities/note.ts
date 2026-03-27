import * as z from 'zod';

const validTags = ['TS', 'JS', 'Node'];

export type ValidTags = 'TS' | 'JS' | 'Node';

export const NoteSchema = z.object({
    id: z.uuid(),
    content: z.string(),
    owner: z.string().optional(),
    tags: z.array(z.enum(validTags)).optional(),
});

export const NoteSchemaDTO = NoteSchema.omit({
    id: true
})

export type Note = z.infer<typeof NoteSchema>;

// export type NoteDTO = Omit<Note, 'id'>;

export type NoteDTO = z.infer<typeof NoteSchemaDTO>;

export type NoteUpdateDTO = Partial<NoteDTO>;
