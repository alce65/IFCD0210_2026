import * as z from "zod";

const validTags = ['TS', 'JS', 'Node']

export const NoteSchema = z.object({
    id: z.uuid(),
    content: z.string(),
    owner: z.string().optional(),
    tags: z.array(z.enum(validTags)).optional()
});


export type Note =  z.infer<typeof NoteSchema>
