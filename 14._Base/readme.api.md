---
title: Project Base Api
---

API REST "base" para desarrollar posteriormente

Información de los EndPoints Disponibles

- [GET] /: muestra una página HTML con el contenido del README.md del proyecto, convertido a HTML usando marked y gray-matter. El título de la página se obtiene de la variable de entorno PROJECT_NAME, o se muestra "Home" si no está configurada. La cabecera h1 de la página muestra el título extraído del Front Matter del README.md.
- [GET] /api: devuelve un mensaje de descripción de las APIs disponibles en el proyecto.
- [GET] /health: devuelve un mensaje de éxito indicando que el servidor está funcionando correctamente.
