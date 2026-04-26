import { Decimal } from '@prisma/client/runtime/client';
import { z } from 'zod';
import type {
    FilmCreateInput,
    FilmModel,
    GenreCreateInput,
    GenreModel,
    ReviewModel,
    ReviewUncheckedCreateInput,
    ReviewUserIDFilmIDCompoundUniqueInput,
} from '../../generated/prisma/models.ts';

const isSingleDecimal = (value: number): boolean => Number.isInteger(value * 10);

export const FilmRateDTOSchema = z.coerce
    .number()
    .min(0)
    .max(9.9)
    .refine(isSingleDecimal, {
        message: 'rate debe tener como maximo un decimal',
    });

export const ReviewRateDTOSchema = z.coerce
    .number()
    .min(0)
    .max(10)
    .refine(isSingleDecimal, {
        message: 'rate debe tener como maximo un decimal',
    });

export const ReviewModelSchema = z.object({
    review: z.string(),
    rate: z.instanceof(Decimal),
    date: z.date(),
    userID: z.number(),
    filmID: z.number(),
});

export const GenreModelSchema = z.object({
    id: z.number(),
    name: z.string(),
});

export const FilmModelSchema = z.object({
    id: z.number(),
    title: z.string(),
    year: z.number(),
    director: z.string(),
    duration: z.number(),
    poster: z.string().nullable(),
    rate: z.instanceof(Decimal),
    genres: z.array(GenreModelSchema).optional(),
    reviews: z.array(ReviewModelSchema).optional(),
});

export const GenreCreateDTOSchema = z.object({
    name: z.string().trim().min(1).max(60),
});

export const GenreUpdateDTOSchema = GenreCreateDTOSchema.partial();

export const FilmCreateDTOSchema = z.object({
    title: z.string().trim().min(1).max(255),
    year: z.coerce.number().int(),
    director: z.string().trim().min(1).max(255),
    duration: z.coerce.number().int().positive(),
    poster: z.string().trim().min(1).nullish(),
    rate: FilmRateDTOSchema,
    genres: z
        .array(z.string().trim().min(1))
        .min(1)
        .refine((genres) => new Set(genres).size === genres.length, {
            message: 'genres no debe contener repetidos',
        }),
});

export const FilmUpdateDTOSchema = FilmCreateDTOSchema.partial();

export const FilmParamsSchema = z.object({
    id: z.coerce.number().int().positive(),
});

export const FilmQuerySchema = z.object({
    title: z.string().trim().min(1).optional(),
    year: z.coerce.number().int().optional(),
    director: z.string().trim().min(1).optional(),
    genre: z.string().trim().min(1).optional(),
    minRate: FilmRateDTOSchema.optional(),
    maxRate: FilmRateDTOSchema.optional(),
    page: z.coerce.number().int().positive().optional(),
    limit: z.coerce.number().int().positive().max(100).optional(),
    sortBy: z
        .enum(['id', 'title', 'year', 'director', 'duration', 'rate'])
        .optional(),
    order: z.enum(['asc', 'desc']).optional(),
});

export const ReviewCreateDTOSchema = z.object({
    review: z.string().trim().min(1),
    rate: ReviewRateDTOSchema,
    userID: z.coerce.number().int().positive(),
    filmID: z.coerce.number().int().positive(),
});

export const ReviewUpdateDTOSchema = z.object({
    review: z.string().trim().min(1).optional(),
    rate: ReviewRateDTOSchema.optional(),
});

export const ReviewParamsSchema = z.object({
    userID: z.coerce.number().int().positive(),
    filmID: z.coerce.number().int().positive(),
});

// Desde Prisma podemos obtener los tipos correspondientes
// - al modelo de datos (e.g. FilmModel o GenreModel)
// - a los datos que Prisma acepta en una operación (e.g. FilmCreateInput)

// A partir de ellos definimos shapes para expresar el contrato estructural
// de las operaciones de la aplicación con DTOs más planos y cómodos para HTTP.

type GenreModelShape = GenreModel;

type FilmModelShape = FilmModel & {
    genres?: GenreModel[];
    reviews?: ReviewModel[];
};

type ReviewModelShape = ReviewModel;

type GenreCreateShape = Pick<GenreCreateInput, 'name'>;

type GenreUpdateShape = Partial<GenreCreateShape>;

type FilmCreateShape = Pick<
    FilmCreateInput,
    'title' | 'year' | 'director' | 'duration'
> & {
    poster?: string | null;
    rate: number;
    genres: string[];
};

type FilmUpdateShape = Partial<FilmCreateShape>;

interface FilmParamsShape {
    id: number;
}

interface FilmQueryShape {
    title?: string;
    year?: number;
    director?: string;
    genre?: string;
    minRate?: number;
    maxRate?: number;
    page?: number;
    limit?: number;
    sortBy?: 'id' | 'title' | 'year' | 'director' | 'duration' | 'rate';
    order?: 'asc' | 'desc';
}

type ReviewCreateShape = Pick<
    ReviewUncheckedCreateInput,
    'review' | 'userID' | 'filmID'
> & {
    rate: number;
};

type ReviewUpdateShape = Partial<Pick<ReviewCreateShape, 'review' | 'rate'>>;

type ReviewParamsShape = ReviewUserIDFilmIDCompoundUniqueInput;

// Herramientas para comprobar la compatibilidad de tipos entre Zod y Prisma
type Assert<T extends true> = T;

type IsExact<A, B> = [A] extends [B]
    ? [B] extends [A]
        ? [Exclude<keyof A, keyof B>, Exclude<keyof B, keyof A>] extends [
              never,
              never,
          ]
            ? true
            : false
        : false
    : false;

// Tipos que exportaríamos normalmente,
// contrastados con los tipos de Prisma para garantizar compatibilidad

export type Genre = z.infer<typeof GenreModelSchema>;
export type _GenreCheck = Assert<IsExact<Genre, GenreModelShape>>;

export type Film = z.infer<typeof FilmModelSchema>;
export type _FilmCheck = Assert<IsExact<Film, FilmModelShape>>;

export type Review = z.infer<typeof ReviewModelSchema>;
export type _ReviewCheck = Assert<IsExact<Review, ReviewModelShape>>;

export type GenreCreateDTO = z.infer<typeof GenreCreateDTOSchema>;
export type _GenreCreateDTOCheck = Assert<
    IsExact<GenreCreateDTO, GenreCreateShape>
>;

export type GenreUpdateDTO = z.infer<typeof GenreUpdateDTOSchema>;
export type _GenreUpdateDTOCheck = Assert<
    IsExact<GenreUpdateDTO, GenreUpdateShape>
>;

export type FilmCreateDTO = z.infer<typeof FilmCreateDTOSchema>;
export type _FilmCreateDTOCheck = Assert<
    IsExact<FilmCreateDTO, FilmCreateShape>
>;

export type FilmUpdateDTO = z.infer<typeof FilmUpdateDTOSchema>;
export type _FilmUpdateDTOCheck = Assert<
    IsExact<FilmUpdateDTO, FilmUpdateShape>
>;

export type FilmParamsDTO = z.infer<typeof FilmParamsSchema>;
export type _FilmParamsDTOCheck = Assert<
    IsExact<FilmParamsDTO, FilmParamsShape>
>;

export type FilmQueryDTO = z.infer<typeof FilmQuerySchema>;
export type _FilmQueryDTOCheck = Assert<IsExact<FilmQueryDTO, FilmQueryShape>>;

export type ReviewCreateDTO = z.infer<typeof ReviewCreateDTOSchema>;
export type _ReviewCreateDTOCheck = Assert<
    IsExact<ReviewCreateDTO, ReviewCreateShape>
>;

export type ReviewUpdateDTO = z.infer<typeof ReviewUpdateDTOSchema>;
export type _ReviewUpdateDTOCheck = Assert<
    IsExact<ReviewUpdateDTO, ReviewUpdateShape>
>;

export type ReviewParamsDTO = z.infer<typeof ReviewParamsSchema>;
export type _ReviewParamsDTOCheck = Assert<
    IsExact<ReviewParamsDTO, ReviewParamsShape>
>;
