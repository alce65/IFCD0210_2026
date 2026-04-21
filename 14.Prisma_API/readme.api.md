---
title: Project Base Api
---

API REST "base" para desarrollar posteriormente

Información de los EndPoints Disponibles

- [GET] /: muestra una página HTML con el contenido del README.md del proyecto, convertido a HTML usando marked y gray-matter. El título de la página se obtiene de la variable de entorno PROJECT_NAME, o se muestra "Home" si no está configurada. La cabecera h1 de la página muestra el título extraído del Front Matter del README.md.
- [GET] /api: devuelve un mensaje de descripción de las APIs disponibles en el proyecto.
- [GET] /health: devuelve un mensaje de éxito indicando que el servidor está funcionando correctamente.

## Animals

- [GET] /api/animals: devuelve una lista de animales.
- [GET] /api/animals/:id: devuelve los detalles de un animal específico identificado por su ID.
- [POST] /api/animals: crea un nuevo animal con los datos proporcionados en el cuerpo de la solicitud.
- [PATCH] /api/animals/:id: actualiza los datos de un animal específico identificado por su ID.
- [DELETE] /api/animals/:id: elimina un animal específico identificado por su ID.
