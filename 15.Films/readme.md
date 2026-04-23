# Films

Ejemplo de API de películas, géneros, reviews y usuarios (profile)

## Instalación

- Clonar el repositorio
- Instalar dependencias con `npm install`
- Configurar variables de entorno en un archivo `.env` (puedes usar el archivo `.env.example` como plantilla)
- Las variables de entorno incluyen la URL de conexión a la base de datos. Nos aseguramos de que la base de datos esté configurada y accesible antes de ejecutar las migraciones.
- Generar el cliente de Prisma con `npx prisma generate`
- Ejecutar migraciones para crear la base de datos con `npx prisma migrate dev`
- Iniciar el servidor con `npm start` o `npm run dev` para modo desarrollo.

## Estructura del proyecto

## Relación entre las tablas

películas -- n:n -->  géneros

[películas ---n:n---> usuarios]
películas --1:n ---> reviews
usuarios ---1:n -----> reviews

usuarios ---1:1 -----> profile

## EndPoints

[GET] /api/películas
[GET] /api/películas/:id
[POST] /api/películas [Admin/Editor]
[PATCH] /api/películas/:id [Admin/Editor]
[DELETE] /api/películas/id [Admin/Editor]

[POST] /api/user/registro
[POST] /api/user/login
[GET] /api/user/:id
[PATCH] /api/user/:id [Owner]
[DELETE] /api/user/:id [Owner,Admin]
  
[GET] /api/reviews [User]
[GET] /api/reviews/:id [User]
[POST] /api/reviews [User]
[PATCH] /api/reviews/:id [Owner]
[DELETE] /api/reviews/id [Owner,Admin]
