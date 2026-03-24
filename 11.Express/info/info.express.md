---
title: Course Node.js / Express.js
description: 'Información sobre Node.js/Express.js para el certificado de profesionalidad de Desarrollo de Aplicaciones con Tecnologías Web'
dates: 01/2025
---

- [Express. Servidores Web con Node.js y Express.js](#express-servidores-web-con-nodejs-y-expressjs)
  - [Instalación de Express](#instalación-de-express)
  - [Creación de un servidor con Express](#creación-de-un-servidor-con-express)
    - [Primera aplicación con Express](#primera-aplicación-con-express)
    - [Patrón de separación de responsabilidades: server y app](#patrón-de-separación-de-responsabilidades-server-y-app)
    - [Refactorización del servidor](#refactorización-del-servidor)
    - [Refactorización de la aplicación express. Middleware](#refactorización-de-la-aplicación-express-middleware)
    - [Utilidades](#utilidades)
  - [Elementos de Express](#elementos-de-express)
    - [Middleware](#middleware)
    - [Middleware de aplicación](#middleware-de-aplicación)
      - [Middleware incluidos en express](#middleware-incluidos-en-express)
      - [Middleware de terceros](#middleware-de-terceros)
      - [Cors](#cors)
    - [Manejo de errores](#manejo-de-errores)
      - [Creación de una clase HttpError](#creación-de-una-clase-httperror)
      - [Middleware de errores](#middleware-de-errores)
    - [Rutas y middleware](#rutas-y-middleware)
      - [Parámetros de ruta](#parámetros-de-ruta)
      - [Router](#router)
    - [Métodos con Body. Middleware express.json](#métodos-con-body-middleware-expressjson)
    - [Elementos estáticos y Vistas](#elementos-estáticos-y-vistas)
      - [Elementos estáticos](#elementos-estáticos)
      - [Vistas](#vistas)
  - [Arquitectura de Express: MVC](#arquitectura-de-express-mvc)
    - [Estructura de un proyecto Express](#estructura-de-un-proyecto-express)
    - [Clases e inyección de dependencias](#clases-e-inyección-de-dependencias)
    - [Ejemplo práctico](#ejemplo-práctico)
- [API Rest con Express](#api-rest-con-express)
  - [Conceptos básicos de REST](#conceptos-básicos-de-rest)
  - [Endpoints de una API Rest con Express](#endpoints-de-una-api-rest-con-express)
  - [Arquitectura de una API Rest: MVC](#arquitectura-de-una-api-rest-mvc)
- [Bases de datos](#bases-de-datos)
  - [Bases de datos relacionales](#bases-de-datos-relacionales)
    - [MySQL](#mysql)
    - [PostgreSQL](#postgresql)
    - [SQLite](#sqlite)
  - [Bases de datos no relacionales](#bases-de-datos-no-relacionales)
    - [MongoDB](#mongodb)
- [Autenticación y autorización](#autenticación-y-autorización)
  - [Autenticación](#autenticación)
  - [Autorización](#autorización)
- [Aplicación Realtime con Socket IO](#aplicación-realtime-con-socket-io)
  - [Socket.IO y Express](#socketio-y-express)
- [Despliegue y publicación en npm](#despliegue-y-publicación-en-npm)
  - [Despliegue en Render](#despliegue-en-render)
  - [Cache](#cache)

## Express. Servidores Web con Node.js y Express.js

### Instalación de Express

```bash
npm install express
npm install -D @types/express
```

### Creación de un servidor con Express

#### Primera aplicación con Express

```ts
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
```

#### Patrón de separación de responsabilidades: server y app

```ts
// server.ts

import http from 'http';
import app from './app';

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

// app.ts

import express from 'express';

export const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;
```

#### Refactorización del servidor

- recuperamos elementos ya definidos al crear un servidor http con node.js

- la definición del **puerto** comprobando si existe una variable de entorno PORT
- la creación de un **logger** con debug
- un listener para el **evento listening** que muestre la información del servidor arrancado
- un listener para el **evento error** que muestre la información del error

```ts
import http from 'http';
import { resolve } from 'path';
import createDebug from 'debug';
import 'dotenv/config';
import app from './app';

const debug = createDebug('project:server');
const __dirname = resolve();
const port = process.env.PORT || 3300;
debug('Iniciando el servidor');
debug(__dirname);

const listenManager = () => {
  const addr = server.address();
  if (addr === null) return;
  let bind;
  if (typeof addr === 'string') {
    bind = 'pipe ' + addr;
  } else {
    bind =
      addr.address === '::'
        ? `http://localhost:${addr?.port}`
        : `${addr.address}:${addr?.port}`;
  }
  console.log(`Server listening on ${bind}`);
  debug(`Servidor escuchando en ${bind}`);
};
const errorManager = (error, response) => {
  if (!('statusCode' in error)) {
    error = {
      ...new Error('Internal Server Error'),
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    };
  }
  const errorInfo = `Error ${error.statusCode}: ${error.statusMessage}`;
  response.statusCode = error.statusCode;
  response.statusMessage = error.statusMessage;
  debug(errorInfo, error.message);
  response.end(errorInfo);
};

const server = createServer(app);
server.on('listening', listenManager);
server.on('error', errorManager);
server.listen(port);
```

#### Refactorización de la aplicación express. Middleware

- separamos la creación de la aplicación express en un archivo app.ts
- exportamos la aplicación express para poder ser utilizada en otros archivos
- eliminamos la cabecera de express (x-powered-by)
- añadimos un middleware para el logger de las peticiones
- añadimos las páginas no encontradas (404)
- añadimos los métodos no permitidos

```ts
import express, { Request, Response, NextFunction } from 'express';
import createDebug from 'debug';
import { HttpError } from './error';

const debug = createDebug('project:app');

export const app = express();
app.disable('x-powered-by');

app.use((req: Request, res: Response, next: NextFunction) => {
  debug(`Request ${req.method} ${req.url}`);
  next();
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('*', (req: Request, res: Response) => {
  res.status(404);
  res.send('Not Found');
  debug(`Not Found ${req.method} ${req.url}`);
});

app.use('*', (req: Request, res: Response, next: NextFunction) => {
  const error: HttpError = {
    ...new Error('Not supported method'),
    statusCode: 405,
    statusMessage: 'Method Not Allowed',
  };
  next(error);
});

app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
  if (!('statusCode' in error)) {
    error = {
      ...new Error('Internal Server Error'),
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    };
  }

  const errorInfo = `Error ${error.statusCode}: ${error.statusMessage}`;
  res.status(error.statusCode);
  res.statusMessage = error.statusMessage;
  debug(errorInfo, error.message);
  res.send(errorInfo);
  next();
});
```

#### Utilidades

- [Morgan](https://www.npmjs.com/package/morgan). Logger de solicitudes HTTP para Express/Node.js.
- [Helmet](https://helmetjs.github.io/). Seguridad para aplicaciones Express.

### Elementos de Express

#### Middleware

Las aplicaciones de Express utilizan un patrón de diseño conocido como **Patrón Mediador** (o **Patrón Middleware** en algunos contextos, como éste). Es un patrón de diseño que simplifica la comunicación entre múltiples objetos o componentes, centralizando sus interacciones.

En lugar de que los objetos se comuniquen directamente entre sí, el mediador actúa como intermediario, facilitando relaciones complejas y asegurando que cada objeto solo interactúe con el mediador.

En el caso de Express, la aplicación actúa como un mediador y los middleware son funciones que se ejecutan sucesivamente a lo largo en el ciclo de vida de una solicitud HTTP. Cada middleware puede modificar tanto las solicitudes HTTP y las respuestas HTTP. De esta forma la aplicación recibe las solicitudes HTTP, las procesa sucesivamente y en su última etapa envía las respuestas HTTP.

Esta forma de aplicar el patrón corresponde también al conocido como **Cadena de Responsabilidad** (**Chain of Responsibility**), otro patrón de diseño que permite pasar solicitudes a lo largo de una cadena de objetos. Cada objeto en la cadena puede decidir si procesa la solicitud o la pasa al siguiente objeto en la cadena.

Un middleware de Express es una función que se ejecuta en el ciclo de vida de una solicitud HTTP. Recibe tres argumentos:

- el objeto de solicitud (`req: Request`)
- el objeto de respuesta (`res: Response`)
- la función que permite invocar al siguiente middleware en la pila (`next: NextFunction`)

Un middleware puede realizar las siguientes acciones:

- Ejecutar cualquier código, para realizar tareas, como la validación de datos, la autenticación de usuarios.
- Como parte de estas tareas, el middleware puede realizar cambios en la solicitud y la respuesta.
- Invocar al siguiente middleware en la pila.
- Invocar el middleware que gestiona los errores.
- Finalizar el ciclo de vida de la solicitud.

Los middleware se ejecutan en el orden en que se definen en la aplicación.

#### Middleware de aplicación

Al refactorizar anteriormente la aplicación express, hemos añadido un middleware para el logger de las peticiones.

```ts
app.use((req: Request, res: Response, next: NextFunction) => {
  debug(`Request ${req.method} ${req.url}`);
  next();
});
```

Como vemos, los middleware son funciones que pasan como parámetros al método `use` de la aplicación express.

Se pueden añadir más middleware para realizar otras tareas, como la validación de datos, la autenticación de usuarios, etc.

##### Middleware incluidos en express

Express incluye algunos middleware que se pueden utilizar en una aplicación express. Algunos de los middleware más comunes son:

- `express.json()`: Middleware para analizar el cuerpo de las solicitudes con formato JSON.
- `express.urlencoded()`: Middleware para analizar el cuerpo de las solicitudes con formato de datos codificados en URL.
- `express.static()`: Middleware para servir archivos estáticos.

En los tres casos son funciones que

- se ejecutan con los parámetros necesarios para su configuración en caso de ser necesario
- devuelven el middleware cuando se invocan. Este pasa a use como callback para añadirese a la cadena de middleware de la aplicación express.

Más adelante veremos su uso.

##### Middleware de terceros

Existen muchas librerías de middleware que se pueden utilizar en una aplicación express. Algunas de las más comunes son:

- [morgan](https://www.npmjs.com/package/morgan): Logger de solicitudes HTTP para Express/Node.js.
- [helmet](https://helmetjs.github.io/): Seguridad para aplicaciones Express.
- [cors](https://www.npmjs.com/package/cors): Middleware para gestionar las peticiones CORS.

En la mayoría de los casos son funciones que se ejecutan y devuelven el middleware, como sucede con los ejemplo de Express ya mencionados

```ts
import morgan from 'morgan';

app.use(morgan('dev'));
```

En el ejemplo vemos como usar el middleware morgan para el logger de las peticiones HTTP.

##### Cors

- añadimos un middleware para gestionar las peticiones CORS

```ts
import cors from 'cors';

app.use(cors());
```

- código al que sustituye

#### Manejo de errores

##### Creación de una clase HttpError

- creación de una clase HttpError que extiende de Error

##### Middleware de errores

- añadimos un middleware para gestionar errores
- cuatro parámetros: error, req, res, next
- si el error no tiene un statusCode, se crea un error http con statusCode 500

#### Rutas y middleware

Los últimos middleware en el ciclo de vida de una solicitud HTTP se conocen como middleware de rutas. Estos middleware se ejecutan solo cuando la ruta de la solicitud coincide con la ruta definida en el middleware.

```ts
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
```

Los métodos de Express permiten discriminar fácilmente a que método HTTP se asocia la ruta.

```ts
app.get('ruta', controlador);
app.post('ruta', controlador);
app.put('ruta', controlador);
app.patch('ruta', controlador);
app.delete('ruta', controlador);
```

Los últimos middleware añadidos en la aplicación express son para gestionar las rutas no encontradas y los métodos no permitidos.

```ts
app.get('*', (req: Request, res: Response) => {
  res.status(404);
  res.send('Not Found');
  debug(`Not Found ${req.method} ${req.url}`);
});

app.use('*', (req: Request, res: Response, next: NextFunction) => {
  const error: HttpError = {
    ...new Error('Not supported method'),
    statusCode: 405,
    statusMessage: 'Method Not Allowed',
  };
  next(error);
});
```

##### Parámetros de ruta

Las rutas pueden contener parámetros que se pueden utilizar en el controlador de la ruta.

```ts
app.get('/users/:id', (req: Request, res: Response) => {
  res.send(`User ${req.params.id}`);
});
```

En el ejemplo, la ruta `/users/:id` contiene un parámetro `id` que se puede utilizar en el controlador de la ruta.

Otra forma de que las rutas no sean estáticas es mediante las query strings. En ese caso la información dinámica no se refleja en la discriminación de la ruta, pero puede ser recogida fácilmente en el controller

```ts
app.get('/users', (req: Request, res: Response) => {
  res.send(`User ${req.query.id}`);
});
```

##### Router

#### Métodos con Body. Middleware express.json

- uso de express.json
- código al que sustituye

#### Elementos estáticos y Vistas

##### Elementos estáticos

- uso de express.static
- código al que sustituye

##### Vistas

Sistemas de vistas basados en lenguajes de plantillas reconocidos por Express:

- EJS: [npm](https://www.npmjs.com/package/ejs) - 18M
- Pug: [npm](https://www.npmjs.com/package/pug) - 1.5M
- Handlebars: [npm - hbs](https://www.npmjs.com/package/hbs) 160K - [express-handlebars](https://www.npmjs.com/package/express-handlebars) 280K

En estos casos exixsten tres elementos de Express que se utilizan para configurar y usar el sistema de vistas:

- uso de app.set('view engine', 'ejs')
- uso de app.set('views', 'views')
- uso de res.render

Sistemas de vistas basados en template strings (template literals) de ES6

- no se necesita ninguna librería adicional (ES6+ nativo)
- se utilizan los template literals para generar el HTML
- se pueden utilizar funciones para generar el HTML en base a los argumentos recibidos
- para facilitar la visualización del código HTML incluido en los strings existen algunas extensiones de VSC que permiten el resaltado de la sintaxis HTML en los strings de los template literals:

  - es6-string-html (490)
  - lit-html (375M) - dependencia con lit-element
  - leet-html (14M)

- en algunos caso se pueden utilizar los tagged templates para marcar el contenido HTML del string y que se resalte la sintaxis HTML en el editor de código
  En TS se añade al tagged el valor `String.raw` para que no se escape el contenido HTML del string

```ts
const html = String.raw;

app.get('/', (req: Request, res: Response) => {
  res.send(html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        <h1>Hello World!</h1>
      </body>
    </html>
  `);
});
```

En algún repo de github se puede encontrar un ejemplo de uso de tagged templates para la generación de HTML en un servidor. Por ejemplo en el repo de [rend](https://github.com/treeder/rend/tree/main)

Algunas librerías también utilizan la idea de renderizar componentes HTML a partir de template strings (template literals) como es el caso de lit-html, hyperHTML, etc.

### Arquitectura de Express: MVC

- Model: Representa los datos de la aplicación y la lógica de negocio asociada con ellos: creación de ids, actualización de los datos y persistencia (e.g DB).

- Controller: Intermediario entre los otros dos. Se encarga de gestionar las peticiones HTTP, validar los datos, interactuar con el modelo y devolver una respuesta al cliente.

- View: Representa la interfaz de usuario. Son las vistas que renderizan el HTML que se enviará como parte de la respuesta.

#### Estructura de un proyecto Express

- **public**
- src
  - data (i.e. orm)
  - **models** (i.e. repositories)
  - **controllers**
  - **routes**
  - **views**
  - **errors**
  - **middleware**
  - types
  - **app.ts**
  - **server.ts**

#### Clases e inyección de dependencias

#### Ejemplo práctico

- página de inicio (home / landing page) - principalmente estática
- página de productos - listado de productos incluidos en un array (mock de datos)
- página de producto: detalle de un producto (paso de id en la url)
- [página de error]
- [página de no encontrado]

Evolución de la aplicación:

- [] Estructura básica de la aplicación:
  - [x] Creación del servidor
  - [x] Creación de la aplicación express
  - [x] Middlewares de logger (debug): carpeta **Middleware** (logger...)
  - [x] Middlewares de Express (json, static): carpeta **Public** (css, js, img, favicon...)
  - [x] Middleware de terceros (morgan, cors)
  - [x] Middleware de errores: carpeta **Errors** (HttpError...)
  - [x] Rutas de error y no encontrado
  - [x] Carpeta **Views** (base, errorPage, partials...)
- [x] Página about (about page) - static
- [x] Página de inicio (home / landing page)
  - [x] Creación de una vista para la página home en la carpeta **Views** (home)
  - [x] Creación de una ruta para la página home
  - [x] Controllers: carpeta **Controllers** (home)
- [] Listado de productos / página de productos
  - [] Los datos en un fichero TS (mock de datos)
  - [] Rutas (opcionalmente Router - carpeta **Routes**)
  - [] Controllers: carpeta **Controllers** (products, product)
  - [] Los datos en un array (mock de datos)
  - [] Creación de un modelo de producto: carpeta **Models** (Product)
- [] Detalle de un producto / página de producto
- [] Los datos en un fichero JSON
  - [] Acceso a los datos del fichero con una capa de datos (ODM): carpeta **Data** (orm)
- [] Añadir las posibilidades de crear, modificar y eliminar productos
  - [] Añadir la posibilidad de eliminar productos
  - [] Creación de un formulario para la creación / modificación de productos

Posibilidades adicionales para la siguiente versión:

- [] Añadir la posibilidad de subir imágenes de los productos
  - [] Subir imágenes de los productos (multer)
  - [] Subir imágenes de los productos a Cloudinary
- [] Añadir la posibilidad de autenticación y autorización
  - [] Creación de un modelo de usuario: carpeta **Models** (User)
  - [] Creación de un formulario para el registro y login de usuarios
  - [] Añadir la posibilidad de autenticación y autorización
- [] Añadir la posibilidad de comentarios y valoraciones
  - [] Creación de un modelo de comentario: carpeta **Models** (Comment)
  - [] Creación de un formulario para la creación de comentarios
  - [] Añadir la posibilidad de valorar los productos
- [] Añadir la posibilidad de búsqueda y filtrado de productos
  - [] Creación de un formulario para la búsqueda y filtrado de productos
  - [] Añadir la posibilidad de búsqueda y filtrado de productos
  - [] Añadir la posibilidad de ordenar los productos
  - [] Añadir la posibilidad de paginar los productos
  - [] Añadir la posibilidad de mostrar los productos en un mapa
  - [] Añadir la posibilidad de mostrar los productos en un calendario
  - [] Añadir la posibilidad de mostrar los productos en un gráfico-

## API Rest con Express

### Conceptos básicos de REST

REST es un estilo de arquitectura de software que define un conjunto de restricciones para el diseño de servicios web. REST es un acrónimo de Representational State Transfer.

Fue presentado por Roy Fielding en su tesis doctoral en 2000.

RESTful es un término que se utiliza para describir servicios web que cumplen con los principios de REST. REST API es una API que sigue los principios de REST.

En REST se consideran como **recursos** a los objetos que se manipulan a través de la API. Los recursos se **identifican** mediante **URIs**. URI es un identificador uniforme de recursos, que es una cadena de caracteres que identifica un recurso en la red. URL es un localizador de recursos uniforme, que es un tipo de URI que identifica un recurso en la red y proporciona la ubicación del recurso.

Las **representaciones** de los recursos son los datos que se envían al cliente. Las representaciones de los recursos se pueden enviar en diferentes formatos, como JSON, XML, HTML, etc.

El **estado** de una aplicación es la información que se necesita para procesar una solicitud. El estado de una aplicación se puede enviar al cliente en la respuesta pero no se almacena en el servidor.

En REST, las operaciones que se pueden realizar sobre los recursos se definen mediante **verbos** (métodos HTTP). Los verbos más comunes son GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD.

La arquitectura REST se basa en los siguientes principios:

- **Cliente-servidor**: El cliente y el servidor son independientes entre sí: **"separación de conceptos"** (separation of concerns). El cliente no necesita saber cómo se implementa el servidor y el servidor no necesita saber cómo se implementa el cliente. Esto permite que el cliente y el servidor se puedan desarrollar de forma independiente.
- **Sin estado** (**stateless**): Cada solicitud del cliente al servidor debe contener toda la información necesaria para procesar la solicitud. El servidor no debe almacenar información sobre el estado del cliente entre solicitudes. Esto permite que el servidor sea escalable y se pueda distribuir en varios servidores.
- **Cacheable**: Las respuestas del servidor deben ser cacheables. Esto permite que el cliente pueda almacenar en caché las respuestas del servidor y reutilizarlas en futuras solicitudes.
- **Interfaz uniforme**: La interfaz entre el cliente y el servidor debe ser uniforme. Esto permite que el cliente pueda interactuar con diferentes servidores de forma consistente.
- **Sistema en capas**: El sistema debe estar compuesto por capas. Cada capa debe ser independiente de las demás capas. Esto permite que el sistema sea escalable y se pueda distribuir en varios servidores.
- **Código bajo demanda**: El servidor puede enviar código al cliente para que lo ejecute. Esto permite que el cliente pueda ejecutar código en su propio contexto.

### Endpoints de una API Rest con Express

- **GET /api/v1/users**: Obtener todos los usuarios.
- **GET /api/v1/users/:id**: Obtener un usuario por id.
- **GET /api/v1/users?role=admin**: Obtener todos los usuarios.
- **POST /api/v1/users**: Crear un usuario.

- Validaciones: zod (type Address = z.infer<typeof AddressSchema>;)

- **PATCH /api/v1/users/:id**: Actualizar un usuario por id.
- **DELETE /api/v1/users/:id**: Eliminar un usuario por id.

### Arquitectura de una API Rest: MVC

- Model: Representa los datos de la aplicación y la lógica de negocio asociada con ellos: creación de ids, actualización de los datos y persistencia (e.g DB).

- Controller: Intermediario entre los otros dos. Se encarga de gestionar las peticiones HTTP, validar los datos, interactuar con el modelo y devolver una respuesta al cliente.

- View: Representa la interfaz de usuario. En una API Rest no se utiliza o se pude considerar que son los ficheros json.

## Bases de datos

### Bases de datos relacionales

#### MySQL

#### PostgreSQL

#### SQLite

### Bases de datos no relacionales

#### MongoDB

## Autenticación y autorización

### Autenticación

### Autorización

## Aplicación Realtime con Socket IO

### Socket.IO y Express

## Despliegue y publicación en npm

### Despliegue en Render

### Cache

```

```

```

```
