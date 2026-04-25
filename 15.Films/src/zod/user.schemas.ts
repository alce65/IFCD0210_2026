import { z } from 'zod';
import { ReviewModelSchema } from './film.schemas.ts';

import type {
    ProfileCreateWithoutUserInput,
    ProfileModel,
    UserCreateInput,
    UserModel,
    ReviewModel,
} from '../../generated/prisma/models.ts';

// Los valores <name>ModelSchema representan fielmente el modelo de prisma
// incluidos ids y campos derivados de las relaciones,
// Se mantiene los tipos con la mayor fidelidad (e.g. Date, Decimal)
// para garantizar compatibilidad con los tipos de prisma
// No se incluyen atributos ignorados en prisma,
// Se utilizan para validar los datos que obtenemos de la base de datos
// y para checks de compatibilidad
// Se utiliza z.Lazy para resolver la dependencia circular
// entre UserModelSchema y ReviewSchema

// Los valores <name>DTOSchema representan los datos
// que aceptamos en las operaciones de la aplicación,
// permitiendo validar req.body, req.params, etc.

// - rate puede ser number
// - evita recursión
// - evita nested Prisma-style inputs
// - usa shapes planas y cómodas para HTTP

export const ProfileModelSchema = z.object({
    id: z.number(),
    firstName: z.string(),
    surname: z.string(),
    avatar: z.string(),
});

// DTO para el perfil
export const ProfileDTOSchema = z.object({
    firstName: z.string(),
    surname: z.string(),
    avatar: z.string(),
});

export const UserModelSchema = z.object({
    id: z.number(),
    email: z.string(),
    password: z.string(),
    role: z.enum(['ADMIN', 'EDITOR', 'USER']),
    profile: ProfileModelSchema.optional(),
    reviews: z.array(ReviewModelSchema).optional(),
});

// DTO para el login de usuarios
export const UserCredentialsDTOSchema = z.object({
    email: z.email(),
    password: z.string().min(6),
});

export const UpdateUserDTOSchema = z.object({
    role: z.enum(['ADMIN', 'EDITOR', 'USER']).optional(),
    profile: ProfileDTOSchema.partial().optional(),
});

export const RegisterUserDTOSchema = UserCredentialsDTOSchema.extend(
    z.object({
        role: z.enum(['ADMIN', 'EDITOR', 'USER']).optional(),
        profile: ProfileDTOSchema
    }).shape,
);

// Desde Prisma podemos obtener los tipos correspondientes
// - al modelo de datos (e,g. UserModel o ProfileModel)
// - a los datos que prisma acepta en una operación (e.g. UserCreateInput o UserCreateUpdate)

// A partir de ellos podemos hablar de shapes para definir el contrato estructural de dichas operaciones
// (Login Register, Update) que puede aceptar solo parcialmente los tipos de la operación
// En lugar de Partial creamos nuestra propia utilidad de tipos
// para permitir campos opcionales como undefined

type OptionalsUndefined<T> = {
    [K in keyof T]?: T[K] | undefined;
};

type UserModelShape = UserModel & {
    profile?: ProfileModel | undefined;
    reviews?: ReviewModel[] | undefined;
};

type LoginUserShape = Pick<UserCreateInput, 'email' | 'password'>;

type RegisterUserShape = Pick<UserCreateInput, 'email' | 'password'> & {
    role?: UserCreateInput['role'] | undefined;
    profile: ProfileCreateWithoutUserInput;
};

interface UserUpdateShape {
    role?: UserCreateInput['role'] | undefined;
    profile?: OptionalsUndefined<ProfileCreateWithoutUserInput> | undefined;
}

// Los tipos que realmente exportaremos se infieren desde los schemas de validación de Zod,
// y se comprueban con los tipos de Prisma para garantizar
// que los shapes definidos coinciden exactamente con los tipos de prisma

// Herramientas para comprobar la Compatibilidad de tipos entre Zod y Prisma
// type CompatibleWith<Actual extends Expected, Expected> = Actual;
// type Exact<A, B> = A extends B ? (B extends A ? A : never) : never;
// comprueba que Actual sea asignable a Expected
// no comprueba igualdad exacta
// no comprueba que Expected no tenga campos extra opcionales
// no comprueba que ambos tengan la misma intención semántica

type Assert<T extends true> = T;
// con IsExact, comprueba que A y B sean exactamente iguales
// no permite campos extra, ni opcionales, ni diferencias en tipos de campos

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

// Typos que exportaríamos normalmente,
// sin contrastar con los tipos de Prisma para garantizar compatibilidad

export type Profile = z.infer<typeof ProfileModelSchema>;
// En Prisma corresponde a ProfileModel
export type _ProfileCheck = Assert<IsExact<Profile, ProfileModel>>;

export type ProfileDTO = z.infer<typeof ProfileDTOSchema>;
// En Prisma corresponde a ProfileCreateWithoutUserInput
export type _ProfileDTOCheck = Assert<
    IsExact<ProfileDTO, ProfileCreateWithoutUserInput>
>;

export type User = z.infer<typeof UserModelSchema>;
// En Prisma corresponde a UserCreateInput sin el campo profile
export type _UserCheck = Assert<IsExact<User, UserModelShape>>;

export type RegisterUserData = z.infer<typeof RegisterUserDTOSchema>;
// En Prisma corresponde a UserCreateInput sin el campo profile
// que se gestiona de forma anidada,
// y sin el campo password que se encripta antes de guardarlo en la base de datos
export type _RegisterUserDataCheck = Assert<
    IsExact<RegisterUserData, RegisterUserShape>
>;

export type LoginUserData = z.infer<typeof UserCredentialsDTOSchema>;
// En Prisma corresponde a UserCreateInput sin el campo profile
export type _LoginUserDataCheck = Assert<
    IsExact<LoginUserData, LoginUserShape>
>;

export type UserUpdateDTO = z.infer<typeof UpdateUserDTOSchema>;
// Tipos finales que exportamos, comprobando compatibilidad con los tipos de Prisma
export type _UserUpdateDTOCheck = Assert<
    IsExact<UserUpdateDTO, UserUpdateShape>
>;
