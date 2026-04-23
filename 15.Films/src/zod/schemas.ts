import { z } from 'zod';

export const UserSchema = z.object({
  id: z.number(),
  email: z.string(),
  password: z.string(),
  profile: z.lazy(() => ProfileSchema).optional(),
  reviews: z.array(z.lazy(() => ReviewSchema)),
  created_at: z.date(),
});

export const ProfileSchema = z.object({
  id: z.number(),
  firstname: z.string(),
  suername: z.string(),
  avatar: z.string(),
  // user: relation to User
  created_at: z.date(),
});

// export const GenreSchema = z.object({
//     id: z.number(),
//     name: z.string(),
//     films: z.array(z.lazy(() => FilmSchema)),
//     created_at: z.date(),
// });

// export const FilmSchema = z.object({
//   id: z.number(),
//   title: z.string(),
//   year: z.number(),
//   director: z.string(),
//   duration: z.number(),
//   poster: z.string().optional(),
//   rate: z.number(),
//   genres: z.array(z.lazy(() => GenreSchema)),
//   reviews: z.array(z.lazy(() => ReviewSchema)),
//   created_at: z.date(),
// });


export const ReviewSchema = z.object({
    // user: relation to User
    // film: relation to Film
    review: z.string(),
    created: z.date(),
    userID: z.number(),
    filmID: z.number(),
});

export type Profile = z.infer<typeof ProfileSchema>;
// export type Film = z.infer<typeof FilmSchema>;
// export type Genre = z.infer<typeof GenreSchema>;
export type Review = z.infer<typeof ReviewSchema>;
export type User = z.infer<typeof UserSchema>;
