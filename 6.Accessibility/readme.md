# Accessibility (A11y)

- [Accessibility (A11y)](#accessibility-a11y)
  - [Introducción](#introducción)
    - [Limitaciones](#limitaciones)
  - [Accesibilidad Web](#accesibilidad-web)
    - [Beneficios](#beneficios)
    - [Tecnologías asistivas o inclusivas](#tecnologías-asistivas-o-inclusivas)
  - [Estándares de accesibilidad Web: WAI](#estándares-de-accesibilidad-web-wai)
    - [Actividades dentro de la WAI](#actividades-dentro-de-la-wai)
    - [Niveles de accesibilidad](#niveles-de-accesibilidad)
    - [Pautas de accesibilidad para el contenido Web (WCAG) 2.0](#pautas-de-accesibilidad-para-el-contenido-web-wcag-20)
    - [WAI y Mejora progresiva (progressive enhancement)](#wai-y-mejora-progresiva-progressive-enhancement)
    - [WCAG 1.0](#wcag-10)
    - [WCAG 2.0](#wcag-20)
      - [Perceptible](#perceptible)
      - [Operable](#operable)
      - [Comprensible](#comprensible)
      - [Robusto](#robusto)
  - [Recomendaciones para Accesibilidad Web](#recomendaciones-para-accesibilidad-web)
    - [Elementos de accesibilidad en HTML y CSS](#elementos-de-accesibilidad-en-html-y-css)
      - [JS y Progressive Enhancement](#js-y-progressive-enhancement)
    - [Accesibilidad y CSS Actual](#accesibilidad-y-css-actual)
    - [Accesibilidad en HTML](#accesibilidad-en-html)
  - [WAI - ARIA](#wai---aria)
    - [Planteamiento WAI - ARIA](#planteamiento-wai---aria)
    - [Roles](#roles)
      - [Roles de referencia (landmark roles): Estructura semántica en ARIA](#roles-de-referencia-landmark-roles-estructura-semántica-en-aria)
        - [ARIA, HTML5 y CSS3](#aria-html5-y-css3)
      - [Roles estructurales (structural roles)](#roles-estructurales-structural-roles)
      - [Roles de controles (widget roles)](#roles-de-controles-widget-roles)
    - [Estados](#estados)
    - [Algunas reglas de uso de ARIA](#algunas-reglas-de-uso-de-aria)
    - [Ejemplos de usos de ARIA](#ejemplos-de-usos-de-aria)
      - [Navegación mediante el teclado](#navegación-mediante-el-teclado)
      - [Accesibilidad en formularios](#accesibilidad-en-formularios)
      - [Accesibilidad en los controles (widgets)](#accesibilidad-en-los-controles-widgets)
      - [Accesibilidad en actualizaciones dinámicas de contenido (AJAX)](#accesibilidad-en-actualizaciones-dinámicas-de-contenido-ajax)
    - [Implementando ARIA](#implementando-aria)
  - [Tools](#tools)
    - [Aplicaciones y herramientas web](#aplicaciones-y-herramientas-web)
    - [Chrome DevTools](#chrome-devtools)

## Introducción

Por accesibilidad se entiende la posibilidad de que un producto o servicio Web pueda ser accedido y usado, de forma independiente de las limitaciones propias del individuo o de las derivadas del contexto de uso.

Hablar de Accesibilidad Web es hablar de un acceso universal a la Web, independientemente del tipo de hardware, software, infraestructura de red, idioma, cultura, localización geográfica y capacidades de los usuarios

Dentro de las limitaciones propias del individuo puede haber deficiencias visuales, auditivas, motrices, cognitivas y de lenguaje, pero también puede tener limitaciones derivadas del contexto de uso y del dispositivo de acceso empleado (hardware y/o software), como puede ser el idioma, la experiencia o conocimientos previos. Por ejemplo, comparten el mismo problema de visualización los usuarios con visión reducida y los que, sin padecer discapacidad visual, utilizan pantallas pequeñas o accedan desde entornos llenos de humo.

### Limitaciones

- Visuales: En sus distintos grados, desde la baja visión a la ceguera total, además de problemas para distinguir colores (Daltonismo).

- Motrices: Dificultad o la imposibilidad de usar las manos, incluidos temblores, lentitud muscular, etc, debido a enfermedades como el Parkinson, distrofia muscular, parálisis cerebral, amputaciones...

- Auditivas: Sordera o deficiencias auditivas.

- Cognitivas y neurológicas: Dificultades de aprendizaje (dislexia, discalculia, etc) o discapacidades cognitivas que afecten a la memoria, la atención, las habilidades lógicas, etc.

## Accesibilidad Web

### Beneficios

- Aumenta el número de potenciales visitantes de la página web: esta es una razón muy importante para una empresa que pretenda captar nuevos clientes. Al mismo tiempo, incrementa la satisfacción de los usuarios. Cuando una página web es accesible no presenta barreras que dificulten su acceso, independientemente de las condiciones del usuario.
- Disminuye los costes de desarrollo y mantenimiento: aunque inicialmente aprender a hacer una página web accesible supone un coste (igual que supone un coste aprender a utilizar cualquier tecnología nueva), una vez se tienen los conocimientos, el coste de desarrollar y mantener una página web accesible es menor que frente a una no accesible.
- Reduce el tiempo de carga de las páginas web y la carga del servidor web: al separar el contenido de la información sobre la presentación de una página web mediante CSS se logra reducir el tamaño de las páginas web.

### Tecnologías asistivas o inclusivas

Assistive Technologies (AI)

Componentes tecnológicos (hardware / software) especialmente creados para proporcionar asistencia a personas que la necesitan en función de sus particularidades

- lectores de pantalla (screen readers): [NVDA](https://nvda.es/) para Windows, VoiceOver incluido en los Mac, Orca incluido en Gnome-Linux o versiones comerciales como [JAWS](https://www.freedomscientific.com/products/software/jaws/) o [Dolphin](https://yourdolphin.com/ScreenReader)
- magnificadores de pantalla (screen magnifiers): [ZoomText](https://www.freedomscientific.com/products/software/zoomtext/), [MAGic](https://support.freedomscientific.com/Products/Blindness/MAGic), Lunar
- lectores de texto (text readers): NaturalReader, ReadPlease, ReadPlease Plus
  - lectores de texto a voz (text-to-speech): TextAloud, TextSpeech Pro, TextSpeech Pro Ultimate
  - lectores de texto a voz en línea (online text-to-speech): Google Text-to-Speech, iSpeech, NaturalReader Online
  - lectores de texto a voz para dispositivos móviles (mobile text-to-speech): Google Text-to-Speech, iSpeech, NaturalReader Text to Speech
  - lectores de texto a voz para navegadores (browser text-to-speech): Read Aloud, SpeakIt, VoiceNote II,
  - lectores de texto a voz para redes sociales (social media text-to-speech): iSpeech, NaturalReader Text to Speech, ReadSpeaker,
- teclados o dispositivos de entrada alternativos (alternative keyboards), como lo teclados en braille
- scanning software (software de escaneo) como Dasher

## Estándares de accesibilidad Web: WAI

**WAI (Web Accessibility Initiative)** es una iniciativa del W3C que trabaja en la accesibilidad de la Web. WAI se centra en la accesibilidad de la Web para personas con discapacidades, incluyendo discapacidades visuales, auditivas, motoras, cognitivas y neurológicas.

Objetivo: facilitar el acceso de las personas con discapacidad a la Web, eliminando las barreras que impiden su acceso a la información y a los servicios que ofrece.

<https://www.w3.org/WAI/>

### Actividades dentro de la WAI

- Establece guías para la calificación de accesibilidad de los sitios Web
- desarrollando pautas de accesibilidad,
- mejorando las herramientas para la evaluación y reparación de accesibilidad Web,
- llevando a cabo una labor educativa y de concienciación en relación a la importancia del diseño accesible de páginas Web
- abriendo nuevos campos en accesibilidad a través de la investigación en este área.

Diversas líneas de trabajo concretas

- Directrices de Accesibilidad para el Contenido Web 2.0 - WCAG 2.0
- Directrices de Accesibilidad para XML - XAG
- Aplicaciones de Internet enriquecidas accesibles - ARIA

### Niveles de accesibilidad

Según la primera versión de las guías de contenido accesible en Web, se establece tres niveles de calificación de accesibilidad para los sitios.

- **A**: el nivel más básico de accesibilidad, que se debe cumplir para que el contenido sea accesible a algunas personas con discapacidades.
  Prioridad 3: son aquellos puntos que un desarrollador Web debería cumplir ya que, de otra forma, algunos usuarios experimentarían ciertas dificultades para acceder a la información.
- **AA**: un nivel intermedio de accesibilidad, que se debe cumplir para que el contenido sea accesible a la mayoría de las personas con discapacidades.
  Prioridad 2: son aquellos puntos que un desarrollador Web debería cumplir ya que, si no fuese así, sería muy difícil acceder a la información para ciertos grupos de usuarios.
- **AAA**: el nivel más alto de accesibilidad, que se debe cumplir para que el contenido sea accesible a todas las personas con discapacidades.
  Prioridad 1: son aquellos puntos que un desarrollador Web tiene que cumplir ya que, de otra manera, ciertos grupos de usuarios no podrían acceder a la información del sitio Web.

### Pautas de accesibilidad para el contenido Web (WCAG) 2.0

Para hacer el contenido Web accesible, se han desarrollado las denominadas Pautas de Accesibilidad al Contenido en la Web (WCAG), cuya función principal es guiar el diseño de páginas Web hacia un diseño accesible, reduciendo de esta forma barreras a la información.

WCAG consiste en 14 pautas que proporcionan soluciones de diseño y que utilizan como ejemplo situaciones comunes en las que el diseño de una página puede producir problemas de acceso a la información. Las Pautas contienen además una serie de puntos de verificación que ayudan a detectar posibles errores.

Cada punto de verificación está asignado a uno de los tres niveles de prioridad establecidos por las pautas.

### WAI y Mejora progresiva (progressive enhancement)

Ya mencionada como elemento da usabilidad

Técnica de desarrollo que consiste en empezar por generar un código genérico que funcione en todos los navegadores, para, poco a poco, ir introduciendo mejoras para navegadores más moderno.

Es una de las estrategias clave dentro de la iniciativa WAI para conseguir la máxima accesibilidad

El diseño base, previo a la aplicación de CSS y JavaScript, plenamente funcional se constituye en el mínimo accesible para todos los dispositivos y todos los usuarios

### WCAG 1.0

Pautas de Accesibilidad al Contenido en la Web 1.0
<https://www.w3.org/TR/1999/WAI-WEBCONTENT-19990505/>

1. Provide equivalent alternatives to auditory and visual content.
2. Don't rely on color alone.
3. Use markup and style sheets and do so properly.
4. Clarify natural language usage
5. Create tables that transform gracefully.
6. Ensure that pages featuring new technologies transform gracefully.
7. Ensure user control of time-sensitive content changes.
8. Ensure direct accessibility of embedded user interfaces.
9. Design for device-independence.
10. Use interim solutions.
11. Use W3C technologies and guidelines.
12. Provide context and orientation information.
13. Provide clear navigation mechanisms.
14. Ensure that documents are clear and simple.

### WCAG 2.0

Por otro lado, las WCAG 2.0 representan un cambio sustancial en su filosofía. Los cambios importantes implican que las pautas están centradas en principios más que en técnicas. Esto permite que las pautas sigan siendo relevantes incluso cuando la tecnología cambie. Además, están diseñadas para que la adecuación se pueda verificar de forma fiable. Aunque la medición de una verdadera adecuación puede ser difícil, las pautas están estructuradas para permitir una menor interpretación de lo que una verdadera adecuación significa.

El cambio de pautas centradas en las técnicas a pautas centradas en principios dio lugar a un número reducido de ideas de nivel superior o principios. WCAG 1.0 tenía catorce principios en el nivel superior. WCAG 2.0 sitúa únicamente cuatro principios en el nivel superior en virtud de los cuales se organizan pautas más específicas, llamadas criterios de éxito. Cada uno de estos cuatro principios se indica con una sola palabra:

- Perceptible
- Operable
- Comprensible
- Robusto

#### Perceptible

1. Proporcionar alternativas textuales para todo contenido no textual de modo que se pueda convertir a otros formatos que las personas necesiten, tales como textos ampliados, braille, voz, símbolos o en un lenguaje más simple.
2. Medios tempo-dependientes: proporcionar alternativas para los medios tempo-dependientes.
3. Crear contenido que pueda presentarse de diferentes formas (por ejemplo, con una disposición más simple) sin perder información o estructura.
4. Facilitar a los usuarios ver y oír el contenido, incluyendo la separación entre el primer plano y el fondo.

#### Operable

1. Proporcionar acceso a toda la funcionalidad mediante el teclado.
2. Proporcionar a los usuarios el tiempo suficiente para leer y usar el contenido.
3. No diseñar contenido de un modo que se sepa podría provocar ataques, espasmos o convulsiones.
4. Proporcionar medios para ayudar a los usuarios a navegar, encontrar contenido y determinar dónde se encuentran.

#### Comprensible

1. Hacer que los contenidos textuales resulten legibles y comprensibles.
2. Hacer que las páginas web aparezcan y operen de manera predecible.
3. Ayudar a los usuarios a evitar y corregir los errores

#### Robusto

1. Maximizar la compatibilidad con las aplicaciones de usuario actuales y futuras, incluyendo las ayudas técnicas

## Recomendaciones para Accesibilidad Web

- Todos los elementos visuales, imágenes o animaciones, deben contar con una descripción de su función.
- Incluir subtítulos y transcripciones de los sonidos, y descripciones de los videos.
- Usar texto que tenga sentido cuando se lea fuera de contexto.
- Aplicar una apropiada organización de la página; usar encabezados, listas y estructura consistente; usar tablas solo para presentar datos tabulares, así como hojas de estilo en cascada donde sea posible.
- Dar alternativas accesibles a los scripts, applets y plug-ins para los casos en que las características activas sean inaccesibles o no soportadas.
- Hacer las tablas de manera que se puedan leer línea por línea, y añadir un resumen.

### Elementos de accesibilidad en HTML y CSS

- Elegir un **DOCTYPE** (histórico)
  Que el navegador determine correctamente la versión de HTML esta usando puede ser clave en la aplicación de muchas de las características de accesibilidad

- Identificar el **idioma** de la página
  Los programas de lectura de pantalla necesitan saber en que idioma están escritas las páginas, para pronunciar correctamente.
  Las búsquedas en Google filtradas por idioma son más precisas si no tienen que depender de los algoritmos de detección automática de idioma

- Construir **títulos** de página significativos
  El título de la web, recogido en la página principal se complementa en el resto de las páginas con datos de fecha o de categoría, reflejo de la estructura del sitio web
  Los programa de lectura de pantalla y los navegadores de texto aprovechan los títulos para ubicarse con precisión.
  Personas con dificultades de atención o memoria pueden beneficiarse si el título de la pestaña incluye información precisa de donde se encuentran

- Usar HTML Semántico y válido

- Encabezados y su orden. Encabezados reales
  Un sitio Web es, entre otras cosas un esquema definido por las etiquetas de encabezados
  reales \<h1>, \<h2>, \<h3>...
  todos los títulos se deben marcar con etiquetas de encabezado acordes a su nivel
  nunca se utilizan etiquetas de encabezado con otro fin
  en HTML5 contamos con hgroup para definir títulos y subtítulos asociados sin romper el esquema
  Los lectores de pantalla mejoran su “narración” de la página si los esquemas son correctos.
  Los robots y arañas (i.e. Google) aprecian una página bien estructurada, y evalúan de manera más alta las palabras clave cuando aparecen en encabezados reales

- Ayudas de navegación adicionales.

  - Propósito de los enlaces

    la etiqueta \<link> puede señalar hacia su página de inicio, y hacia páginas previas y siguientes de una serie indicando la relación con ellas

    ```html
    <link rel="home" title=“…" href=“… /> <link rel="prev" title=“…" href=“… />
    <link rel="next" title=“…" href=“… />
    ```

    Estos vínculos, generalmente invisibles para los navegadores visuales, pueden desplegarse en navegadores alternos, como los de texto, y ayudar a los usuarios a navegar a través de un sitio Web

  - Añadir título a los vínculos
    El atributo title es global: puede usarse con cualquier etiqueta. En los vínculos puede se muy útil añadir información extra.
    Si el texto de un vínculo es el nombre de un
    articulo, no se necesita un titulo; el propio texto del enlace es lo suficientemente descriptivo.
    Pero si al leer el texto del vínculo solo, fuera de contexto, y no se aprecia hacia donde señala, conviene añadir un titulo.
    Los lectores de páginas web pueden leer el titulo de un vínculo conjuntamente con el texto de este. En todos los casos al aumentar la información disponible previamente sobre el destino, se mejora la navegabilidad, al ayudar a los usuarios a predecir hacia donde se dirigen

- Presentar inicialmente el contenido principal ('above the fold')
  Los elementos de navegación al principio, pueden suponer un problema cuando son extensos y no se “pliegan” como debería suceder en la situación optima, e.g. en ausencia de JavaScript, en dispositivos lectores….
  Existen diversas posibilidades para contrarrestar este problema, como presentar primero el contenido (y que el menú se re-posicione inicialmente a posteriori) o dispones de un enlace que permita saltar el conjunto de vínculos y que desaparecerá en navegadores de escritorio una vez “replegados los vínculos”
  (ver ‘Saltar’ sobre los vínculos de navegación)

- Contraste de color

- Usar colores de manera segura en los vínculos y siempre que tengan valor informativo
  Existen dos problemas potenciales relacionados con el color. Primeramente, el texto de sus
  vínculos puede no contrastar lo suficiente con el color del fondo. Esto aplica generalmente para todo el texto pero puede afectar solo a los vínculos que generalmente tienen su propio color.
  Si se modifica la forma de presentación de los vínculos, el color no debería ser su única distinción: es imprescindible que los vínculos sean distinguibles de alguna otra forma, como en negritas, cursivas o subrayado. Sólo así serár accesibles a personas con problemas de visión de los colores (e.g. daltonismo)

- Definir abreviaturas y acrónimos
  La etiqueta \<abbr> permite delimitar tanto abreviaturas como acrónimos y aprovechar el atributo title para proporcionar información precisa de su significado, que se mostrara de forma emergente
  Esto supone una buena práctica de cara a todos los usuarios, especialmente para aquellos con más dificultades para comprender información técnica.
  Se mejoran además las búsquedas en Google que responderán tanto a las siglas o abreviatura como al nombre completo

- Responsive Web

  - ‘Saltar’ sobre los vínculos de navegación

- Texto alternativo (Alt) en las imágenes
  Cada imagen de cada página de un sitio Web debe tener un equivalente textual, o texto alternativo ("alttext“), especificado en el atributo alt de la etiqueta \<img>

  - los lectores de pantalla lo leen,
  - los navegadores de texto lo muestran,
  - Google lo clasifica
  - los navegadores visuales pueden mostrarlo como una información de herramienta o en la línea de estado

  - Proveer texto equivalente para los mapas de imágenes / svg interactivos
    De la misma forma en que cada imagen, cada mapa de imagen y cada área en que se puede hacer clic en un mapa de imagen necesitan tener texto equivalente.
    - Puede proveer texto alt para la imagen en si en la etiqueta \<img>, y
    - para cada área en que se puede hacer clic en el mapa de imágenes en la etiqueta \<area> (asociada con \<map>), que define donde se encuentran las áreas de clic y hacia donde van.
      De esta forma los lectores de pantalla y navegadores de texto pueden responder a estos mapas igual que a otras imágenes
      Nuevamente es posible la clasificación de las imágenes por parte de Google

- ¿No abrir ventanas nuevas?
  Como norma general, la apertura de nuevas ventanas / pestañas, puntualmente o por defecto, debe ser una opción de usuario pero no una opción de diseño.
  Una nueva ventana / pestaña rompe el flujo del botón “Atrás” ya que no retiene el historial del navegador de la ventana / pestaña previa,
  Usuarios con dificultades visuales o pocos conocimientos informáticos pueden verse desconcertados por no poder regresar a la página anterior simplemente pulsando “Atrás”. Esta ruptura también puede ser problemática en los lectores de paginas
  Al margen de la accesibilidad, la apertura de una nueva ventana puede ser considerada intrusiva y poco educada por muchos usuarios

- Marcar correctamente las cabeceras de las tablas
  Las cabeceras de las tablas deben etiquetarse correctamente como \<th> en lugar de \<td>. Además el atributo scope permitirá indicar si se trata de la cabecera de una fila, columna o grupo de ellas
  Los lectores de pantalla utilizarán esta información para poder transmitir al usuario una idea precisa de la estructura de la tabla.
  Además estos dispositivos cuentan con un modo de lectura de tablas que aprovecha esta información

- Usar tamaños de fuentes relativos (rem, em)

  - FontSize al 200%

  Tema controvertido desde la época en que Netscape no incluía un soporte adecuado para las fuentes en tamaños relativos.
  Actualmente están claras las ventajas del uso de este tipo de medidas, generalmente en ems como complemento a las distribuciones fluidas, que definen en porcentajes los espacios
  Personas con dificultades de visión se benefician del tamaño relativo de las fuentes al poder modificar el tamaño de texto base y ver como esto se refleja en toda la página Web
  Los usuarios con discapacidades visuales pueden necesitar un tamaño de fuente mayor para leer cómodamente, y los usuarios con discapacidades cognitivas pueden necesitar un tamaño de fuente menor para leer con mayor facilidad

- Elementos de los formularios definidos correctamente

- Definir accesos directos desde el teclado
  El atributo accesskey para vínculos y formularios, permite definir accesos directos desde el teclado para vínculos usados frecuentemente o campos de formularios.
  Si la tecla de acceso está definida en un vínculo, su navegador seguirá el vínculo, si es definida en un campo de formulario, su navegador se enfocará en ese campo.
  Para usuarios con movilidad limitada, esta opción es más fácil de usar que el clic de ratón.
  Los lectores de pantalla también anuncian las teclas de acceso, facilitando el uso de la página web

- Animaciones: uso y abuse

- Respeto de las configuraciones de usuario Nuevas propiedades de CSS

- #### Formularios e interactividad

- Relaciones entre label e input
  La etiqueta <label> permite asociar una etiqueta de formulario con cualquier elemento de entrada de datos: input, checkbox, radio button…
  Si se anida correctamente, toda la etiqueta se convierte en "cliqueable", con lo que se consigue el comportamiento habitual de los interfaces gráficos de escritorio
  Para personas con problemas de visión o de movilidad esto puede facilitar la tarea de cumplimentar un formulario
  Los lectores de pantalla también se benefician de esta relación, ya que pueden anunciar la etiqueta asociada al campo de formulario

- Placeholders extra
- Agrupar campos relacionados con fieldset y legend
- Feedback específico de los errores, señalado no solo con color

Otros aspectos de interactividad

- La importancia del focus - Perceptible y no solo con color
- Navegación a través del teclado
- Componente complejos, establece relaciones y da feedback
- Enlaces Vs Botones (¿cursor pointer?)

#### JS y Progressive Enhancement

- ¿Evitar la dependencia de los scripts?
  Los scripts deben ser una mejora de mecanismos previos, pero nunca sustituirlos: no deben ser nunca la única forma de realizar una tarea. Ejemplo grave de este problema son los menús, cuando no incluyen enlaces, sino que únicamente ejecutan un fragmento de código JavaScript
  Los navegadores de texto (e.g. Lynx, Links) no soportan JavaScript.
  En algunos entornos corporativos, JavaScript esta deshabilitado, sin que los usuarios puedan cambiar esta configuración
  Esto da lugar a la técnica de diseño conocida como mejora progresiva (progressive enhancement)

  - Progressive enhancement

### Accesibilidad y CSS Actual

- `prefers-reduced-motion`

  > 2️⃣0️⃣2️⃣0️⃣🔥🧨☀️😎 nueva _característica de medios_ que se utiliza para detectar si el usuario ha solicitado que el sistema minimice la cantidad de movimiento no esencial que utiliza.

  ```css
  @media (prefers-reduced-motion) {
    .animation {
      animation: none;
    }
  }
  ```

- `prefers-color-scheme`

  > 2️⃣0️⃣2️⃣0️⃣🔥🧨☀️😎 nueva _característica de medios_ que se utiliza para detectar si el usuario ha solicitado un tema de color claro u oscuro.

  ```css
  @media (prefers-color-scheme: dark) {
    .foo {
      background: #333;
      color: white;
    }
  }
  ```

- `prefers-reduced-data`

  > 2️⃣0️⃣2️⃣1️⃣🔥🧨☀️😎 nueva _característica de medios_ que se utiliza para detectar si el usuario ha solicitado contenido web que consuma menos tráfico de internet.

  ```css
  @media (prefers-reduced-data: reduce) {
    body {
      font-family: system-ui;
    }
  }
  ```

- `color-scheme`

  > 2️⃣0️⃣2️⃣1️⃣🔥🧨☀️😎 nueva _propiedad CSS_ que permite a un elemento indicar en qué esquemas de color puede renderizado cómodamente.

  ```css
  .html {
    color-scheme: light dark;
  }
  ```

- `prefers-contrast`

  > 2️⃣0️⃣2️⃣2️⃣🔥🧨☀️ nueva _característica de medios_ que se utiliza para detectar si el usuario ha solicitado contenido web que cumpla con ciertos niveles de contraste.

  ```css
  @media (prefers-contrast: more) {
    .contrast {
      outline: 2px solid black;
    }
  }
  ```

- `forced-colors`

  > 2️⃣0️⃣2️⃣2️⃣🔥🧨☀️ nueva _característica de medios_ que se utiliza para detectar si el usuario ha solicitado contenido web que cumpla con ciertos niveles de color.

  ```css
  @media (forced-colors: active) {
    .button {
      border: 2px green solid;
    }
  }
  ```

- `color-contrast()`

  > 2️⃣0️⃣2️⃣1️⃣🧨☀️😎 nueva _notación funcional_ que toma un valor de color y lo compara con una lista de otros valores de color, seleccionando el que tenga el mayor contraste de la lista.

- `:focus-visible`

  > 2️⃣0️⃣2️⃣2️⃣🔥🧨☀️ nueva _pseudo-clase_ que se aplica a un elemento que recibe el enfoque del teclado, pero solo si el enfoque no se realiza con un mouse u otro dispositivo de puntero.

  ```css
  .focus-visible-only:focus-visible {
    outline: 2px dashed darkorange;
  }
  ```

- `:focus-within`

  > _pseudo-clase_ que se aplica a un elemento que contiene un elemento que recibe el enfoque del teclado.

- `light-dark()`

  > 2️⃣0️⃣2️⃣4️⃣🔥 nueva _función de CSS_ que selecciona un valor de una lista de valores basándose en si el usuario ha solicitado un tema de color claro u oscuro.

  ```css
  code {
    color: light-dark(var(--light-code), var(--dark-code));
  }
  ```

### Accesibilidad en HTML

- 😎 **tabindex** (HTML)

  - atributo _global de HTML_ que indica que su elemento puede recibir el enfoque y dónde participa en la navegación secuencial del teclado (generalmente con la tecla Tab, de ahí el nombre).

- 😎 **ARIA HTML**
  - conjunto de _atributos HTML_ que definen formas de hacer que el contenido web y las aplicaciones web (especialmente aquellas desarrolladas con JavaScript) sean más accesibles para personas con discapacidades.

## WAI - ARIA

Dentro de la Iniciativa de Accesibilidad Web (WAI, Web Accessibility Initiative) del W3C
**Aplicaciones de Internet enriquecidas accesibles** – (Accessible Rich Internet Applications, ARIA)
<http://www.w3.org/WAI/intro/aria.php>

El W3C define ARIA como:

La forma para crear contenido Web y aplicaciones Web que sean accesibles para las personas con discapacidades. Es especialmente útil para aplicaciones dinámicas y páginas Web avanzadas que utilizan tecnologías como AJAX (fetch), JavaScript y DHTML.

### Planteamiento WAI - ARIA

Un marco de trabajo complementario para las aplicaciones web más ricas e interactivas, que compense la perdida de accesibilidad asociada a las GUIs más complejas, parecidas a las de las aplicaciones de escritorio

- Estructuras más semánticas para las zonas funcionales.
- Mejora de la navegación mediante el teclado.
- Controles complejos (widgets) más accesibles.
- Accesibilidad para el contenido actualizado de forma dinámica, e.g mediante AJAX.

ARIA no es un reemplazo de HTML, sino una extensión de este, que permite a los desarrolladores añadir información adicional a los elementos HTML para mejorar la accesibilidad de las aplicaciones web. Esta información adicional se añade al **árbol de accesibilidad**, construido a partir del DOM y utilizado por las tecnologías asertivas a la hora de "renderizar" el contenido de la web.

Por ejemplo, un menu desplegable que se abre y cierra mediante JavaScript, no es accesible para un lector de pantalla, ya que este no puede detectar los cambios en el DOM. ARIA permite a los desarrolladores añadir información adicional al DOM para darle un mayor **sentido semántico**, de manera que los lectores de pantalla puedan interpretar correctamente el contenido.

ARIA **no genera ninguna funcionalidad nueva**, ni modifica el comportamiento o el aspecto de los elementos HTML, sino que añade información adicional para hacer más comprensible la funcionalidad existente de cara a las tecnologías asistivas.

Podemos resumir esta información adicional como la respuesta a tres preguntas

- **¿qué es?**: identificar el rol del elemento
- **¿como se encuentra?**: determinar su estado y propiedades
- **¿qué hace?**: capturar su comportamiento

En muchos elementos nativos de HTML, esta información adicional ya está implícita, pero en otros, como los widgets personalizados, es necesario añadirla manualmente. Por ejemplo, un **slider**, no tiene un rol asociado en HTML, por lo que es necesario añadirlo manualmente pòr medio de ARIA.

Para ello ARIA cuenta con:

- Roles: su misión es definir el papel que juegan los elemento dentro del documento web.

```html
<div id="slider" role="slider"></div>
```

- Estados y propiedades: determinan las características y los valores de cada elementos.

```html
<div
  id="slider"
  role="slider"
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuenow="27"
></div>
```

Vemos como, en el caso del slider mencionado anteriormente, se definido su rol y las propiedades que definen su estado actual, en este caso, con el valor del slider de 27.

### Roles

Roles, estados y propiedades se definen en el espacio de nombres de ARIA, y se añaden a los elementos HTML mediante atributos.
En cualquiera de los casos, los roles se definen con el atributo `role` y los estados y propiedades con el prefijo `aria-`

```html
<div role="button" aria-pressed="false" tabindex="0">Click me</div>
```

Los roles indican de que tipo es cada elemento HTML.
En ARIA se distingue 3 categorías de roles diferentes

- **Roles de referencia** (**landmark roles**) actúan como puntos de referencia para la navegación
- **Roles estructurales** (**structural roles**) definen la estructura del documento y ayudan a organizar el contenido.
- **Roles de controles** (**widget roles**) definen los controles que forman el interfaz, tanto los que se presentan de forma aislada (standalone UI widgets) como los que se componen de varios de los anteriores (composite widgets).

#### Roles de referencia (landmark roles): Estructura semántica en ARIA

Los roles de referencia o de documento (document landmarks), actúan como puntos de referencia para la navegación y permiten crear una estructura más semántica y accesible para que, entre otras cosas, las tecnologías asistivas puedan discernir donde se encuentra el contenido principal sin falta de recurrir a un enlace.

- **application**
- **article**
- **banner**
- **complementary**
- **contentinfo**
- **form**
- **main**
- **navigation**
- **search**

```html
<!-- Elemento de navegación definido en ARIA -->
<div id="navigation" role="navigation">
  <ul>
    <li id="active">
      <a id="current" href="home">Inicio</a>
    </li>
    <li><a href="blog">Blog</a></li>
    <li><a href="contacto">Contacto</a></li>
  </ul>
</div>
```

##### ARIA, HTML5 y CSS3

La relación de algunos roles de ARIA y las nuevas etiquetas HTML5 es manifiesta, especialmente en el caso de muchos de los roles estructurales.

Los roles ARIA son parte de al especificación HTML5 por lo que no suponen ningún inconveniente para la validación.

Por tanto se añadirán los roles ARIA incluso a las etiquetas HTML5 para mejorar su reconocimiento en los dispositivos que emplean  tecnologías asistivas (AT, Assistive Technology)

Los selectores de atributos disponibles en CSS3 permiten aprovechar el atributo role para personalizar el aspecto del elemento mediante estilos CSS

| HTML5   | ARIA          |
| ------- | ------------- |
| header  | banner        |
| article | article       |
| nav     | navigation    |
| aside   | complementary |
| footer  | contentinfo   |
| section | region        |

#### Roles estructurales (structural roles)

Definen la estructura del documento y ayudan a organizar el contenido.

- **region**: Región de contenido
- **definition**: Definición
- **directory**: Lista de elementos
- **document**: Documento
- **group**: Grupo de elementos
- **heading**: Encabezado
- **img**: Imagen
- **list**: Lista
- **listitem**: Elemento de lista
- **math**: Fórmula matemática
- **note**: Nota
- **presentation**: Elemento de presentación
- **row**: Fila de tabla
- **rowgroup**: Grupo de filas de tabla
- **rowheader**: Encabezado de fila de tabla
- **columnheader**: Encabezado de columna
- **separator**: Separador
- **toolbar**: Barra de herramientas

- **tooltip**: Información sobre un elemento
- **tree**: Árbol de elementos
- **treeitem**: Elemento de árbol

#### Roles de controles (widget roles)

Definen los controles que forman el interfaz, tanto los que se presentan de forma aislada (standalone UI widgets) como los que se componen de varios de los anteriores (composite widgets).

Widgets sencillos (Standalone )

- **alert**: Alerta
- **alertdialog**: Diálogo de alerta
- **dialog**: Diálogo
- **button**: Botón
- **checkbox**: Casilla de verificación
- **link**: Enlace
- **gridcell**: Celda de cuadrícula
- **menuitem**: Elemento de menú
- **log**: Registro
- **marquee**: Marquesina
- **menuitemcheckbox**: Elemento de menú con casilla de verificación
- **menuitemradio**: Elemento de menú con botón de radio
- **option**: Opción
- **progressbar**: Barra de progreso
- **radio**: Botón de radio
- **scrollbar**: Barra de desplazamiento
- **slider**: Control deslizante
- **spinbutton**: Control de incremento
- **status**: Estado
- **tab**: Pestaña
- **tabpanel**: Panel de pestaña
- **textbox**: Cuadro de texto
- **timer**: Temporizador
- **tooltip**: Información sobre un elemento
- **treeitem**: Elemento de árbol

Widgets compuestos

- **combobox**: Cuadro combinado
- **grid**: Cuadrícula
- **listbox**: Cuadro de lista
- **menu**: Menú
- **menubar**: Barra de menú
- **radiogroup**: Grupo de botones de radio
- **tablist**: Lista de pestañas
- **tree**: Árbol
- **treegrid**: Cuadrícula de árbol

### Estados

Un estado en ARIA es una propiedad dinámica de un elemento HTML que representa una serie de datos asociados con el sin que afecte a la naturaleza esencial del elemento. Los estados pueden ser de 2 tipos globales (global) y de controles (widget)

Tanto estados como propiedades ARIA son a su vez atributos HTML cuyo valor es definido para un determinado elemento

Estados globales

- **aria-busy**: Indica si el elemento está siendo actualizado
- **aria-disabled**: Indica si el elemento está deshabilitado
- **aria-grabbed**: Indica si el elemento se ha arrastrado
- **aria-hidden**: Indica si el elemento es visible o no
- **aria-invalid**: Indica si los valores del elemento son válidos

Estados de controles (Widget)

- listitem
- math
- note
- presentation
- region
- row
- (rowgroup)
- rowheader
- separator
- toolbar

Propiedades

Las propiedades son similares pero relativamente estáticas en las páginas, aportando información adicional sobre los elementos HTML

Propiedades globales

- **aria-activedescendant**: Identifica el elemento activo
- **aria-atomic**: Indica si el contenido del elemento y todos sus descendientes son tratados como una unidad
- **aria-controls**: Identifica los elementos que controla el elemento actual
- **aria-describedby**: Identifica los elementos que describen el elemento actual
- **aria-disabled**: Indica si el elemento está deshabilitado
- **aria-dropeffect**: Indica las operaciones de arrastrar y soltar que se permiten en el elemento
- **aria-flowto**: Identifica los elementos que se muestran después del elemento actual
- **aria-haspopup**: Indica si el elemento tiene un submenú
- **aria-label**: Proporciona una etiqueta para el elemento
- **aria-labelledby**: Identifica los elementos que etiquetan el elemento actual
- **aria-live**: Indica si el contenido del elemento se actualiza dinámicamente
- **aria-owns**: Identifica los elementos que pertenecen al elemento actual
- **aria-relevant**: Indica qué tipo de cambios en el contenido del elemento se anuncian al usuario

Propiedades de controles (Widget)

- **aria-autocomplete**: Indica si el elemento tiene una función de autocompletar
- **aria-haspopup**: Indica si el elemento tiene un submenú
- **aria-label**: Proporciona una etiqueta para el elemento
- **aria-level**: Indica el nivel de jerarquía del elemento
- **aria-multiselectable**: Indica si el elemento permite la selección múltiple
- **aria-multiline**: Indica si el elemento es de varias líneas
- **aria-orientation**: Indica la orientación del elemento
- **aria-readonly**: Indica si el elemento es de solo lectura
- **aria-required**: Indica si el elemento es obligatorio
- **aria-sort**: Indica si el elemento se puede ordenar
- **aria-valuemax**: Indica el valor máximo del elemento
- **aria-valuemin**: Indica el valor mínimo del elemento
- **aria-valuenow**: Indica el valor actual del elemento
- **aria-valuetext**: Proporciona el valor actual del elemento

- **aria-checked**: Indica si el elemento está marcado
- **aria-expanded**: Indica si el elemento está expandido
- **aria-pressed**: Indica si el elemento está presionado

### Algunas reglas de uso de ARIA

1. **No usar ARIA si no es necesario**
   Si un elemento HTML ya tiene un rol semántico, no es necesario añadir un rol ARIA adicional. Por ejemplo, no es necesario añadir un rol de botón a un elemento \<button> ya que este ya tiene un rol de botón implícito.
   En este sentido, no se debe usar ARIA para añadir información redundante, que ya está presente en el texto o que forma parte del elemento nativo. Por ejemplo, no se debe añadir un rol de encabezado a un elemento \<h1> ya que este ya es un encabezado.

2. **No usar ARIA para cambiar la semántica nativa elemento HTM**
   Por ejemplo, no se debe usar un rol de encabezado en un elemento \<span> ya que este no es un elemento de encabezado.

3. **Todos los controles interactivos deben tener un rol ARIA**
   Todos los controles interactivos, como botones, enlaces, casillas de verificación y botones de radio, deben tener un rol ARIA asociado, un nombre accesible y ser utilizables mediante el teclado.

4. **No usar ARIA role="presentation" o aria-hidden="true" en un elemento enfocable**

EL nombre accesible es el que reciben los elementos en el árbol de accesibilidad, y es el que se utiliza para describir el elemento a los usuarios de tecnologías asistivas. El nombre accesible se puede obtener del HTML o puede ser necesario añadirlo explícitamente mediante ARIA.:

- **Usando el atributo aria-label**: Proporciona un nombre accesible para el elemento.
- **Usando el atributo aria-labelledby**: Identifica un elemento que proporciona un nombre accesible para el elemento.

### Ejemplos de usos de ARIA

#### Navegación mediante el teclado

Por medio del teclado y a través del atributo tabindex podemos navegar entre los diferentes elementos de una web, pero sólo algunos elementos soportan este atributo y son capaces de recibir el foco: A, AREA, BUTTON, INPUT, OBJECT, SELECT, y TEXTAREA.

Por tanto, un simple elemento DIV no puede ser accedido a través del teclado. Y ahí es donde encontramos las aportaciones de ARIA:

- Haciendo que el atributo tabindex sea soportado por todos los elementos visibles de una web.
- Permitiendo el valor “-1″ en el atributo tabindex, lo que posibilita sacar un elemento del orden natural de navegación y del orden expresado por el índice de tabulación. Un elemento con el atributo tabindex="-1" únicamente podrá recibir el foco por medio de JavaScript (con el método focus()).

#### Accesibilidad en formularios

Se indica que hay un párrafo

```html
<label for="useremail">Correo electrónico:</label>
<input
  id="useremail"
  type="email"
  placeholder="john@msn.com"
  required
  aria-required="true"
  value=""
  aria-describedby="helpemail"
/>
<p id="helpemail">
  Dirección de correo electrónico que se usará en posteriores comunicaciones
</p>
```

`aria-required="true"` indica que el campo es obligatorio, Habitualmente se indica de una forma visual que puede pasar desapercibida para un dispositivo AT.

`aria-describedby="helpemail"` indica que el campo tiene un párrafo de ayuda asociado, con información descriptiva, que incluso podría ocultarse por CSS, pero que estará disponible para dispositivos AT.

#### Accesibilidad en los controles (widgets)

Los controles suelen der la combinación de

- Diseño: elemento HTML (e.g. DIV, imagen) y CSS (e.g. imagen de fondo)
- Desarrollo de un comportamiento, generalmente en JavaScript

```html
<!-- Elemento de tipo slider no accesible -->
<div id="slider-bg" title="level">
  <div id="slider-handler">
    <img src="handler.gif" />
  </div>
</div>
```

![Slider aplicando CSS al código anterior](./assets/slider.png)

Su escasa accesibilidad se deriva de las dificultades que tendrá un dispositivo para de discernir:

- El rol del elemento (¿qué es?).
- El estado y que atributos tiene (¿cómo se encuentra?).
- El comportamiento (¿qué hace?).

ARIA permitirá aportar la accesibilidad necesaria al ejemplo anterior

```html
<!-- Elemento de tipo slider accesible utilizando ARIA -->
<p id="slider-description">
  Puede usar las teclas derecha/izquierda para cambiar el nivel.
</p>
<span id="slider-label">Nivel:</span>
<div id="slider-rail">
  <button
    id="slider-handler"
    role="slider"
    aria-labelledby="slider-label"
    aria-describedby="slider-description"
    aria-valuemin="1"
    aria-valuemax="3"
    aria-valuenow="2"
  ></button>
</div>
```

- Se incorpora un elemento `slider-description` con una ayuda descriptiva para que pueda ser comunicada por las tecnologías asistivas (AT).
- El elemento `slider-label` contiene la etiqueta del slider.
- La imagen de fondo que sirve como rail para el deslizador es proporcionada por `slider-rail`.
- En vez de usar una imagen se utiliza un elemento \<button slider-handler> que será el deslizador y el que realmente cumpla la función de slider con todos los atributos ARIA incorporados.

#### Accesibilidad en actualizaciones dinámicas de contenido (AJAX)

Otro de los grandes problemas de la accesibilidad en las aplicaciones web enriquecidas, recae sobre la actualización dinámica del contenido (o parte del contenido) que se realiza por medio de Ajax y en “segundo plano”.

ARIA denomina “regiones activas” a los elementos/zonas que pueden presentar estos cambios, y cuenta con la propiedad aria-live con la que indicar el valor de “intrusismo” (off, polite, assertive o rude) sobre la actividad actual del usuario.

### Implementando ARIA

La dificultad de implementar ARIA puede ser considerada proporcional al grado de complejidad de la aplicación web, aunque al final se trata siempre de gestionar roles, estados y propiedades por medio de JavaScript.

Independientemente de la complejidad, ya no se nos se nos plantea el problema de no poder hacer algo tan esencial como validar los documentos web con ARIA. El problema que existía en HTML 4.01, donde las DTD no tenían en cuenta las especificaciones de ARIA, desaparece con su incorporación en la especificación HTML5.

Además esta tecnología cuenta con un buen soporte por parte de la industria, las principales organizaciones, navegadores y ayudas asistivas. Su implementación tampoco presenta efectos negativos y sí bastantes beneficios en pro de la accesibilidad.

## Tools

### Aplicaciones y herramientas web

- **TAW**: Herramienta de evaluación de accesibilidad web <https://www.tawdis.net/>
- **WAVE**: Herramienta de evaluación de accesibilidad web <http://wave.webaim.org/>
- **aXe**: Herramienta de evaluación de accesibilidad web <https://www.deque.com/axe/>
- **Pa11y**: Herramienta de evaluación de accesibilidad web <http://pa11y.org/>
- **Lighthouse**: Herramienta de auditoría de accesibilidad web <https://developers.google.com/web/tools/lighthouse/>
- **Accessibility Insights**: Herramienta de evaluación de accesibilidad web <https://accessibilityinsights.io/>
- **HTML_CodeSniffer**: Herramienta de evaluación de accesibilidad web <https://squizlabs.github.io/HTML_CodeSniffer/>
- **Tenon**: Herramienta de evaluación de accesibilidad web <https://tenon.io/>
- **Siteimprove**: Herramienta de evaluación de accesibilidad web <https://siteimprove.com/>
- **SortSite**: Herramienta de evaluación de accesibilidad web <https://www.powermapper.com/products/sortsite/>

### Chrome DevTools

- [Accessibility - A Powerful Web Assistant](<https://chromewebstore.google.com/detail/accessibility-a-powerful/nnmmmhcflgbendklbhknkkacnjempijd)
- [Accessibility Insights for Web](https://chrome.google.com/webstore/detail/accessibility-insights-fo/pbjjkligggfmakdaogkfomddhfmpjeni)
- [ARIA DevTools](<https://chromewebstore.google.com/detail/aria-devtools/dneemiigcbbgbdjlcdjjnianlikimpck), herramienta de desarrollo para ARIA
- [Web Disability Simulator](https://chromewebstore.google.com/detail/web-disability-simulator/olioanlbgbpmdlgjnnampnnlohigkjla), simulador de discapacidades
- [WAVE Evaluation Tool](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh), versión de la herramienta WAVE para Chrome
- [taba11y](https://chromewebstore.google.com/detail/taba11y/aocppmckdocdjkphmofnklcjhdidgmga), herramienta de accesibilidad para la navegación mediante teclado
- [HTML Heading Highlighter HeadingsMap](https://chromewebstore.google.com/detail/html-heading-highlighter/cdfideipbjhenjiijgmifpfgkhoneaic), resalta los encabezados de la página
