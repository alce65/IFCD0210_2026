---
title: Project API Animals
---

Proyecto API REST para gestionar animales, con Express y TypeScript.

Partimos de una API "base" que muestra el contenido del [readme.base.md](./readme.base.md).

## Conexión a la base de datos

1. Estructura de carpetas
   - src/
     - config/
       - `db.ts` (configuración de la conexión a la base de datos con pg)
2. Configuración de la conexión a la base de datos
   - se utiliza la librería pg para conectar con una base de datos PostgreSQL
   - se crea un logger de debug para la configuración de la base de datos
   - se muestra un mensaje de debug al cargar el módulo de configuración de la base de datos
   - se crea un pool de conexiones utilizando la configuración obtenida de las variables de entorno
   - se maneja el evento de error del pool para loguear cualquier error de conexión a la base de datos
   - se exporta el pool para ser utilizado en otras partes de la aplicación

## Definición de la entidad Animal y preparación de la base de datos

1. Estructura de carpetas
   - src/
     - animals/
       - entities/
         - `animal.entity.ts` (definición de la entidad Animal)
         - `db-seed.ts` (función que utilizaSQL para crear la tabla de animales en la base de datos)
2. Creamos el modelo de la entidad
  - definimos el schema zod `AnimalSchema` para validar los datos de los animales, con las propiedades id, name, ...
  - exportamos el tipo `Animal` a partir del schema zod, para ser utilizado 
  - definimos los schemas `AnimalCreateSchema` y `AnimalUpdateSchema` para validar los datos de creación y actualización de animales, respectivamente, omitiendo el campo id que es generado automáticamente.
  - exportamos los tipos `AnimalCreateDTO` y `AnimalUpdateDTO` a partir
3. Preparamos la base de datos
  - escribimos la función `seedAnimalsDB` que ejecuta una consulta SQL para crear la tabla de animales si no existe, con las columnas de la entidad Animal. 
  - Esta función se ejecutará independientemente desde un script de package.json para asegurar que la tabla esté creada antes de manejar cualquier solicitud relacionada con animales. 
4. Preparamos la base de datos de test de forma similar, con una función `seedAnimalsTestDB` que se puede ejecutar antes de cada test para asegurar que la tabla de animales esté creada y limpia.
  - esta función también se puede ejecutar de forma independiente desde un script de package.json para preparar la base de datos de test antes de ejecutar los tests.

## Arquitectura y Secuencia de Implementación

Usaremos una arquitectura modular MVC + Repository para organizar el código de la aplicación. La estructura de carpetas será la siguiente:

- src/

  - animals/
    - entities/
      - `animal.entity.ts` (definición de la entidad Animal y sus DTOs)
      - `db-seed.ts` (función para preparar la base de datos con la tabla de animales)
    - repositories/
      - `animal.repository.ts` (clase con la lógica de acceso a datos para la entidad Animal)
    - controllers/
      - `animal.controller.ts` (clase con el controlador para manejar las solicitudes relacionadas con animales)
    - routers/
      - `animal.router.ts` (clase con la definición de las rutas relacionadas con animales, utilizando el servicio)

La secuencia de implementación será la siguiente:
  
- entidades
- repositorios (recibe el pool de la base de datos como DI)
- controladores (recibe el repositorio como DI)
- routers (recibe el controlador como DI)
- integración en app que instancia el repositorio, el controlador y el router, y los conecta con el pool de la base de datos.

## Repositorio

El repositorio `AnimalRepository` se encargará de la lógica de acceso a datos para la entidad Animal. Tendrá métodos para crear, leer, actualizar y eliminar animales en la base de datos. Utilizará el pool de conexiones para ejecutar consultas SQL y manejará cualquier error que pueda ocurrir durante el acceso a los datos.

- estructura de carpetas
  - src/
    - errors/
      - `sql-error.ts` (clase para representar errores SQL personalizados)
    - animals/
      - repositories/
        - `animal.repository.ts` (clase con la lógica de acceso a datos para la entidad Animal)
        - `animal.repository.test.ts` (tests unitarios para el repositorio de animales)
- definición de la clase `AnimalRepository` con métodos para crear, leer, actualizar y eliminar animales en la base de datos
- manejo de errores SQL utilizando la clase `SqlError` para representar errores personalizados relacionados con la base de datos
- escribimos y ejecutamos tests de integración para el repositorio de animales, utilizando una base de datos de test preparada con la función `seedAnimalsTestDB` para asegurar que la tabla de animales esté creada y limpia antes de cada test.

## Controller

El controlador `AnimalController` se encargará de manejar las solicitudes relacionadas con animales. Recibirá el repositorio como dependencia y utilizará sus métodos para realizar las operaciones necesarias en la base de datos. El controlador también se encargará de validar los datos de entrada utilizando los DTOs definidos en la entidad, y de manejar cualquier error que pueda ocurrir durante el procesamiento de las solicitudes.

- estructura de carpetas
  - src/
    - animals/
      - controllers/
        - `animal.controller.ts` (clase con el controlador para manejar las solicitudes relacionadas con animales)
        - `animal.controller.test.ts` (tests unitarios para el controlador de animales). 
- definición de la clase `AnimalController` con métodos para manejar las solicitudes relacionadas con animales, utilizando el repositorio para realizar las operaciones necesarias en la base de datos
- logueo de debug
  - al importar el módulo
  - al crear una instancia del controlador
  - para cada método del controlador, indicando la operación que se está realizando
- tipado de los datos de entrada utilizando los DTOs definidos en la entidad Animal
- manejo de errores utilizando la clase `HttpError` para representar errores personalizados relacionados con las solicitudes HTTP
- escribimos y ejecutamos tests unitarios para el controlador de animales, utilizando mocks para el repositorio y para los objetos de request, response y next de Express, para asegurar que el controlador maneja correctamente las solicitudes y los errores relacionados con las operaciones de animales. Solo se incluyen como ejemplo tests para el método de lectura de animales.

## Router

El router `AnimalRouter` se encargará de definir las rutas relacionadas con animales y de conectarlas con los métodos del controlador. Recibirá el controlador como dependencia y utilizará sus métodos para manejar las solicitudes en las rutas correspondientes. El router también se encargará de validar los datos de entrada utilizando los DTOs definidos en la entidad, y de manejar cualquier error que pueda ocurrir durante el procesamiento de las solicitudes.

- estructura de carpetas
  - src/
    - animals/
      - routers/
        - `animal.router.ts` (clase con la definición de las rutas relacionadas con animales, utilizando el servicio)
- definición de la clase `AnimalRouter` con el router de Express y el controller como dependencia inyectada.
- logueo de debug
  - al importar el módulo
  - al crear una instancia del router
-  en el constructor se definen las rutas relacionadas con animales, utilizando el método correspondiente del controlador para manejar las solicitudes en las rutas correspondientes
 

## Montaje en la aplicación

Una vez definidos el repositorio, el controlador y el router para la entidad Animal, se integran en la aplicación principal. En el archivo `app.ts`, se instancia el repositorio pasando el pool de la base de datos, luego se instancia el controlador pasando el repositorio, y finalmente se instancia el router pasando el controlador. El router se conecta a la aplicación utilizando `app.use()` para que las rutas relacionadas con animales estén disponibles en la API.

## Validaciones con zod

Para validar los datos de entrada en las solicitudes relacionadas con animales, se utilizan schemas de zod definidos en la entidad Animal. Estos schemas se utilizan para validar los datos de creación y actualización de animales, asegurando que los datos recibidos en las solicitudes cumplen con el formato esperado antes de ser procesados por el controlador y el repositorio. Los DTOs definidos en la entidad Animal, corresponden a estos schemas y se utilizan como tipos para indicar a nivel de TypeScript el formato esperado de los datos de entrada en las solicitudes relacionadas con animales.

- estructura de carpetas
  - src/
    - middleware/
        - `validations.ts` (definición de los schemas de zod para validación de los datos)
- cada validador es un middleware de Express que utiliza el schema de zod que recibe como parámetro
  - validateId: middleware para validar que el parámetro id en la ruta es un número entero positivo
  - validateBody: middleware para validar que el cuerpo de la solicitud cumple con el schema de zod correspondiente a la operación que se está realizando (creación o actualización de animales)
- estos middlewares se pueden utilizar en las rutas definidas en el router de animales para asegurar que los datos recibidos en las solicitudes cumplen con el formato esperado antes de ser procesados por el controlador y el repositorio.