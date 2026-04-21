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
