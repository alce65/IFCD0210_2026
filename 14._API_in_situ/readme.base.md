---
title: Project _Base
---

Proyecto base para crear un servidor API REST con Express y TypeScript.

Este proyecto incluye la configuración de un servidor Node y una aplicación de Express, manejo de variables de entorno con Zod, gestión de errores centralizada y una estructura básica para organizar el código.

Se definen dos endpoints básicos: un endpoint raíz que devuelve una página HTML con el contenido del README.md como HTML renderizado mediante una vista, y un endpoint `/api` que devuelve un mensaje de bienvenida a la API en formato JSON, junto con la información de los endpoints disponibles obtenida desde un markdown.

## Evolución del proyecto

### Entorno de desarrollo

1. Ficheros para cualquier proyecto Node.js
   - `.gitignore`
   - `.editorconfig`
   - `package.json`
   - `readme.md`
2. Configuración de TypeScript, ESLint y Prettier.
   - `.eslintrc.js` (incluye tseslint.configs.strict, tseslint.configs.stylistic)
   - `tsconfig.json` (configura TS para que pueda ejecutarse directamente con Node.js)
   - `package.json` (se añade la configuración de Prettier)
3. Dependencias
   - **cross-env** para establecer variables de entorno en los scripts de npm de forma compatible con diferentes sistemas operativos
   - **debug** para el logging de depuración
   - **zod** para la validación de variables de entorno
   - **express** para crear el servidor API
   - **cors** middleware de Express para habilitar el acceso desde diferentes orígenes
   - **morgan** middleware de Express para el logging de solicitudes HTTP
4. Variables de entorno necesarias para el proyecto (se describen en `.env.sample`)
   - NODE_ENV: dev | prod | test
   - PROJECT_NAME: string
   - DEBUG: string (PROJECT_NAME:\*)
   - PORT: number (opcional, por defecto 3000)
5. Selección del fichero de entorno desde los scripts de npm
   - npm run dev: carga `.env`
   - npm run test: carga `.env.test`
   - npm run prod: no carga ningún `.env`, se asume que las variables de entorno están configuradas en el entorno de producción. Usa cross-env para establecer NODE_ENV a prod.

### Estructura inicial del proyecto. Acceso al entorno y logs de debug

6. Estructura de carpetas
   - src/
     - config/
       - `env.ts` (configuración de variables de entorno con Zod)
     - errors/ (carpeta para definir clases de error personalizadas)
       - `http-error.ts` (clase base para errores HTTP)
     - middlewares/ (carpeta para definir middlewares personalizados)
       - `error-handler.ts` (middleware para manejar errores)
     - `app.ts` (configuración de Express)
     - `index.ts` (punto de entrada del servidor)
7. Configuración de variables de entorno con Zod
   - valida las variables de entorno e infiere su tipo `Env`
   - crea un objeto `env` con las variables de entorno validadas
   - exporta el objeto y el tipo
8. Uso de debug para mostrar mensajes de depuración
   - crea un logger con el namespace del proyecto (PROJECT_NAME:\*)
   - los mensajes de debug se muestran solo si la variable de entorno DEBUG incluye el namespace del proyecto, lo que permite controlar la salida de logs de depuración sin afectar a los logs de producción o testing
   - escribe en el log de debug al cargar el módulo
   - escribe en el log de debug al utilizar las funciionalidades del módulo
   - Se repite este patrón de logging en todos los módulos del proyecto para facilitar la depuración y el seguimiento del flujo de ejecución

## Creación del servidor y la aplicación Express

9. Creación del servidor node en `index.ts`
   - importa el objeto `env` y la función `createApp`
   - crea el servidor con `createServer` pasándole la aplicación Express importada desde `app.ts`
   - escucha en el puerto configurado en respuesta al evento `listening`
   - muestra por consola la url del servidor
10. Creación de la aplicación Express en `app.ts`
    - importa express, morgan, cors y debug
    - exporta una función `createApp` que devuelve una aplicación Express
    - la app esta configurada con los middlewares cors, morgan, express.json, express.urlencoded
    - muestra por consola un mensaje de debug indicando que la aplicación se ha iniciado
11. Creación de un middleware personalizado en `customs.ts`
    - exporta una función `customHeaders` que recibe un string `project` y devuelve un middleware que añade un header `X-Project` con el valor de `project` a cada respuesta
    - muestra por consola un mensaje de debug indicando que se ha añadido el header personalizado

## Manejo de errores

12. Creación de una clase de error personalizada en `http-error.ts`
    - exporta una clase `HttpError` que extiende de `Error`
    - el constructor recibe un mensaje, un código de estado, un mensaje de estado y opciones
    - la clase tiene propiedades `status` y `statusMessage` para almacenar el código y mensaje de estado
    - muestra por consola un mensaje de debug indicando que se ha creado un error HTTP con su código, mensaje de estado y mensaje de error
13. Creación de un middleware de manejo de errores en `error-handler.ts`
    - exporta una función `errorHandler` que recibe un error, la request, la response y el next function
    - si el error es una instancia de `HttpError`, devuelve un status con el código y mensaje del error
    - si el error es una instancia de `ZodError`, devuelve un status 400 con un mensaje de error de validación
    - para cualquier otro error, devuelve un status 500 con un mensaje de error genérico
    - muestra por consola un mensaje de debug indicando que se ha manejado un error y su mensaje

## Configuración de rutas básicas

14. Configuración de rutas genéricas en `app.ts`
    - define un endpoint health-check en `[GET] /health` que devuelve un status 200 con un mensaje de éxito
    - para cualquier otra ruta, se crea un error 404 con la clase `HttpError` y se pasa al siguiente middleware de manejo de errores
15. Configuración de los endpoint raíz en `app.ts`
    - define un endpoint raíz `[GET] /` que devuelve un status 200 con un mensaje de bienvenida a la aplicación
    - define un endpoint raíz `/api` que devuelve un status 200 con un mensaje de descripción de las apis

## [Opcional] Configuración de vistas para las rutas anteriores

16. Dependencia
    - **marked** para convertir markdown a HTML
    - **gray-matter** para parsear el contenido del README.md y extraer su metadata (Front Matter)
17. Estructura de carpetas para las vistas
    - public/
      - styles.css
      - favicon.svg
    - src/
      - views/
        - `home.ts` (vista para el endpoint raíz)
18. Uso de elementos estáticos para las vistas
    - `styles.css` con estilos básicos para la página
    - `favicon.svg` como icono de la página
    - estos archivos se sirven de forma estática desde la carpeta `public` usando `express.static` en `app.ts`
19. Configuración de una vista para el endpoint raíz en `home.ts`
    - crea un archivo `home.ts` en la carpeta `views`
    - exporta una clase `HomeView` con un método estático `render` que devuelve un string con el contenido HTML de la página
    - la página muestra el contenido del README.md convertido a HTML usando marked y gray-matter
    - el título de la página se obtiene de la variable de entorno PROJECT_NAME, o se muestra "Home" si no está configurada
    - la cabecera h1 de la página muestra el título extraído del Front Matter del README.md
    - se muestra por consola un mensaje de debug indicando que se ha cargado la clase de la vista y al renderizarla

## [Opcional] Configuración de un controller para la ruta raíz de la API

Este controller se usa como ejemplo de controller funcional, que en este caso exporta una única función que maneja el endpoint raíz de la API Los controller mas completos de los distintos conjuntos de endpoint se construirán como clases siguiendo un patron MVC.

20. Estructura de carpetas para los controllers
    - src/
      - controllers/
        - `api-controller.ts` (controller para el endpoint raíz de la API)
21. Configuración de un controller para el endpoint raíz de la API en `api-controller.ts`
    - crea un archivo `api-controller.ts` en la carpeta `controllers`
    - exporta una función `apiController` que recibe la request y la response, y devuelve un status 200 con un mensaje de bienvenida a la API
    - muestra por consola un mensaje de debug indicando que se ha recibido una solicitud al endpoint de la API y el mensaje de respuesta
    - lee el contenido del `readme.apì.md` y lo parsea con gray-matter para extraer su metadata y contenido,
    - el contenido lo parse con marked.lexer para obtener los tokens del markdown, y luego selecciona los list-items para devolverlos como respuesta de la API
    - se importa y se utiliza esta función como handler para el endpoint `/api` en `app.ts`

Una posible alternativa sería utilizar una vista como la raiz del proyecto y devolver un html con el mismo contenido del `readme.apì.md` parseado con marked.

Se ha optado por devolver un JSON con la información de la API para mostrar un ejemplo de endpoint de API REST que devuelve datos en formato JSON, que es el formato más común en este tipo de APIs.

Además, esto permite mostrar un ejemplo de controller funcional que maneja una solicitud a un endpoint de la API y devuelve una respuesta en formato JSON.
