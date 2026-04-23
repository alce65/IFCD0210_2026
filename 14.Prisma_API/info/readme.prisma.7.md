# Prisma

## Instalación

Antes de comenzar, conviene añadir en **VSC** el plugin de **Prisma**, que nos ayudará a escribir el esquema de Prisma.

En tsconfig.json, añadimos la siguiente configuración:

```json
{
  "compilerOptions": {
    // "module": "ESNext",
    //"target": "ES2023",
    // "strict": true,
    "moduleResolution": "bundler",
    "esModuleInterop": true,
    "ignoreDeprecations": "6.0"
  },
  "include": ["./src", "./prisma.config.ts"]
}
```

No parece que sea imprescindible, excepto el include

### Prisma CLI

Instalamos **Prisma CLI** como una dependencia de desarrollo, ya que será el responsable de crear el **cliente de Prisma**, que si será dependencia final del proyecto.
Se puede considerar como el SDK que usaremos en nuestro código para interactuar con la base de datos.

```shell
npm install -D prisma
npm install @prisma/client
# Nuevos en esta versión
npm install -D @types/pg
npm install @prisma/adapter-pg pg dotenv
```

pg y @types/pg son necesarios para usar el adaptador de PostgreSQL (ya los tenemos)

Para inicializarlo (antes)

`npx prisma@latest init --datasource-provider`

Con la nueva versión, el comando es:

```shell
npx prisma init --output ../generated/prisma
```

Resultado

```shell
Initialized Prisma in your project

  .gitignore
  package.json
  prisma.config.ts
  prisma/
    schema.prisma

Next, choose how you want to set up your database:

CONNECT EXISTING DATABASE:
  1. Configure your DATABASE_URL in prisma.config.ts
  2. Run prisma db pull to introspect your database.

CREATE NEW DATABASE:
  Local: npx prisma dev (runs Postgres locally in your terminal)
  Cloud: npx create-db (creates a free Prisma Postgres database)

Then, define your models in prisma/schema.prisma and run prisma migrate dev to apply your schema.

Learn more: https://pris.ly/getting-started
```

#### 1. Configure your DATABASE_URL in prisma.config.ts

```ts prisma.config.ts
// Este fichero se utiliza desde la CLI de Prisma para configurar el cliente de Prisma, que es el SDK que usaremos en nuestro código para interactuar con la base de datos.
// Por eso necesita dotenv para acceder al fichero de variables de entorno.
import 'dotenv/config';
import { defineConfig } from 'prisma/config';

const dbURL =
  process.env['DATABASE_URL'] ??
  `postgresql://${process.env['PGUSER']}:${process.env['PGPASSWORD']}
@${process.env['PGHOST']}:${process.env['PGPORT']}
/${process.env['PGDATABASE']}?schema=public`;

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: dbURL,
  },
});
```

#### 2. Run prisma db pull to introspect your database.

Utiliza los datos proporcionados en `prisma.config.ts` para conectarse a la base de datos, y crea el modelo de Prisma a partir de la base de datos.

```shell
npx prisma db pull
```

Con esto se crea el modelo de Prisma a partir de la base de datos, y se genera el cliente de Prisma en el directorio `generated/prisma` (definido en `prisma/schema.prisma`).

Esta carpeta ha sido incluida en el `.gitignore`, por lo que no se subirá a GitHub, pero es importante que esté en nuestro proyecto para poder usar el cliente de Prisma.

Para crearla después de clonar un proyecto, hay que ejecutar el comando `npx prisma generate`, que es el encargado de generar el cliente de Prisma a partir del modelo definido en `prisma/schema.prisma`.

```schema.prisma
generator client {
  provider = "prisma-client"
  output   = "../generated/prisma"
}

datasource db {
  provider = "postgresql"
}

/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
model animals {
  id           Int     @id @default(autoincrement())
  name         String  @db.VarChar(255)
  english_name String  @db.VarChar(255)
  sci_name     String  @db.VarChar(255)
  diet         String?
  lifestyle    String? @db.VarChar(20)
  location     String?
  slogan       String?
  group_name   String? @db.VarChar(255)
  image        String?
}

// Version previa, con UUID y timestamps
// model animals {
//   animalID    Bytes     @id @default(dbgenerated("(uuid_to_bin(uuid()))")) @db.Binary(16)
//   name        String    @unique(map: "name") @db.VarChar(255)
//   englishName String    @unique(map: "englishName") @db.VarChar(255)
//   sciName     String    @db.VarChar(255)
//   diet        String    @db.VarChar(255)
//   lifestyle   String    @db.VarChar(255)
//   location    String    @db.VarChar(255)
//   slogan      String?   @db.Text
//   bioGroup    String    @db.VarChar(255)
//   image       String    @db.VarChar(255)
//   created_at  DateTime? @default(dbgenerated("(now())")) @db.Timestamp(0)
//   updated_at  DateTime? @default(dbgenerated("(now())")) @db.Timestamp(0)
// }
```

#### Creamos una instancia de Prisma Client

Podemos usar como en casos anteriores el fichero `src/config/prisma.ts` para crear una instancia de Prisma Client, que es el SDK que usaremos en nuestro código para interactuar con la base de datos.

```ts
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../../generated/prisma/client.ts';
import { env } from './env.ts';
export const connectPrisma = async () => {
  const connectionString = process.env.PGURL;
  // PGURL validado en env.ts con envSchema de zod
  const adapter = new PrismaPg({ connectionString });
  const prisma = new PrismaClient({ adapter });

  // Prueba de que la conexión funciona correctamente
  try {
    await prisma.$connect();
    const [info] = (await prisma.$queryRaw`SELECT current_database()`) as {
      current_database: string;
    }[];
    log(`Connected successfully to the database ${info?.current_database}`);
    await prisma.$disconnect();
  } catch (error) {
    console.error('Error connecting to the database:', error);
    process.exit(1);
  }

  return prisma;
};
```

#### Seed de datos

Para poblar la base de datos con datos de ejemplo, podemos crear un fichero `config/seed.ts` con el siguiente contenido:

```ts
import { connectPrisma } from './prisma.ts';

async function seed() {
  const prisma = await connectPrisma();

  // Datos de ejemplo
  const animals = [
    {
      name: 'León',
      english_name: 'Lion',
      sci_name: 'Panthera leo',
      diet: 'Carnívoro',
      lifestyle: 'Savana',
      location: 'África',
      slogan: 'El rey de la selva',
      group_name: 'Félidos',
      image: '/images/lion.jpg',
    },
    {
      name: 'Elefante',
      english_name: 'Elephant',
      sci_name: 'Loxodonta africana',
      diet: 'Herbívoro',
      lifestyle: 'Savana',
      location: 'África',
      slogan: 'El más grande del mundo',
      group_name: 'Proboscídeos',
      image: '/images/elephant.jpg',
    },
  ];

  // Insertar datos en la base de datos
  for (const animal of animals) {
    await prisma.animals.create({ data: animal });
  }

  console.log('Datos de ejemplo insertados correctamente.');

  await prisma.$disconnect();
}

seed().catch((error) => {
  console.error('Error al insertar datos de ejemplo:', error);
  process.exit(1);
});
```

Para ejecutar el seed, podemos usar el siguiente script en el package.json:

````json
{
  "scripts": {
    "seed:dev": "node --env-file=.env config/seed.ts"
  }
}

```shell
 npm run seed:dev
````

#### Usamos Prisma en un controller

```ts index.ts
import { connectPrisma } from './config/prisma.ts';
import type { PrismaClient } from '../generated/prisma/client.ts';

let prisma: PrismaClient;
try {
  prisma = await connectPrisma();
} catch (error) {
  console.error('Error connecting to the database:', error);
  process.exit(1);
}

const app = await createApp(prisma);
const server = createServer(app);
```

Y en app

```ts app.ts
export const createApp = async (prisma: PrismaClient) => {
  // ...

  app.use('/api/animals', async (_req, res) => {
    log('Received request to /api/animals endpoint');
    const data = await prisma.animals.findMany();
    return res.json(data);
  });
};
```

## Testing

### Estructura

1. Crea la base de datos de test en PostgreSQL.

```shell
CREATE DATABASE animals_test_db;
```

También puedes hacer:

```shell
createdb animals_test_db
```

2. Crea un archivo .env.test en la raíz del proyecto:

```.env
DATABASE_URL="postgresql://postgres:Curso_@2026@localhost:5432/animals_test_db?schema=public"
NODE_ENV=test
PORT=3301
PROJECT_NAME="14_Prisma_Test"
DEBUG="14_Prisma_Test*"
```

3. Crea prisma.config.test.ts:

```ts prisma.config.test.ts
import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'node --env-file=.env.test ./src/config/seed.ts',
  },
  datasource: {
    url: process.env.DATABASE_URL!,
  },
});
```

4. Mantén el mismo schema.prisma.

Así reutilizas exactamente las mismas migraciones y el mismo modelo que en desarrollo.

### Preparación de la DB de test

5. Aplica migraciones sobre la base de test:

```shell
npx prisma migrate deploy --config prisma.config.test.ts
```

6. Poblala con seed:

```shell
npx prisma db seed --config prisma.config.test.ts
```

7. Si quieres resetearla entera antes de cada suite o antes de correr tests:

```shell
npx prisma migrate reset --config prisma.config.test.ts --force
npx prisma db seed --config prisma.config.test.ts
```

Esa doble llamada es mi recomendación práctica para Prisma 7: db seed explícito, aunque parte de la documentación de migrate reset todavía menciona seeds automáticos. Prefiero el flujo explícito para que no dependa de matices de versión.

#### Scripts útiles

En package.json podrías dejar algo así:

```json
{
  "scripts": {
    "test:db:migrate": "npx prisma migrate deploy --config prisma.config.test.ts",
    "test:db:seed": "npx prisma db seed --config prisma.config.test.ts",
    "test:db:reset": "npx prisma migrate reset --config prisma.config.test.ts --force",
    "test:db:prepare": "npm run test:db:reset && npm run test:db:seed"
  }
}
```

#### Uso en los tests

Si tus tests usan Prisma directamente, asegúrate de arrancarlos con .env.test, por ejemplo:

```json
{
  "scripts": {
    "test": "node --env-file=.env.test --test"
  }
}
```

Así el cliente Prisma de runtime también apuntará a animals_test_db y no a la base de desarrollo.

#### Resumen

- 1 DB para desarrollo: animals_db
- 1 DB para tests: animals_test_db
- mismo schema.prisma
- mismas migraciones
- seed separado por config de test
- tests arrancados con .env.test

## Migraciones

Imagina que tu base de datos es un organismo vivo que evoluciona. Si añades una tabla de "Usuarios", el esquema cambia. Si luego decides que los usuarios deben tener un "Bio", el esquema vuelve a cambiar. Las migraciones son el historial clínico de esos cambios.

- Fundamentos: El archivo schema.prisma y el flujo de trabajo dev/deploy.
- Gestión de Cambios: Manejo de cambios destructivos en local y producción.
  - Estrategias Avanzadas: El patrón "Expand and Contract" para evitar downtime.
- Control Total: Guía paso a paso para editar archivos .sql manualmente (caso RENAME COLUMN y cambio de Primary Keys).
- Seguridad: Uso de la Shadow Database y el flag --create-only.

### Conceptos

Desglose técnico de cómo funciona Prisma Migrate:

#### 1. El Origen: El archivo schema.prisma

En Prisma, tú no escribes SQL para crear tablas. Tú defines el "Estado Deseado" en tu archivo de esquema.

Concepto clave: Prisma sigue un enfoque declarativo. Tú le dices cómo quieres que luzca la base de datos, y Prisma se encarga de averiguar qué comandos SQL necesita ejecutar para llegar ahí.

```prisma
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}
```

#### 2. El Flujo de Trabajo (Workflow)

Cuando ejecutas el comando `npx prisma migrate dev`, ocurren tres etapas por debajo:

- A. La Comparación (Diffing)

Prisma compara tu archivo schema.prisma actual con el estado actual de tu base de datos. Si detecta que has añadido el modelo User y la base de datos está vacía, calcula el SQL necesario (CREATE TABLE...).

- B. La Generación del Artefacto

Prisma crea una carpeta llamada migrations/ y dentro genera una sub-carpeta con un timestamp y un archivo migration.sql.

Importante: Este archivo es SQL puro. Puedes abrirlo, leerlo y, si eres un experto, incluso editarlo antes de aplicarlo.

- C. El Guardado del Historial (\_prisma_migrations)

Prisma crea una tabla oculta en tu base de datos llamada \_prisma_migrations. Allí anota qué archivos de la carpeta migrations/ ya se han ejecutado. Así, la próxima vez que lances el comando, no intentará crear la tabla de nuevo.

#### 3. Comandos Esenciales que debes dominar

- prisma migrate dev -> En desarrollo. Crea la migración, la aplica y regenera el Prisma Client automáticamente.
- prisma migrate deploy -> En producción. Solo aplica migraciones pendientes. Nunca borra datos ni resetea la base de datos.
- prisma migrate reset -> Emergencias. Borra toda la base de datos y vuelve a ejecutar todas las migraciones desde cero.

#### ¿Por qué esto es mejor que hacerlo a mano?

- Sincronización de Tipos: Al terminar la migración, Prisma regenera los tipos de TypeScript. Si
  añadiste un campo email, tu editor de código te lo sugerirá inmediatamente.

- Control de Versiones: Las migraciones se suben a Git. Si un compañero se descarga tu código, solo tiene que ejecutar las migraciones para tener exactamente la misma estructura de base de datos que tú.

- Seguridad: Antes de ejecutar un cambio que pueda borrar datos (como borrar una columna), Prisma te lanzará un aviso gigante en la terminal para que confirmes.

- Pro-tip de profesor: Nunca, jamás, edites la base de datos manualmente desde un gestor visual (como TablePlus o pgAdmin) si estás usando Prisma Migrate. Si lo haces, el historial de migraciones se romperá y tendrás conflictos de "drift" (deriva).

¿Te ha quedado clara la diferencia entre el enfoque declarativo de Prisma y el imperativo de escribir SQL a mano, o quieres que profundicemos en cómo manejar cambios destructivos en producción?

### Gestión de cambios: cambios destructivos tanto en Desarrollo como en Producción

Esta es la parte del curso donde nos ponemos los guantes de cirujano, porque aquí es donde se puede romper todo. En el mundo de las bases de datos, un cambio destructivo es cualquier modificación que resulte en la pérdida irrecuperable de datos (como borrar una columna o una tabla).

Como estamos en un entorno profesional, la gestión de estos cambios varía drásticamente dependiendo de dónde nos encontremos.

#### 1. Cambios Destructivos en Desarrollo (Dev)

En tu máquina local, Prisma es muy "valiente". Si cambias el nombre de una columna o borras un modelo en tu schema.prisma y ejecutas npx prisma migrate dev:

Detección de Drift: Prisma comparará tu esquema con la base de datos.

Aviso de Advertencia: Te mostrará un mensaje en rojo: "You are about to drop a column... data will be lost".

El "Reset" Silencioso: Si el cambio es muy complejo, Prisma te pedirá permiso para resetear la base de datos completa. Esto borra todos los datos y vuelve a ejecutar todas las migraciones desde la 01.

Consejo del formador: Usa siempre **Seeds** (prisma/seed.ts). Si Prisma resetea tu base de datos local, tener un script de seed te permitirá recuperar tus datos de prueba en segundos.

#### 2. Cambios Destructivos en Producción (Prod)

Aquí las reglas cambian. Nunca usamos migrate dev en producción. Usamos npx prisma migrate deploy.

El Gran Problema: La columna "renombrada"
Si quieres cambiar el nombre de la columna fullName a userName, Prisma (y la mayoría de los ORMs) hará esto por defecto:

- Borrar (DROP) fullName (¡Adiós datos!).
- Crear (ADD) userName.

#### La Estrategia Segura: El "Expand and Contract"

Para evitar desastres en producción con miles de usuarios activos, seguimos estos pasos:

- Expandir: Añades la nueva columna userName en el esquema (manteniendo la vieja). Migras y despliegas.
- Migrar Datos: Creas un script (o un query SQL) para copiar los datos de fullName a userName.
- Actualizar Código: Modificas tu API/Frontend para que empiece a escribir y leer de la nueva columna.
- Contraer: Una vez que confirmas que todo funciona, creas una nueva migración para borrar la columna vieja fullName.

#### ¿Cómo evitar accidentes?

Para dormir tranquilos, en el Back-end implementamos estas capas de seguridad:

- Shadow Database: Prisma utiliza una base de datos temporal (shadow) para probar las migraciones antes de tocarlas de verdad. Esto detecta errores de sintaxis o conflictos antes del desastre.

- Revisión de SQL: Antes de aplicar una migración sospechosa, ejecuta:

```shell
npx prisma migrate dev --create-only
```

Esto genera el archivo .sql pero no lo aplica. Así puedes abrirlo, revisarlo y editarlo manualmente para que sea menos agresivo.

- Bloqueo de tablas: Ten en cuenta que en bases de datos muy grandes (PostgreSQL/MySQL), un ALTER TABLE en una tabla con millones de filas puede bloquear la base de datos durante minutos, dejando tu App fuera de servicio (Downtime).

Caso práctico de examen:

Imagina que tienes una tabla Posts y decides que ya no quieres la columna content. Simplemente la borras en el esquema y haces el deploy.

Resultado: Tus usuarios pierden todos sus textos instantáneamente.
Solución Back-end: Primero marcamos el campo como opcional en el esquema, dejamos de usarlo en el código, hacemos un backup, y solo meses después ejecutamos la migración de borrado.

#### Editar manualmente un archivo .sql generado por Prisma para renombrar una columna sin perder los datos usando RENAME COLUMN?

A veces, Prisma es demasiado precavido o demasiado agresivo; ahí es donde nosotros, como desarrolladores Senior, entramos al archivo SQL para "corregirlo".

El escenario es este: quieres renombrar la columna name a firstName sin que Prisma borre la columna antigua y cree una nueva (lo que causaría la pérdida de datos).

- Paso 1: Crear la migración sin aplicarla

En lugar de dejar que Prisma ejecute el cambio de inmediato, usamos el flag --create-only. Esto genera el archivo en tu carpeta de migraciones pero no toca la base de datos.

```shell
npx prisma migrate dev --name rename_name_to_firstname --create-only
```

- Paso 2: Editar el archivo .sql

Si abres el archivo generado en prisma/migrations/xxxx_rename_name_to_firstname/migration.sql, verás que Prisma probablemente escribió esto:

```sql
/* ADVERTENCIA: Esto borrará los datos.
*/
ALTER TABLE "User" DROP COLUMN "name";
ALTER TABLE "User" ADD COLUMN "firstName" TEXT NOT NULL;
```

Aquí es donde intervenimos nosotros. Borramos ese código y escribimos SQL nativo que sí sea seguro:

```sql
-- Cambiamos el nombre de la columna directamente
ALTER TABLE "User" RENAME COLUMN "name" TO "firstName";
```

- Paso 3: Aplicar la migración modificada

Ahora que el archivo SQL refleja nuestra voluntad (conservar los datos), le decimos a Prisma que lo ejecute:

```shell
npx prisma migrate dev
```

Prisma detectará que ya hay un archivo de migración, verá que lo has modificado y lo ejecutará tal cual. ¡Datos salvados!

Diferencias en el despliegue (CI/CD)

En un entorno profesional (Pipeline de despliegue), el proceso de migración debe ser automático pero ultra seguro. Aquí tienes el esquema de cómo fluye la información:

La importancia de la "Shadow Database"

¿Te has fijado que Prisma a veces te pide una base de datos adicional llamada Shadow Database?

Para qué sirve: Es una base de datos temporal que Prisma crea y destruye en segundos.

Su función: Ejecuta todas tus migraciones desde la 01 hasta la actual en esa base de datos "fantasma" para verificar que el historial es consistente. Si alguien editó un archivo SQL antiguo y rompió la cadena, Prisma te avisará antes de que intentes tocar la base de datos real.

Nota de clase: En servicios gestionados como Neon o PlanetScale, la Shadow Database se maneja automáticamente, pero en Docker o bases de datos locales, Prisma la gestionará por ti si tienes permisos de creación de DB.

#### Resumen para tu carrera profesional:

- Local: migrate dev (puedes permitirte ciertos desastres si tienes seed).
- Duda: --create-only y revisa el SQL.
- Producción: migrate deploy (jamás dev).
- Estado Crítico: Si el despliegue falla, nunca borres registros de la tabla \_prisma_migrations manualmente a menos que sepas exactamente qué timestamp estás tocando.

¿Te sientes cómodo con este flujo o quieres que hagamos un ejercicio rápido de cómo solucionar un conflicto cuando dos compañeros suben migraciones diferentes al mismo tiempo?

### Aplicar migrate --create-only

Una vez que has abierto el archivo .sql, lo has revisado (y quizás corregido, como vimos con el RENAME COLUMN), el siguiente paso es "oficializarlo".

Para aplicar esa migración que dejaste en espera, simplemente debes ejecutar el mismo comando de desarrollo:

```shell
npx prisma migrate dev
```

¿Qué hará Prisma al ejecutar esto?

- Detección: Prisma escaneará tu carpeta prisma/migrations.
- Comparación: Mirará la tabla interna de la base de datos \_prisma_migrations y verá que hay una carpeta (la que creaste con --create-only) que aún no ha sido marcada como aplicada.
- Ejecución: En lugar de intentar generar una nueva migración, Prisma dirá: "¡Ah! Aquí tengo una migración pendiente". Ejecutará el contenido de ese archivo migration.sql tal cual esté (con tus cambios manuales incluidos).
- Sincronización: Una vez ejecutado con éxito, actualizará el Prisma Client (para que tengas el autocompletado en tu código) y marcará la migración como completada en la base de datos.

Escenario de Producción (¡Cuidado!)

Si lo que quieres es aplicar esa migración en un entorno de Staging o Producción, el comando es distinto. Allí no usamos dev porque no queremos que Prisma compare esquemas ni intente generar nada nuevo; solo queremos que "despliegue" lo que ya está en la carpeta de migraciones:

```shell
npx prisma migrate deploy
```

Resumen de comandos post-revisión:

- En tu PC local: npx prisma migrate dev (aplica lo pendiente y regenera el Client).
- En el servidor/nube: npx prisma migrate deploy (solo aplica lo pendiente de forma estricta).

Un pequeño tip de "Back-end pro":

Si por alguna razón te equivocas en el SQL manual y la migración falla al aplicarse, la base de datos puede quedar en un estado "sucio". En local, lo más rápido es hacer un npx prisma migrate reset, pero en producción tendrías que corregir el error y volver a intentar el deploy.

### Caso práctico: añadir prisma a un proyecto con base de datos existente (Baselining)

Te incorporas a un proyecto que ya tiene una base de datos funcionando pero no usaba Prisma, o estás migrando un sistema legado.

- Ya existe previamente uns tabla.
- Después de inicializar Prisma, se realiza una introspección:

```shell
npx prisma db pull
```

- Con esto se crea el modelo
- A continuación se genera el cliente

```shell
npx prisma generate
```

Ahora mismo tienes el `schema.prisma` reflejando la realidad y el `Prisma Client` listo para trabajar, pero **tu historial de migraciones está vacío**. Si intentaras hacer un `migrate dev` ahora mismo, Prisma intentaría crear las tablas desde cero, fallaría porque ya existen, o peor, intentaría borrarlas.

Hay que seguir los pasos exactos para establecer la **línea base (baselining)**:

El concepto: Baselining: El objetivo es decirle a Prisma: _"Oye, ya sé que la base de datos tiene esta estructura, no intentes crearla de nuevo. Solo empieza a registrar cambios a partir de aquí"_.

#### Paso 1: Crear la migración inicial de línea base

Ejecutamos el comando de migración con el flag `--create-only`. Esto generará el archivo SQL con toda la estructura actual pero **no lo ejecutará** contra la base de datos (evitando errores de "la tabla ya existe").

```bash
npx prisma migrate dev --name init --create-only
```

Esto puede no ser válido cuando Prisma bloquea el comando anterior porque detecta que la base de datos ya tiene tablas que él no "conoce". En ese caso, la alternativa es:

```bash
npx prisma migrate diff --from-empty --to-schema prisma/schema.prisma --script > prisma
```

Creamos la carpeta manualmente y copiamos en ella el fichero sql renombrado a migration.sql:

```bash
mkdir -p prisma/migrations/20260422185500_init
mv initial_migration.sql prisma/migrations/20260422185500_init/migration.sql
```

#### Paso 2: Marcar la migración como aplicada (El truco clave)

Ahora tenemos una carpeta de migración, pero la tabla interna `_prisma_migrations` de tu base de datos sigue vacía. Necesitamos decirle a Prisma que finja que ya ejecutó esa migración `init`.

Usamos el comando `resolve`:

```bash
npx prisma migrate resolve --applied 20260422185500_init
```

_Nota: Dependiendo de tu versión de Prisma, si el comando anterior te da problemas, la alternativa estándar actual es:_

1. Crear la carpeta con `--create-only`.
2. Ejecutar `npx prisma migrate diff` para asegurar que no hay cambios.
3. Simplemente ejecutar `npx prisma migrate dev`. Prisma detectará que el esquema y la DB coinciden y te preguntará si quieres crear la migración de línea base.

#### ¿Qué hemos conseguido con esto?

1.  **Historial sincronizado:** Ahora tienes tu primera migración en la carpeta `prisma/migrations`.
2.  **Estado de paz:** La base de datos tiene la tabla `_prisma_migrations` con el registro de que `init` ya se aplicó.
3.  **Libertad para el futuro:** A partir de este momento, cualquier cambio que hagas en el `schema.prisma` (añadir una columna, cambiar un tipo) se podrá gestionar con un `npx prisma migrate dev` normal, y Prisma solo generará el SQL para ese pequeño cambio nuevo.

Resumen para el manual del alumno:

Para poner una base de datos existente bajo el control de Prisma (Baselining):

- Introspección: npx prisma db pull.
- Generación: npx prisma generate.
- Línea Base: Si migrate dev --create-only da error de Drift, usar el proceso manual:
  - Crear SQL con migrate diff.
  - Crear carpeta de migración manualmente.
  - Marcar como aplicada con migrate resolve.

#### Advertencia de Formador: Datos existentes

Como la tabla ya tiene datos, a partir de ahora cada vez que hagas una migración:

- Si añades una columna, asegúrate de que sea **opcional** (`String?`) o que tenga un **valor por defecto** (`@default("...")`).
- Si la pones como obligatoria y sin valor por defecto, la migración fallará en el momento de aplicarse porque Prisma no sabrá qué poner en las filas que ya existen.

Podríamos profundizar viendo que tenemos qué hacer si la base de datos tiene vistas o procedimientos almacenados que `db pull` no captura bien.

### Caso practico: en dev quiero cambiar pa PK de id a user_id

Un caso clásico de examen

Cambiar una **Primary Key (PK)** es una de las operaciones más delicadas porque las PK suelen tener restricciones de integridad, índices asociados y, lo más importante, pueden ser llaves foráneas (`FK`) en otras tablas.

Como estamos en **desarrollo (dev)**, tenemos dos caminos: el "Rápido y Furioso" (si no te importan los datos) y el "Manual y Seguro" (si quieres mantener los datos actuales).

#### Opción A: El camino rápido (Recomendado en Dev)

Si estás en una fase temprana y no tienes datos importantes, deja que Prisma haga el trabajo sucio.

1.  Cambia tu `schema.prisma`:
    ```prisma
    model User {
      user_id Int    @id @default(autoincrement()) // Antes era 'id'
      name    String
    }
    ```
2.  Ejecuta `npx prisma migrate dev`.
3.  Prisma te dirá: _"Hey, esto es destructivo, voy a borrar la tabla y recrearla"_. Aceptas y listo.

#### Opción B: El camino profesional (Sin perder datos)

Si ya tienes miles de usuarios en tu base local y quieres practicar cómo se haría en la vida real, usaremos el flujo de **edición manual**.

##### 1. Generar la migración base

```bash
npx prisma migrate dev --name change_pk_to_user_id --create-only
```

##### 2. Editar el SQL manualmente

Prisma intentará hacer un `DROP` y un `ADD`. Nosotros vamos a cambiarlo por lógica de renombrado de columna y reasignación de la PK. Abre el `.sql` y adáptalo así:

```sql
-- 1. Renombramos la columna
ALTER TABLE "User" RENAME COLUMN "id" TO "user_id";

-- 2. Si la secuencia del autoincrement se llamaba igual que la tabla,
-- a veces es necesario renombrar la secuencia (depende de la DB, en Postgres suele ser así):
-- ALTER SEQUENCE "User_id_seq" RENAME TO "User_user_id_seq";

-- 3. (Opcional) Si el nombre de la restricción de la PK era explícito:
-- ALTER TABLE "User" DROP CONSTRAINT "User_pkey";
-- ALTER TABLE "User" ADD PRIMARY KEY ("user_id");
```

> **Nota del Profe:** En la mayoría de las bases de datos modernas, al renombrar la columna que es PK, la restricción "sigue" al nuevo nombre automáticamente. El problema principal suele ser el **nombre de la secuencia** si usas autoincrementales.

##### 3. Aplicar y Regenerar

```bash
npx prisma migrate dev
```

#### El peligro oculto: Las Relaciones

Si la tabla `User` está relacionada con `Post`, la tabla `Post` tendrá una columna `authorId` que apunta a `User.id`.

Al cambiar el nombre en `User`, **también debes actualizar todos los modelos que dependan de ella**:

```prisma
// En el esquema también debes cambiar las relaciones
model Post {
  id       Int  @id
  author   User @relation(fields: [authorId], references: [user_id]) // Aquí references debe cambiar a user_id
  authorId Int
}
```

#### Resumen de pasos para el éxito:

1. **Actualizar el esquema** (incluyendo todas las tablas que apuntan a esa PK).
2. **Migrate --create-only** para revisar si Prisma va a borrar las FK (esto es lo más peligroso).
3. **Ajustar el SQL** para que sea un `RENAME` en lugar de `DROP/ADD`.
4. **Aplicar**.
