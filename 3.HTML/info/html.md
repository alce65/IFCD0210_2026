# HTML

- [HTML](#html)
  - [Introducción](#introducción)
  - [Estructura del documento HTML y elementos básicos](#estructura-del-documento-html-y-elementos-básicos)
    - [Head](#head)
      - [Metadatos comunes](#metadatos-comunes)
      - [Metadatos no estándares](#metadatos-no-estándares)
    - [Body](#body)
      - [Etiquetas básicas (para el body)](#etiquetas-básicas-para-el-body)
      - [Atributos universales básicos](#atributos-universales-básicos)
      - [Algunos atributos específicos](#algunos-atributos-específicos)
    - [Validación de documentos HTML y otras herramientas](#validación-de-documentos-html-y-otras-herramientas)
    - [Ejercicio (1)](#ejercicio-1)
  - [Clasificación de etiquetas en el estándar HTML5](#clasificación-de-etiquetas-en-el-estándar-html5)
    - [Metadata](#metadata)
    - [Etiquetas de sección](#etiquetas-de-sección)
    - [Etiquetas de agrupamiento](#etiquetas-de-agrupamiento)
    - [Etiquetas de texto (Text-level semantics)](#etiquetas-de-texto-text-level-semantics)
    - [Etiquetas de enlaces](#etiquetas-de-enlaces)
    - [Etiquetas de edición](#etiquetas-de-edición)
    - [Etiquetas de elementos embebidos](#etiquetas-de-elementos-embebidos)
    - [Etiquetas de tablas](#etiquetas-de-tablas)
    - [Etiquetas de formulario](#etiquetas-de-formulario)
    - [Etiquetas interactivas](#etiquetas-interactivas)
    - [Scripting](#scripting)
  - [Atributos](#atributos)
  - [Metadatos](#metadatos)
    - [Etiquetas `head`, `title` y `base`](#etiquetas-head-title-y-base)
    - [Etiqueta `meta`](#etiqueta-meta)
      - [Otros atributos de la etiqueta `meta`](#otros-atributos-de-la-etiqueta-meta)
    - [Etiquetas `link` y `style`](#etiquetas-link-y-style)
    - [Ejercicio (2)](#ejercicio-2)
  - [Etiquetas de sección y agrupamiento](#etiquetas-de-sección-y-agrupamiento)
    - [Semántica de las etiquetas de sección](#semántica-de-las-etiquetas-de-sección)
    - [Principales Etiquetas de agrupamiento](#principales-etiquetas-de-agrupamiento)
      - [Citas y referencias en HTML](#citas-y-referencias-en-html)
      - [La etiqueta `main`](#la-etiqueta-main)
    - [Ejercicio (3)](#ejercicio-3)
  - [Textos (Text-level semantics)](#textos-text-level-semantics)
    - [Ejercicio (4)](#ejercicio-4)
  - [Enlaces](#enlaces)
  - [Elementos embebidos: (multimedia)](#elementos-embebidos-multimedia)
    - [Imágenes](#imágenes)
      - [Tamaños de las imágenes](#tamaños-de-las-imágenes)
      - [Carga de imágenes y mejoras de rendimiento (performance)](#carga-de-imágenes-y-mejoras-de-rendimiento-performance)
    - [Imágenes vectoriales](#imágenes-vectoriales)
    - [Audio y video](#audio-y-video)
    - [Otros elementos embebidos y multimedia](#otros-elementos-embebidos-y-multimedia)
  - [Etiquetas de tablas, formulario y elementos interactivos](#etiquetas-de-tablas-formulario-y-elementos-interactivos)
    - [Tablas](#tablas)
    - [Formularios](#formularios)
      - [Atributos de los elementos de formulario: validación y auto-completado](#atributos-de-los-elementos-de-formulario-validación-y-auto-completado)
      - [Datos de formulario](#datos-de-formulario)
    - [Etiquetas interactivas de HTML5](#etiquetas-interactivas-de-html5)
  - [Elementos de Scripting](#elementos-de-scripting)
    - [Atributos de la etiqueta `script`](#atributos-de-la-etiqueta-script)
  - [Accesibilidad, roles y atributos ARIA](#accesibilidad-roles-y-atributos-aria)
    - [Accesibilidad en los elementos HTML](#accesibilidad-en-los-elementos-html)
    - [Ejercicio (5)](#ejercicio-5)
    - [ARIA](#aria)

## Introducción

- **Lenguaje de marcado** para la elaboración de páginas web
- HTML: **HyperText Markup Language**
- Versión actual: **HTML5.2**
- No case sensitive - **minúsculas**

- Basado en **etiquetas** (tags) que definen los elementos de la página
  - Dobles (opening y closing)
  - Simples (no tienen contenido)
- **Atributos**

```html
<h1>Encabezado de primer nivel</h1>
<p>Este es un párrafo</p>
<a href="https://www.google.com">Enlace a Google</a>
<img src="imagen.jpg" alt="Texto alternativo" />
```

- **Comentarios**

```html
<!-- Este es un comentario -->
```

- Estructura de un **documento** HTML
  - las etiquetas y sus atributos definen los elementos de la página
  - Los elementos determinan la **estructura** y el **contenido**
  - **Anidamiento** de etiquetas y contenidos
  - Dan lugar a una **estructura** de árbol

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Titulo de la página</title>
  </head>
  <body>
    <header>
      <h1>Encabezado de primer nivel</h1>
    </header>
    <p>Este es un párrafo</p>
  </body>
</html>
```

## Estructura del documento HTML y elementos básicos

- Etiquetas estructurales

  - `html`
  - `head`
  - `body`

### Head

- Etiquetas de metadatos y enlaces

  - `meta`
  - `link`
  - `script`
  - `title`
  - `style`

- el atributo universal `lang`
- Algunos atributos específicos

  - `charset`
  - `name`
  - `content`
  - `rel`
  - `href`
  - `type`
  - `src`
  - `defer`

#### Metadatos comunes

Entre los metadatos comunes se encuentran

- `charset` - define el juego de caracteres
- `name` y `content` - descripción, autor, palabras clave, etc.
  - `name="viewport"`
  - `name="description"`
  - `name="keywords"`
  - `name="robots"`
  - `name="author"`

Más información en [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name)

```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Ejemplo de sitio Web básico" />
    <meta name="author" content="Alejandro Cerezo" />
    <meta name="keywords" content="HTML, CSS, JavaScript" />
    <meta name="robots" content="index, follow" />
    <title>Basic Web</title>
    <link rel="stylesheet" href="styles.css" />
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <script type="module" src="main.js" defer></script>
  </head>
  <body>
    ...
  </body>
</html>
```

#### Metadatos no estándares

Por ejemplo los metadatos de **Open Graph** que se usan en las redes sociales

```html
<meta property="og:title" content="Título de la página" />
<meta property="og:description" content="Descripción de la página" />
<meta property="og:image" content="https://www.example.com/image.jpg" />
<meta property="og:url" content="https://www.example.com" />
```

Para comprobar el funcionamiento de los metadatos de **Open Graph** se puede usar las herramientas

- de **Facebook** [Sharing Debugger](https://developers.facebook.com/tools/debug/)
- de **Twitter** [Card Validator](https://cards-dev.twitter.com/validator)
- o la más genérica [Open Graph](https://www.opengraph.xyz/)

En la misma línea, para comprobar el funcionamiento de los metadatos de **Schema.org** se puede usar las herramienta [Rich Results Test](https://search.google.com/test/rich-results) que permite pegar código.

### Body

#### Etiquetas básicas (para el body)

- `h1`, `h2`, `h3`, `h4`, `h5`, `h6` - headings (encabezados)
- `p` - paragraph (párrafo)
- `a` - anchor (enlace)
- `div`, `span` - divisiones genéricas
- `ul`, `ol`, `li` - listas
- `img`, `svg` - imagen
- `br`, `hr` (casi NO se usan)

#### Atributos universales básicos

- `lang` - define el idioma
- `id` - define el identificador
- `class` - define la clase
- `style` - define el estilo
- `title` - define el título

No tan habituales

- `dir` - define la dirección
- `hidden` - define si está oculto

#### Algunos atributos específicos

- `src`
- `href`
- `alt`
- `width`
- `height`

### Validación de documentos HTML y otras herramientas

- [W3C Markup Validation Service](https://validator.w3.org/)
- [W3C Nu Markup Validation Service](https://validator.w3.org/nu/)
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
- [W3C Link Checker](https://validator.w3.org/checklink)
- [W3C MobileOK Checker](https://validator.w3.org/mobile)
- [W3C Unicorn](https://validator.w3.org/unicorn)

Concepto de documento HTML válido

- **Sintácticamente correcto** - no errores de sintaxis
- **Semánticamente correcto** - uso correcto de las etiquetas
- **Accesible** - uso de atributos y roles ARIA
- **Interoperable** - uso de estándares y buenas prácticas
- **Adaptativo** - uso de media queries y responsive design
- **Optimizado** - uso de técnicas de optimización
- **Seguro** - uso de HTTPS y buenas prácticas de seguridad
- **Eficiente** - uso de técnicas de rendimiento

Una importante fuente de datos sobre el funcionamiento de un sitio Web es el **informe de auditoría** de **Lighthouse** que se puede obtener desde el **DevTools** de **Chrome**.

### Ejercicio (1)

- Crear un documento HTML con la estructura básica (sample1.html)
  - Agregar un comentario al inicio del documento
  - Agregar un título a la página
  - Agregar varios párrafo
  - Agregar un titulo a las listas siguiente
  - Agregar una lista desordenada con 3 elementos
  - Agrega una lista desordenada con 3 elementos cada uno con una lista anidada con 3 elementos
  - Agrega un título al resto de la página
  - Agregar alguna imagen con un texto alternativo
  - Agregar un titulo a la lista siguiente dentro de la sección de imágenes
  - Agregar una lista ordenada con 3 elementos, que sean enlaces a
    - Google
    - Bing
    - DuckDuckGo
  - Agregar un párrafo con los mismos enlaces asociados a las imagen de cada buscador
- Validar el documento con el servicio de validación de W3C

## Clasificación de etiquetas en el estándar HTML5

1. Document element
2. Metadata
3. Sectioning
4. Grouping
5. Text-level semantics
6. Links
7. Edits
8. Embedded content
9. Tabular data
10. Forms
11. Interactive elements
12. Scripting
13. Custom elements

### Metadata

```s standard list of elements
1. head
2. title
3. base
4. link
5. meta
6. style
```

### Etiquetas de sección

```s standard list of elements
1. body
2. section
3. header
4. footer
5. article
6. nav
7. aside
8. h1, h2, h3, h4, h5, and h6
9. hgroup
10.address
```

### Etiquetas de agrupamiento

```s standard list of elements
1. p
2. hr
3. pre
4. blockquote
5. ol and ul
6. menu
7. li
8. dl, dt and dd
9. figure and figcaption
10. main
11. div
```

### Etiquetas de texto (Text-level semantics)

```s standard list of elements
1. a
2. em
3. strong
4. small
5. cite
6. q
7. dfn
8. abbr
9. ruby, rt and rp (East Asian typography)
10. data
11. time
12. code, var, samp and kbd
13. sub and sup
14. i
15. b
16. u
17. s
18. mark
19. bdi and bdo (explicit text directionality)
20. span
21. br (line break)
22. wbr (line break opportunity)
```

### Etiquetas de enlaces

```s standard list of elements
1. a
2. area
```

### Etiquetas de edición

```s standard list of elements
1. ins
2. del
```

### Etiquetas de elementos embebidos

```s standard list of elements
1. picture
2. source
3. img
4. iframe
5. embed
6. object
7. video
8. audio
9. track
10. map and area (Image maps)
12. MathML
12. SVG
```

### Etiquetas de tablas

```s standard list of elements
1. table
2. caption
3. colgroup
4. col
5. tbody
6. thead
7. tfoot
8. tr (table row)
9. td (table data cell)
10. th (table header cell)
```

### Etiquetas de formulario

```s standard list of elements
1. form
2. label
3. input
4. button
5. select
6. datalist
7. option and optgroup
8. textarea
9. output
10. progress
11. meter
12. fieldset
13. legend
```

### Etiquetas interactivas

```s standard list of elements
1. details and summary
2. dialog
```

### Scripting

```s standard list of elements
1. script
2. noscript
3. template
4. slot
5. canvas
```

## Atributos

- Universales
  - id
  - class
  - style
  - title
  - lang
  - dir
  - tabindex
  - accesskey
  - contenteditable
  - hidden
  - role
  - data-\*
- Específicos
  - src
  - href
  - alt
  - width
  - height
  - colspan
  - rowspan
  - type
  - value
  - checked
  - disabled
  - readonly
  - required
  - placeholder
  - min
  - max
  - step
  - pattern
  - for
  - name
  - action
  - method
  - target
  - rel
  - media
  - charset
  - async
  - defer
  - srcset

## Metadatos

- head, title, base
- link, style
- meta

### Etiquetas `head`, `title` y `base`

La etiqueta `head` se usa para definir el primero de los dos bloques que componen una página HTML, el que contiene toda la información de metadatos de la página, como el título, la codificación de caracteres, las hojas de estilos, los scripts, etc.

```html
<head lang="en">
  <title>Basic Web</title>
  <base href="https://www.example.com" />
</head>
```

El atributo `lang` se usa para definir el idioma del documento.

La etiqueta `title` se usa para definir el título de la página, que se muestra en la barra de título del navegador.

```html
<title>Basic Web</title>
```

La etiqueta `base` se usa para definir la URL base de la página, que se usa para resolver las URL relativas de los enlaces, las imágenes, las hojas de estilos, los scripts, etc.

```html
<base href="https://www.example.com" />
```

### Etiqueta `meta`

Se usa para definir metadatos que no se muestran en la página, pero que son importantes para el navegador y los motores de búsqueda.

Básicamente tiene tres formatos

- El mas antiguo es el formato de atributos `http-equiv` y `content`, que se usaba para definir metadatos que se usaban en el protocolo HTTP y prácticamente no se usa

```html
<meta http-equiv="refresh" content="30" />
```

- El formato de atributos `charset` nuevo en HTML5 se usa para definir el juego de caracteres del documento

```html
<meta charset="UTF-8" />
```

- El más común es el formato de atributos `name` y `content`, que se usa para definir metadatos que se usan en los motores de búsqueda y en el navegador

```html
<meta name="description" content="Ejemplo de sitio Web básico" />
<meta name="author" content="Juan Pérez" />
<meta name="keywords" content="HTML, CSS, JavaScript" />
```

Valores de `name` y `http-equiv`

- **viewport**
- **description**
- **keywords**
- **robots**
- theme-color
- application-name
- author
- generator
- referrer
- content-language
- content-type
- default-style
- refresh

```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="Ejemplo de sitio Web básico" />
<meta name="keywords" content="HTML, CSS, JavaScript" />
<meta name="author" content="Juan Pérez" />
<meta name="theme-color" content="#000000" />
<meta name="content-language" content="es" />
<meta name="content-type" content="text/html" />
<meta name="default-style" content="display: none;" />
```

#### Otros atributos de la etiqueta `meta`

- scheme
- property
- itemprop
- itemid
- itemref
- itemtype
- about
- datatype
- inlist
- prefix

### Etiquetas `link` y `style`

La etiqueta `link` se usa para enlazar recursos externos a la página, como hojas de estilos, fuentes, iconos, etc.

```html
<link rel="stylesheet" href="styles.css" />
<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
```

El atributo `rel` define la relación entre el documento actual y el recurso enlazado.
Su valor preload y preconnect se usa para indicar que el recurso enlazado se debe cargar de forma anticipada., por ejemplo para cargar fuentes, documentos, etc.

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
  rel="stylesheet"
/>
```

La etiqueta `style` se usa para definir estilos en línea o en el documento.

```html
<style>
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
  }
</style>
```

### Ejercicio (2)

- Copia el documento HTML con del ejercicio 1 (sample2.html)
- Completa la sección de metadatos con
  - Un enlace a un archivo de estilos
  - Un enlace a el favicon de la página (svg)
  - Un enlace a un archivo de script diferido y de tipo módulo
  - Un meta con el atributo charset
  - Un meta con el atributo name y content para el viewport
  - Un meta con el atributo name y content para la descripción del sitio
  - Un meta con el atributo name y content para el autor del sitio
  - Un meta con el atributo name y content para la fecha de creación del sitio
  - Un meta con el atributo name y content para la fecha de actualización del sitio
  - Un meta con el atributo name y content para la licencia del sitio
  - Un meta con el atributo name y content para la palabra clave del sitio
  - Un meta con el atributo name y content para el tema de colores soportado por el sitio
  - Un meta con el atributo name y content para el idioma del sitio

## Etiquetas de sección y agrupamiento

Las etiquetas de sección se usan para definir **secciones** de la página, como encabezados, pies de página, menús, artículos, etc.
Las etiquetas de agrupamiento se usan para **agrupar** elementos de la página, como párrafos, listas, bloques de texto, etc.

Los elementos de sección se usan para definir la estructura de la página y son tenidos en cuenta por los motores de búsqueda (SEO) y los lectores de pantalla (accesibilidad) como parte del **esquema (outline)** de la página, mientras que los elementos de agrupamiento se usan para definir el contenido de la página sin reflejarse en el esquema.

```html
<header>
  <h1>Encabezado de primer nivel</h1>
</header>
<nav>
  <ul>
    <li><a href="#section1">Sección 1</a></li>
    <li><a href="#section2">Sección 2</a></li>
    <li><a href="#section3">Sección 3</a></li>
  </ul>
</nav>
<main>
  <article>
    <h2>Artículo 1</h2>
    <p>Este es un párrafo</p>
  </article>
  <aside>
    <h3>Información extra</h3>
    <p>Este es un párrafo</p>
  </aside>
</main>
<footer>
  <p>Pie de página</p>
</footer>
```

### Semántica de las etiquetas de sección

Hasta HTML4, la estructura de una página web se definía con las etiquetas de agrupamiento, como `div` y `span`, que no tienen significado semántico. El único elemento de sección eran las etiquetas `h1` - `h6` que se usaba para definir los distintos niveles del esquema (outline) de la página.

En HTML5 se introdujeron las etiquetas de sección, que se usan para definir un segundo esquema (outline) de la página, superpuesto al anterior, y pensado para ser usado por los motores de búsqueda (SEO) y los lectores de pantalla (accesibilidad).

Existen 8 elementos de sección

- `h1` - `h6` (`hgroup`)
- `section` - Una sección genérica de un documento
- `header` - Encabezado de una sección o de todo el documento
- `footer` - Pie de una sección o de todo el documento
- `article` - Un artículo independiente
- `nav` - Un grupo de enlaces de navegación
- `aside` - Contenido relacionado con el contenido circundante
- `address` - Información de contacto del autor o propietario de la página

La etiqueta `hgroup` se usaba para agrupar varios encabezados (`h1` - `h6`) que forman parte de un mismo esquema (outline), pero ha sido eliminada en HTML5.2.

NO se deben usar NUNCA las etiquetas de sección en función de su aspecto visual, sino en función de su significado semántico.

Por ejemplo, NO se debe usar la etiqueta `header` para definir el encabezado visual de una sección, sino para definir el encabezado semántico de una sección. El encabezado visual de una sección se debe definir con CSS.

En el **estándar** queda claro el uso de cada una de las etiquetas de sección:

- El elemento `section` representa una **sección independiente** genérica de un documento, que no tiene un elemento semántico más específico para representarla. Las secciones siempre deben tener un **encabezamiento**, con muy pocas excepciones.

- El elemento `header` representa el contenido introductorio (encabezado) de una sección o de todo el documento, normalmente un grupo de ayudas de **introducción** o **navegación**. Puede contener algunos elementos de **encabezamiento**, pero también un **logotipo**, un **formulario de búsqueda**, un **nombre de autor** y otros elementos similares.

- El elemento `footer` representa el "pie de página" para su ancestro más cercano contenido de sección o elemento raíz de sección de (una sección o todo el documento). Un pie típicamente contiene información sobre el **autor** de la sección, derechos de autor y datos de **copyright**, **enlaces** a documentos relacionados, etc.

- El elemento `article` representa una **composición autocontenida** en un documento, página, aplicación o sitio, destinada a ser distribuida o reutilizada de forma **independiente** (por ejemplo, en **sindicación**). Algunos ejemplos son: una entrada de foro, un artículo de revista o periódico, o una entrada de blog, una ficha de producto, un comentario enviado por un usuario, un widget o gadget interactivo, o cualquier otro elemento independiente de contenido.

- El elemento `aside` representa una parte de un documento cuyo contenido sólo está **relacionado indirectamente** con el contenido principal del documento. A menudo se presentan como barras laterales o recuadros de llamada.

- El elemento `nav` representa una sección de una página cuyo propósito es proporcionar enlaces de **navegación**,
  que enlazan a otros documentos o a otras partes del documento actual. Ejemplos comunes de secciones de navegación son los menús, las tablas de contenido y los índices.

- El elemento HTML `address` indica que el HTML adjunto proporciona información de contacto de una persona o personas, o de una organización.

### Principales Etiquetas de agrupamiento

Las principales etiquetas de agrupamiento son

- `p` - párrafo
- `pre` - texto pre-formateado (respeta espacios y saltos de línea)
- `blockquote` - cita
- `ol` - lista ordenada
- `ul` - lista desordenada
- `li` - elemento de lista
- `main` - contenido principal
- `div` - división genérica
- `span` - división genérica a nivel de texto (en línea)

Otras listas pueden construirse con las etiquetas `dl` (lista de definición), `dt` (término de definición) y `dd`(definición) para listas de definición.
En relación con les imágenes y otros elementos multimedia se añaden las etiquetas, `figure` y `figcaption` para la leyendas (pie de foto).
La etiqueta `hr` se usa para definir una línea horizontal siempre que tenga un valor semántico de separación de elementos diferenciados. No suele usarse.

#### Citas y referencias en HTML

El elemento `blockquote` indica que el texto incluido es una cita ampliada. Por lo general, esto se representa visualmente mediante sangría, que obviamente puede modificarse desde CSS.

- Se puede proporcionar una **URL** para la fuente de la cita utilizando el **atributo `cite`**. Este atributo proporciona un **enlace** a la fuente de la cita, por lo que siembre debe ser una URL.

```html
<blockquote cite="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
  <p>
    JavaScript (JS) is a lightweight interpreted (or just-in-time compiled)
    programming language with first-class functions.
  </p>
</blockquote>
```

- La etiqueta `cite` se usaba inicialmente para representa una referencia a un trabajo creativo indicando su titulo

```html
<p>
  Podemos encontrar más información en
  <cite>JavaScript: The Good Parts</cite> de Douglas Crockford
</p>
```

- Posteriormente el uso del elemento cite admite su uso para representar una **referencia completa** a la fuente de la cita.

```html
<blockquote>
  <p>
    This is a book about the JavaScript programming language. It is intended for
    programmers who, by happenstance or curiosity, are venturing into JavaScript
    for the first time. It is also intended for programmers who have been
    working with JavaScript at a novice level and are now ready for a more
    sophisticated relationship with the language.
  </p>
  <footer>
    <cite
      >JavaScript: The Good Parts. Douglas Crockford. O'Reilly Media. 2008</cite
    >
  </footer>
</blockquote>
```

A nivel de texto existe el elemento `q` que se usa para citas cortas, en línea.

```html
Como dijo <q>La imaginación es más importante que el conocimiento</q>.
```

#### La etiqueta `main`

La etiqueta `main` se usa para definir el contenido principal de la página, que es el contenido que es **único** para esa página y no se repite en otras páginas. Tiene sentido cuando el sitio contiene varias páginas, por ejemplo una página de inicio, una página de contacto, una página de producto..., con lo que `main` se usa para definir el contenido propio de cada una de esas páginas.

```html
<header>
  <h1>Encabezado de primer nivel del sitio Web</h1>
  <main>
    <h2>Encabezado de la página</h2>
    <p>Texto de la página...</p>
  </main>
  <footer>
    <p>Pie de página del sitio Web</p>
  </footer>
</header>
```

### Ejercicio (3)

- Copia el documento HTML con del ejercicio 2 (sample3.html)
- Agrega una sección de encabezado con un encabezado de primer nivel y un menú de navegación
- Agrega una sección principal con un encabezado de segundo nivel y un párrafo
- Agrega una sección de pie de página con un párrafo
- Agrega una sección de artículo con un encabezado de segundo nivel y un párrafo
- Agrega una sección de barra lateral con un encabezado de tercer nivel y un párrafo
- Agrega una cita con una referencia a un libro
- Agrega una cita con una referencia a un sitio Web

## Textos (Text-level semantics)

Las etiquetas de texto incluyen las etiquetas de énfasis, de citas, de abreviaturas, de acrónimos, de definiciones, de código, de variables, de teclas, de subíndices, de superíndices, de texto tachado, de texto subrayado, de texto en negrita, de texto en cursiva, de texto en marcado, de texto en voz alterna, de texto en voz en off

- `strong` - strong importance (importancia fuerte)
- `em` - emphasis (énfasis)
- `small` - small print (letra pequeña)
- `sub` - subscript (subíndice)
- `sup` - superscript (superíndice)

Ya hemos mencionado las etiquetas `q` (quotation = cita) y `cite` para citas (citation = referencia), y veremos más adelante la etiqueta `a` (anchor) para los enlaces.

En textos de programación se usan las etiquetas `code` (código), `var` (variable), `samp` (sample, muestra), `kbd` (keyboard input, entrada de teclado), junto con los bloques de texto pre-formateado `pre` (preformatted text) para mostrar código fuente.

Otras etiquetas no demasiado frecuentes son

- `dfn` - definition (definición)
- `abbr` - abbreviation (abreviatura)
- `data` - data (datos) - provide a machine-readable form as value
- `time` - time (tiempo) - provide a machine-readable form as datetime
- `mark` (marcado) - marcado contextual, e.g. para resaltar una palabra buscada en un texto

Redefinidas semanticamente

- `i` semantic (text in an alternate voice or mood, offset from normal prose)
- `b` semantic (attention for utilitarian purposes)
- `u` semantic (unarticulated, though explicitly rendered, non-textual annotation)
- `s` (no longer accurate or no longer relevant)

### Ejercicio (4)

- Copia el documento HTML con del ejercicio 3 (sample4.html)
- Agrega las palabras clave del texto
- Agrega alguna abreviatura
- Agrega una fragmento de código

## Enlaces

La etiqueta `a` se usa para definir enlaces a otras páginas, a otros documentos, a otros recursos, a otros fragmentos de la misma página, a otros protocolos, a otros servicios, etc. dependiendo del valor del atributo `href`.

- URL absoluta
- URL relativa a inicio / al documento
- URL ancla
- URL otros protocolos mailto, tel,
- URL fragmento
- URL query

El atributo `target` se usa para definir el destino del enlace, es decir, si se abre en la misma ventana, en una nueva ventana, en una nueva pestaña, en un marco, en un iframe, etc.

El atributo `rel` se usa para definir la relación entre el documento actual y el recurso enlazado, por ejemplo si es un enlace de ayuda, un enlace de referencia, un enlace de origen, un enlace de destino, un enlace de descarga, etc.

```html
<a href="https://www.google.com" target="_blank" rel="noopener noreferrer"
  >Enlace a Google</a
>
```

Los valores de `rel` más comunes son

- alternate - enlace de versión alternativa
- author - enlace de autor
- bookmark - enlace de marcador
- external - enlace externo
- help - enlace de ayuda
- license - enlace de licencia
- next - enlace de siguiente
- nofollow - enlace no seguido (no seguido por los motores de búsqueda)
- noreferrer - enlace no referido (no se envía el referer)
- noopener - enlace no abrir (no se abre en una nueva ventana)
- prev - enlace de anterior
- search - enlace de búsqueda
- tag - enlace de etiqueta
- ugc - enlace de contenido generado por el usuario
- sponsored - enlace patrocinado
- stylesheet - enlace de hoja de estilos

El atributo `hreflang` se usa para definir el idioma del recurso enlazado, por ejemplo si es un recurso en inglés, en español, en francés, etc.

## Elementos embebidos: (multimedia)

Los elementos embebidos se usan para incluir contenido multimedia en la página almacenado en archivos independientes del HTML, generalmente binarios, como imágenes, audio, video, mapas, etc.

### Imágenes

- `img` - imagen
- `picture` - imagen
- `figure` - figura
- `figcaption` - leyenda

Se pueden usar en las etiquetas `img`, `picture`, `figure` y `figcaption` para mostrar imágenes en la página.
Las dos primeras hacen referencia al archivo de la imagen.
Las otras dos se usan para agrupar una imagen con su leyenda (pie de foto)

```html
<img src="imagen.jpg" alt="Texto alternativo" />
<figure>
  <img src="imagen.jpg" alt="Texto alternativo" />
  <figcaption>Leyenda de la imagen</figcaption>
</figure>
```

El atributo `alt` se usa para definir el texto alternativo de la imagen, que se muestra si la imagen no se puede cargar, si el usuario usa un lector de pantalla, si el usuario desactiva la carga de imágenes, etc.

El atributo `src` se usa para definir la URL de la imagen, que puede ser una URL absoluta, una URL relativa, una URL de datos, etc.

El formato de las imágenes puede ser de muchos tipos. Los más comunes entre los bitmaps o rasters han sido tradicionalmente `jpg` o `jpeg` (JPEG), `png` (Portable Network Graphics) y `gif` (Graphics Interchange Format), junto con otros menos comunes como `bmp` (Bitmap), `tiff` o `tif` (Tagged Image File Format), `ico` (Icon), `cur` (Cursor), `jp2` (JPEG 2000), `jpx`, `jpf`, `jpm`, `mj2` (JPEG 2000 Part 2). Progresivamente se van incorporando formatos modernos como `webp` (Web Picture), `avif` (AV1 Image File Format), `apng` (Animated Portable Network Graphics), `heif` o `heic` (High Efficiency Image File Format). Además pueden usarse imágenes vectoriales en formato `svg` (Scalable Vector Graphics).

#### Tamaños de las imágenes

El atributo `width` se usa para definir el ancho de la imagen, y el atributo `height` se usa para definir el alto de la imagen.
Al usarlos se define el tamaño que tendrá la imagen en la página, y se reserva el espacio para la imagen antes de que se cargue.

```html
<img src="imagen.jpg" alt="Texto alternativo" width="640" height="360" />
```

El atributo `intrinsicsize` se usa para definir el tamaño intrínseco de la imagen, es decir, el tamaño real de la imagen, que se usa para reservar el espacio para la imagen antes de que se cargue.

```html
<img
  src="imagen.jpg"
  alt="Texto alternativo"
  width="640"
  height="360"
  intrinsicsize="640x360"
/>
```

El atributo `srcset` se usa para definir varias fuentes de la imagen, por ejemplo en distintos formatos, en distintas resoluciones, en distintos tamaños, etc.

La etiqueta `picture`, combinada con la etiqueta `source` facilitan el uso de varias fuentes de la imagen, por ejemplo en distintos formatos, en distintas resoluciones, en distintos tamaños, etc.

```html
<figure>
  <picture>
    <source srcset="imagen.webp" type="image/webp" />
    <source
      srcset="imagen.600.jpg"
      type="image/jpeg"
      media="(max-width: 799px)"
    />
    <source
      srcset="imagen.800.jpg"
      type="image/jpeg"
      media="(min-width: 800px)"
    />
    <img src="imagen.jpg" alt="Texto alternativo" />
  </picture>
  <figcaption>Leyenda de la imagen</figcaption>
</figure>
```

[Responsive_images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

#### Carga de imágenes y mejoras de rendimiento (performance)

El atributo `loading` con el valor **lazy** se usa para definir si la imagen se carga de forma diferida, es decir, si se carga solo cuando se va a mostrar, por ejemplo cuando se hace scroll. También es válido con otros elementos embebidos como los iframe,

```html
<img src="imagen.jpg" alt="Texto alternativo" loading="lazy" />
```

El atributo `decoding` con el valor **async** se usa para definir si la imagen se decodifica de forma diferida, es decir, si se decodifica solo cuando se va a mostrar, por ejemplo cuando se hace scroll.

```html
<img src="imagen.jpg" alt="Texto alternativo" decoding="async" />
```

El atributo `importance` con el valor **high** se usa para definir si la imagen se carga con prioridad alta, es decir, si se carga antes que otras imágenes, por ejemplo cuando se hace scroll.

```html
<img src="imagen.jpg" alt="Texto alternativo" importance="high" />
```

El atributo `fetchpriority` con el valor **hight** se usa para definir si la imagen se carga con prioridad alta, es decir, si se carga antes que otras imágenes, por ejemplo cuando se hace scroll.

```html
<img src="imagen.jpg" alt="Texto alternativo" fetchpriority="hight" />
```

### Imágenes vectoriales

- `svg` - gráficos vectoriales escalables

### Audio y video

- `audio` - audio
- `video` - video
- `track` - pista

Tanto picture como audio y video admiten la etiqueta `source` para definir varias fuentes de reproducción, por ejemplo en distintos formatos, en distintas resoluciones, en distintos idiomas, etc.

En los elementos `audio` y `video` se pueden usar los atributos `controls` para mostrar los controles de reproducción, `autoplay` para iniciar la reproducción automáticamente, `loop` para repetir la reproducción, `muted` para silenciar la reproducción, `preload` para cargar la reproducción, `poster` para mostrar una imagen de portada, `width` y `height` para definir el tamaño de la reproducción, `src` para definir la URL de la reproducción, `type` para definir el tipo de la reproducción, `crossorigin` para definir la política de seguridad, `integrity` para definir la integridad de la reproducción, `referrerpolicy` para definir la política de referer de la reproducción.

```html
<video
  controls
  autoplay
  loop
  muted
  preload
  poster="video.jpg"
  width="640"
  height="360"
>
  <source src="video.mp4" type="video/mp4" />
  <source src="video.webm" type="video/webm" />
  <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English" />
  <track src="subtitles_es.vtt" kind="subtitles" srclang="es" label="Español" />
</video>
```

### Otros elementos embebidos y multimedia

- `iframe` - marco en línea
- `math` - fórmulas matemáticas

Los elementos `iframe` son muy habituales para incluir videos de YouTube, mapas de Google Maps, etc.

```html
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID"
  width="640"
  height="360"
  frameborder="0"
  allowfullscreen
></iframe>
```

Otras etiquetas de elementos embebidos prácticamente en desuso son

- `map` y `area` - mapa y área de un mapa
- `embed` y `object`- objeto incrustado en des

Aunque es una etiqueta de tipo script, `canvas` (lienzo) da lugar a elementos gráficos

## Etiquetas de tablas, formulario y elementos interactivos

### Tablas

- table, tr, th, td

```html
<table>
  <caption>
    Tabla de ejemplo
  </caption>
  <thead>
    <tr>
      <th>Encabezado 1</th>
      <th>Encabezado 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Fila 1, Celda 1</td>
      <td>Fila 1, Celda 2</td>
    </tr>
    <tr>
      <td>Fila 2, Celda 1</td>
      <td>Fila 2, Celda 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Pie 1</td>
      <td>Pie 2</td>
    </tr>
  </tfoot>
</table>
```

### Formularios

- Formulario y elementos pasivos

  - form, legend, fieldset, label

```html
  <form action="https://www.example.com" method="post">
    <fieldset>
      <legend>Datos del usuario</legend>
      <label for="name">Nombre:</label>
      <input type="text" id="name" name="name" required>
      <label>Apellido:
        <input type="text" id="surname" name="surname" required>
      </label>
    </fieldset>
    <button type="submit" value="Enviar">
  </form>
```

- Entrada de texto

  - input
    - text, password, email, url, tel, number, date, time, datetime-local, month, week, color
  - textarea

```html
<label
  >Nombre:
  <input type="text" name="name" required />
</label>

<label
  >Correo:
  <input type="email" name="email" required />
</label>
<label
  >Contraseña:
  <input type="password" name="password" required />
</label>
<label
  >Buscar
  <input type="search" name="q" />
</label>
<label
  >URL:
  <input type="url" name="url" required />
</label>
<label
  >Teléfono:
  <input type="tel" name="tel" required />
</label>
<label
  >Número:
  <input type="number" name="number" required />
</label>
<label
  >Rango:
  <input type="range" id="range" name="range" />
</label>
<label
  >Fecha:
  <input type="date" name="date" required />
</label>
<label
  >Hora:
  <input type="time" name="time" required />
</label>
<label
  >Fecha y hora:
  <input type="datetime-local" name="datetime-local" required />
</label>
<label
  >Mes:
  <input type="month" name="month" required />
</label>
<label
  >Semana:
  <input type="week" name="week" required />
</label>
<label
  >Color:
  <input type="color" name="color" required />
</label>
<label for="comentarios">comentarios:</label>
<textarea id="comentarios" name="comentarios" required></textarea>
```

- Entrada de archivos
  - input
    - file

```html
<label for="file">Archivo:</label>
<input type="file" id="file" name="file" required />
```

- Selección de opciones

  - input
    - radio, checkbox
    - datalist
  - select, option

```html
<label for="radio1">Opción 1:</label>
<input type="radio" id="radio1" name="radio" value="1" required />
<label for="radio2">Opción 2:</label>
<input type="radio" id="radio2" name="radio" value="2" required />
<label for="checkbox1">Opción 1:</label>
<input type="checkbox" id="checkbox1" name="checkbox" value="1" required />
<label for="checkbox2">Opción 2:</label>
<input type="checkbox" id="checkbox2" name="checkbox" value="2" required />
<label for="select">Opciones:</label>
<select id="select" name="select" required>
  <option value="1">Opción 1</option>
  <option value="2">Opción 2</option>
</select>
<label for="datalist">Opciones:</label>
<input list="datalist" id="datalist" name="datalist" required />
<datalist id="datalist">
  <option value="1"></option>
  <option value="2"></option>
</datalist>
```

- Botones

  - button / input
    - submit, reset
    - button

```html
<button type="submit" value="Enviar">
  <input type="submit" value="Enviar" />
  <button type="reset" value="Limpiar">
    <input type="reset" value="Limpiar" />
    <button type="button" value="Botón">
      <input type="button" value="Botón" />
    </button>
  </button>
</button>
```

- Otros elementos

  - output
  - progress
  - meter

```html
<label for="output">Resultado:</label>
<output id="output" name="output"></output>
<label for="progress">Progreso:</label>
<progress id="progress" name="progress" value="50" max="100"></progress>
<label for="meter">Medida:</label>
<meter id="meter" name="meter" value="50" min="0" max="100"></meter>
```

#### Atributos de los elementos de formulario: validación y auto-completado

- atributo `name` - nombre de un elemento de formulario
- atributo `placeholder` - define el texto de marcador de posición de un elemento de formulario
- atributo `readonly` - define si un elemento de formulario es de solo lectura
- atributo `disabled` - define si un elemento de formulario está deshabilitado
- atributo `step` - define el incremento de un elemento de formulario
- atributo `multiple` - define si un elemento de formulario admite múltiples valores
- atributo `autocomplete` - define si un elemento de formulario admite el autocompletado
- atributo `autofocus` - define si un elemento de formulario tiene el foco al cargar la página

- atributo `required` - define si un elemento de formulario es obligatorio
- atributo `minlength` - define la longitud mínima de un elemento de formulario
- atributo `maxlength` - define la longitud máxima de un elemento de formulario
- atributo `pattern` - define el patrón de validación de un elemento de formulario
- atributo `min` - define el valor mínimo de un elemento de formulario
- atributo `max` - define el valor máximo de un elemento de formulario

La validación se puede hacer con los métodos de la API de validación de formularios

- input.setCustomValidity()
- input.reportValidity()
- input.checkValidity()

También se pueden usar los pseudo-clases `:required`, `:optional`, `:valid`, `:invalid`, `:in-range`, `:out-of-range`, `:read-only`, `:read-write`, `:placeholder-shown`, `:default`, `:valid-drop`, `:invalid-drop`, `:user-error`, `:blank`, `:user-invalid`, `:user-valid`, `:user-in-range`, `:user-out-of-range`, `:user-read-only`, `:user-read-write`, `:user-placeholder-shown`, `:user-default`, `:user-valid-drop`, `:user-invalid-drop`, `:user-error`, `:user-blank`, `:user-invalid`, `:user-valid`, `:user-in-range`, `:user-out-of-range`, `:user-read-only`, `:user-read-write`, `:user-placeholder-shown`, `:user-default`, `:user-valid-drop`, `:user-invalid-drop`, `:user-error`, `:user-blank`

#### Datos de formulario

- atributo `value` - define el valor de un elemento de formulario

Para recogerlo desde el servidor se usan los atributos `name` de los elementos de formulario.
Para hacerlo desde el JS en el cliente se usan los métodos `form.elements` y `form.elements.namedItem()`.
También se puede usar API FormData.

### Etiquetas interactivas de HTML5

- details, summary
- dialog

La etiqueta `details` se usa para definir un grupo de detalles, que se pueden mostrar u ocultar, y la etiqueta `summary` se usa para definir el resumen de los detalles.

```html
<details>
  <summary>Detalles</summary>
  <p>Texto de los detalles...</p>
</details>
```

Cuando varios detalles se agrupan con un mismo name, se comportan como un acordeón, es decir, al abrir uno se cierran los demás.

```html
<details name="details">
  <summary>Detalles 1</summary>
  <p>Texto de los detalles 1...</p>
</details>
<details name="details">
  <summary>Detalles 2</summary>
  <p>Texto de los detalles 2...</p>
</details>
<details name="details">
  <summary>Detalles 3</summary>
  <p>Texto de los detalles 3...</p>
</details>
```

La etiqueta `dialog` se usa para definir un diálogo, que se puede mostrar u ocultar, y que se puede cerrar con un botón.
Incluye un atributo `open` para definir si el diálogo se muestra o no, junto con los métodos `show()` y `close()` para mostrar y ocultar el diálogo. Al usar los métodos, el dialogo que se muestra sera de tipo modal.

```html
<dialog open>
  <p>Texto del diálogo...</p>
  <button>Botón de cierre</button>
</dialog>
```

El atributo `popover` también permite facilitar elementos emergentes como superposiciones (overlays), ventanas emergentes (popups), menús, etc.

```html
<button popovertarget="foo">Toggle the popover</button>
<div id="foo" popover>Popover content</div>
```

EL atributo `inert` hace que un elemento y sus descendientes sean no interactivos e invisibles para la tecnología de asistencia (assistive technology).

Fuera de los controles de formulario hay una posibilidad de editar el contenido de la página con los atributos `contenteditable` y `designmode`, esta última a nivel de todo el documento, en el body o en un iframe.

```html
<div contenteditable="true">
  <p>Texto editable...</p>
</div>
```

El valor `true` permite la edición del contenido. El valor "plaintext-only"
Permite editar el texto sin formato del elemento, pero no el formato de texto enriquecido.

```html
<body designmode="on">
  <p>Texto editable...</p>
</body>
```

## Elementos de Scripting

- script, noscript
- template, slot
- canvas

### Atributos de la etiqueta `script`

- src
- type
- async
- defer
- crossorigin
- integrity
- referrerpolicy

## Accesibilidad, roles y atributos ARIA

La accesibilidad web se refiere a la práctica de asegurarse de que las personas con discapacidades puedan comprender, navegar e interactuar con la web, y que los desarrolladores web puedan crear contenido que sea accesible para todos.

Los roles y atributos ARIA se usan para mejorar la accesibilidad de la web, especialmente para las personas con discapacidades, como las personas con discapacidades visuales, auditivas, motoras, cognitivas, etc.

### Accesibilidad en los elementos HTML

- atributo `lang` - idioma del documento o de una parte del documento
- etiqueta `title` - título del documento o de una parte del documento
- semántica de las etiquetas de sección: header, footer, main, article, nav, aside, section
- uso adecuado de los encabezados: h1, h2, h3, h4, h5, h6
- correcta estructura de las listas: ul, ol, li, dl, dt, dd
- semántica de las etiquetas de texto: p, pre, blockquote, q, cite, dfn, abbr, data, time, mark
- tablas: caption, thead, tbody, tfoot, th, td para los datos tabulados
- etiqueta `alt` - texto alternativo de una imagen
- etiqueta `aria-label` - etiqueta ARIA con la label para un elemento que no admite el atributo `label` de HTML
- contenido oculto mediante CSS específico para lectores de pantalla

Accesibilidad en los formularios

- etiqueta `label` - etiqueta de un elemento de formulario
- atributo `for` - en la etiqueta label para asociarla con un elemento de formulario con el correspondiente `id`
- atributo `tabindex` - define el orden de tabulación de los controles de formulario, elementos que admiten el foco
- atributo `accesskey` - define la tecla de acceso de un elemento de formulario

- role - define el papel
- aria-\* - define los atributos ARIA

```html
<button
  tabindex="0"
  accesskey="b"
  lang="es"
  dir="rtl"
  title="Botón de ejemplo"
  aria-label="Botón de ejemplo"
  aria-pressed="false"
>
  Botón de ejemplo
</button>
```

### Ejercicio (5)

Crear un botón 100% accesible sin la etiqueta `button` y sin la etiqueta `a` que se pueda activar con la tecla `Enter` y con la tecla `Espacio` y que se pueda desactivar con la tecla `Escape` y con la tecla `Tab`

### ARIA

[html-aria in W3C](https://www.w3.org/TR/html-aria/)
[aria in MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)

ARIA (Accessible Rich Internet Applications) es una especificación de la W3C que define una serie de atributos para mejorar la accesibilidad de las aplicaciones web, especialmente las aplicaciones ricas, como las aplicaciones de una sola página (SPA), las aplicaciones de escritorio, las aplicaciones móviles, etc.

Los atributos ARIA se usan para definir el papel (role) de los elementos, el estado (state) de los elementos, las propiedades (property) de los elementos, las relaciones (relationship) entre los elementos, etc.

Los roles de los elementos se usan para definir su papel semántico, como si son botones, enlaces, menús, diálogos, alertas, etc.

- [ARIA Roles, properties, states](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques)

- Roles
  - landmark
  - alert
  - alertdialog
  - button
  - checkbox
  - dialog
  - grid
  - gridcell
  - link
  - listbox
  - menu
  - menuitem
  - menuitemcheckbox
  - menuitemradio
  - option
  - progressbar
  - radio
  - radiogroup
  - scrollbar
  - slider
  - spinbutton
  - status
  - tab
  - tabpanel
  - textbox
  - timer
  - tooltip
  - tree
  - treegrid
  - treeitem
  - article
  - banner
  - complementary
  - contentinfo
  - form
  - main
  - navigation
  - region
  - search
  - application
  - document
  - feed
  - marquee
  - math
  - note
  - presentation
  - toolbar
  - directory
  - group
  - heading
  - img
  - list
  - listitem
  - listitemcheckbox
  - listitemradio
  - note
  - separator
  - table
  - row
  - rowgroup
  - columnheader
  - rowheader

Los estados de los elementos se usan para definir su estado semántico, como si están deshabilitados, ocultos, seleccionados, etc.

- aria-atomic
- aria-busy
- aria-checked
- aria-disabled
- aria-expanded
- aria-grabbed
- aria-hidden
- aria-invalid
- aria-pressed
- aria-selected
- aria-readonly
- aria-required
- aria-sort
- aria-valuemax
- aria-valuemin
- aria-valuenow
- aria-valuetext

Las propiedades de los elementos se usan para definir sus propiedades semánticas, como si son etiquetas, descripciones, valores, etc.

- aria-activedescendant
- aria-describedby
- aria-details
- aria-flowto
- aria-label
- aria-labelledby
- aria-owns
- aria-posinset
- aria-setsize

Aria Live Regions

- aria-live - define una región de contenido que se actualiza dinámicamente
  - Su valor puede ser off, polite, assertive
  - off - no se anuncia cuando se actualiza
  - polite - se anuncia cuando el usuario no está interactuando
  - assertive - se anuncia inmediatamente
