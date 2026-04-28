---
title: Demo API REST: Películas
official: Desarrollo de aplicaciones web distribuidas
Código: UF1846
cve: BOE-A-2011-19503
description: Ejemplo de API REST para la gestión de una colección de películas, con operaciones CRUD y uso de HTTP.
---

- [Proyecto inicial. Arquitectura](#proyecto-inicial-arquitectura)
  - [Estructura de carpetas](#estructura-de-carpetas)
  - [Entorno de desarrollo: servidor web Node.js + TypeScript](#entorno-de-desarrollo-servidor-web-nodejs--typescript)
    - [Typescript](#typescript)
  - [Bibliotecas esenciales para Express + REST](#bibliotecas-esenciales-para-express--rest)
  - [Estructura inicial del proyecto. Acceso al entorno y logs de debug](#estructura-inicial-del-proyecto-acceso-al-entorno-y-logs-de-debug)
  - [Creación del servidor y la aplicación Express](#creación-del-servidor-y-la-aplicación-express)
  - [Manejo de errores](#manejo-de-errores)
  - [Configuración de rutas básicas](#configuración-de-rutas-básicas)
- [Entorno de desarrollo: postgresql + Prisma](#entorno-de-desarrollo-postgresql--prisma)
  - [Configuración de prisma y conexión a la base de datos](#configuración-de-prisma-y-conexión-a-la-base-de-datos)
  - [Global prisma omit](#global-prisma-omit)
  - [Incorporación del cliente a la aplicación](#incorporación-del-cliente-a-la-aplicación)
- [Elementos del dominio: datos y modelo](#elementos-del-dominio-datos-y-modelo)
  - [Detalles del modelo relacional](#detalles-del-modelo-relacional)
  - [Schema de prisma](#schema-de-prisma)
  - [Tipos en Prisma](#tipos-en-prisma)
  - [Schemas de validación con Zod](#schemas-de-validación-con-zod)
  - [Desarrollo de los esquemas de validación](#desarrollo-de-los-esquemas-de-validación)
    - [Esquemas de películas, géneros y reviews](#esquemas-de-películas-géneros-y-reviews)
    - [Esquemas de usuarios y perfiles](#esquemas-de-usuarios-y-perfiles)
    - [Qué hemos conseguido con este enfoque](#qué-hemos-conseguido-con-este-enfoque)
  - [Seed de datos](#seed-de-datos)
    - [Contenido del seed](#contenido-del-seed)
  - [Entorno de test](#entorno-de-test)
  - [En resumen](#en-resumen)
- [Diseño de la API](#diseño-de-la-api)
  - [Contrato del servicio](#contrato-del-servicio)
    - [EndPoints](#endpoints)
    - [Opciones: Parámetros y filtrado](#opciones-parámetros-y-filtrado)
    - [Formatos de entrada: Zod schemas y validación:](#formatos-de-entrada-zod-schemas-y-validación)
  - [Políticas de servicio](#políticas-de-servicio)
  - [Pruebas y Documentación](#pruebas-y-documentación)
  - [Arquitectura y Secuencia de Implementación](#arquitectura-y-secuencia-de-implementación)
- [Usuarios](#usuarios)
  - [Contraseñas: Bcrypt y hashing](#contraseñas-bcrypt-y-hashing)
    - [Servicio auth](#servicio-auth)
  - [JSON Web Tokens (JWT)](#json-web-tokens-jwt)
    - [Secret](#secret)
    - [Servicio auth y token JWT](#servicio-auth-y-token-jwt)
  - [Repositorio: UsersRepo](#repositorio-usersrepo)
    - [Register (UserRepo)](#register-userrepo)
    - [Login (UserRepo)](#login-userrepo)
    - [Read (UserRepo)](#read-userrepo)
    - [Updates (UserRepo)](#updates-userrepo)
    - [Delete (UserRepo)](#delete-userrepo)
    - [Errores Not Found (UserRepo)](#errores-not-found-userrepo)
  - [Controller: UsersController](#controller-userscontroller)
    - [Register (UserController)](#register-usercontroller)
    - [Login (UserController)](#login-usercontroller)
    - [Read (UserController)](#read-usercontroller)
    - [Update (UserController)](#update-usercontroller)
    - [Delete (UserController)](#delete-usercontroller)
  - [Router: UsersRouter](#router-usersrouter)
  - [Montaje en la aplicación](#montaje-en-la-aplicación)
  - [Validaciones con zod](#validaciones-con-zod)
    - [Validador de ID](#validador-de-id)
      - [Validador de Body](#validador-de-body)
    - [Validadores en el UsersRouter](#validadores-en-el-usersrouter)
  - [Prueba de las rutas: Postman](#prueba-de-las-rutas-postman)
- [Implementación de Políticas de servicio](#implementación-de-políticas-de-servicio)
  - [Autenticación (Authentication) y rutas protegidas](#autenticación-authentication-y-rutas-protegidas)
    - [Interface de la request de Express](#interface-de-la-request-de-express)
    - [Auth Interceptor](#auth-interceptor)
    - [Rutas protegidas: uso del intertceptor](#rutas-protegidas-uso-del-intertceptor)
    - [Pruebas de las rutas protegidas](#pruebas-de-las-rutas-protegidas)
  - [Autorización (Authorization)](#autorización-authorization)
    - [Método en el interceptor](#método-en-el-interceptor)
    - [Uso del interceptor en las rutas](#uso-del-interceptor-en-las-rutas)

## Proyecto inicial. Arquitectura

El objetivo es disponer de un servidor web con Node y Express para posteriormente exponer una API REST que permita gestionar una colección de películas, sus categorías y sus reviews, realizados por los usuarios. El proyecto se desarrollará con TypeScript y se organizará siguiendo una arquitectura modular orientada a objetos, con separación de responsabilidades entre configuración, rutas, controladores, servicios y acceso a datos.

### Estructura de carpetas

La estructura de carpetas reflejo de esa arquitectura será la siguiente:

- src/
  - config/
    - `env.ts` (configuración de variables de entorno con Zod)
  - errors/ (carpeta para definir clases de error personalizadas)
    - `http-error.ts` (clase base para errores HTTP)
  - middlewares/ (carpeta para definir middlewares personalizados)
    - `error-handler.ts` (middleware para manejar errores)
  - `app.ts` (configuración de Express)
  - `index.ts` (punto de entrada del servidor)
  - users/
    - entities/
      - `user.entity.ts` (definición de la entidad User y sus DTOs)
      - `db-seed.ts` (función para preparar la base de datos con la tabla de usuarios)
    - repositories/
      - `user.repository.ts` (clase con la lógica de acceso a datos para la entidad User)
      - `auth.repository.ts` (clase con la lógica de acceso a datos para la autenticación de usuarios, e.g. login)
    - controllers/
      - `user.controller.ts` (clase con el controlador para manejar las solicitudes relacionadas con usuarios)
      - `user.controller.test.ts` (tests unitarios para el controlador de usuarios)
    - routers/
      - `user.router.ts` (clase con la definición de las rutas relacionadas con usuarios, utilizando el servicio)
      - `user.router.test.ts` (tests de integración para las rutas de usuarios)
  - films/
    - entities/
      - `film.entity.ts` (definición de la entidad Film y sus DTOs)
      - `db-seed.ts` (función para preparar la base de datos con la tabla de películas)
    - repositories/
      - `film.repository.ts` (clase con la lógica de acceso a datos para la entidad Film)
    - controllers/
      - `film.controller.ts` (clase con el controlador para manejar las solicitudes relacionadas con películas)
    - routers/
      - `film.router.ts` (clase con la definición de las rutas relacionadas con películas, utilizando el servicio)
      - `film.router.test.ts` (tests de integración para las rutas de películas)
      - `film.controller.test.ts` (tests unitarios para el controlador de películas)
  - reviews/
  - categories/
  - ...

[TODO]: Revisar al final

### Entorno de desarrollo: servidor web Node.js + TypeScript

1. Ficheros para cualquier proyecto Node.js
   - `.gitignore`
   - `.editorconfig`
   - `package.json`
   - `readme.md`
2. Configuración de TypeScript, ESLint y Prettier.
   - `.eslintrc.js` (incluye tseslint.configs.strict, tseslint.configs.stylistic)
   - `tsconfig.json` (configura TS para que pueda ejecutarse directamente con Node.js)
   - `package.json` (se añade la configuración de Prettier)
3. Dependencias iniciales
   - **cross-env** para establecer variables de entorno en los scripts de npm de forma compatible con diferentes sistemas operativos
   - **debug** para el logging de depuración
   - **zod** para la validación de variables de entorno
4. Variables de entorno necesarias para el proyecto (`.env`, `.env.test`, se describen en `.env.sample`)
   - NODE_ENV: dev | prod | test
   - PROJECT_NAME: string
   - DEBUG: string (PROJECT_NAME:\*)
   - PORT: number (opcional, por defecto 3000)
5. Selección del fichero de entorno desde los scripts de npm
   - npm run dev: carga `.env`
   - npm run test: carga `.env.test`
   - npm run prod: no carga ningún `.env`, se asume que las variables de entorno están configuradas en el entorno de producción. Usa cross-env para establecer NODE_ENV a prod.

#### Typescript

Detalles de la configuración en tsconfig.json:

- `noEmit`: true
- `allowImportingTsExtensions`: true
- `erasableSyntaxOnly`: true
  - Estas opciones permiten ejecutar TypeScript directamente con Node.js sin necesidad de compilar a JavaScript, lo que simplifica el desarrollo y la ejecución del proyecto. `noEmit` evita que TypeScript genere archivos JavaScript, `allowImportingTsExtensions` permite importar archivos .ts directamente, y `erasableSyntaxOnly` hace que no se permitan las características de TypeScript que no pueden ser eliminadas en tiempo de ejecución (enums, property access...).

- `exactOptionalPropertyTypes`: false
  - Permite que las propiedades opcionales en los tipos de entrada puedan ser asignadas a objetos que no las incluyan, lo cual es útil para los DTOs de actualización donde no se requiere que todos los campos estén presentes.
  - suele encajar mejor con el uso práctico de Prisma y Zod, porque reduce la fricción entre propiedades opcionales y propiedades cuyo valor puede ser undefined. Con true, el tipado es más preciso, pero también más exigente y verboso.

### Bibliotecas esenciales para Express + REST

- express @types/express
- cors
- morgan
- ¿helmet?: `npm i helmet` [npm](https://www.npmjs.com/package/helmet)
- ¿compression?: `npm i compression` [npm](https://www.npmjs.com/package/compression)
- ¿rate-limit?: `npm i express-rate-limit` [npm](https://www.npmjs.com/package/express-rate-limit)
- bcrypt
- jsonwebtoken
- openapi-typescript
- swagger-ui-express

[TODO]: Revisar si se usan las que aparecen ¿?

### Estructura inicial del proyecto. Acceso al entorno y logs de debug

1. Estructura de carpetas
   - src/
     - config/
       - `env.ts` (configuración de variables de entorno con Zod)
     - errors/ (carpeta para definir clases de error personalizadas)
       - `http-error.ts` (clase base para errores HTTP)
     - middlewares/ (carpeta para definir middlewares personalizados)
       - `error-handler.ts` (middleware para manejar errores)
     - `app.ts` (configuración de Express)
     - `index.ts` (punto de entrada del servidor)
2. Configuración de variables de entorno con Zod
   - valida las variables de entorno e infiere su tipo `Env`
   - crea un objeto `env` con las variables de entorno validadas
   - exporta el objeto y el tipo
3. Uso de debug para mostrar mensajes de depuración
   - crea un logger con el namespace del proyecto (PROJECT_NAME:\*)
   - los mensajes de debug se muestran solo si la variable de entorno DEBUG incluye el namespace del proyecto, lo que permite controlar la salida de logs de depuración sin afectar a los logs de producción o testing
   - escribe en el log de debug al cargar el módulo
   - escribe en el log de debug al utilizar las funcionalidades del módulo
   - Se repite este patrón de logging en todos los módulos del proyecto para facilitar la depuración y el seguimiento del flujo de ejecución

### Creación del servidor y la aplicación Express

1. Creación del servidor node en `index.ts`
   - importa el objeto `env` y la función `createApp`
   - crea el servidor con `createServer` pasándole la aplicación Express importada desde `app.ts`
   - escucha en el puerto configurado en respuesta al evento `listening`
   - muestra por consola la url del servidor
2. Creación de la aplicación Express en `app.ts`
   - importa express, morgan, cors y debug
   - exporta una función `createApp` que devuelve una aplicación Express
   - la app esta configurada con los middlewares cors, morgan, express.json, express.urlencoded

     ```typescript
     // Gestión seguridad
     app.use(helmet()); // Headers seguridad
     app.use(cors(config)); // CORS configurado
     app.use(rateLimit(config)); // Rate limiting
     ```

   - muestra por consola un mensaje de debug indicando que la aplicación se ha iniciado

3. Creación de un middleware personalizado en `customs.ts`
   - exporta una función `customHeaders` que recibe un string `project` y devuelve un middleware que añade un header `X-Project` con el valor de `project` a cada respuesta
   - muestra por consola un mensaje de debug indicando que se ha añadido el header personalizado

### Manejo de errores

1. Creación de una clase de error personalizada en `http-error.ts`
   - exporta una clase `HttpError` que extiende de `Error`
   - el constructor recibe un mensaje, un código de estado, un mensaje de estado y opciones
   - la clase tiene propiedades `status` y `statusMessage` para almacenar el código y mensaje de estado
   - muestra por consola un mensaje de debug indicando que se ha creado un error HTTP con su código, mensaje de estado y mensaje de error
2. Creación de un middleware de manejo de errores en `error-handler.ts`
   - exporta una función `errorHandler` que recibe un error, la request, la response y el next function
   - si el error es una instancia de `HttpError`, devuelve un status con el código y mensaje del error
   - si el error es una instancia de `ZodError`, devuelve un status 400 con un mensaje de error de validación
   - para cualquier otro error, devuelve un status 500 con un mensaje de error genérico
   - muestra por consola un mensaje de debug indicando que se ha manejado un error y su mensaje

### Configuración de rutas básicas

1. Configuración de rutas genéricas en `app.ts`
   - define un endpoint health-check en `[GET] /health` que devuelve un status 200 con un mensaje de éxito
   - para cualquier otra ruta, se crea un error 404 con la clase `HttpError` y se pasa al siguiente middleware de manejo de errores
2. Configuración de los endpoint raíz en `app.ts`
   - define un endpoint raíz `[GET] /` que devuelve un status 200 con un mensaje de bienvenida a la aplicación
   - define un endpoint raíz `/api` que devuelve un status 200 con un mensaje de descripción de las apis

## Entorno de desarrollo: postgresql + Prisma

### Configuración de prisma y conexión a la base de datos

1. Dependencias:

- prisma
- @prisma/client
- pg @types/pg
- @prisma/adapter-pg
- dotenv

2. Configuración del cliente de prisma

- Variables de entorno necesarias para la conexión a la base de datos PostgreSQL (`.env`, `.env.test`, se describen en `.env.sample`)
  - PGUSER: string
  - PGPASSWORD: string
  - PGHOST: string
  - PGPORT: number
  - PGDATABASE: string
  - DATABASE_URL: string (opcional, si se prefiere usar una sola variable de entorno para la conexión a la base de datos, en formato `postgresql://user:password@host:port/database`)
- Inicialización de prisma con `npx prisma init --output ../generated/prisma`
- Configuración del datasource en `prisma.config.ts` para conectar con la base de datos PostgreSQL utilizando la variable de entorno `DATABASE_URL`
- Comprobación de que la DB existe o la creamos
  - desde el terminal del servidor (e,g, docker): con `createdb -U postgres films_db`
  - desde el terminal de cliente, si esta instalado y en el path el cli de postgres: `createdb -h localhost -p 5432 -U postgres films_db`
- Generación del cliente de prisma con `npx prisma generate` (aunque no hay modelo de datos, permitirá comprobar la conexión a la base de datos)

1. Estructura de carpetas
   - src/
     - config/
       - `db.ts` (configuración de la conexión a la base de datos con pg)
2. Configuración de la conexión a la base de datos
   - se crea un logger de debug para la configuración de la base de datos
   - se muestra un mensaje de debug al cargar el módulo de configuración de la base de datos
   - se utiliza el cliente de prisma para conectar con una base de datos PostgreSQL
     - se instancia el adaptador
     - se instancia el cliente (versión generada con prisma generate)

       ```ts
       import { env } from './env.ts';
       import debug from 'debug';
       import { PrismaPg } from '@prisma/adapter-pg';
       import { PrismaClient } from '../../generated/prisma/client.ts';

       const log = debug(`${env.PROJECT_NAME}:configDB`);

       log('Loaded database connection...');

       export const connectDB = async () => {
         const adapter = new PrismaPg({
           user: env.PGUSER,
           password: env.PGPASSWORD,
           host: env.PGHOST,
           port: env.PGPORT,
           database: env.PGDATABASE,
         });
         const prisma = new PrismaClient({
           adapter,
         });
       };
       ```

   - se prueba la conexión utilizando la configuración obtenida de las variables de entorno
   - se maneja el evento de error del cliente para loguear cualquier error de conexión a la base de datos
   - se exporta el cliente de prisma para ser utilizado en otras partes de la aplicación

     ```ts
     {
       // ...continuación del código anterior
       try {
         await prisma.$connect();
         const [info] = (await prisma.$queryRaw`SELECT current_database()`) as {
           current_database: string;
         }[];
         log('Database connection established successfully.');
         log('Connected to database:', info?.current_database);
         prisma.$disconnect();
       } catch (error) {
         log('Error connecting to the database:', error);
         throw error;
       }
       return prisma;
     }
     ```

### Global prisma omit

Para ocultar el campo password en todas las consultas SQL relacionadas con el modelo User que luego crearemos, se puede configurar el cliente de Prisma para omitir ese campo de forma global. Esto se hace utilizando la opción `omit` al instanciar el cliente de Prisma. En este caso, se omite el campo `password` del modelo `User` en todas las consultas, lo que garantiza que el hash de la contraseña no se exponga accidentalmente en las respuestas de la API.

```ts
const globalOmit = {
  user: {
    password: true,
  },
} as const;
```

Creamos un tipo para reflejar el cambio en el modelo User, omitiendo el campo password:

```ts
export type AppPrismaClient = PrismaClient<never, typeof globalOmit>;
```

Finalmente, cambiamos el cliente de prisma para incluir esta configuración global de omit:

```ts
export const connectDB = async (): Promise<AppPrismaClient> => {
  const adapter = new PrismaPg({
    user: env.PGUSER,
    password: env.PGPASSWORD,
    host: env.PGHOST,
    port: env.PGPORT,
    database: env.PGDATABASE,
  });
  const prisma = new PrismaClient({
    adapter,
    omit: globalOmit,
  });
};
```

### Incorporación del cliente a la aplicación

1. La llamada a `connectDB` se realiza en el punto de entrada del servidor (`index.ts`) para establecer la conexión a la base de datos antes de iniciar el servidor Node.js, En caso de error en la conexión, se muestra un mensaje de error y no se inicia el servidor.

```ts index.ts
import { connectDB } from './config/db.ts';
const prisma = await connectDB();
const app = createApp(prisma);
```

2. El cliente de prisma se pasa a la función `createApp` para que pueda ser utilizado en la configuración de la aplicación Express y posteriormente en los controladores y servicios que necesiten acceder a la base de datos.

```ts app.ts
import type { AppPrismaClient } from './config/db-config.ts';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const createApp = (prisma: AppPrismaClient) => {
  // ...
  const app = express();

  // En su momento, se inyectara el cliente de prisma en los servicios que lo necesiten (e.g. repositorios)

  return app;
};
```

## Elementos del dominio: datos y modelo

- Entidades
- Relaciones

```mermaid
erDiagram
    USER ||--o| PROFILE : has
    USER ||--o{ REVIEW : writes
    FILM ||--o{ REVIEW : receives
    FILM }o--o{ GENRE : belongs_to
```

### Detalles del modelo relacional

- `User` y `Profile` tienen una relación `1:1`.
- `Profile` depende de `User`: su PK `profile_id` es ademas FK hacia `users.user_id`.
- `User` y `Film` se relacionan a traves de `Review`.
- `Review` es una entidad asociativa entre `User` y `Film`.
- `Review` tiene clave primaria compuesta: `(user_id, film_id)`.
- Eso implica que un usuario solo puede dejar una review por película.
- `Film` y `Genre` tienen una relación `n:n` gestionada por Prisma con una tabla intermedia implícita.

```mermaid
erDiagram
    USER ||--o| PROFILE : has
    USER ||--o{ REVIEW : writes
    FILM ||--o{ REVIEW : receives
    FILM }o--o{ GENRE : belongs_to

    USER {
        INT user_id PK
        STRING email UK
        STRING password
        ROLE role
        DATETIME created_at
        DATETIME updated_at
    }

    PROFILE {
        INT profile_id PK
        STRING first_name
        STRING surname
        STRING avatar
        DATETIME created_at
        DATETIME updated_at
    }

    FILM {
        INT film_id PK
        STRING title
        INT release_year
        STRING director
        INT duration
        STRING poster
        DECIMAL rate
        DATETIME created_at
        DATETIME updated_at
    }

    GENRE {
        INT genre_id PK
        STRING name UK
        DATETIME created_at
        DATETIME updated_at
    }

    REVIEW {
        INT user_id PK
        INT film_id PK
        STRING review
        DECIMAL rate
        DATETIME created_at
        DATETIME updated_at
    }
```

Enum `Role`:

- `USER`
- `EDITOR`
- `ADMIN`

### Schema de prisma

```prisma

enum Role {
  USER // @map("user")
  EDITOR // @map("editor")
  ADMIN // @map("admin")
}

model User {
  id       Int      @id @default(autoincrement()) @map("user_id")
  email    String   @unique() @db.VarChar(100)
  password String   @db.VarChar(255)
  role     Role     @default(USER)
  profile  Profile?
  reviews  Review[]
  created_at DateTime @default(now()) @ignore
  updated_at DateTime @default(now()) @updatedAt @ignore

  @@map("users")
}

model Profile {
  id         Int      @id @map("profile_id")
  firstName  String   @db.VarChar(200) @map("first_name")
  surname    String   @db.VarChar(200)
  avatar     String   @db.VarChar(200)
  user       User     @relation(fields: [id], references: [id])
  created_at DateTime @default(now()) @ignore
  updated_at DateTime @default(now()) @updatedAt @ignore

  @@map("profiles")
}

model Film {
  id         Int      @id @default(autoincrement()) @map("film_id")
  title      String   @db.VarChar(255)
  year       Int      @map("release_year")
  director   String   @db.VarChar(255)
  duration   Int
  poster     String?  @db.Text
  rate       Decimal  @db.Decimal(2, 1)
  genres     Genre[]  @relation("films_genres")
  reviews    Review[]
  created_at DateTime @default(now()) @ignore
  updated_at DateTime @default(now()) @updatedAt @ignore

  @@map("films")
}

model Genre {
  id         Int      @id @default(autoincrement()) @map("genre_id")
  name       String   @db.VarChar(60) @unique()
  films      Film[]   @relation("films_genres")
  created_at DateTime @default(now()) @ignore
  updated_at DateTime @default(now()) @updatedAt @ignore

  @@map("genres")
}

model Review {
  user   User?  @relation(fields: [userID], references: [id])
  film   Film?  @relation(fields: [filmID], references: [id])
  review String
  rate   Decimal  @db.Decimal(3, 1)
  created_at DateTime @default(now()) @ignore
  date DateTime @default(now()) @map("updated_at") @updatedAt
  userID Int   @map("user_id")
  filmID Int   @map("film_id")
  @@id([userID, filmID])
  @@map("reviews")
}

```

En el modelo `User` se incluye el atributo password con la longitud máxima de 255 caracteres para almacenar el hash de la contraseña, en lugar de la contraseña en texto plano. Esto es una práctica imprescindible para garantizar la seguridad de la aplicación. Ademas, la configuración de prisma se ha ajustado para omitir el campo password en las consultas, evitando que el hash de la contraseña se exponga accidentalmente en las respuestas de la API.

```ts config/db.ts
const prisma = new PrismaClient({
  adapter,
  omit: {
    user: {
      password: true,
    },
  },
});
```

La relación n:n entre `Film` y `Genre` se gestiona de forma implícita por Prisma, sin necesidad de definir un modelo intermedio en el schema. Internamente Prisma crea una tabla intermedia con nombre derivado de la relación; en nuestro caso, al usar `@relation("films_genres")`, la tabla será `_films_genres`. En las relaciones implícitas Prisma no permite controlar los campos de esa tabla intermedia: sus columnas serán `A` y `B`. Si quisiéramos columnas con nombres propios como `film_id` y `genre_id`, tendríamos que pasar a una relación explícita con un modelo intermedio.

### Tipos en Prisma

Para cada modelo definido en el schema de prisma, se generan automáticamente varios tipos TypeScript que representan las diferentes formas de interactuar con ese modelo a través del cliente de prisma.

Por ejemplo, para el modelo User, los principales tipos TS generados por Prisma son:

- User: tipo de salida por defecto (fila devuelta por Prisma).
- Prisma.UserCreateInput: datos de entrada para create().
- Prisma.UserUpdateInput: datos de entrada para update().
- Prisma.UserWhereInput: filtros para findMany(), updateMany(), deleteMany().
- Prisma.UserWhereUniqueInput: búsqueda por id u otro campo único.
- Prisma.UserFindManyArgs: objeto completo de consulta (where, orderBy, select...).
- Prisma.UserSelect: selección parcial de campos.
- Prisma.UserGetPayload<...>: tipo de salida cuando usamos select/include.
- Role: enum generado por Prisma para el campo role.

Prisma no genera DTOs HTTP de API; esos conviene definirlos aparte.

### Schemas de validación con Zod

Aunque prisma proporciona un exhaustivo sistema de validación a nivel de base de datos, es recomendable utilizar una biblioteca de validación como Zod para validar los datos de entrada en las rutas de la API antes de intentar guardarlos en la base de datos.

Esto permite proporcionar respuestas de error más claras y específicas al cliente, y evita que se realicen consultas innecesarias a la base de datos con datos inválidos.

Se pueden usar herramientas que generan automáticamente los schemas de validación de Zod a partir del schema de prisma, como `zod-prisma` o `prisma-zod-generator`, para mantener la consistencia entre el modelo de datos y las validaciones de entrada.

En nuestro caso creamos manualmente los schemas de validación para cada entidad, definiendo los campos requeridos, sus tipos y cualquier restricción adicional (e.g. longitud máxima, formato de email, etc.) en archivos específicos como `src/zod/film.schemas.ts` y `src/zod/user.schemas.ts`.

### Desarrollo de los esquemas de validación

En este proyecto no usamos Zod sólo para validar `req.body`. También lo usamos para expresar de forma explícita varias capas del dominio:

1. Los datos que salen de Prisma y que queremos representar con fidelidad.
2. Los datos de entrada de la API.
3. Las shapes o contratos estructurales de cada operación.
4. La comprobación estática de que los tipos inferidos desde Zod siguen siendo compatibles con los tipos generados por Prisma.

La idea general es distinguir dos familias de schemas:

- `<name>ModelSchema`: representan fielmente el modelo de Prisma.
- `<name>DTOSchema`: representan los datos que aceptamos en las operaciones de la aplicación.

Los `ModelSchema` tienen estas características:

- incluyen ids y campos derivados de relaciones cuando forman parte del modelo cargado;
- mantienen los tipos con la mayor fidelidad posible, por ejemplo `Date` o `Decimal`;
- no incluyen atributos ignorados en Prisma con `@ignore`;
- sirven para validar datos leídos desde la base de datos y para checks de compatibilidad.

Los `DTOSchema` tienen estas características:

- se usan para validar `req.body`, `req.params` y `req.query`;
- evitan inputs anidados con sintaxis propia de Prisma;
- usan shapes planas y cómodas para HTTP;
- permiten usar tipos más manejables en la API, por ejemplo `number` en vez de `Decimal`.

Además, en ambos ficheros acompañamos los schemas con:

- tipos inferidos desde Zod (`z.infer<...>`);
- shapes derivadas de tipos Prisma;
- utilidades para comparar esas shapes en tiempo de compilación;
- checks `_...Check` que fuerzan a TypeScript a detectar cualquier desalineación.

En la versión actual del proyecto, además, `tsconfig.json` usa `exactOptionalPropertyTypes: false`. Eso simplifica bastante la escritura de las shapes, porque podemos usar `Partial<T>` y propiedades opcionales normales sin tener que añadir tantas variantes explícitas con `| undefined`.

#### Esquemas de películas, géneros y reviews

El fichero `src/zod/film.schemas.ts` empieza importando Zod, `Decimal` y los tipos Prisma que usaremos como referencia:

```ts
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
```

Lo primero que hacemos es definir un helper para comprobar que un número tenga como máximo un decimal. Esto se reutiliza en las puntuaciones de películas y reviews:

```ts
const isSingleDecimal = (value: number) => Number.isInteger(value * 10);
```

Con ese helper creamos dos schemas auxiliares para el campo `rate`. Separamos el de películas del de reviews porque en el modelo actual no tienen exactamente el mismo rango:

```ts
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
```

Aquí aparecen ya varias decisiones importantes:

- usamos `z.coerce.number()` para aceptar entradas típicas HTTP como cadenas `"7.5"` y convertirlas a número;
- limitamos los rangos desde el schema;
- usamos `.refine(...)` para imponer la restricción de “como máximo un decimal”.

Después definimos los schemas de modelo. Estos son los que pretenden parecerse a los tipos Prisma que obtenemos al leer datos:

```ts
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
```

Conviene fijarse en varios detalles:

- `ReviewModelSchema.rate` y `FilmModelSchema.rate` usan `z.instanceof(Decimal)` porque Prisma devuelve `Decimal`, no `number`.
- `poster` en el modelo es `nullable()`, porque en Prisma es `String?` y al leerlo puede llegar `null`.
- en `GenreModelSchema` hemos cortado la recursión: no incluimos `films`. Eso simplifica la inferencia de TypeScript y evita tener que usar `z.ZodTypeAny`.
- `FilmModelSchema` sí incluye `genres` y `reviews`, pero ya no reabre recursivamente el grafo completo.

La siguiente parte del fichero define los DTOs de entrada:

```ts
export const GenreCreateDTOSchema = z.object({
  name: z.string().trim().min(1).max(60),
});

export const GenreUpdateDTOSchema = GenreCreateDTOSchema.partial();
```

En `GenreCreateDTOSchema` usamos `.trim().min(1).max(60)` para reflejar tanto la intención de negocio como la restricción física de Prisma (`VarChar(60)`). El schema de actualización se obtiene con `.partial()`.

El DTO de creación de películas es más rico:

```ts
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
```

Aquí aparecen varias ideas útiles para clase:

- `year` y `duration` son enteros;
- `duration` además debe ser positiva;
- `poster` se define como `nullish()`, porque en la API podemos permitir tanto que no llegue como que llegue `null`;
- `genres` en el DTO es un `string[]`, no la estructura anidada de Prisma;
- evitamos géneros repetidos con un `Set`.

El schema de actualización de películas, y los schemas de `params` y `query`, quedan así:

```ts
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
```

Con esto ya tenemos una separación clara entre:

- creación;
- actualización parcial;
- validación de parámetros de ruta;
- validación de parámetros de consulta.

Las reviews siguen el mismo patrón:

```ts
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
```

En `ReviewCreateDTOSchema` usamos directamente `userID` y `filmID` planos. Esto es importante porque en la API queremos una entrada sencilla, no objetos anidados con `user: { connect: ... }` o `film: { connect: ... }`.

Después de los schemas vienen las shapes. Aquí es donde conectamos Zod con Prisma:

```ts
type GenreModelShape = GenreModel;

type FilmModelShape = FilmModel & {
  genres?: GenreModel[];
  reviews?: ReviewModel[];
};

type ReviewModelShape = ReviewModel;
```

Las shapes de entrada quedan así:

```ts
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
```

Hay varias decisiones de diseño aquí:

- `FilmCreateShape` no intenta igualar a `FilmCreateInput` completo, porque Prisma acepta relaciones anidadas y nuestro DTO no.
- `ReviewCreateShape` usa `ReviewUncheckedCreateInput`, porque el DTO trabaja con `userID` y `filmID` directos.
- `ReviewParamsShape` reutiliza `ReviewUserIDFilmIDCompoundUniqueInput`, que encaja bien con la clave compuesta de la tabla `reviews`.
- al usar `exactOptionalPropertyTypes: false`, los shapes de update pueden expresarse de forma más directa con `Partial<...>`.

Para comprobar la compatibilidad en tiempo de compilación usamos estas utilidades:

```ts
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
```

La idea es sencilla:

- `IsExact<A, B>` devuelve `true` sólo si ambos tipos tienen exactamente las mismas claves y tipos;
- `Assert<T extends true>` hace que TypeScript falle si el resultado no es `true`.

El bloque final del fichero exporta los tipos inferidos y sus comprobaciones:

```ts
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
```

Con este patrón conseguimos que si cambiamos un schema Zod o cambia el tipo Prisma generado, TypeScript nos avise inmediatamente.

#### Esquemas de usuarios y perfiles

El fichero `src/zod/user.schemas.ts` sigue la misma estrategia, pero aplicada a usuarios y perfiles. Empieza importando Zod, el schema de reviews y los tipos Prisma necesarios:

```ts
import { z } from 'zod';
import { ReviewModelSchema } from './film.schemas.ts';

import type {
  ProfileCreateWithoutUserInput,
  ProfileModel,
  UserCreateInput,
  UserModel,
  ReviewModel,
} from '../../generated/prisma/models.ts';
```

En los comentarios del fichero dejamos explicado el criterio general:

- los `<name>ModelSchema` representan fielmente el modelo de Prisma;
- se mantienen tipos fieles como `Date` o `Decimal` cuando existen;
- no se incluyen atributos ignorados con `@ignore`;
- los `<name>DTOSchema` representan datos de entrada más cómodos para HTTP.

Los primeros schemas son los de perfil y usuario como modelos:

```ts
export const ProfileModelSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  surname: z.string(),
  avatar: z.string(),
});

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
```

Aquí se ve bien la diferencia entre modelo y DTO:

- `ProfileModelSchema` incluye `id`;
- `ProfileDTOSchema` no incluye `id`, porque no lo mandamos desde la API al crear o actualizar;
- `UserModelSchema` sí incluye `password`, porque el modelo leído de Prisma puede contenerlo si lo recuperamos explícitamente;
- `role` no tiene `default(...)` aquí, porque este schema representa datos ya leídos del modelo, y en la base de datos ese valor siempre existe.

Los DTOs de usuario cubren login, registro y actualización:

```ts
export const UserCredentialsDTOSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
});

export const UpdateUserDTOSchema = z.object({
  email: z.string().optional(),
  password: z.string().min(6).optional(),
  role: z.enum(['ADMIN', 'EDITOR', 'USER']).optional(),
  // profile: ProfileDTOSchema.partial().optional(),
});

export const RegisterUserDTOSchema = UserCredentialsDTOSchema.extend(
  z.object({
    role: z.enum(['ADMIN', 'EDITOR', 'USER']).optional(),
    profile: ProfileDTOSchema,
  }).shape,
);
```

Estas decisiones reflejan la API que queremos exponer:

- en login sólo pedimos `email` y `password`;
- en update permitimos cambios parciales de `email`, `password` y `role`;
- en register exigimos credenciales y perfil;
- `role` se mantiene opcional en el registro porque en Prisma existe un valor por defecto (`USER`);
- el `profile` se actualiza por un flujo separado del repo y por eso no aparece activo en `UpdateUserDTOSchema`.

Después aparece otra vez el bloque de shapes:

```ts
type UserModelShape = UserModel & {
  profile?: ProfileModel;
  reviews?: ReviewModel[];
};

type LoginUserShape = Pick<UserCreateInput, 'email' | 'password'>;

type RegisterUserShape = Pick<UserCreateInput, 'email' | 'password'> & {
  role?: UserCreateInput['role'];
  profile: ProfileCreateWithoutUserInput;
};

interface UserUpdateShape {
  email?: UserCreateInput['email'];
  password?: UserCreateInput['password'];
  role?: UserCreateInput['role'];
}
```

Aquí merece la pena detenerse en dos ideas:

1. `LoginUserShape` no usa todo `UserCreateInput`, sino sólo `email` y `password`.
2. `RegisterUserShape` usa `ProfileCreateWithoutUserInput`, porque el perfil se crea de forma anidada al persistir el usuario con Prisma.
3. `UserUpdateShape` ya no incluye `profile`, porque en el repositorio actual el perfil se actualiza mediante una operación separada.

Las utilidades de comprobación son las mismas que en `film.schemas.ts`:

```ts
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
```

Y el fichero termina exportando los tipos y sus checks:

```ts
export type Profile = z.infer<typeof ProfileModelSchema>;
export type _ProfileCheck = Assert<IsExact<Profile, ProfileModel>>;

export type ProfileDTO = z.infer<typeof ProfileDTOSchema>;
export type _ProfileDTOCheck = Assert<
  IsExact<ProfileDTO, ProfileCreateWithoutUserInput>
>;

export type FullUser = z.infer<typeof UserModelSchema>;
export type _UserCheck = Assert<IsExact<FullUser, UserModelShape>>;

export type User = Omit<FullUser, 'password'>;
export type _UserWithoutPasswordCheck = Assert<
  IsExact<User, Omit<UserModelShape, 'password'>>
>;

export type RegisterUserData = z.infer<typeof RegisterUserDTOSchema>;
export type _RegisterUserDataCheck = Assert<
  IsExact<RegisterUserData, RegisterUserShape>
>;

export type LoginUserData = z.infer<typeof UserCredentialsDTOSchema>;
export type _LoginUserDataCheck = Assert<
  IsExact<LoginUserData, LoginUserShape>
>;

export type UserUpdateDTO = z.infer<typeof UpdateUserDTOSchema>;
export type _UserUpdateDTOCheck = Assert<
  IsExact<UserUpdateDTO, UserUpdateShape>
>;
```

Un detalle respecto a los tipos de usuario:

- `FullUser` representa el modelo completo, incluyendo `password`.
- `User` es un tipo derivado que omite `password`, porque en la API no queremos exponerlo ni siquiera como hash.

#### Qué hemos conseguido con este enfoque

Con estos dos ficheros de Zod conseguimos varias cosas a la vez:

1. Validar las entradas HTTP con mensajes claros y reglas explícitas.
2. Representar de forma fiel los datos leídos desde Prisma cuando eso nos interesa.
3. Mantener separadas las shapes de API y las shapes de persistencia.
4. Detectar en compilación cualquier desalineación entre Zod y Prisma.
5. Documentar de forma muy visible las decisiones de diseño de la API.

La secuencia mental que seguimos es esta:

```text
schema.prisma
-> tipos generados por Prisma
-> schemas Zod de modelo y de DTO
-> z.infer<...>
-> shapes de referencia
-> checks estáticos con TypeScript
```

Eso hace que los schemas de validación no sean sólo un detalle de implementación, sino una parte importante del contrato del sistema.

### Seed de datos

- se crea un script de seed en `src/config/db.seed.ts` que se encarga de poblar la base de datos utilizando el cliente de Prisma
- el seed actual no inserta sólo películas: también carga géneros, usuarios y reviews de ejemplo
- cuando se ejecuta directamente, el fichero utiliza la configuración de conexión definida en `src/config/db-config.ts`
- como depende de variables de entorno, si lo ejecutamos directamente debemos indicar el fichero `.env`

````json
{
  "scripts": {
    "seed:dev": "prisma db seed", // llama a "node --env-file=.env ./src/config/db.seed.ts",
    "seed:test": "node --env-file=.env.test ./src/config/db.seed.ts"
  }
}

```shell
npm run seed:dev
npm run seed:test
````

- en Prisma 7, la opción más adecuada es usar el comando `prisma db seed` y configurar el comando de seed en `prisma.config.ts`:

```ts prisma.config.ts
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "node --env-file=.env ./src/config/db.seed.ts"
  },
  ...
});
```

Nota: migrations.seed no ejecuta el seed automáticamente por el mero hecho de estar declarado; sólo indica a Prisma qué comando debe lanzar cuando se invoca el flujo de seed, por ejemplo con prisma db seed o con comandos de desarrollo que incluyan ese paso.

- una vez configurado, basta con ejecutar:

```shell
prisma db seed
```

- este enfoque deja el seed integrado con la configuración de Prisma
- además, podemos seguir manteniendo scripts npm específicos para desarrollo y test si queremos cambiar el fichero de entorno

#### Contenido del seed

El fichero `src/config/db.seed.ts` no es un simple script de inserción masiva. En realidad organiza el seed en varias fases, reutiliza el cliente de Prisma, aplica algunas decisiones de diseño del modelo y deja preparado un punto de entrada para poder ejecutarlo tanto desde Prisma como directamente desde Node.

El comienzo del fichero reúne los imports y la configuración común:

```ts
import { env } from './env.ts';
import debug from 'debug';
import { connectDB } from './db-config.ts';
import { Role } from '../../generated/prisma/client.ts';
import type { ProfileDTO } from '../zod/user.schemas.ts';
import FILMS from '../../data/films.json' with { type: 'json' };
import GENRES from '../../data/genres.json' with { type: 'json' };
import { AuthService } from '../services/auth.ts';
import { fileURLToPath } from 'node:url';

const log = debug(`${env.PROJECT_NAME}:configDB`);

log('Loaded database connection...');
```

Aquí se ven varias ideas importantes:

- se reutiliza `connectDB()` en lugar de crear una conexión manual con `pg`;
- se importan los datos iniciales desde `films.json` y `genres.json`;
- se usa el enum `Role` generado por Prisma, para no escribir cadenas sueltas como `'ADMIN'`;
- se importa `ProfileDTO` para tipar correctamente la parte anidada del perfil;
- se usa `debug` para registrar el progreso del seed.

Después se define una pequeña estructura auxiliar para los usuarios de ejemplo:

```ts
interface SeedUser {
  email: string;
  password: string;
  role: Role;
  profile: ProfileDTO;
}

const USERS: SeedUser[] = [
  {
    email: 'erni@sample.com',
    password: '123456',
    role: Role.ADMIN,
    profile: {
      firstName: 'Ernestina',
      surname: 'Ada',
      avatar: '/avatars/admin.png',
    },
  },
  {
    email: 'pepe@sample.com',
    password: '123456',
    role: Role.EDITOR,
    profile: {
      firstName: 'Pepe',
      surname: 'Pérez',
      avatar: '/avatars/editor.png',
    },
  },
  {
    email: 'ursula@sample.com',
    password: '123456',
    role: Role.USER,
    profile: {
      firstName: 'Ursula',
      surname: 'Martín',
      avatar: '/avatars/user.png',
    },
  },
];
```

Este bloque merece varios comentarios:

- el tipado fuerza a que cada usuario tenga `email`, `password`, `role` y `profile`;
- el `role` usa exactamente los valores del enum `Role` del schema Prisma;
- `profile` no es un objeto cualquiera, sino una shape compatible con `ProfileDTO`;
- las contraseñas en claro sólo se usan como dato de partida del seed: más adelante antes de persistirlas se convierten en hash con `AuthService.hash`;
- se ha dejado `123456` como contraseña mínima coherente con la validación actual del login (`min(6)`).

La primera fase real del seed es la de géneros y películas:

```ts
export const filmSeed = async () => {
  const prisma = await connectDB();
  log('Seeding to database...');

  await prisma.review.deleteMany();
  await prisma.film.deleteMany();
  await prisma.genre.deleteMany();

  await prisma.genre.createMany({
    data: GENRES,
  });

  for (const film of FILMS) {
    await prisma.film.create({
      data: {
        title: film.title,
        year: film.year,
        director: film.director,
        duration: film.duration,
        rate: film.rate,
        poster: film.poster,
        genres: {
          connect: film.genres.map((genre) => ({ name: genre })),
        },
      },
    });
  }
};
```

Aquí se aplican varias decisiones importantes:

- primero se eliminan `reviews`, `films` y `genres` para permitir relanzar el seed sin chocar con claves ajenas;
- los géneros sí se insertan con `createMany`, porque son registros simples sin relaciones anidadas;
- las películas se insertan con `create`, no con `createMany`, porque necesitan relacionarse con géneros mediante `connect`;
- la relación `Film`-`Genre` se crea conectando por `name`, lo que sólo es posible porque en el modelo actual `Genre.name` es `@unique`.

Conviene detenerse en ese último punto. La parte:

```ts
genres: {
    connect: film.genres.map((genre) => ({ name: genre })),
},
```

significa:

- los géneros ya deben existir previamente en la base de datos;
- Prisma buscará cada género por `name`;
- si lo encuentra, crea la relación en la tabla implícita `_films_genres`;
- si no existe, el seed fallará.

Comprobando los datos actuales, esta fase es compatible con el modelo:

- `films.json` contiene 28 películas;
- las notas de `films.json` están entre `8.5` y `9.3`, por lo que encajan en `Film.rate Decimal @db.Decimal(2, 1)`;
- todos los géneros usados por las películas existen en `genres.json`;
- por eso el `connect({ name })` es válido con el estado actual del proyecto.

La segunda fase crea usuarios y perfiles:

```ts
export const userSeed = async () => {
  const prisma = await connectDB();
  log('Seeding users to database...');

  await prisma.review.deleteMany();
  await prisma.profile.deleteMany();
  await prisma.user.deleteMany();

  for (const user of USERS) {
    // const hashedPassword = await AuthService.hash(user.password);

    await prisma.user.create({
      data: {
        email: user.email,
        password: user.password, // Más adelante se hasheará la contraseña
        role: user.role,
        profile: {
          create: user.profile,
        },
      },
    });
  }
};
```

Este bloque refleja bastante bien el modelo `User`-`Profile`:

- se borran antes `review`, `profile` y `user` para no dejar datos huérfanos entre ejecuciones;
- la contraseña se guarda en claro, más adelante se hasheará;
- el perfil se crea de forma anidada con `profile.create`;
- el rol se persiste explícitamente, aunque en Prisma exista un valor por defecto (`USER`).

La creación anidada del perfil tiene sentido porque la relación `User`-`Profile` es `1:1`, y en el schema Prisma `Profile` depende de `User`:

```prisma
model User {
  id      Int      @id @default(autoincrement()) @map("user_id")
  profile Profile?
}

model Profile {
  id   Int  @id @map("profile_id")
  user User @relation(fields: [id], references: [id])
}
```

Con esta definición, Prisma puede encargarse de crear el usuario y el perfil relacionado dentro de la misma operación de `create`.

La tercera fase genera reviews de ejemplo:

```ts
export const reviewSeed = async () => {
  const prisma = await connectDB();
  log('Seeding reviews to database...');

  await prisma.review.deleteMany();

  const users = await prisma.user.findMany();
  const films = await prisma.film.findMany();

  for (const user of users) {
    for (const film of films.slice(0, 3)) {
      // Limit to 3 reviews per user for demo purposes
      await prisma.review.create({
        data: {
          rate: Math.floor(Math.random() * 5) + 1,
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          user: {
            connect: { id: user.id },
          },
          film: {
            connect: { id: film.id },
          },
        },
      });
    }
  }
};
```

Aquí también hay varias decisiones interesantes:

- se borran las reviews antes de recrearlas, porque se generan de forma aleatoria;
- se recuperan todos los usuarios y todas las películas;
- por simplicidad docente, cada usuario reseña sólo las tres primeras películas;
- la relación se crea con `connect` a `User` y `Film` por `id`.

La parte del modelo que hace posible esto es:

```prisma
model Review {
  user   User? @relation(fields: [userID], references: [id])
  film   Film? @relation(fields: [filmID], references: [id])
  userID Int   @map("user_id")
  filmID Int   @map("film_id")

  @@id([userID, filmID])
}
```

Ese `@@id([userID, filmID])` define una clave primaria compuesta. En la práctica significa que sólo puede existir una review por combinación usuario-película. El algoritmo del seed respeta esa restricción, porque:

- itera una sola vez por cada usuario;
- para cada usuario itera una sola vez por cada una de las tres películas seleccionadas;
- no intenta duplicar la misma pareja `(userID, filmID)`.

También aquí hemos comprobado que los datos encajan con el modelo:

- `Review.rate` es `Decimal @db.Decimal(3, 1)`;
- el seed genera valores enteros entre `1` y `5`;
- por tanto, todas las notas generadas caben sin problemas en la columna.

El coordinador general del proceso es muy simple:

```ts
export const seed = async () => {
  await filmSeed();
  await userSeed();
  await reviewSeed();
};
```

El orden sí importa:

1. primero se crean géneros y películas;
2. después usuarios y perfiles;
3. finalmente reviews, porque dependen de usuarios y películas ya existentes.

Al final del fichero aparece un patrón muy útil para poder ejecutar el script directamente:

```ts
const currentFilePath = fileURLToPath(import.meta.url);
const processFilePath = process.argv[1];

if (currentFilePath === processFilePath) {
  console.log('Starting seed');
  seed()
    .then(() => {
      console.log('Seed completed successfully.');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Error seeding the database:', error);
      process.exit(1);
    });
}
```

Este fragmento comprueba si `db.seed.ts` es el fichero que se está ejecutando directamente. Si lo es, lanza el seed completo y finaliza el proceso con un código apropiado:

- `0` si todo ha ido bien;
- `1` si se ha producido algún error.

Eso permite que el mismo fichero se use de dos formas:

- invocado por Prisma mediante `prisma db seed`;
- ejecutado directamente desde Node con `node --env-file=.env ./src/config/db.seed.ts`.

Con el modelo actual, el seed está alineado y es un ejemplo válido de poblamiento inicial. Los puntos clave comprobados son estos:

- los roles usados en el seed coinciden con el enum `Role`;
- el perfil anidado respeta la shape esperada por Prisma;
- `Genre.name` es único, así que `connect({ name })` funciona;
- las notas de las películas caben en `Decimal(2,1)`;
- las notas de las reviews caben en `Decimal(3,1)`;
- las contraseñas de ejemplo cumplen la validación mínima del login; más adelante se almacenarán hasheadas;
- la clave primaria compuesta de `Review` no se viola con el algoritmo actual.

Hay sólo un matiz de diseño que conviene mencionar en clase: el seed repite algunos `deleteMany()` en varias fases. No es un error, y el comportamiento final es correcto, pero sí es una pequeña redundancia que podríamos refactorizar más adelante si quisiéramos dejar el script más compacto.

### Entorno de test

Para disponer de un entorno de test aislado, se utiliza una base de datos distinta de la de desarrollo y un fichero `.env.test` con sus propias credenciales. La idea es simple: el modelo Prisma es el mismo, pero la conexión apunta a otra base de datos y el seed de test carga un conjunto reducido de datos.

- base de datos de test: `films_db_test`
  - si no existe, podemos crearla con `createdb -U postgres films_db_test`
  - o, desde cliente, con `createdb -h localhost -p 5432 -U postgres films_db_test`
- variables de entorno: `.env.test` debe apuntar a esa base de datos
- cliente Prisma: es el mismo cliente generado; no hace falta regenerarlo sólo por cambiar de base
- lo que sí hay que hacer es aplicar el esquema a la base de datos de test

Esto último no genera nuevos artefactos de Prisma: simplemente crea en `films_db_test` las tablas, relaciones e índices definidos en `schema.prisma`.

Con la versión actual de Prisma del proyecto, el punto importante es que `prisma.config.ts` toma `DATABASE_URL` desde el entorno activo a traves de .env.

Se puede crear un nuevo fichero `prisma.config.test.ts` que apunte a `.env.test`:

```ts prisma.config.test.ts
import { config } from 'dotenv';
import { defineConfig, env } from 'prisma/config';

config({ path: '.env.test' });

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'node --env-file=.env.test ./src/config/db-test.seed.ts',
  },
  datasource: {
    url: env('DATABASE_URL'),
  },
});
```

En package.json podemos añadir los scripts npm que carguen ese fichero de entorno antes de invocar Prisma.

Una vez aplicada la estructura de la base de datos, el proyecto ya dispone de un seed específico de test:

```json
{
  "scripts": {
    "db:push:test": "prisma db push --config prisma.test.config.ts",
    "db:seed:test": "prisma db seed --config prisma.test.config.ts",
    "seed:test": "npm run db:push:test && npm run db:seed:test",
    "test": "node --env-file=.env.test --test",
    "test:serie": "node --env-file=.env.test --test --test-concurrency=1"
  }
}
```

El script `seed:test` utiliza `src/config/db-test.seed.ts`, que a su vez llama a las funciones de seed del proyecto pero con un conjunto de datos más pequeño, más apropiado para pruebas automáticas.

La secuencia práctica quedaría así:

1. Crear `films_db_test`.
2. Configurar `.env.test` para que apunte a esa base.
3. Preparar la base de datos de test:
   1. Aplicar el esquema con `prisma db push` usando la `DATABASE_URL` de test.
   2. Ejecutar `npm run seed:test`.
4. Ejecutar `npm test` o `npm run test:serie`.

Este enfoque mantiene separados:

- los datos de desarrollo;
- los datos de test;
- y los seed específico para pruebas, que podrán utilizarse desde los test, e.g. en el `beforeEach`.

### En resumen

Elementos implicados en el diseño del modelo de datos y su implementación con prisma:

- `prisma.config.ts` (configuración de prisma, incluyendo datasource y seed)
- `prisma.config.test.ts` (configuración de prisma para test, apuntando a .env.test)
- /prisma
  - /`schema.prisma` (definición del modelo de datos con prisma)
- /src
  - /config
    - `env.ts` (configuración de variables de entorno con Zod)
    - `db-config.ts` (configuración de la conexión a la base de datos con pg y prisma)
    - `db.seed.ts` (script para preparar la base de datos con datos iniciales)
    - `db-test.seed.ts` (script de seed específico para test)
  - /zod
    - `user.schemas.ts` (schemas de validación para usuarios y perfiles)
    - `film.schemas.ts` (schemas de validación para películas, géneros y reviews)
  - app.ts
  - index.ts

Otros elementos relacionados con el servidor y la API:

- src/
  - /errors
    - `http-error.ts` (clase base para errores HTTP)
  - /middlewares
    - `customs.ts` (middleware para añadir headers personalizados)
    - `error-handler.ts` (middleware para manejar errores)

## Diseño de la API

Los elementos básicos que definen una API RESTful son:

- Endpoint
- Recursos
- Operaciones (Métodos HTTP)

Entrando en detalle, estos elementos deben quedar claramente definidos en el **contrato del servicio**,

### Contrato del servicio

Es el acuerdo explícito entre el servidor y los clientes sobre cómo se deben comunicar.

El contrato del servicio incluye:

- estructura de las rutas
  - métodos HTTP admitidos
  - estructuras de datos de entrada (validación)
  - formatos de solicitud (JSON, multipart/form-data, etc.)
  - parámetros de entrada
    - filtros, ordenación, paginación
  - versionado de la API (v1, v2, etc.)
- formatos de respuesta
  - datos de salida y errores
  - códigos de estado
  - encabezados (Location, X-RateLimit, X-Project, etc.)

#### EndPoints

[GET] /api/films - 200 OK
[GET] /api/films/:id - 200 OK / 404 Not Found
[POST] /api/films [Admin/Editor] - 201 Created
[PATCH] /api/films/:id [Admin/Editor] - 200 OK / 404 Not Found
[DELETE] /api/films/:id [Admin/Editor] - 204 No Content / 404 Not Found

[POST] /api/users/registro - 201 Created
[POST] /api/users/login - 200 OK / 401 Unauthorized
[GET] /api/users [User...] - 200 OK
[GET] /api/users/:id [User...] - 200 OK / 404 Not Found
[PATCH] /api/users/:id [Owner,Admin] - 200 OK / 404 Not Found
[DELETE] /api/users/:id [Owner,Admin] - 204 No Content / 404 Not Found

[GET] /api/users/:id/reviews [User...] - 200 OK / 404 Not Found
[GET] /api/users/:id/reviews/:id [User...] - 200 OK / 404 Not Found
[POST] /api/users/:id/reviews [User...] - 201 Created
[PATCH] /api/users/:id/reviews/:id [Owner] - 200 OK / 404 Not Found
[DELETE] /api/users/:id/reviews/:id [Owner,Admin] - 204 No Content / 404 Not Found

#### Opciones: Parámetros y filtrado

Como extras del proyecto se pueden implementar opciones de filtrado, ordenación y paginación en los endpoints de listado. Por ejemplo:

```
GET /usuarios?email=ana@ejemplo.com&estado=activo&limit=10&offset=20
GET /productos?precio_min=10&precio_max=100&categoria=electronica
```

En caso de usar paginación, se recomienda seguir un formato estándar para la respuesta que incluya tanto los datos como la información de paginación, como el total de elementos, la página actual, el límite por página y enlaces a la siguiente y anterior página.

```json - Paginación estándar
{
  "data": [...],
  "pagination": {
    "total": 150,
    "page": 1,
    "limit": 10,
    "pages": 15,
    "next": "/usuarios?page=2",
    "prev": null
  }
}
```

#### Formatos de entrada: Zod schemas y validación:

```typescript
// Zod para entrada
const schema = z.object({ email: z.string().email() });
const resultado = schema.safeParse(req.body);
if (!resultado.success) return res.status(400).json(resultado.error);
```

### Políticas de servicio

- autenticación (login, JWT)
- autorización (RBAC: Role-Based Access Control)
- límites de uso
- gestión de errores
- requisitos de seguridad (CORS)
- metadatos de auto-descubrimiento
- health check estandarizado

### Pruebas y Documentación

- postman collections
- pruebas unitarias y de integración (supertest)
- OpenAPI (Swagger)

### Arquitectura y Secuencia de Implementación

Usaremos una arquitectura modular MVC + Repository para organizar el código de la aplicación.

La estructura de carpetas para una feature (entidad o conjunto de entidades), e.g. Films será la siguiente:

- src/
  - films/
    - entities/
      - `film.entity.ts` (definición de la entidad Film y sus DTOs)
      - `db-seed.ts` (función para preparar la base de datos con la tabla de films)
    - repositories/
      - `film.repository.ts` (clase con la lógica de acceso a datos para la entidad Film)
    - controllers/
      - `film.controller.ts` (clase con el controlador para manejar las solicitudes relacionadas con films)
    - routers/
      - `film.router.ts` (clase con la definición de las rutas relacionadas con films, utilizando el servicio)

La secuencia de implementación será la siguiente:

- entidades
- repositorios (recibe el cliente de prisma como DI)
- controladores (recibe el repositorio como DI)
- routers (recibe el controlador como DI)
- integración en app que instancia el repositorio, el controlador y el router, y los conecta con el cliente de prisma.

Sus funciones serán las siguientes:

- Cada **repositorio** se encargará de la lógica de acceso a datos para su entidad, utilizando el cliente de prisma para ejecutar consultas SQL.
- Cada **controlador** se encargará de manejar las solicitudes relacionadas con su entidad. Recibirá el repositorio como DI y lo utilizará para realizar las operaciones necesarias en la base de datos. El controlador también se encargará de de manejar cualquier error que pueda ocurrir durante el procesamiento de las solicitudes.
- Cada **router** se encargará de definir las rutas relacionadas con su entidad y de conectarlas con los métodos del controlador. Recibirá el controlador como dependencia y utilizará sus métodos para manejar las solicitudes en las rutas correspondientes.
- El router también se encargará invocar el **middleware** responsable de **validar** los datos de entrada utilizando los DTOs definidos en la entidad, y de manejar cualquier error que pueda ocurrir durante el procesamiento de las solicitudes.

**Montaje en la aplicación**: Una vez definidos el repositorio, el controlador y el router para la entidad Film, se integran en la aplicación principal. En el archivo `app.ts`, se instancia el repositorio pasando el cliente de prisma, luego se instancia el controlador pasando el repositorio, y finalmente se instancia el router pasando el controlador. El router se conecta a la aplicación utilizando `app.use()` para que las rutas relacionadas con films estén disponibles en la API.

## Usuarios

Los usuarios comportan una serie de características especiales que requieren un diseño específico, por su papel en dor elementos clave
de las políticas de servicio.

- autenticación (login, JWT)
- autorización (RBAC: Role-Based Access Control)

La **autenticación** (authentication) se refiere al proceso de verificar la identidad de un usuario, generalmente a través de un sistema de login que utiliza credenciales como email y contraseña. En este proyecto, se implementará un sistema de autenticación basado en JWT (JSON Web Tokens), que permitirá a los usuarios iniciar sesión y recibir un token que podrán usar para acceder a rutas protegidas.

La **autorización** (authorization) se refiere al proceso de verificar si un usuario autenticado tiene los permisos necesarios para realizar una acción específica. En este proyecto, se implementará un sistema de control de acceso basado en roles (RBAC), donde cada usuario tendrá un rol asignado (por ejemplo, ADMIN, EDITOR, USER) que determinará qué acciones pueden realizar en la API. Por ejemplo, sólo los usuarios con el rol ADMIN podrán eliminar films, mientras que los usuarios con el rol USER sólo podrán leer films y crear reviews.

### Contraseñas: Bcrypt y hashing

Como parte del proceso de **autenticación**, las contraseñas de los usuarios se almacenarán de forma segura utilizando un algoritmo de hashing. Esto garantiza que las contraseñas no se almacenen en texto plano en la base de datos, lo que mejora la seguridad general del sistema.

La librería `bcrypt` se utilizará para hashear las contraseñas antes de almacenarlas en la base de datos. Se basa en el algoritmo de hashing **Blowfish**, que es resistente a ataques de fuerza bruta y permite configurar un factor de costo para aumentar la dificultad de generar hashes, lo que mejora la seguridad a medida que aumenta la potencia de cómputo.

Proceso de hashing con bcrypt

1. Definir un factor de costo: habitualmente 12 se considera un buen equilibrio entre seguridad y rendimiento.
2. Generar un "salt" aleatorio, junto con los datos de configuración (algoritmo y factor de costo) para incluirlo en el hash resultante. El salt es un valor único que se combina con la contraseña para evitar ataques de rainbow tables.

   ```
   salt =  "$2b$12$N9qo8uLOickgx2ZMRZoMye" $[algoritmo]2<a/b/x/y>$[cost]$[22 character salt]
   ```

3. Combinar la contraseña con el salt
4. Aplicar el algoritmo blowfish en base al factor de costo (12): 2^12 veces (4,096 iteraciones)
5. Obtener el hash resultante: "$2b$12$N9qo8uLOickgx2ZMRZoMye.IjQ0JwF2cJX8nnYA5VYA.KQIeqHLWa"
   De acuerdo con el formato [salt].[31 character hash]

Se puede comprobar online con herramientas como <https://bcrypt-generator.com/>

El hash resultante depende de la contraseña original, el salt y el factor de costo. Esto significa que incluso si dos usuarios tienen la misma contraseña, sus hashes serán diferentes debido al uso de salts únicos.

- Durante el proceso de registro, la contraseña proporcionada por el usuario se hasheará utilizando `bcrypt.hash()` y luego se guardará en la base de datos.

- Durante el proceso de login, la contraseña proporcionada por el usuario se comparará con el hash almacenado utilizando `bcrypt.compare()`, lo que permitirá verificar si las credenciales son correctas sin exponer la contraseña original.

La comparación nunca recupera una contraseña. Crea un hash a partir de la contraseña proporcionada, con el salt y el factor de costo deducido de la contraseña hasheada, y lo compara con el hash almacenado. Si coinciden, el login es exitoso.

#### Servicio auth

Se utiliza la librería [`bcryptjs`](https://www.npmjs.com/package/bcryptjs), con 0 dependencias y TS incluido

```shell
npm i bcryptjs
```

La librería incluye funciones tanto síncronas como asíncronas para hashear y comparar contraseñas. En este proyecto se utilizarán las funciones **asíncronas** para evitar bloquear el event loop durante el proceso de hashing, que puede ser intensivo en recursos. Además por motivos de seguridad se recomienda los métodos asíncronos, ya que es más difícil para un atacante medir el tiempo exacto que tarda el proceso de hash, y esto dificulta los ataques de análisis de tiempo (timing attacks)

Para encapsular la lógica relacionada con la autenticación, se implementará un servicio de autenticación (`AuthService`) que se encargará de:

- hashear las contraseñas utilizando `bcrypt`
- verificar las credenciales de los usuarios durante el login
- generar JWTs para los usuarios autenticados
- verificar la validez de los JWTs en las rutas protegidas

```ts
import { compare, hash } from 'bcryptjs';
import { env } from '../config/env.ts';
import debug from 'debug';

const log = debug(`${env.PROJECT_NAME}:service:auth`);
log('Loading auth service...');

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AuthService {
  static saltRounds = 12;

  static hash(password: string): Promise<string> {
    return hash(password, this.saltRounds);
  }

  static compare(password: string, hash: string): Promise<boolean> {
    return compare(password, hash);
  }
}
```

En este punto, podemos completar nuestro seed de usuarios para que las contraseñas se almacenen hasheadas:

```ts
export const userSeed = async () => {
  // ...
  const hashedPassword = await AuthService.hash(user.password);
  await prisma.user.create({
    data: {
      email: user.email,
      password: hashedPassword, // Almacenamos la contraseña hasheada
      role: user.role,
      profile: {
        create: user.profile,
      },
    },
  });
```

### JSON Web Tokens (JWT)

Los JSON Web Tokens (JWT) son un estándar abierto para la transmisión segura de información entre partes como un objeto JSON. En el contexto de la autenticación, los JWT se utilizan para representar la identidad del usuario y sus permisos de acceso de forma compacta y segura.

Un JWT consta de tres partes:

- el encabezado (header) que especifica el algoritmo de firma utilizado (e.g. HS256) y el tipo de token (JWT),
- el cuerpo (payload) que contiene la información relevante sobre el usuario (como su ID y rol),
- la firma (signature) que se genera mediante el algoritmo seleccionado utilizando una clave secreta (almacenada generalmente entre las variables de entorno del proyecto) para garantizar la integridad del token. También puede generarse con una clave pública/privada en lugar de una clave secreta, dependiendo del algoritmo utilizado.

El resultado es un conjunto de tres cadenas de caracteres codificadas en Base64 y separadas por puntos, como se puede ver en [jwt.io](https://www.jwt.io/).

El payload es el conjunto de datos que se quiere transmitir, y suele incluir información como el ID del usuario, su rol, y cualquier otro dato relevante para la autenticación y autorización. Por ejemplo:

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "role": "ADMIN",
  "iat": 1516239022
}
```

El payload esta codificado en Base64, por lo que el token resultante no es legible directamente, pero NO está encriptado y se puede decodificar para ver su contenido. Por lo tanto nunca debe incluir información sensible que no se quiera exponer, como contraseñas o datos personales.

El token se puede enviar al cliente después de un login exitoso. El cliente puede almacenar este token (por ejemplo, en localStorage o como una cookie) y enviarlo en el encabezado de autorización de las solicitudes a rutas protegidas para que el servidor pueda verificar la identidad del usuario y sus permisos.

#### Secret

La clave secreta utilizada para firmar los JWTs debe ser una cadena larga y aleatoria, y debe mantenerse segura en el entorno del servidor. Es común almacenarla en una variable de entorno (e.g. `JWT_SECRET`) para evitar exponerla en el código fuente.

En nuestra arquitectura,

- modificaremos el esquema de Zod que valida las variables de entorno para incluir `JWT_SECRET` como una cadena de un mínimo de 32 caracteres.

  ```ts
  export const EnvSchema = z.object({
    PORT: z.coerce.number(),
    NODE_ENV: z.enum(['dev', 'prod', 'test']),
    DEBUG: z.string().optional(),
    PROJECT_NAME: z.string(),
    JWT_SECRET: z.string().min(32), // Asegura que la clave sea al menos de 32 caracteres
    PGUSER: z.string(),
    PGPASSWORD: z.string(),
    PGHOST: z.string(),
    PGPORT: z.coerce.number(),
    PGDATABASE: z.string(),
  });
  ```

- informaremos en `.env.sample` que es necesario definir esta variable para que el sistema de autenticación funcione correctamente.
- añadiremos la variable `JWT_SECRET` a los ficheros de entorno (`.env` y `.env.test`) con valores de ejemplo, para que el sistema de autenticación pueda ser probado tanto en desarrollo como en test sin necesidad de configurar esta variable manualmente.
- desde `env.ts` importaremos `JWT_SECRET` como parte de `env`, para que esté disponible en toda la aplicación a través de `env.JWT_SECRET` y pueda ser utilizada en el resto del proyecto
- esta variable se usará en el `AuthService` para generar y verificar los JWTs

#### Servicio auth y token JWT

Se utiliza la librería [`jsonwebtoken`](https://www.npmjs.com/package/jsonwebtoken) para generar y verificar JWTs.

```shell
npm i jsonwebtoken
npm i -D @types/jsonwebtoken
```

En el fichero `types/login.ts` se define el interface de nuestro payload de JWT, que extiende el tipo `JwtPayload` de la librería. Aunque el interface proporcionado ya admite campos personalizados, lo extendemos para incluir explícitamente los campos que vamos a usar en nuestro proyecto:

```ts
interface JwtPayload {
  [key: string]: any;
  iss?: string | undefined;
  sub?: string | undefined;
  aud?: string | string[] | undefined;
  exp?: number | undefined;
  nbf?: number | undefined;
  iat?: number | undefined;
  jti?: string | undefined;
}
```

Incluimos los campos específicos que queremos usar en nuestro proyecto, como `sub` (ID del usuario), iat (timestamp de emisión), `email` y `role` (rol del usuario).

```ts
export interface TokenPayload extends JwtPayload {
    id: number;
    email: string;
    role: string;
} extends JwtPayload
```

También se define el typo correspondiente al resultado del login, que incluye el token generado y el payload decodificado:

```ts
export interface LoginResult {
  token: string;
  payload: TokenPayload;
}
```

Se añaden nuevos métodos al `AuthService` para manejar JWTs:

```ts
import jwt, { type JwtPayload } from 'jsonwebtoken';
import { env } from '../config/env.ts';

export class AuthService {
  // ... métodos de hashing y comparación de contraseñas

  static generateToken(payload: Payload): string {
    return jwt.sign(
      payload,
      env.JWT_SECRET,
      //{ expiresIn: '1h' }
    );
  }

  static verifyToken(token: string): TokenPayload | null {
    try {
      return jwt.verify(token, env.JWT_SECRET) as TokenPayload;
    } catch (error) {
      log('Invalid token:', error);
      return null;
    }
  }
}
```

Los métodos de jwt son sincronos si no se les proporciona un callback.

jwt.verify tiene tres posibles comportamientos:

- Si el token es válido, y tambión lo son los valores opcionales de `expiration`, `audience` o `issuer`, devuelve el payload decodificado.
- Si el token es inválido (e.g. firma incorrecta, formato no válido), lanza un error `JsonWebTokenError`.
- Si el token ha expirado, también lanza un error específico, `TokenExpiredError`

Los errores se capturan en el catch, se loguea el error y se devuelve null. Esto permite que el método `verifyToken` devuelva un payload válido si el token es correcto, o null si el token es inválido o ha expirado, sin lanzar errores que puedan interrumpir el flujo de la aplicación.

### Repositorio: UsersRepo

La clase `UsersRepository` se encargará de la lógica de acceso a datos para la entidad User. Tendrá métodos para crear, leer, actualizar y eliminar usuarios en la base de datos, así como métodos específicos para manejar la autenticación y autorización de usuarios. Utilizará el cliente de prisma que recibe como DI para ejecutar consultas SQL y manejará cualquier error que pueda ocurrir durante el acceso a los datos.

- estructura de carpetas
  - src/
    - services/
      - `auth.service.ts` (clase con la lógica de autenticación, incluyendo hashing de contraseñas y generación/verificación de JWTs)
    - types/
      - `login.ts` (tipos para el payload del login y su resultado)
    - users/
      - repositories/
        - `users.repository.ts` (clase con la lógica de acceso a datos para la entidad User)
        - `users.repository.test.ts` (tests unitarios para el repositorio de usuarios)
- DI: el repositorio de usuarios recibirá el cliente de prisma como dependencia inyectada, lo que permitirá una mayor flexibilidad y facilidad para realizar pruebas unitarias utilizando mocks del cliente de prisma.
- definición de la clase `UsersRepository` con métodos para crear (register), leer, actualizar y eliminar usuarios en la base de datos, ademáss de gestionar el login.
- escribimos y ejecutamos tests de integración para el repositorio de usuarios, utilizando una base de datos de test preparada con la función `seedUsersTestDB` para asegurar que la tabla de usuarios esté creada y limpia antes de cada test.

#### Register (UserRepo)

El método `register` del `UserRepository` se encargará de crear un nuevo usuario en la base de datos. Recibirá los datos del usuario, incluyendo su email, contraseña y perfil, y realizará las siguientes operaciones:

Para el perfil se utiliza la creación anidada de Prisma, que permite crear un usuario y su perfil relacionado en una sola operación. Esto es posible porque la relación entre `User` y `Profile` es de uno a uno, y Prisma puede manejar la creación de ambos registros de forma atómica.

```ts
    async register(userData: RegisterUserData) {
        console.log(userData);
        const hashedPassword = await AuthService.hash(userData.password);
        const result = await this.#prisma.user.create({
            data: {
                email: userData.email,
                password: hashedPassword,
                role: Role.USER,
                profile: {
                    create: userData.profile,
                },
            },
            include: {
                profile: true,
            },
            // omit: {
            //     password: true,
            // },
        });

        return result;
    }
```

El método devuelve el usuario creado, incluyendo su perfil relacionado. En este punto, la contraseña se ha hasheado utilizando el `AuthService` antes de ser almacenada en la base de datos, lo que garantiza que las contraseñas no se almacenen en texto plano. Además, la contraseña hasheada no se incluye en el resultado devuelto por el método, lo que mejora la seguridad al evitar exponer incluso el hash de la contraseña. Como este comportamiento se ha configurado por defecto en el cliente de prisma, no es necesario el código comentado `omit: { password: true }` en cada consulta, aunque se podría hacer si se quisiera asegurar que la contraseña nunca se incluya en ningún resultado.

#### Login (UserRepo)

El método `login` del `UserRepository` se encargará de autenticar a un usuario. Recibirá las credenciales del usuario (email y contraseña) y realizará las siguientes operaciones:

1. Buscará al usuario en la base de datos utilizando el email proporcionado.
2. Si el usuario no existe, lanzará un error de autenticación
3. Si el usuario existe, comparará la contraseña proporcionada con el hash almacenado en la base de datos utilizando el `AuthService`.
4. Si la contraseña es incorrecta, lanzará un error de autenticación.
5. Si la contraseña es correcta, generará un JWT para el usuario utilizando el `AuthService` y lo devolverá como resultado, junto con la información del usuario incluida en el token (payload).

```ts
async login(userData: LoginUserData) {
    const loginError = new HttpError(401, 'Unauthorized', 'Invalid user or password');

    const result = await this.#prisma.user.findUniqueOrThrow({
        where: {
            email: userData.email,
        },
        omit: {
            password: false,
        },
    });

    const isValid = await AuthService.compare(
        userData.password, // desencriptada
        result.password, // encriptada
    );

    if (!isValid) {
      throw new PrismaClientKnownRequestError('Invalid user or password', {
          code: 'P2004',
          clientVersion: '',
      })
    }

    // create token
    const payload: TokenPayload = {
        id: result.id,
        email: result.email,
        role: result.role,
    };
    const token = AuthService.generateToken(payload);

    return {
        payload,
        token,
    };
}
```

#### Read (UserRepo)

Similares a los de cualquier otro repo se pueden añadir los métodos de lectura de usuarios, como `getById`, `getAll`, etc. Ambos incluyen la información del profile y omiten la contraseña hasheada en los resultados, utilizando la configuración del cliente de prisma.

```ts
async getAllUsers() {
    return this.#prisma.user.findMany({
        include: {
            profile: true,
        },
    }) as Promise<User[]>;
}

async getUserById(id: number) {
    return this.#prisma.user.findUniqueOrThrow({
        where: {
            id,
        },
        include: {
            profile: true,
        },
    }) as Promise<User | null>;
}
```

En este caso prisma dispone de 2 métodos para obtener un único registro: `findUnique` y `findUniqueOrThrow`. El primero devuelve `null` si no encuentra el registro, mientras que el segundo lanza un error `PrismaClientKnownRequestError`.

En este proyecto se ha optado por usar `findUniqueOrThrow` para ser coherentes con la forma de comportamiento de update y delete.

#### Updates (UserRepo)

Los updates de usuarios plantean algunas cuestiones de diseño interesantes, distinguiéndose las actualizaciones de la propia entidad User o de su perfil relacionado:

- actualización de la contraseña
- actualización del email (quizás requiera un proceso de verificación adicional para confirmar el nuevo email o quizás no se permita actualizar el email para evitar problemas de autenticación)
- actualización del rol (solo por admin)
- actualización del perfil (solo por el owner)

Separando los primeros y el último tendremos dos métodos de actualización distintos.

```ts
  async updateUser(id: number, data: UserUpdateDTO) {
      return this.#prisma.user.update({
          where: {
              id,
          },
          data: {
              ...data,
              ...(data.password && {
                  password: await AuthService.hash(data.password),
              }),
          },
          include: {
              profile: true,
          },
      }) as Promise<User>;
  }
```

En el caso de actualizar la contraseña, se hashea la nueva contraseña utilizando el `AuthService` antes de almacenarla en la base de datos, para garantizar que las contraseñas no se almacenen en texto plano. Además, la contraseña hasheada no se incluye en el resultado devuelto por el método, lo que mejora la seguridad al evitar exponer incluso el hash de la contraseña. Como este comportamiento se ha configurado por defecto en el cliente de prisma, no es necesario el código comentado `omit: { password: true }` en cada consulta, aunque se podría hacer si se quisiera asegurar que la contraseña nunca se incluya en ningún resultado.

En el caso del profile, al ser una entidad relacionada, se puede utilizar la sintaxis de actualización anidada de Prisma para actualizar el perfil del usuario en la misma operación que se actualiza el usuario. Esto permite mantener la integridad de los datos y simplificar el proceso de actualización.

```ts
  async updateUserProfile(userId: number, profileData: ProfileUpdateDTO) {
      return this.#prisma.user.update({
          where: {
              id: userId,
          },
          data: {
              profile: {
                  update: profileData,
              },
          },
          include: {
              profile: true,
          },
      }) as Promise<User>;
  }
```

En ambos casos, el método devuelve el usuario actualizado, incluyendo su perfil relacionado. Si el id proporcionado no corresponde a ningún usuario en la base de datos, Prisma lanzará un error `PrismaClientKnownRequestError` que se puede capturar en el controlador para lanzar un error de "Not Found" con un mensaje personalizado.

#### Delete (UserRepo)

El método `deleteUser` se encargará de eliminar un usuario de la base de datos. Recibirá el ID del usuario a eliminar y realizará las siguientes operaciones:

1. Verificará si el usuario existe en la base de datos utilizando el ID proporcionado.
2. Si el usuario no existe, lanzará un error PrismaClientKnownRequestError.
3. Si el usuario existe, eliminará el usuario de la base de datos utilizando el cliente de prisma y devolverá el resultado de la operación.

```ts
  async deleteUser(id: number) {
      return this.#prisma.user.delete({
          where: {
              id,
          },
      }) as Promise<User>;
  }
```

#### Errores Not Found (UserRepo)

En el proceso de login, si el usuario no existe, al usar `findUniqueOrThrow`, prisma lanzará un error `PrismaClientKnownRequestError` con un código específico (P2025) que indica que el registro no fue encontrado. Si la paswword es incorrectas es nuestro código el que lanza el mismo error.

En los casos de lectura, actualización y eliminación, si el ID proporcionado no corresponde a ningún usuario en la base de datos, Prisma lanzará un error `PrismaClientKnownRequestError`. Si el usuario existe y se manipula correctamente, el método devolverá el usuario afectado como resultado.

Para evitar salto de capa (layer skipping) o permeabilidad, estos errores no deben ser convertidos a errores HTTP en el repositorio, sino que se debe dejar que se propaguen hasta las capas superiores

- hasta el controlador, donde se puede capturar y convertir a un error HTTP adecuado: "401 Unauthorized" o "404 Not Found", con un mensaje personalizado en cada caso (así lo haremos en nuestra aplicación).
- hasta el manejador de errores global, donde se puede capturar y tratar como los demás errores, emitiendo la srspuesta adecurada, con un código de estado apropiado (404 Not Found).

Esto permite mantener la separación de responsabilidades entre el repositorio (que se encarga del acceso a datos) y el controlador (que se encarga de manejar las solicitudes y respuestas HTTP), y facilita el manejo de errores de forma consistente en toda la aplicación.

### Controller: UsersController

El controlador `UsersController` se encargará de manejar las solicitudes relacionadas con usuarios. Recibirá el repositorio como dependencia y utilizará sus métodos para realizar las operaciones necesarias en la base de datos. El controlador también se encargará de manejar cualquier error que pueda ocurrir durante el procesamiento de las solicitudes.

- estructura de carpetas
  - src/
    - users/
      - controllers/
        - `users.controller.ts` (clase con el controlador para manejar las solicitudes relacionadas con users)
        - `users.controller.test.ts` (tests unitarios para el controlador de users).
- definición de la clase `UsersController` con métodos para manejar las solicitudes relacionadas con users, utilizando el repositorio para realizar las operaciones necesarias en la base de datos
- logueo de debug
  - al importar el módulo
  - al crear una instancia del controlador
  - para cada método del controlador, indicando la operación que se está realizando
- tipado de los datos de entrada utilizando los DTOs definidos en la entidad Film
- manejo de errores utilizando la clase `HttpError` para representar errores personalizados relacionados con las solicitudes HTTP
- escribimos y ejecutamos tests unitarios para el controlador de users, utilizando mocks para el repositorio y para los objetos de request, response y next de Express, para asegurar que el controlador maneja correctamente las solicitudes y los errores relacionados con las operaciones de users. Solo se incluyen como ejemplo tests para el método de lectura de users.

#### Register (UserController)

El método `register` del `UsersController` se encargará de manejar las solicitudes de registro de nuevos usuarios.

- Recibirá los datos del usuario a registrar a través del cuerpo de la solicitud
- previemanete validados en un meiddlewaw utilizando los DTOs definidos en la entidad User
- luego utilizará el repositorio para crear el nuevo usuario en la base de datos.

Como resultado

- Si la operación es exitosa, devolverá una respuesta con el usuario creado (sin la contraseña hasheada) con un código de estado 201.
- Si ocurre algún error durante el proceso, como datos inválidos o problemas con la base de datos, capturará el error y llamará al middleware de errores pasándole un error de la clase `HttpError` para que genere y envía una respuesta HTTP adecuada utilizando lael error recibido.

```ts
async register(req: Request, res: Response, next: NextFunction) {
    try {
      log('Registering new user...');
      const userData: RegisterUserData = req.body; // Validate this data in a real application
      const user: User = await this.#repo.register(userData);
      return res.status(201).json(user);
    } catch (error) {
      log('Error registering user: %O', error);
      const finalError = new HttpError(
          500,
          'Internal Server Error',
          'Failed to register user',
          {
              cause: error,
          },
      );
      return next(finalError);
    }
}
```

#### Login (UserController)

El método `login` del `UsersController` se encargará de manejar las solicitudes de login de los usuarios.

- Recibirá las credenciales del usuario a través del cuerpo de la solicitud
- previamente validadas en un middleware utilizando los DTOs definidos en la entidad User
- luego utilizará el repositorio para autenticar al usuario y generar un JWT.

Como resultado

- Si las credenciales son válidas, devolverá una respuesta con el usuario autenticado y el token JWT con un código de estado 200.
- Si las credenciales son inválidas o ocurre algún error durante el proceso, capturará el error y llamará al middleware de errores pasándole un error de la clase `HttpError` para que genere y envíe una respuesta HTTP adecuada utilizando el error recibido.
- Si ocurre algún otro tipo de error

```ts
export class UsersController {
  // ...
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      log('Logging in user...');
      const loginData = req.body; // Validar estos datos en una app real
      const loginResult: LoginResult = await this.#repo.login(loginData);
      return res.json(loginResult);
    } catch (error) {
      log('Error logging in user: %O', error);
      if (error instanceof PrismaClientKnownRequestError) {
        const finalError = new HttpError(
          401,
          'Unauthorized',
          'Invalid email or password',
          {
            cause: error,
          },
        );
        return next(finalError);
      }
      const finalError = new HttpError(
        500,
        'Internal Server Error',
        'Failed to login user',
        {
          cause: error,
        },
      );
      return next(finalError);
    }
  }
}
```

#### Read (UserController)

Los métodos de lectura del `UsersController` se encargan de recuperar usuarios desde el repositorio.

- `getAllUsers` devuelve la colección completa de usuarios.
- `getUserById` devuelve un único usuario a partir de su `id`.
- en ambos casos el controller delega en el repositorio y transforma los errores en respuestas HTTP adecuadas.

Como resultado:

- Si la operación es exitosa, la respuesta será `200 OK` con los datos solicitados en formato JSON.
- Si en la lectura por `id` Prisma no encuentra el usuario, se transforma el error en `404 Not Found`.
- Si ocurre cualquier otro problema, se delega en el middleware de errores con un `HttpError` de tipo `500`.

```ts
async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      log('Getting all users...');
      const users: User[] = await this.#repo.getAllUsers();
      return res.json(users);
    } catch (error) {
      log('Error getting all users: %O', error);
      const finalError = new HttpError(
          500,
          'Internal Server Error',
          'Failed to get users',
          {
              cause: error,
          },
      );
      return next(finalError);
    }
}

async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id); // Validate this data in a real application
      log('Get User: %O', id);
      const user: User = await this.#repo.getUserById(id);
      return res.json(user);
    } catch (error) {
      log('Error getting user by id: %O', error);
      if (
          error instanceof PrismaClientKnownRequestError &&
          error.code === 'P2025'
      ) {
          const finalError = new HttpError(
              404,
              'Not Found',
              'User not found',
              {
                  cause: error,
              },
          );
          return next(finalError);
      }

      const finalError = new HttpError(
          500,
          'Internal Server Error',
          'Failed to get user',
          {
              cause: error,
          },
      );
      return next(finalError);
    }
}
```

#### Update (UserController)

Los métodos de actualización del `UsersController` permiten modificar tanto los datos principales del usuario como su perfil.

- `updateUser` trabaja con el DTO `UserUpdateDTO` y permite cambios parciales sobre `email`, `password` y `role`.
- `updateProfileUser` actualiza únicamente el perfil asociado al usuario.
- ambos métodos reciben el `id` desde `req.params`, delegan la persistencia en el repositorio y convierten los errores de ausencia de registro en `404`.

Como resultado:

- Si la operación es exitosa, devuelven `200 OK` con el usuario actualizado.
- Si Prisma no encuentra el usuario, la respuesta será `404 Not Found`.
- Si ocurre cualquier otro problema, el controller genera un `HttpError` de tipo `500`.

```ts
async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const id = Number(req.params.id); // Validate this data in a real application
      log('Updating user with ID: %O', id);
      const userData: UserUpdateDTO = req.body; // Validate this data in a real application
      const user: User = await this.#repo.updateUser(id, userData);
      return res.json(user);
    } catch (error) {
      log('Error updating user: %O', error);
      if (
          error instanceof PrismaClientKnownRequestError &&
          error.code === 'P2025'
      ) {
          const finalError = new HttpError(
              404,
              'Not Found',
              'User not found',
              {
                  cause: error,
              },
          );
          return next(finalError);
      }

      const finalError = new HttpError(
          500,
          'Internal Server Error',
          'Failed to update user',
          {
              cause: error,
          },
      );
      return next(finalError);
    }
}

async updateProfileUser(req: Request, res: Response, next: NextFunction) {
    try {
      log('Updating user profile...');
      const id = Number(req.params.id); // Validate this data in a real application
      const profileData: Partial<ProfileDTO> = req.body; // Validate this data in a real application
      const user: User = await this.#repo.updateUserProfile(
          id,
          profileData,
      );
      return res.json(user);
    } catch (error) {
      log('Error updating user profile: %O', error);
      if (
          error instanceof PrismaClientKnownRequestError &&
          error.code === 'P2025'
      ) {
          const finalError = new HttpError(
              404,
              'Not Found',
              'User not found',
              {
                  cause: error,
              },
          );
          return next(finalError);
      }

      const finalError = new HttpError(
          500,
          'Internal Server Error',
          'Failed to update user profile',
          {
              cause: error,
          },
      );
      return next(finalError);
    }
}
```

#### Delete (UserController)

El método `deleteUser` del `UsersController` se encarga de eliminar un usuario existente a partir de su `id`.

- obtiene el identificador desde `req.params`;
- delega la eliminación en el repositorio;
- si Prisma indica que el usuario no existe, transforma el error en `404 Not Found`.

Como resultado:

- Si la operación es exitosa, devuelve `204 No Content`.
- Si el usuario no existe, devuelve `404 Not Found`.
- Si ocurre cualquier otro problema, delega en el middleware de errores con un `HttpError` de tipo `500`.

```ts
async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
        const id = Number(req.params.id); // Validate this data in a real application
        log('Deleting user with ID: %O', id);
        await this.#repo.deleteUser(id);
        return res.status(204).end();
    } catch (error) {
        log('Error deleting user: %O', error);
        if (
            error instanceof PrismaClientKnownRequestError &&
            error.code === 'P2025'
        ) {
            const finalError = new HttpError(
                404,
                'Not Found',
                'User not found',
                {
                    cause: error,
                },
            );
            return next(finalError);
        }

        const finalError = new HttpError(
            500,
            'Internal Server Error',
            'Failed to delete user',
            {
                cause: error,
            },
        );
        return next(finalError);
    }
}
```

### Router: UsersRouter

El router `UsersRouter` se encarga de definir las rutas relacionadas con users y de conectarlas con los métodos del controlador. Recibe el controller como dependencia y utiliza sus métodos para manejar las solicitudes HTTP en cada endpoint.

- estructura de carpetas
  - src/
    - users/
      - routers/
        - `users.router.ts` (clase con la definición de las rutas relacionadas con users, utilizando el servicio)
- definición de la clase `UsersRouter` con el router de Express y el controller como dependencia inyectada.
- logueo de debug
  - al importar el módulo
  - al crear una instancia del router
- en el constructor se definen las rutas relacionadas con users, utilizando el método correspondiente del controlador para manejar las solicitudes en las rutas correspondientes

En la versión actual del proyecto, el router ya monta:

- `POST /register`
- `POST /login`
- `GET /`
- `GET /:id`
- `PATCH /:id`
- `DELETE /:id`

El código del router queda así:

```ts
import { env } from '../../config/env.ts';
import debug from 'debug';
import type { UsersController } from '../controllers/users.controller.ts';
import { Router } from 'express';

const log = debug(`${env.PROJECT_NAME}:router:users`);
log('Loading users router...');

export class UsersRouter {
  #controller: UsersController;
  #router: Router;

  constructor(controller: UsersController) {
    log('Initializing users router...');
    this.#controller = controller;
    this.#router = Router();

    this.#router.post(
      '/register',
      this.#controller.register.bind(this.#controller),
    );
    this.#router.post('/login', this.#controller.login.bind(this.#controller));
    this.#router.get('/', this.#controller.getAllUsers.bind(this.#controller));
    this.#router.get(
      '/:id',
      this.#controller.getUserById.bind(this.#controller),
    );
    this.#router.patch(
      '/:id',
      this.#controller.updateUser.bind(this.#controller),
    );
    this.#router.delete(
      '/:id',
      this.#controller.deleteUser.bind(this.#controller),
    );
  }

  get router() {
    return this.#router;
  }
}
```

Se utiliza `.bind(this.#controller)` para conservar correctamente el contexto de `this` cuando Express invoque los métodos del controller.

También conviene observar dos detalles del estado actual:

- el controller ya tiene un método `updateProfileUser`, pero todavía no existe una ruta específica que lo exponga;
- el módulo de validación con Zod lo incorporarremos más adelante.

### Montaje en la aplicación

Una vez definidos el repositorio, el controlador y el router para la entidad Users, se integran en la aplicación principal. En el archivo `app.ts`, se instancia el repositorio pasando el cliente de prisma, luego se instancia el controlador pasando el repositorio, y finalmente se instancia el router pasando el controlador. El router se conecta a la aplicación utilizando `app.use()` para que las rutas relacionadas con users estén disponibles en la API.

```ts
export const createApp = (prisma: AppPrismaClient) => {
  // ...
  const appRepo = new UsersRepo(prisma);
  const appController = new UsersController(appRepo);
  const appRouter = new UsersRouter(appController);
  app.use('/api/users', appRouter.router);
};
```

### Validaciones con zod

Para validar los datos de entrada en las solicitudes relacionadas con users, se utilizan schemas de zod definidos en la entidad Users. Estos schemas permiten validar los datos de creación, login y actualización, asegurando que los datos recibidos en las solicitudes cumplen con el formato esperado antes de ser procesados por el controlador y el repositorio. Los DTOs definidos en la entidad Users corresponden a estos schemas y se utilizan como tipos para indicar a nivel de TypeScript el formato esperado de los datos de entrada.

- estructura de carpetas
  - src/
    - middleware/
      - `validations.ts` (definición de los schemas de zod para validación de los datos)
- cada validador es un middleware de Express que utiliza el schema de zod que recibe como parámetro
  - validateId: middleware para validar que el parámetro id en la ruta es un número entero positivo
  - validateBody: middleware para validar que el cuerpo de la solicitud cumple con el schema de zod correspondiente a la operación que se está realizando (creación o actualización de users)
- estos middlewares se pueden utilizar en las rutas definidas en el router de users para asegurar que los datos recibidos en las solicitudes cumplen con el formato esperado antes de ser procesados por el controlador y el repositorio.

#### Validador de ID

El validador de ID es un middleware que se encarga de validar que el parámetro `id` en la ruta es un número entero positivo. Utiliza un schema de zod para realizar esta validación y, si el ID no es válido, devuelve una respuesta con un error de tipo `400 Bad Request` indicando que el ID proporcionado no es válido.

```ts
export const validateId = (
  schema: ZodObject = z.object({ id: z.coerce.number().int().positive() }),
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    log('Validating ID...');
    const { id } = req.params;
    if (!id) {
      const error = new HttpError(400, 'Bad Request', 'Animal ID is required');
      next(error);
    }
    try {
      schema.parse({ id });
      next();
    } catch (error) {
      next(error);
    }
  };
};
```

##### Validador de Body

El validador de body es un middleware que se encarga de validar que el cuerpo de la solicitud cumple con el schema de zod correspondiente a la operación que se está realizando (creación o actualización de users). Recibe como parámetro el schema de zod que se desea utilizar para la validación y, si los datos no son válidos, devuelve una respuesta con un error de tipo `400 Bad Request` indicando que los datos proporcionados no son válidos.

```ts
export const validateBody = (schema: ZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    log('Validating request body...');
    try {
      const validationResult = schema.parse(req.body);
      // Actualiza el body de la solicitud con los datos validados
      // incluyendo posibles transformaciones realizadas por Zod
      req.body = validationResult;
      next();
    } catch (error) {
      next(error);
    }
  };
};
```

NOTA: puede ser interesante cambiar los schemas de zod usando strictObject para evitar que se permitan campos adicionales no definidos en el schema, lo que puede ayudar a prevenir errores o ataques relacionados con datos inesperados en las solicitudes.

#### Validadores en el UsersRouter

Los middlewares de validación se pueden utilizar en las rutas definidas en el `UsersRouter` para asegurar que los datos recibidos en las solicitudes cumplen con el formato esperado antes de ser procesados por el controlador y el repositorio. Por ejemplo, se puede utilizar el validador de ID en las rutas que requieren un ID como parámetro, y el validador de body en las rutas que reciben datos en el cuerpo de la solicitud.

```ts
export class UsersRouter {
  #controller: UsersController;
  #router: Router;
  constructor(controller: UsersController) {
    log('Initializing users router...');
    this.#controller = controller;
    this.#router = Router();

    // Define routes and bind them to controller methods
    // For example:
    this.#router.post(
      '/register',
      validateBody(RegisterUserDTOSchema),
      this.#controller.register.bind(this.#controller),
    );
    this.#router.post(
      '/login',
      validateBody(UserCredentialsDTOSchema),
      this.#controller.login.bind(this.#controller),
    );
    this.#router.get('/', this.#controller.getAllUsers.bind(this.#controller));
    this.#router.get(
      '/:id',
      validateId(),
      this.#controller.getUserById.bind(this.#controller),
    );
    this.#router.patch(
      '/:id',
      validateId(),
      validateBody(UpdateUserDTOSchema),
      this.#controller.updateUser.bind(this.#controller),
    );
    this.#router.delete(
      '/:id',
      validateId(),
      this.#controller.deleteUser.bind(this.#controller),
    );
  }

  get router() {
    return this.#router;
  }
}
```

### Prueba de las rutas: Postman

Una vez que las rutas relacionadas con users están definidas en el `UsersRouter` y montadas en la aplicación, se pueden probar utilizando una herramienta como Postman para enviar solicitudes HTTP a los endpoints correspondientes y verificar que las respuestas son las esperadas.

Crearemos una coleccióbn depostman para poder probar las siguientes operaciones:

- Registro de un nuevo usuario (`POST /api/users/register`)
- Login de un usuario existente (`POST /api/users/login`)
- Obtención de todos los usuarios (`GET /api/users/`)
- Obtención de un usuario por ID (`GET /api/users/:id`)
- Actualización de un usuario (`PATCH /api/users/:id`)
- Eliminación de un usuario (`DELETE /api/users/:id`)

NOTA: Detectamos un error en el delete por la relación con profile: al eliminar un usuario, Prisma lanza un error `P2003` indicando que no se puede eliminar el usuario porque hay un registro relacionado en la tabla `Profile` que depende de él. Esto se debe a que la relación entre `User` y `Profile` es de uno a uno, y Prisma no permite eliminar un registro padre (`User`) si hay un registro hijo (`Profile`) que depende de él sin manejar explícitamente la eliminación de la relación. Para solucionar este problema, se puede configurar la relación en el esquema de Prisma para que, al eliminar un usuario, también se elimine automáticamente su perfil relacionado utilizando `onDelete: Cascade`. Esto se puede hacer modificando el modelo `User` en el archivo `schema.prisma` de la siguiente manera:

```prisma
model User {
  id       Int     @id @default(autoincrement())
  email    String  @unique
  password String
  role     Role    @default(USER)
  profile  Profile @relation(fields: [profileId], references: [id], onDelete: Cascade)
  profileId Int
}
```

Con esta configuración, cuando se elimine un usuario, Prisma eliminará automáticamente el perfil relacionado, evitando el error `P2003` y permitiendo que la operación de eliminación se realice correctamente. Después de realizar este cambio en el esquema de Prisma, es necesario ejecutar `npx prisma migrate dev` para aplicar la migración correspondiente a la base de datos.

## Implementación de Políticas de servicio

- autenticación (login, JWT)
- autorización (RBAC: Role-Based Access Control)
- límites de uso
- gestión de errores
- requisitos de seguridad (CORS)
- metadatos de auto-descubrimiento
- health check estandarizado

### Autenticación (Authentication) y rutas protegidas

El proceso de autenticación se implementa en el método `login` del `UserRepository`, donde se verifica que las credenciales proporcionadas por el usuario son correctas. Si la autenticación es exitosa, se genera un token JWT que incluye información relevante del usuario (como su ID, email y rol) en el payload. Este token se devuelve al cliente como parte de la respuesta.

Una vez que el **cliente** tiene el token JWT, puede incluirlo en las cabeceras de las solicitudes a rutas protegidas para acceder a **recursos que requieren autenticación**.

Para proteger estas rutas, se puede implementar un **middleware de autenticación** que verifique la validez del token JWT en cada solicitud. Este middleware se encargará de:

1. Extraer el token JWT de las cabeceras de la solicitud (generalmente en la cabecera `Authorization` con el formato `Bearer <token>`).
2. Verificar la validez del token utilizando el `AuthService` para asegurarse de que el token no ha expirado y que ha sido firmado correctamente.
3. Si el token es válido, extraer la información del usuario del payload del token y adjuntarla al objeto `req` para que esté disponible en los controladores que manejan las rutas protegidas.
4. Si el token no es válido o no se proporciona, el middleware debe responder con un error de tipo `401 Unauthorized`, indicando que el acceso a la ruta está restringido a usuarios autenticados.

#### Interface de la request de Express

Para poder guardar la información del usuario autenticado en el objeto `req`, se puede extender la interfaz `Request` de Express para incluir un nuevo campo, por ejemplo `user`, que contendrá la información del usuario extraída del token JWT. Esto se puede hacer creando un archivo de declaración de tipos (por ejemplo, `types.d.ts`) con el siguiente contenido:

```ts
import { TokenPayload } from './services/auth.service.ts';

declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload;
    }
  }
}
```

Para aplicar esta extensión, es necesario importar el archivo de declaración de tipos en el punto de entrada de la aplicación (por ejemplo, en `app.ts`) para que TypeScript reconozca la nueva propiedad `user` en el objeto `Request` de Express.

```ts app.ts
import './types.d.ts';
```

Otra opción es configurar el `tsconfig.json` para incluir automáticamente los archivos de declaración de tipos en la compilación, asegurándose de que el directorio donde se encuentra el archivo `types.d.ts` esté incluido en la propiedad `include` del `tsconfig.json`.

```json
{
  "compilerOptions": {
    // ... otras opciones ...
  },
  "include": ["src/**/*", "src/types.d.ts"]
}
```

Finalmente sería posible incluir la decalración del typo en el fichero `app.ts` directamente, aunque es más recomendable mantener las declaraciones de tipos en archivos separados para mantener una mejor organización del código.

```ts app.ts
import { TokenPayload } from './services/auth.service.ts';
declare module 'express' {
  interface Request {
    user?: TokenPayload;
  }
}
```

Con esta extensión, el middleware de autenticación puede asignar la información del usuario al campo `req.user`, lo que permitirá a los controladores acceder a esta información para realizar operaciones específicas basadas en el usuario autenticado, como verificar permisos o personalizar las respuestas.

#### Auth Interceptor

Un **Auth Interceptor** es un middleware que se encarga de interceptar las solicitudes entrantes a rutas protegidas para verificar la autenticación del usuario. Este interceptor se ejecuta antes de que la solicitud llegue al controlador correspondiente, lo que permite garantizar que solo los usuarios autenticados puedan acceder a ciertas rutas o recursos.

Crearemos una clase `AuthInterceptor` que implementa este middleware. El interceptor tiene un método `use` que verificará la presencia y validez del token JWT en las cabeceras de la solicitud, y si el token es válido, extraerá la información del usuario y la adjuntará al objeto `req` para que esté disponible en los controladores.

```ts
import type { TokenPayload } from '../types/login.ts';
import type { Request, Response, NextFunction } from 'express';
import { HttpError } from '../errors/http-error.ts';
import { AuthService } from '../services/auth.ts';

const unauthorizedError = new HttpError(
  401,
  'Unauthorized',
  'Authentication failed. Please provide valid credentials.',
);

export class AuthInterceptor {
  authenticate(req: Request, res: Response, next: NextFunction) {
    log('Authenticating request...');

    const authHeader = req.header('Authorization');
    if (!authHeader) {
      log('No authorization header found');
      return next(unauthorizedError);
    }

    const [type, token] = authHeader.split(' ');
    if (!token || type !== 'Bearer') {
      log('No valid token found in authorization header');
      return next(unauthorizedError);
    }

    try {
      const payload = AuthService.verifyToken(token);
      req.user = payload;
      // Añado datos a req disponibles para siguientes etapas
      // Previamente he extendido la interfaz Request en express
      req.user = payload;
      log('User:', payload);
      // Opcionalmente, añado datos a res.locals
      // para que estén disponibles en las vistas
      // res.locals.user = payload;
      return next();
    } catch (error) {
      unauthorizedError.cause = error;
      log('Token verification failed', { error });
      return next(unauthorizedError);
    }
  }
}
```

#### Rutas protegidas: uso del intertceptor

Para proteger las rutas utilizando el `AuthInterceptor`, se puede aplicar el middleware de autenticación a las rutas que se desean proteger en el router correspondiente.

El interceptor puede injectarse como otra dependencia (**DI**) en el constructor del router, y luego se puede utilizar en las rutas que requieren autenticación.

Por ejemplo, si queremos proteger la ruta `GET /api/users/` para que solo los usuarios autenticados puedan acceder a la lista de usuarios, podemos agregar el middleware `authenticate` del `AuthInterceptor` a esa ruta en el `UsersRouter`.

```ts
export class UsersRouter {
  #controller: UsersController;
  #router: Router;
  #authInterceptor: AuthInterceptor;

  constructor(controller: UsersController, authInterceptor: AuthInterceptor) {
    log('Initializing users router...');
    this.#controller = controller;
    this.#authInterceptor = authInterceptor;
    this.#router = Router();

    // Rutas públicas
    this.#router.post(
      '/register',
      validateBody(RegisterUserDTOSchema),
      this.#controller.register.bind(this.#controller),
    );
    this.#router.post(
      '/login',
      validateBody(UserCredentialsDTOSchema),
      this.#controller.login.bind(this.#controller),
    );

    // Rutas protegidas
    this.#router.get(
      '/',
      this.#authInterceptor.authenticate,
      this.#controller.getAllUsers.bind(this.#controller),
    );
    // ... otras rutas protegidas
  }

  get router() {
    return this.#router;
  }
}
```

#### Pruebas de las rutas protegidas

Una vez que las rutas están protegidas utilizando el `AuthInterceptor`, se pueden probar utilizando Postman para enviar solicitudes a las rutas protegidas y verificar que solo los usuarios autenticados pueden acceder a ellas. Para probar las rutas protegidas, se puede seguir el siguiente proceso:

1. Primero, se debe utilizar un usuario existente o registrar un nuevo usuario utilizando la ruta de registro (`POST /api/users/register`)
2. Luego, utilizar la ruta de inicio de sesión (`POST /api/users/login`) para obtener las credenciales de un usuario válido.
3. Una vez que se obtiene el token JWT en la respuesta del login, se debe incluir este token en las cabeceras de las solicitudes a las rutas protegidas utilizando el formato `Authorization: Bearer <token>`. En Postman se puede utilizar la sección "Authorizations" seleccionando el tipo "Bearer Token" e ingresando el token JWT obtenido en el paso anterior.
4. Finalmente, se pueden enviar solicitudes a las rutas protegidas (por ejemplo, `GET /api/users/`) y verificar que se obtiene una respuesta exitosa (por ejemplo, `200 OK`) con los datos esperados, lo que indica que el acceso a la ruta está permitido para usuarios autenticados.
5. También se deben probar casos en los que no se incluye el token o se incluye un token inválido para verificar que se obtiene una respuesta de error (por ejemplo, `401 Unauthorized`), lo que indica que el acceso a la ruta está restringido para usuarios no autenticados o con credenciales inválidas.

El equivalente en un frontend sería almacenar el token JWT en el almacenamiento local (localStorage) o en una cookie después de un inicio de sesión exitoso, y luego incluir ese token en las cabeceras de las solicitudes a las rutas protegidas para acceder a los recursos que requieren autenticación. Es importante asegurarse de manejar el token de manera segura, evitando exponerlo a través de vulnerabilidades como XSS, y considerar opciones como el uso de cookies con la bandera `HttpOnly` para mejorar la seguridad del almacenamiento del token en el cliente.

Usando fetch en el frontend, se puede incluir el token JWT en las cabeceras de las solicitudes de la siguiente manera:

```js
const token = localStorage.getItem('jwtToken'); // O obtenerlo de una cookie
fetch('/api/users/', {
  method: 'GET',
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log('Protected data:', data);
  })
  .catch((error) => {
    console.error('Error accessing protected route:', error);
  });
```

### Autorización (Authorization)

La autorización se refiere al proceso de determinar si un usuario autenticado tiene los permisos necesarios para acceder a ciertos recursos o realizar ciertas acciones en la aplicación. En el contexto de esta aplicación, se puede implementar un sistema de control de acceso basado en roles (RBAC) para gestionar los permisos de los usuarios.

En un sistema RBAC, se definen diferentes roles (por ejemplo, `USER`, `ADMIN`) y se asignan permisos específicos a cada rol. Luego, a cada usuario se le asigna uno o más roles, lo que determina qué acciones pueden realizar en la aplicación.

Para implementar la autorización en esta aplicación, se pueden seguir los siguientes pasos:

1. Definir los roles y permisos en el sistema. Por ejemplo, se puede definir un rol `USER` con permisos básicos para acceder a ciertas rutas, y un rol `ADMIN` con permisos adicionales para acceder a rutas administrativas.
2. Asignar roles a los usuarios en el proceso de registro o mediante una interfaz de administración.
3. Implementar un middleware de autorización que verifique los roles del usuario autenticado antes de permitir el acceso a ciertas rutas. Este middleware puede:
   1. Recibe como parámetro el role mínimo requerido para acceder a la ruta (por ejemplo, `USER` o `ADMIN`).
   2. Verificar el rol del usuario almacenado en `req.user` (que se establece en el `AuthInterceptor`) y comparar los roles requeridos para la ruta con los roles del usuario para determinar si se permite o se deniega el acceso.
4. Proteger las rutas que requieren autorización utilizando el middleware de autorización para asegurarse de que solo los usuarios con los roles adecuados puedan acceder a esas rutas. Por ejemplo, se puede proteger una ruta administrativa para que solo los usuarios con el rol `ADMIN` puedan acceder a ella.

#### Método en el interceptor

El middleware de autorización se puede implementar como un método en el `AuthInterceptor` que verifica si el usuario autenticado tiene el rol necesario para acceder a la ruta. Este método puede recibir como parámetro el rol mínimo requerido para acceder a la ruta y comparar ese rol con el rol del usuario almacenado en `req.user`.

```ts
export class AuthInterceptor {
  // ... método authenticate ...
  authorize = (role: Role) => {
    return (req: Request, _res: Response, next: NextFunction) => {
      debug('hasRole');

      if (
        !req.user ||
        (req.user.role !== role && req.user.role !== Role.ADMIN)
      ) {
        const newError = new HttpError(
          403,
          'Forbidden',
          'You do not have permission',
        );
        return next(newError);
      }

      return next();
    };
  };
}
```

#### Uso del interceptor en las rutas

El interceptor de autorización (authorize)se incluira siempre despues de la autenticación (authenticate) en las rutas que se desean proteger, para asegurarse de que el usuario está autenticado antes de verificar sus permisos. Por ejemplo, si queremos proteger una ruta DELETE para que solo los usuarios con el rol `ADMIN` puedan acceder a ella, podemos agregar el middleware `authorize` del `AuthInterceptor` a esa ruta en el `UsersRouter`.

```ts
this.#router.delete(
  '/:id',
  this.#authInterceptor.authenticate,
  this.#authInterceptor.authorize(Role.ADMIN),
  this.#controller.deleteUser.bind(this.#controller),
);
```

Igual que elnel interceptor anterior, podemos probar las rutas protegidas utilizando Postman para enviar solicitudes a las rutas protegidas y verificar que solo los usuarios con el rol adecuado pueden acceder a ellas. Para probar las rutas protegidas, se puede seguir el mismo proceso que para probar las rutas protegidas por autenticación, pero asegurándose de utilizar un usuario con el rol adecuado para acceder a la ruta protegida por autorización.
