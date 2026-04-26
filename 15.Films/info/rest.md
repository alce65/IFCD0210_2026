---
title: API REST
official: Desarrollo de aplicaciones web distribuidas
Código: UF1846
cve: BOE-A-2011-19503
descripción: Unidad formativa 3 del módulo 2 (Programación web en el entorno servidor) del certificado de profesionalidad IFCD0210 (Desarrollo de aplicaciones web). En esta unidad se estudian las arquitecturas orientadas a servicios, con especial atención al diseño e implementación de APIs REST seguras, desde la definición de recursos y contratos hasta su consumo desde aplicaciones web.
duración: Ahora 50 horas (10 días)
duración anterior: Antes 60 horas (12 días)
---

- [Elementos ya conocidos de unidades anteriores](#elementos-ya-conocidos-de-unidades-anteriores)
- [Objetivos de aprendizaje](#objetivos-de-aprendizaje)
- [Contenido](#contenido)
- [Primera parte. Arquitecturas distribuidas orientadas a servicios y APIs REST](#primera-parte-arquitecturas-distribuidas-orientadas-a-servicios-y-apis-rest)
  - [1. Introducción. Arquitecturas de servicios distribuidos](#1-introducción-arquitecturas-de-servicios-distribuidos)
    - [1.1. Modelos conceptuales de las arquitecturas orientadas a servicios](#11-modelos-conceptuales-de-las-arquitecturas-orientadas-a-servicios)
      - [Arquitecturas basadas en mensajes](#arquitecturas-basadas-en-mensajes)
      - [Arquitecturas basadas en recursos](#arquitecturas-basadas-en-recursos)
        - [Elementos de una API REST](#elementos-de-una-api-rest)
    - [1.2. Políticas y contratos de servicios](#12-políticas-y-contratos-de-servicios)
      - [Documentación y especificaciones](#documentación-y-especificaciones)
    - [1.3 Conclusiones: Enlace con APIs REST](#13-conclusiones-enlace-con-apis-rest)
  - [2. Introducción a las APIs REST](#2-introducción-a-las-apis-rest)
    - [2.1. Principios del estilo REST](#21-principios-del-estilo-rest)
    - [2.2. Operaciones sobre recursos: CRUD, métodos HTTP y semántica](#22-operaciones-sobre-recursos-crud-métodos-http-y-semántica)
      - [Idempotencia](#idempotencia)
    - [2.3. Representación de datos en JSON](#23-representación-de-datos-en-json)
      - [Otros formatos de intercambio de datos](#otros-formatos-de-intercambio-de-datos)
  - [3. Respuestas HTTP y códigos de estado](#3-respuestas-http-y-códigos-de-estado)
    - [3.1. Familias de códigos de estado](#31-familias-de-códigos-de-estado)
    - [3.2. Códigos más utilizados en APIs REST](#32-códigos-más-utilizados-en-apis-rest)
    - [3.3. Estructura de las respuestas. Encabezados y cuerpo](#33-estructura-de-las-respuestas-encabezados-y-cuerpo)
    - [3.4. Buenas prácticas en respuestas](#34-buenas-prácticas-en-respuestas)
  - [4. Aspectos de seguridad en arquitecturas orientadas a servicios (enfocados a REST)](#4-aspectos-de-seguridad-en-arquitecturas-orientadas-a-servicios-enfocados-a-rest)
    - [4.1. Seguridad de datos y mensajes en APIs REST](#41-seguridad-de-datos-y-mensajes-en-apis-rest)
    - [4.2. Control de acceso y modelo RBAC aplicado a APIs](#42-control-de-acceso-y-modelo-rbac-aplicado-a-apis)
    - [4.3. Seguridad en comunicaciones: protocolos seguros y CORS](#43-seguridad-en-comunicaciones-protocolos-seguros-y-cors)
    - [4.4. Medidas complementarias esenciales](#44-medidas-complementarias-esenciales)
  - [5. Implementación de arquitecturas orientadas a servicios mediante tecnologías web (centrado en REST)](#5-implementación-de-arquitecturas-orientadas-a-servicios-mediante-tecnologías-web-centrado-en-rest)
    - [5.1. SOAP vs REST: comparación práctica](#51-soap-vs-rest-comparación-práctica)
    - [5.2. Lenguajes de definición de servicios](#52-lenguajes-de-definición-de-servicios)
    - [5.3. Estándares de seguridad: del mundo SOAP a REST práctico](#53-estándares-de-seguridad-del-mundo-soap-a-rest-práctico)
    - [5.4. Implementación práctica en Node.js + Express](#54-implementación-práctica-en-nodejs--express)
  - [6. Directorios y descubrimiento de servicios](#6-directorios-y-descubrimiento-de-servicios)
    - [6.1. Concepto de directorio de servicios](#61-concepto-de-directorio-de-servicios)
    - [6.2. Arquitectura típica de un directorio](#62-arquitectura-típica-de-un-directorio)
    - [6.3. Estándares históricos: UDDI](#63-estándares-históricos-uddi)
    - [6.4. Prácticas modernas: catálogos de APIs y portales de desarrolladores](#64-prácticas-modernas-catálogos-de-apis-y-portales-de-desarrolladores)
    - [6.5. Descubrimiento moderno en microservicios](#65-descubrimiento-moderno-en-microservicios)
    - [6.6. Enfoque práctico para Node.js + Express](#66-enfoque-práctico-para-nodejs--express)
- [Segunda parte. Programación de servicios web en entornos distribuidos (APIs REST)](#segunda-parte-programación-de-servicios-web-en-entornos-distribuidos-apis-rest)
  - [1. Componentes software para el acceso a servicios distribuidos](#1-componentes-software-para-el-acceso-a-servicios-distribuidos)
    - [1.1. Definición de servicios: diseño de una API REST](#11-definición-de-servicios-diseño-de-una-api-rest)
    - [1.2. Generación automática de servicios](#12-generación-automática-de-servicios)
  - [2. Programación de diferentes tipos de acceso a servicios](#2-programación-de-diferentes-tipos-de-acceso-a-servicios)
    - [2.1. Consumo de APIs REST desde aplicaciones web (frontend)](#21-consumo-de-apis-rest-desde-aplicaciones-web-frontend)
    - [2.2. Otros patrones contrastados con REST](#22-otros-patrones-contrastados-con-rest)
      - [Comparativa detallada de patrones](#comparativa-detallada-de-patrones)
      - [Pub/Sub en detalle](#pubsub-en-detalle)
        - [Ejemplo completo Pub/Sub con Redis en Node.js + Express](#ejemplo-completo-pubsub-con-redis-en-nodejs--express)
        - [Cuándo elegir Pub/Sub vs REST](#cuándo-elegir-pubsub-vs-rest)
      - [Híbrido REST + Pub/Sub (patrón común)](#híbrido-rest--pubsub-patrón-común)
      - [Repositorios centralizados](#repositorios-centralizados)
    - [2.3. Proveedores y consumidores en entorno servidor](#23-proveedores-y-consumidores-en-entorno-servidor)
  - [3. Herramientas para la programación de servicios web](#3-herramientas-para-la-programación-de-servicios-web)
    - [3.1. Comparativa de frameworks Node.js para REST](#31-comparativa-de-frameworks-nodejs-para-rest)
    - [3.2. Bibliotecas esenciales para Express + REST](#32-bibliotecas-esenciales-para-express--rest)
  - [4. Buenas prácticas y pruebas de APIs REST](#4-buenas-prácticas-y-pruebas-de-apis-rest)
    - [4.1. Versionado de la API](#41-versionado-de-la-api)
    - [4.2. Pruebas automatizadas](#42-pruebas-automatizadas)
    - [4.3. Documentación viva](#43-documentación-viva)


Las aplicaciones web modernas rara vez funcionan de forma aislada: necesitan comunicarse con otros sistemas para compartir datos y funcionalidades. Esta integración se realiza, cada vez más, mediante **servicios web** expuestos como **APIs** (Interfaces de Programación de Aplicaciones) accesibles a través de la red.

Dentro de las arquitecturas orientadas a servicios, el estilo **REST** (**Representational State Transfer**) se ha convertido en el estándar de facto para construir APIs web simples, escalables y fácilmente integrables. En una **API REST**, los datos y funcionalidades se modelan como **recursos** identificados por URLs, que se manipulan mediante los métodos del protocolo HTTP (GET, POST, PUT, DELETE, etc.) y se representan normalmente en formatos ligeros como JSON.

En esta unidad se estudiarán las **arquitecturas distribuidas orientadas a servicios** y, de forma especialmente detallada, el diseño e implementación de **APIs REST seguras**, desde la definición de recursos y contratos hasta su consumo desde aplicaciones web. También se revisarán brevemente otras tecnologías de servicios web (como SOAP y estándares asociados) para situar REST dentro del conjunto de soluciones disponibles en el mercado.

## Elementos ya conocidos de unidades anteriores

- ECMAScript (JavaScript) y Typescript
- Gestión de paquetes con npm,
- Node.js: accesos a ficheros, creación de CLI, servidores web (HTTP), etc.
- Express.
  - Creación de rutas,
  - Gestión de peticiones y respuestas (controllers),
  - Middleware
  - Gestión de errores centralizada
  - Uso de Zod para validación de datos.
- Arquitectura cliente-servidor y modelo de capas.
  - Arquitectura MVC (Modelo-Vista-Controlador).
  - Patrón repositorio para acceso a datos.
- Estructura de proyectos web y organización de código.
- Uso de bases de datos relacionales (PostgreSQL)
- Uso de ORMs (Prisma) para acceso a bases de datos.
- Uso de herramientas de desarrollo (Visual Studio Code, Postman, etc.)

## Objetivos de aprendizaje

- Concepto de API REST.
- Recursos, endpoints y verbos HTTP.
- Diseño correcto de una API REST.
- Representaciones de datos en JSON.
- Códigos de estado HTTP y semántica de respuesta.
- Versionado de APIs.
- Documentación de APIs.
- Autenticación y autorización en APIs REST.
- Seguridad en la comunicación (HTTPS, CORS).
- Consumo de APIs REST desde aplicaciones web.
- Buenas prácticas de consumo e integración de APIs externas.

## Contenido

1. Arquitecturas distribuidas orientadas a servicios y APIs REST
   - 1.1 Características generales de las arquitecturas de servicios distribuidos.
   - 1.2 Modelo conceptual de las arquitecturas orientadas a servicios:
     - Arquitecturas basadas en mensajes (visión general y relación con servicios web tradicionales).
     - Arquitecturas basadas en recursos: fundamentos de REST (recursos, URIs, representaciones, hipermedios).
     - Políticas y contratos de servicios: contratos de APIs REST, documentación y especificaciones (OpenAPI/Swagger) enlazando con el concepto general de «políticas y contratos» de la unidad.
   - 1.3 Introducción a las APIs REST:
     - Concepto de API y API web.
     - Principios del estilo REST (cliente-servidor, sin estado, caché, interfaz uniforme).
     - Operaciones típicas sobre recursos (CRUD) y uso de métodos HTTP.
     - Formatos de representación: JSON como formato predominante.
   - 1.4 Aspectos de seguridad en arquitecturas orientadas a servicios (enfocados a REST)
     - Seguridad de datos y mensajes en APIs REST (HTTPS, cifrado en tránsito, registros).
     - Control de acceso y modelo RBAC aplicados a APIs (roles, permisos sobre recursos y operaciones).
     - Seguridad en comunicaciones: uso de protocolos seguros (TLS) y consideraciones de CORS.
   - 1.5 Implementación de arquitecturas orientadas a servicios mediante tecnologías web (centrado en REST):
     - Especificaciones de servicios web de uso común: breve comparación entre SOAP y REST, destacando ventajas de REST para aplicaciones web.
     - Lenguajes de definición de servicios: se sitúa WSDL como estándar histórico frente a enfoques modernos como OpenAPI, manteniendo la referencia al currículo original.
     - Estándares de seguridad en servicios web: se mencionan WS-Security, SAML, XACML como parte del contexto, pero se enfatizan mecanismos prácticos habituales en APIs REST (tokens, JWT, OAuth2 de forma introductoria).
   - 1.6 Directorios y descubrimiento de servicios:
     - Concepto de directorio de servicios y ventajas/inconvenientes.
     - Estándares sobre directorios de servicios: UDDI (enfoque histórico) y mención de prácticas actuales (catálogos de APIs, portales de desarrolladores).

2. Programación de servicios web en entornos distribuidos (APIs REST)
   - 2.1 Componentes software para el acceso a servicios distribuidos:
     - Definición de servicios: diseño de una API REST (identificación de recursos, rutas, parámetros, filtrado, paginación, códigos de estado).
     - Generación automática de servicios: uso de frameworks y herramientas que generan código de servidor/cliente a partir de especificaciones (OpenAPI, herramientas equivalentes), manteniendo la idea original de generación automática.
   - 2.2 Programación de diferentes tipos de acceso a servicios:
     - Consumo de APIs REST desde aplicaciones web (cliente JavaScript, peticiones HTTP, uso de librerías).
     - Servicios basados en publicación/suscripción y repositorios: se tratan como otros patrones de integración, pero siempre contrastando con el modelo REST.
     - Servicios accesibles desde agentes de usuario: consumo de APIs desde navegadores, aplicaciones móviles u otros agentes.
     - Proveedores y consumidores de servicios en entorno servidor: implementación de un backend que expone una API REST y consumo desde otros servicios.
   - 2.3 Herramientas para la programación de servicios web:
     - Comparativa de herramientas y frameworks orientados a APIs REST (por ejemplo, frameworks web en el lenguaje que se use en el módulo).
     - Bibliotecas y entornos integrados (frameworks) de uso común, poniendo ejemplos concretos de librerías para definir rutas, serializar JSON, gestionar seguridad, etc.
   - 2.4 Buenas prácticas y pruebas de APIs REST:
     - Manejo coherente de códigos de estado HTTP y mensajes de error.
     - Versionado de la API y compatibilidad.
     - Pruebas y documentación: uso de herramientas como Postman, colecciones de pruebas y documentación viva.

## Primera parte. Arquitecturas distribuidas orientadas a servicios y APIs REST

### 1. Introducción. Arquitecturas de servicios distribuidos

Las aplicaciones web actuales rara vez funcionan como sistemas cerrados. Lo habitual es que necesiten **intercambiar información** con otras aplicaciones, plataformas o servicios externos para

- consultar datos
- autenticarse
- registrar operaciones
- integrar funcionalidades

Para resolver esta necesidad aparecen las **arquitecturas de servicios distribuidos**, en las que distintas partes del sistema se ejecutan en entornos separados pero cooperan mediante comunicaciones a través de la red.

Este modelo aporta ventajas claras:

- permite separar **responsabilidades**
- facilita la **reutilización** de servicios
- mejora la **escalabilidad**
- hace posible que **diferentes tecnologías** trabajen juntas.

En lugar de construir una aplicación monolítica que lo haga todo, se divide el sistema en **servicios especializados** que exponen funciones concretas para que otros componentes puedan consumirlas.

En este contexto, la **comunicación** entre sistemas debe ser

- coherente
- comprensible
- estable.

Por eso, además de definir qué información se intercambia, es importante establecer

- cómo se organiza esa comunicación,
- qué formato tienen los mensajes,
- qué reglas se siguen
- cómo se documenta el comportamiento esperado de cada servicio.

#### 1.1. Modelos conceptuales de las arquitecturas orientadas a servicios

Las arquitecturas orientadas a servicios parten de la idea de que una aplicación puede ofrecer **capacidades** concretas a través de **interfaces bien definidas**. Estas interfaces permiten que otros sistemas consuman esas capacidades sin necesidad de conocer los detalles internos de implementación.

Desde un punto de vista conceptual, pueden distinguirse distintos enfoques

- servicios que se construyen alrededor del intercambio de mensajes
- otros que otros se organizan alrededor de recursos accesibles mediante operaciones estándar.

Esta diferencia es especialmente importante para entender la **evolución** de los servicios web y el papel que ocupa **REST** dentro de las **arquitecturas modernas**.

El modelo orientado a servicios elegido afecta a

- la implementación técnica
- la forma de diseñar la API
- la manera de documentarla
- cómo se establece el contrato entre quien ofrece el servicio y quien lo consume.

##### Arquitecturas basadas en mensajes

Las **arquitecturas basadas en mensajes** representan una forma clásica de intercambio entre sistemas. En este enfoque, una aplicación envía un mensaje estructurado a otra, que lo procesa y devuelve una respuesta. Lo importante es el contenido y la estructura del mensaje, más que la identificación de un recurso concreto.

Este modelo ha sido muy utilizado en **servicios web tradicionales**, especialmente en entornos donde se priorizaba una interfaz formal y fuertemente contratada. En estos casos, las operaciones suelen estar claramente definidas, y el mensaje describe la acción que se desea ejecutar junto con sus parámetros. El ejemplo más conocido de este enfoque es el uso de **SOAP** (Simple Object Access Protocol), que define un protocolo de mensajería basado en XML con un contrato formalizado mediante WSDL (Web Services Description Language).

Aunque este enfoque sigue siendo válido en determinados contextos, en el desarrollo web actual se ha ido imponiendo un modelo más simple y flexible, basado en recursos. REST reduce la complejidad del intercambio y aprovecha directamente las capacidades del protocolo HTTP, lo que lo hace más natural para aplicaciones web y móviles.

##### Arquitecturas basadas en recursos

Las **arquitecturas basadas en recursos** son la base del **estilo REST**. En lugar de pensar en llamadas a funciones o en envío de mensajes orientados a acciones, se parte de la idea de que el sistema expone **recursos**: usuarios, productos, pedidos, tareas, publicaciones o cualquier otra entidad que tenga sentido dentro del dominio de la aplicación.

Cada recurso se identifica mediante una **URI**, que actúa como dirección única dentro de la API. A partir de esa URI, el cliente puede consultar, crear, modificar o eliminar información mediante los métodos estándar de HTTP. Esta aproximación hace que la API sea más predecible, más uniforme y más fácil de entender.

Además, el recurso no se transmite como objeto interno del sistema, sino como una **representación**. Esa representación suele adoptar formatos como **JSON**, aunque en otros contextos podrían utilizarse también otros formatos. Lo relevante es que el cliente no trabaja directamente con la estructura interna del servidor, sino con una vista externa y estandarizada del recurso.

REST también introduce la idea de que un mismo recurso puede tener distintas representaciones, y de que la comunicación entre cliente y servidor debe ser lo más **independiente** posible del **estado interno** de la aplicación. Esto favorece la escalabilidad y la separación entre frontend y backend.

###### Elementos de una API REST

En una API REST, el diseño gira en torno a cuatro elementos esenciales:

- recursos
- URIs
- representaciones
- operaciones
- hipermedios.

Los **recursos** son las entidades que la API ofrece al exterior. Deben definirse con claridad y representar elementos lógicos del dominio, no operaciones técnicas.

Las **URIs** identifican de forma única cada recurso o colección de recursos. Una buena estructura de URIs ayuda a que la API sea intuitiva. Por ejemplo, una ruta como `/usuarios` sugiere una colección, mientras que `/usuarios/15` identifica un usuario concreto.

Las **representaciones** son los datos que el servidor devuelve o recibe. En la práctica, JSON es el formato más extendido por su ligereza y facilidad de uso con JavaScript y TypeScript.

Las **operaciones** se realizan mediante los métodos HTTP estándar (GET, POST, PUT, DELETE, etc.) y deben aplicarse de forma coherente para que la API sea predecible.

Los **hipermedios** añaden una capa adicional de navegación, permitiendo que las respuestas incluyan enlaces hacia recursos relacionados. Aunque en muchas APIs REST básicas este aspecto se trabaja de forma limitada, forma parte del modelo teórico completo y ayuda a entender el ideal de una API más autónoma y navegable.

#### 1.2. Políticas y contratos de servicios

Toda API necesita establecer unas reglas de uso. Esas reglas forman parte del **contrato del servicio**, es decir, del acuerdo que define qué recursos existen, qué operaciones están permitidas, qué datos se esperan y qué respuestas puede devolver el servidor.

En una API REST, este contrato se expresa a través de distintos elementos:

- la estructura de las rutas
- los métodos HTTP admitidos
- los parámetros de entrada
- los códigos de estado
- los formatos de respuesta

Cuanto más claro sea el contrato, más fácil será integrar la API en otras aplicaciones.

Las **políticas de servicio** completan este contrato al fijar aspectos como

- autenticación
- autorización
- límites de uso
- gestión de errores
- requisitos de seguridad

No basta con que una API funcione; también debe hacerlo de forma consistente, segura y documentada.

##### Documentación y especificaciones

La documentación es una parte esencial de cualquier API REST. Sin una descripción clara, los clientes de la API no sabrán cómo interactuar con ella ni qué respuestas esperar.

Herramientas como **OpenAPI** y **Swagger** permiten describir una API de forma estructurada. Gracias a ellas es posible documentar rutas, parámetros, esquemas de datos, ejemplos de uso, respuestas posibles y errores. Esto mejora notablemente la comprensión del servicio y facilita tanto su desarrollo como su mantenimiento.

Además, disponer de una especificación formal ayuda a mantener coherencia entre lo que se diseña y lo que realmente se implementa. La documentación deja de ser un texto auxiliar y pasa a formar parte del propio contrato técnico de la API.

#### 1.3 Conclusiones: Enlace con APIs REST

Todo lo anterior sirve como base para comprender por qué REST se ha convertido en uno de los estilos más extendidos en la construcción de APIs web. Su éxito se debe a que combina sencillez, uniformidad y aprovechamiento natural del protocolo HTTP.

A lo largo de la unidad, estos conceptos se aplicarán al desarrollo de APIs REST con **Node.js**, **TypeScript** y **Express**, profundizando en el diseño de recursos, la definición de rutas, el tratamiento de respuestas y la documentación del servicio.

### 2. Introducción a las APIs REST

Una vez entendido el marco general de las arquitecturas distribuidas, el siguiente paso es concretar cómo se materializa esa comunicación en el día a día del desarrollo web. En ese punto aparecen las **APIs**, que actúan como punto de acceso a las funcionalidades de un sistema para que otras aplicaciones puedan utilizarlas de forma controlada.

Una **API** es, en esencia, una interfaz que permite a un programa comunicarse con otro. En el entorno web, una **API web** expone esa interfaz a través de HTTP, de modo que un cliente puede enviar peticiones y recibir respuestas siguiendo reglas conocidas y estandarizadas. Esto permite separar claramente la parte que ofrece el servicio de la parte que lo consume, facilitando la integración entre sistemas distintos.

```plain
API = Interfaz + HTTP
```

Dentro de este contexto, REST (Representational State Transfer) no es una tecnología concreta, sino un **estilo arquitectónico**. Su objetivo es organizar la comunicación de manera simple y uniforme, aprovechando las capacidades naturales de HTTP. Por eso, cuando se diseña una API REST, no se parte de funciones arbitrarias, sino de recursos identificables, operaciones bien definidas y respuestas predecibles.

#### 2.1. Principios del estilo REST

El estilo REST se apoya en varios principios que ayudan a mantener una API coherente y fácil de usar.

El primero es el modelo **cliente-servidor**, que separa claramente la responsabilidad de quien solicita información y quien la proporciona. Esta separación permite evolucionar cada parte por separado, siempre que se mantenga el contrato de comunicación entre ambas.

El segundo principio es la ausencia de estado o **statelessness**. En una API REST, cada petición debe contener toda la información necesaria para ser procesada, sin depender de una conversación previa guardada en el servidor. Esto simplifica la escalabilidad y hace que el servicio sea más fácil de distribuir y mantener.

Otro principio importante es la **caché**. Algunas respuestas pueden almacenarse temporalmente para evitar repetir cálculos o consultas innecesarias, mejorando así el rendimiento. No todos los recursos deben cachearse, pero REST contempla esta posibilidad como parte del diseño.

Finalmente, destaca la **interfaz uniforme**, que propone utilizar un conjunto consistente de operaciones y convenciones para todos los recursos. Esto hace que la API sea predecible: si un cliente sabe cómo interactuar con un recurso, podrá aplicar el mismo patrón al resto.

#### 2.2. Operaciones sobre recursos: CRUD, métodos HTTP y semántica

En una API REST, el trabajo habitual consiste en operar sobre recursos mediante acciones equivalentes al ciclo básico de gestión de datos, es decir, **crear, leer, actualizar y eliminar**. Estas operaciones suelen conocerse como **CRUD**.

Cada acción se relaciona con un método HTTP concreto. El uso de métodos HTTP no es un detalle accesorio, sino una de las claves del diseño REST. Cada método transmite una intención concreta, y por ello conviene respetar su significado.

- `GET` se utiliza para consultar información sin alterar el estado del servidor.
- `POST` sirve normalmente para crear nuevos recursos o ejecutar operaciones que impliquen procesamiento.
- `PUT` y `PATCH` se emplean para modificar recursos, aunque con matices distintos según si la actualización es completa o parcial.
- `DELETE` expresa la eliminación de un recurso.

Esta correspondencia entre acción y método hace que la API sea fácil de interpretar tanto por humanos como por herramientas automáticas.

Lo importante no es solo que una operación funcione, sino que lo haga de forma semánticamente correcta. Por ejemplo, una petición de lectura no debería modificar datos, y una petición de creación no debería usarse para reemplazar un recurso existente sin una justificación clara. Esta coherencia es una de las bases de la buena práctica en diseño de APIs.

Además de elegir el método correcto, también hay que devolver una respuesta adecuada. Los códigos de estado HTTP informan de si la operación ha tenido éxito, si la solicitud era incorrecta o si el recurso no existe. Esta semántica mejora mucho la comunicación entre cliente y servidor, porque permite reaccionar de forma precisa ante cada situación.

##### Idempotencia

Otro concepto importante es la idenpotencia, que se refiere a la capacidad de repetir una operación sin causar efectos secundarios adicionales. Por ejemplo, una petición `PUT` para actualizar un recurso debería ser idempotente, de modo que si se envía varias veces con los mismos datos, el resultado sea el mismo que si se enviara una sola vez. Esto es especialmente relevante para garantizar la robustez de la API y facilitar su consumo desde aplicaciones que puedan experimentar fallos de red o necesiten reintentar operaciones.

- `GET` es idempotente porque no modifica el estado del servidor.
- `PUT` es idempotente porque reemplaza el recurso con los mismos datos, sin importar cuántas veces se envíe.
- `PATCH` NO es idempotente porque cada petición puede modificar el recurso de forma diferente, dependiendo de los cambios aplicados.
- `POST` NO es idempotente porque cada petición puede crear un nuevo recurso o desencadenar una acción diferente.
- `DELETE` es idempotente porque eliminar un recurso varias veces tiene el mismo efecto que eliminarlo una sola vez (el recurso ya no existe después de la primera eliminación).

#### 2.3. Representación de datos en JSON

En las APIs REST modernas, el formato de intercambio más habitual es **JSON** (JavaScript Object Notation). Su estructura ligera, legible y compatible con JavaScript lo ha convertido en el estándar de facto para transmitir datos entre cliente y servidor.

JSON representa información mediante pares clave-valor, listas y objetos anidados, lo que permite modelar estructuras bastante complejas sin perder claridad. Frente a formatos más verbosos, JSON reduce el tamaño de los mensajes y facilita tanto la lectura humana como el procesamiento automático.

Cuando una API REST devuelve información en JSON, no está enviando objetos internos del sistema, sino una **representación** de esos datos pensada para ser consumida por otro programa. Esta idea es importante, porque ayuda a separar la lógica del servidor de la forma en que la información se presenta hacia fuera.

En conjunto, estos elementos permiten entender por qué REST resulta tan adecuado para el desarrollo de servicios web modernos: combina un modelo simple, una semántica clara y un formato de intercambio ampliamente aceptado.

##### Otros formatos de intercambio de datos

**XML** fue muy habitual en los primeros servicios web, especialmente en arquitecturas SOAP, por su capacidad para definir esquemas muy estrictos y su soporte en lenguajes empresariales. Sin embargo, su verbosidad y complejidad de procesamiento lo han relegado a entornos legacy o casos muy específicos. En algunos casos, especialmente en entornos empresariales o legacy, todavía se utiliza XML, que aunque más verboso, ofrece ventajas en cuanto a validación y definición de esquemas. Sin embargo, su complejidad y tamaño lo han relegado a casos específicos.

Otros formatos como **YAML** o **Protocol Buffers** aparecen ocasionalmente en APIs internas o sistemas de alto rendimiento, pero su uso es minoritario en APIs web públicas. En la práctica, JSON cubre el 95% de los casos por su equilibrio entre simplicidad, rendimiento y legibilidad.

Además del formato, es importante definir una **convención consistente** para la estructura de las respuestas. Las APIs REST bien diseñadas establecen patrones claros para datos de éxito, errores, paginación o metadatos, independientemente del formato elegido. Esta uniformidad facilita el trabajo tanto al desarrollador del cliente como al del servidor.

Un aspecto clave es también la negociación de formato mediante **encabezados HTTP**. El cliente puede indicar sus preferencias mediante `Accept: application/json`, y el servidor responder con el formato más adecuado. Aunque en la práctica JSON suele ser la única opción, entender este mecanismo es importante para APIs más sofisticadas.

Esta flexibilidad en formatos, combinada con convenciones claras y negociación de contenido, permite que una API REST sea accesible desde cualquier tipo de cliente —web, móvil, IoT o sistemas legacy— manteniendo al mismo tiempo simplicidad en su implementación diaria.

### 3. Respuestas HTTP y códigos de estado

Una vez definida la petición, la comunicación REST se completa con la **respuesta** del servidor. Esta respuesta no solo contiene los datos solicitados, sino que transmite información clave sobre el resultado de la operación:

- **encabezados HTTP**, que aportan metadatos sobre la respuesta (tipo de contenido, longitud, fecha, etc.)
- **códigos de estado HTTP**, que actúan como un lenguaje estandarizado entre cliente y servidor.

Los códigos de estado son números de tres dígitos que clasifican la naturaleza de la respuesta. Su diseño permite al cliente entender inmediatamente si la petición fue exitosa, si hubo un error del cliente, si falló el servidor o si el recurso tiene un estado especial. Esta información es esencial para que el cliente decida la acción siguiente de forma automática.

En una API REST bien diseñada, el uso correcto de estos códigos no es opcional, sino parte fundamental del contrato de comunicación. Un cliente puede confiar en que un `200 OK` significa éxito, un `404 Not Found` indica recurso inexistente, y un `400 Bad Request` señala un problema en la petición recibida.

#### 3.1. Familias de códigos de estado

Los códigos HTTP se agrupan en cinco familias según su primer dígito:

**2xx - Éxito**: La petición se procesó correctamente. `200 OK` indica éxito general, `201 Created` se usa específicamente tras crear un recurso, `204 No Content` confirma operaciones sin cuerpo de respuesta como eliminaciones.

**3xx - Redirección**: El cliente debe tomar acción adicional. `301 Moved Permanently` indica que un recurso cambió de URI permanentemente, `304 Not Modified` optimiza caché al confirmar que los datos del cliente siguen siendo válidos.

**4xx - Error del cliente**: La petición tiene problemas. `400 Bad Request` señala sintaxis incorrecta, `401 Unauthorized` falta autenticación, `403 Forbidden` impide acceso autorizado, `404 Not Found` recurso inexistente, `422 Unprocessable Entity` semánticamente incorrecta.

**5xx - Error del servidor**: Fallo interno. `500 Internal Server Error` problema genérico, `503 Service Unavailable` servicio temporalmente fuera de servicio.

#### 3.2. Códigos más utilizados en APIs REST

En la práctica diaria de APIs REST, ciertos códigos se convierten en habituales:

Para operaciones **CRUD**:

- `GET /usuarios` → `200 OK` con lista de usuarios
- `POST /usuarios` → `201 Created` con datos del nuevo usuario
- `GET /usuarios/123` → `404 Not Found` si no existe
- `PUT /usuarios/123` → `200 OK` o `204 No Content`
- `DELETE /usuarios/123` → `204 No Content`

Para **errores comunes**:

- `400 Bad Request` - Datos de entrada inválidos
- `401 Unauthorized` - Sin autenticación o token expirado
- `403 Forbidden` - Sin permisos para la operación
- `409 Conflict` - Violación de integridad (ej: email duplicado)

La diferencia entre `401 Unauthorized` y `403 Forbidden` es que el primero indica que el cliente no ha proporcionado credenciales válidas, mientras que el segundo significa que, aunque las credenciales son correctas, el cliente no tiene permiso para acceder al recurso. Sin embargo, por motivos de seguridad, es común usar `403 Forbidden` para evitar revelar la existencia de un recurso a usuarios no autorizados.

La diferencia entre `400 Bad Request` y `422 Unprocessable Entity` es sutil pero importante. El primero se refiere a problemas de sintaxis o formato en la petición, mientras que el segundo indica que la petición es sintácticamente correcta pero semánticamente inválida (por ejemplo, un email con formato correcto pero que ya existe en la base de datos).

Entre los errores del servidor, `500 Internal Server Error` es un código genérico que indica que algo ha fallado en el servidor sin especificar detalles. En cambio, `503 Service Unavailable` se utiliza para indicar que el servidor no puede manejar la petición en ese momento, generalmente debido a mantenimiento o sobrecarga temporal.

#### 3.3. Estructura de las respuestas. Encabezados y cuerpo

Más allá del código de estado, una buena respuesta REST incluye información estructurada que facilite su interpretación:

**Encabezados importantes**:

```
Content-Type: application/json
Location: /usuarios/123  (para 201 Created)
X-Rate-Limit-Remaining: 99
```

El Content-Type indica el formato de la respuesta. Cunado en Express se utiliza `res.json()`, se establece automáticamente `Content-Type: application/json`, lo que informa al cliente que el cuerpo de la respuesta está en formato JSON. Esto es crucial para que el cliente pueda parsear correctamente los datos recibidos.

Location señala la URI del recurso recién creado. Es especialmente relevante en respuestas `201 Created`, ya que permite al cliente acceder directamente al nuevo recurso sin necesidad de construir la URI manualmente.

X-Rate-Limit-Remaining informa sobre límites de uso. La X indica que es un encabezado personalizado, y su valor puede ayudar al cliente a gestionar su consumo de la API, evitando superar límites impuestos por el servidor.

Express introduce otro encabezado útil: `X-Powered-By: Express`, que indica que el servidor está utilizando el framework Express. Aunque no es esencial para la funcionalidad de la API, puede ser útil para depuración o para entender el entorno tecnológico del servidor. Sin embargo, por razones de seguridad, es común configurar Express para que no exponga este encabezado, evitando así revelar información sobre la tecnología utilizada que podría ser aprovechada por atacantes.

```ts
app.disable('x-powered-by');
```

**Cuerpo de respuesta típico para éxito**:

```json
{
  "id": 123,
  "nombre": "Ana García",
  "email": "ana@example.com",
  "creadoEn": "2026-04-24T14:00:00Z"
}
```

**Cuerpo para errores**:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "El email ya existe",
    "details": {
      "field": "email",
      "value": "ana@example.com"
    }
  }
}
```

#### 3.4. Buenas prácticas en respuestas

Para que las respuestas sean realmente útiles, conviene seguir algunas convenciones:

- **Consistencia**: Todos los endpoints siguen el mismo formato de error y metadatos.
- **Especificidad**: `422 Unprocessable Entity` es preferible a `400 Bad Request` cuando la validación semántica falla.
- **Mensajes útiles**: Los errores incluyen contexto actionable, no solo "Error genérico".
- **Paginación informativa**: Listas grandes incluyen `X-Total-Count` y enlaces `next`/`prev`.
- **Timestamps**: Campos como `creadoEn`/`actualizadoEn` ayudan al cliente a entender frescura de datos.

La combinación de códigos de estado bien elegidos, encabezados informativos y cuerpos estructurados convierte una API REST en algo predecible y confiable, permitiendo que los clientes tomen decisiones automáticas basadas en respuestas consistentes.

### 4. Aspectos de seguridad en arquitecturas orientadas a servicios (enfocados a REST)

La seguridad no es un añadido opcional en una API REST, sino un requisito fundamental desde su diseño inicial. Las arquitecturas orientadas a servicios exponen funcionalidades críticas a través de la red, por lo que deben proteger tanto los datos transmitidos como el acceso a los recursos y las comunicaciones entre cliente y servidor.

Una brecha de seguridad en una API puede comprometer información sensible, permitir operaciones no autorizadas o exponer vulnerabilidades del sistema. Por eso, los mecanismos de protección deben aplicarse de forma coherente en todos los niveles: transporte, autenticación, autorización y configuración del servidor.

#### 4.1. Seguridad de datos y mensajes en APIs REST

La **confidencialidad** de los datos es el primer pilar de seguridad. Toda comunicación con una API REST debe realizarse sobre **HTTPS**, que garantiza el cifrado en tránsito mediante TLS. Sin cifrado, cualquier atacante en la misma red podría interceptar peticiones, leer datos sensibles o modificar mensajes.

En APIs REST, esto afecta especialmente a:

- Credenciales de autenticación (tokens, claves API)
- Datos personales (nombres, emails, direcciones)
- Información financiera o transaccional
- Cualquier parámetro que modifique el estado del sistema

Además del cifrado en tránsito, conviene mantener **registros de auditoría** para todas las operaciones sensibles. Estos logs deben incluir la URI solicitada, método HTTP, identidad del cliente, timestamp y resultado de la operación, sin almacenar datos sensibles en texto plano.

#### 4.2. Control de acceso y modelo RBAC aplicado a APIs

El **control de acceso** determina qué usuarios pueden ejecutar qué operaciones sobre qué recursos. El modelo **RBAC** (Role-Based Access Control) es especialmente adecuado para APIs REST porque organiza permisos alrededor de **roles** en lugar de usuarios individuales.

En RBAC aplicado a APIs:

- **Roles** agrupan permisos relacionados: `admin`, `usuario`, `invitado`, `editor`
- **Permisos** definen acciones específicas: `leer:usuarios`, `escribir:productos`, `eliminar:pedidos`
- Un usuario puede tener múltiples roles según contexto

**Ejemplo práctico**:

```plain
Usuario "ana" tiene roles: ["usuario", "editor-productos"]

GET /usuarios → DENEGADO (solo admin)
GET /usuarios/123 → PERMITIDO (rol usuario)
POST /productos → PERMITIDO (rol editor-productos)
DELETE /productos/456 → DENEGADO
```

La implementación suele hacerse mediante **middleware** que verifica rol y permisos antes de ejecutar el controlador:

```typescript
// Middleware RBAC simplificado
if (
  !req.user.roles.includes('admin') &&
  endpointRequiresAdmin(req.method, req.path)
) {
  return res.status(403).json({ error: 'Acceso denegado' });
}
```

#### 4.3. Seguridad en comunicaciones: protocolos seguros y CORS

**TLS/HTTPS** no solo cifra datos, sino que también autentica el servidor mediante certificados digitales. En producción, siempre debe usarse TLS 1.2 o superior con cifrados fuertes. Los certificados deben renovarse regularmente y configurarse correctamente (HSTS, OCSP stapling).

**CORS** (Cross-Origin Resource Sharing) es otro aspecto crítico en APIs web. Controla qué dominios pueden acceder a la API desde navegadores:

```
Access-Control-Allow-Origin: https://miapp.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Authorization, Content-Type
```

**Configuración estricta recomendada**:

```typescript
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || 'https://miapp.com',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);
```

Sin CORS configurado correctamente, la API queda expuesta a ataques CSRF desde cualquier sitio web malicioso.

#### 4.4. Medidas complementarias esenciales

**Rate limiting**: Limita peticiones por IP/usuario para prevenir abusos y ataques DDoS:

```
X-RateLimit-Limit: 100
X-RateLimit-Remaining: 45
X-RateLimit-Reset: 1640995200
```

**Validación estricta**: Nunca confiar en datos del cliente, validar siempre con esquemas (Zod):

```typescript
const createUserSchema = z.object({
  email: z.string().email(),
  nombre: z.string().min(2).max(50),
});
```

**Headers de seguridad**:

```plain
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

**Timeouts y límites de tamaño**: Prevenir ataques de denegación de servicio por payloads gigantes o conexiones lentas.

La seguridad en APIs REST debe pensarse como **defensa en profundidad**: múltiples capas que se refuerzan mutuamente. Un atacante debe superar HTTPS, autenticación, autorización, rate limiting y validación para causar daño real. Cada capa individual puede fallar, pero el sistema completo permanece protegido.

### 5. Implementación de arquitecturas orientadas a servicios mediante tecnologías web (centrado en REST)

La implementación práctica de una arquitectura orientada a servicios requiere elegir tecnologías que equilibren funcionalidad, rendimiento y facilidad de uso. En el ámbito web, dos enfoques principales han dominado históricamente:

- **SOAP**
- **REST**.

Aunque ambos permiten la comunicación entre sistemas, difieren profundamente en filosofía, complejidad y casos de uso.

El desarrollo moderno de APIs web se inclina claramente hacia REST por su alineación natural con HTTP y su simplicidad operativa. Sin embargo, conocer las alternativas ayuda a entender por qué REST se ha convertido en el estándar de facto para aplicaciones web distribuidas.

#### 5.1. SOAP vs REST: comparación práctica

**SOAP** (Simple Object Access Protocol) es un estándar formal basado en XML que define un contrato estricto entre cliente y servidor. Sus características principales incluyen:

- Especificación **WSDL** que describe completamente el servicio
- Mensajes **XML** estructurados con "envelope", "header" y "body"
- Soporte nativo para **transacciones**, seguridad y routing
- Independiente del protocolo de transporte (HTTP, SMTP, TCP)

**REST**, por el contrario, es un estilo arquitectónico que aprovecha **HTTP** como protocolo principal:

| Aspecto      | SOAP                        | REST                         |
| :----------- | :-------------------------- | :--------------------------- |
| Formato      | XML rígido                  | JSON/XML flexible            |
| Contrato     | WSDL formal                 | Documentación informal       |
| Complejidad  | Alta (estándares múltiples) | Baja (HTTP nativo)           |
| Rendimiento  | Más lento (XML parsing)     | Rápido (JSON ligero)         |
| Casos de uso | Enterprise, transacciones   | Web, móviles, microservicios |

**Ventajas de REST para aplicaciones web**:

- Aprovecha caché HTTP natural
- Métodos HTTP semánticos (GET, POST, PUT, DELETE)
- JSON nativo con JavaScript/TypeScript
- URLs intuitivas y explorables por humanos
- Escalabilidad horizontal sencilla

#### 5.2. Lenguajes de definición de servicios

**WSDL** (Web Services Description Language) fue el estándar para describir servicios SOAP. Define operaciones, tipos de datos, mensajes y endpoints en un documento XML extenso y complejo. Aunque sigue siendo relevante en sistemas legacy empresariales, su verbosidad lo hace poco práctico para APIs web modernas.

**OpenAPI** (antes Swagger) representa el enfoque moderno para REST:

```yml
openapi: 3.0.0
info:
  title: API de Usuarios
  version: 1.0.0
paths:
  /usuarios:
    get:
      summary: Lista todos los usuarios
      responses:
        '200':
          description: Lista de usuarios
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Usuario'
```

**Ventajas de OpenAPI sobre WSDL**:

- Sintaxis YAML/JSON legible
- Generación automática de clientes y documentación
- Soporte para validación runtime
- Integración con herramientas (Postman, Swagger UI)
- Evolución iterativa sin romper compatibilidad

#### 5.3. Estándares de seguridad: del mundo SOAP a REST práctico

Los servicios web SOAP desarrollaron estándares complejos de seguridad:

- **WS-Security**: Firma digital, cifrado XML, timestamps
- **SAML**: Federación de identidades
- **XACML**: Políticas de autorización avanzadas

Aunque técnicamente aplicables a REST, su complejidad los hace poco prácticos para APIs web. En su lugar, REST adopta mecanismos **simples y efectivos**:

**login basado en contraseñas**

```yml
POST /login
Content-Type: application/json
{
  "username": "ana",
  "password": "ywueyqwieyk"
}
```

**Tokens de acceso (API Keys)**:

```yml
Authorization: ApiKey tu-clave-secreta
```

**JWT (JSON Web Tokens)** - Estándar moderno:

```yml
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

**OAuth 2.0** - Autorización delegada:

```yml
GET /api/v1/usuarios
Authorization: Bearer token-de-acceso
```

**Flujo típico JWT en REST**:

```plain
1. POST /login → 200 { "token": "jwt.accesstoken" }
2. GET /usuarios
   Authorization: Bearer jwt.accesstoken → 200 lista usuarios
3. GET /usuarios/123 → verifica JWT → 200 datos usuario
```

#### 5.4. Implementación práctica en Node.js + Express

Con Express, la autenticación JWT se implementa mediante middleware:

```typescript
// Middleware JWT
const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_SECRET!, (err, user) => {
    if (err) return res.sendStatus(403);
    (req as any).user = user;
    next();
  });
};

// Uso en rutas
app.get('/usuarios', authenticateToken, getUsuarios);
```

**OpenAPI + Swagger en Express**:

```typescript
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs.json', swaggerUi.setup(openApiSpec));
```

La evolución de SOAP → REST refleja una tendencia clara hacia **simplicidad operativa sin sacrificar funcionalidad esencial**.

- OpenAPI reemplaza a WSDL
- JWT simplifica WS-Security
- HTTP nativo hace innecesarios muchos estándares complejos.

Esta convergencia permite construir APIs web robustas manteniendo la productividad del desarrollo.

### 6. Directorios y descubrimiento de servicios

En arquitecturas distribuidas complejas, localizar servicios disponibles se convierte en un desafío. Los **directorios de servicios** resuelven esta necesidad al actuar como puntos centralizados donde los proveedores registran sus APIs y los consumidores pueden buscarlas por funcionalidad, ubicación o características técnicas.

El descubrimiento dinámico de servicios permite que las aplicaciones se adapten automáticamente cuando un servicio cambia de endpoint, versión o estado de disponibilidad. Sin embargo, su implementación debe equilibrar centralización con resiliencia y rendimiento.

#### 6.1. Concepto de directorio de servicios

Un **directorio de servicios** funciona como una "página amarilla" para APIs. Los proveedores **publican** descripciones estructuradas de sus servicios (endpoints, métodos soportados, formatos, autenticación requerida), mientras los consumidores **consultan** ese catálogo para encontrar la funcionalidad que necesitan.

**Ventajas principales**:

- **Desacoplamiento**: Clientes encuentran servicios sin conocer endpoints fijos
- **Flexibilidad**: Fácil añadir/retirar servicios sin actualizar todos los clientes
- **Estandarización**: Descripciones uniformes facilitan integración
- **Monitoreo centralizado**: Visibilidad global del estado de servicios

**Inconvenientes**:

- **Punto único de fallo**: Si el directorio cae, nadie encuentra servicios
- **Sobrecarga operativa**: Mantener descripciones actualizadas
- **Latencia**: Consultas adicionales en tiempo de ejecución
- **Seguridad**: Catálogo puede exponer más información de la deseada

#### 6.2. Arquitectura típica de un directorio

```
Proveedor A ──> REGISTRA ──> Directorio ──> CONSULTA ──> Cliente 1
Proveedor B ──> REGISTRA ──> de servicios  ──> CONSULTA ──> Cliente 2
Proveedor C ──> REGISTRA ──>               ──> CONSULTA ──> Cliente 3
```

**Flujo de publicación**:

1. Proveedor envía metadatos del servicio al directorio
2. Directorio valida y almacena descripción (OpenAPI + metadatos)
3. Servicio queda disponible para consultas

**Flujo de descubrimiento**:

1. Cliente envía criterios de búsqueda ("usuarios", "REST", "JSON")
2. Directorio devuelve lista de servicios coincidentes
3. Cliente selecciona servicio y obtiene endpoint real

#### 6.3. Estándares históricos: UDDI

**UDDI** (Universal Description, Discovery and Integration) fue el estándar de los años 2000 para directorios de servicios SOAP:

**Componentes UDDI**:

- **White pages**: Información básica del proveedor (nombre, contacto)
- **Yellow pages**: Clasificación por industria/categoría (taxonomías)
- **Green pages**: Descripciones técnicas detalladas (WSDL)

**Limitaciones prácticas**:

- Complejidad excesiva para servicios web simples
- XML pesado y difícil de mantener
- Acoplado al ecosistema SOAP
- Poca adopción fuera de entornos enterprise grandes

UDDI representa el enfoque **formal y centralizado** de la era SOA empresarial, pero su rigidez lo hizo inadecuado para el desarrollo web ágil.

#### 6.4. Prácticas modernas: catálogos de APIs y portales de desarrolladores

Las APIs REST modernas han evolucionado hacia soluciones **prácticas y centradas en el desarrollador**:

**Catálogos públicos**:

```
[RapidAPI](https://rapidapi.com)           - Marketplace de APIs de terceros
[Public APIs](https://github.com/public-apis/public-apis)        - GitHub con 1500+ APIs gratuitas
[API List]()           - Curación manual de APIs útiles
```

**Portales internos de empresa**:

```
[Stoplight](https://stoplight.io)          - Documentación + pruebas + catálogo
[Postman API Network](https://www.postman.com/api-network) - APIs con colecciones de pruebas
[Redocly](https://redocly.com)            - OpenAPI + portal developer experience
```

**APIs Gateway con service registry**:

```
[Kong Dashboard](https://konghq.com/products)     - Catálogo integrado con gateway
[AWS API Gateway](https://aws.amazon.com/api-gateway/)    - Service catalog + monitoring
[Azure API Management](https://azure.microsoft.com/services/api-management/) - Developer portal completo
```

#### 6.5. Descubrimiento moderno en microservicios

En arquitecturas de microservicios, el service discovery combina directorios con mecanismos dinámicos:

**Service Mesh (Istio, Linkerd)**:

```
1. Servicio A busca "usuarios"
2. Service mesh resuelve endpoint dinámicamente
3. Balanceo automático + health checks
4. Actualización transparente si cambia pod/nodo
```

**Configuración client-side**:

```typescript
// Cliente con service discovery
const usuariosClient = new ApiClient({
  serviceName: 'usuarios',
  discoveryUrl: 'https://discovery.miempresa.com',
});

// Cliente consulta directorio y obtiene endpoint real
await usuariosClient.get('/123'); // Automáticamente resuelve
```

#### 6.6. Enfoque práctico para Node.js + Express

Aunque los directorios complejos son más habituales en microservicios, incluso APIs simples pueden beneficiarse de **metadatos de auto-descubrimiento**:

```typescript
// Endpoint /.well-known/api.json (RFC 8615)
app.get('/.well-known/api.json', (req, res) => {
  res.json({
    apiVersion: '1.0.0',
    title: 'API de Gestión de Usuarios',
    documentationUrl: '/api-docs',
    endpoints: [
      { path: '/usuarios', methods: ['GET', 'POST'] },
      { path: '/usuarios/{id}', methods: ['GET', 'PUT', 'DELETE'] },
    ],
    contact: { name: 'Equipo Backend', email: 'dev@empresa.com' },
    termsOfService: '/terms',
  });
});
```

**Health check estandarizado**:

```
GET /health → 200 { "status": "healthy", "version": "1.2.3" }
```

Los directorios de servicios han evolucionado desde la formalidad rígida de UDDI hacia **ecosistemas prácticos** centrados en la experiencia del desarrollador. En el contexto de APIs REST con Node.js + Express, implementar metadatos básicos y health checks proporciona la mayor parte del valor del service discovery con mínima complejidad operativa.

## Segunda parte. Programación de servicios web en entornos distribuidos (APIs REST)

Con los fundamentos teóricos ya establecidos, esta segunda parte se centra en la **implementación práctica** de APIs REST utilizando tecnologías concretas. El objetivo es pasar del diseño conceptual a código funcional que permita tanto exponer servicios como consumirlos desde otras aplicaciones, manteniendo las buenas prácticas vistas anteriormente.

Se trabaja sobre **Node.js**, **TypeScript** y **Express** como base tecnológica, considerando conocimientos previos sobre el framework, validación, acceso a datos y arquitectura MVC. El foco está en cómo estructurar correctamente una API REST completa y profesional.

### 1. Componentes software para el acceso a servicios distribuidos

#### 1.1. Definición de servicios: diseño de una API REST

El diseño de una API comienza identificando **recursos principales** y definiendo su estructura de rutas. Una buena API REST sigue convenciones claras y predecibles:

**Estructura de recursos típica**:

```
/usuarios                 GET → lista usuarios
/usuarios                 POST → crear usuario
/usuarios/{id}            GET → usuario específico
/usuarios/{id}            PUT → actualizar usuario
/usuarios/{id}            DELETE → eliminar usuario
/usuarios/{id}/pedidos    GET → pedidos del usuario
```

**Parámetros y filtrado**:

```
GET /usuarios?email=ana@ejemplo.com&estado=activo&limit=10&offset=20
GET /productos?precio_min=10&precio_max=100&categoria=electronica
```

**Paginación estándar**:

```json
{
  "data": [...],
  "pagination": {
    "total": 150,
    "page": 1,
    "limit": 10,
    "pages": 15,
    "next": "/usuarios?page=2",
    "prev": null
  }
}
```

**Códigos de estado coherentes**:

- `200 OK` - Consulta exitosa completa
- `201 Created` - Recurso creado con `Location` header
- `204 No Content` - Actualización/eliminación exitosa
- `400 Bad Request` - Validación de entrada fallida
- `404 Not Found` - Recurso inexistente


#### 1.2. Generación automática de servicios

Herramientas modernas permiten generar **código servidor y cliente** a partir de especificaciones OpenAPI:

**OpenAPI → Express (openapi-typescript-codegen)**:

```
npm install openapi-typescript-codegen
npx openapi-typescript-codegen --input ./api.yaml --output ./generated
```

**Genera automáticamente**:

- Tipos TypeScript completos
- Cliente HTTP tipado
- Validadores de entrada/salida
- Controladores con tipos inferidos

**Ejemplo de especificación → código**:

```yaml
# api.yaml
paths:
  /usuarios:
    post:
      requestBody:
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/CreateUsuario'
      responses:
        '201':
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Usuario'
```

Resultado: tipos TypeScript y cliente HTTP completamente tipados sin escribir manualmente interfaces.

### 2. Programación de diferentes tipos de acceso a servicios

#### 2.1. Consumo de APIs REST desde aplicaciones web (frontend)

Desde **JavaScript/TypeScript en navegador o Node.js**, el consumo es directo:

**Fetch API moderna**:

```typescript
interface Usuario {
  id: number;
  nombre: string;
  email: string;
}

const getUsuarios = async (): Promise<Usuario[]> => {
  const response = await fetch('/api/usuarios', {
    headers: { Authorization: `Bearer ${token}` }
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  
  return response.json();
};
```

**Con librerías (Axios)**:

```typescript
const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' }
});

api.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response?.data || error.message)
);
```


#### 2.2. Otros patrones contrastados con REST

REST es excelente para operaciones **síncronas de consulta y modificación** (CRUD), pero no cubre todos los casos de integración entre servicios. Otros patrones como **Pub/Sub** y **repositorios centralizados** resuelven necesidades específicas donde REST sería ineficiente o inadecuado.

##### Comparativa detallada de patrones

| Patrón | Flujo de comunicación | Casos de uso principales | Ventajas | Limitaciones | Ejemplos reales |
| :-- | :-- | :-- | :-- | :-- | :-- |
| **REST** | Cliente ←→ Servidor directo (síncrono) | Consultas, CRUD, reportes | Simple, cacheable, explorable por humanos | Síncrono, polling ineficiente | APIs públicas, admin panels |
| **Pub/Sub** | Emisor → Canal → Múltiples suscriptores (asíncrono) | Notificaciones, eventos en tiempo real, procesamiento distribuido | Uno a muchos, desacoplado, escalable | Complejidad de orden/guarantee, posible pérdida de mensajes | Logs, analítica, notificaciones push |
| **Repositorios** | Cliente ←→ Base central compartida | Colaboración, versionado, datos compartidos | Consistencia global, historia completa | Cuello de botella central, complejidad merge | Git, artefactos npm, Docker Hub |
| **Queues** | Productor → Cola → Consumidor único | Tareas asíncronas, procesamiento batch | Garantía de entrega, orden FIFO | Una cola = un consumidor, ACK manual | Jobs, emails, procesamiento imagen |

##### Pub/Sub en detalle

**Pub/Sub** (Publish/Subscribe) desacopla completamente productores y consumidores mediante **canales temáticos**:

```
Productor A ──> "usuarios:creados" ──┐
Productor B ──> "pedidos:pagados" ───┼──> Broker (Redis, Kafka, RabbitMQ) ──> Email Service
                              "errores:criticos" ───┘                 ──> Analytics
                                                             Log Service
```

**Características clave**:

- **Asíncrono**: Productores no esperan respuesta
- **Uno a muchos**: Un mensaje llega a todos los suscriptores interesados
- **Desacoplado**: Productores desconocen consumidores
- **Escalable**: Fácil añadir/quitar suscriptores

**Casos de uso concretos**:

- **Notificaciones**: "Usuario registrado" → email, SMS, Slack
- **Logs y monitoreo**: Eventos de error → ELK stack, Datadog
- **Analítica**: "Compra completada" → Google Analytics, Mixpanel
- **Microservicios**: "Pedido creado" → Inventario, Envíos, Facturación


###### Ejemplo completo Pub/Sub con Redis en Node.js + Express

**1. Servicio publicador (API REST que dispara eventos)**:

```typescript
// src/services/eventPublisher.ts
import Redis from 'ioredis';

const redis = new Redis();

export class EventPublisher {
  static async usuarioCreado(usuario: { id: number; email: string }) {
    await redis.publish('usuarios:creados', JSON.stringify({
      event: 'usuario.creado',
      data: usuario,
      timestamp: new Date().toISOString()
    }));
  }

  static async pedidoPagado(pedido: { id: number; total: number }) {
    await redis.publish('pedidos:pagados', JSON.stringify({
      event: 'pedido.pagado',
      data: pedido,
      timestamp: new Date().toISOString()
    }));
  }
}

// En controlador
post('/usuarios', async (req, res) => {
  const nuevoUsuario = await createUsuario(req.body);
  await EventPublisher.usuarioCreado(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});
```

**2. Servicio suscriptor (Email Service)**:

```typescript
// email-service/src/subscriber.ts
import Redis from 'ioredis';
import nodemailer from 'nodemailer';

const redis = new Redis();
const transporter = nodemailer.createTransport({ /* config SMTP */ });

redis.subscribe('usuarios:creados', async (canal, mensaje) => {
  const event = JSON.parse(mensaje);
  
  if (event.event === 'usuario.creado') {
    await transporter.sendMail({
      to: event.data.email,
      subject: 'Bienvenido',
      html: `<p>¡Hola ${event.data.nombre}!</p>`
    });
    console.log(`Email enviado a ${event.data.email}`);
  }
});
```

**3. Analytics Service (múltiples canales)**:

```typescript
// analytics/src/multiSubscriber.ts
redis.subscribe(['usuarios:creados', 'pedidos:pagados'], async (canal, mensaje) => {
  const event = JSON.parse(mensaje);
  
  await saveToAnalytics({
    canal,
    event: event.event,
    data: event.data,
    timestamp: event.timestamp
  });
});
```

###### Cuándo elegir Pub/Sub vs REST

**Usar Pub/Sub cuando**:

- Necesitas **notificaciones asíncronas** (email, SMS)
- **Múltiples servicios** reaccionan al mismo evento
- **Alta frecuencia** de eventos (logs, métricas)
- **Desacoplamiento total** entre productores/consumidores
- Procesamiento **background** o **batch**

**Mantener REST cuando**:

- Operaciones **CRUD síncronas**
- Necesitas **respuesta inmediata** del servidor
- **Cacheo** importante (listas, búsquedas)
- Cliente debe **explorar** recursos (HATEOAS)
- APIs **públicas** o **human-readable**


##### Híbrido REST + Pub/Sub (patrón común)

```
Cliente → POST /pedidos → 201 Created
                    ↓
              EventPublisher → "pedidos:creados"
                    ↓
Email Service ← Analytics ← Inventory Service
```

**Ventajas del híbrido**:

- Cliente obtiene respuesta inmediata (REST)
- Servicios background se notifican asíncronamente (Pub/Sub)
- Máximo desacoplamiento entre componentes
- Escalabilidad independiente de cada servicio


##### Repositorios centralizados

**Repositorios** centralizan datos compartidos con control de versiones:

```
npm → https://registry.npmjs.org
Docker Hub → https://hub.docker.com
GitHub Packages → https://packages.github.com
```

**Características**:

- **Versionado** completo (semver, tags)
- **Autenticación** granular
- **Replicación** global
- **Webhooks** para eventos (similar a Pub/Sub)

En resumen, **REST** para comunicación síncrona directa, **Pub/Sub** para eventos asíncronos uno-a-muchos, y **repositorios** para artefactos versionados. Elegir el patrón correcto según la naturaleza temporal y la cardinalidad de la comunicación es clave para arquitecturas escalables.


#### 2.3. Proveedores y consumidores en entorno servidor

**Backend exponiendo API**:

```typescript
// src/routes/usuarios.ts
router.get('/', authenticateToken, getUsuariosController);
router.post('/', validateUsuario, createUsuarioController);
```

**Consumo entre servicios**:

```typescript
// src/services/notificaciones.ts
class NotificacionesService {
  async enviarBienvenida(usuarioId: number) {
    const response = await fetch(`${NOTIFS_URL}/bienvenida`, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${notifsToken}` },
      body: JSON.stringify({ usuarioId })
    });
  }
}
```

### 3. Herramientas para la programación de servicios web

#### 3.1. Comparativa de frameworks Node.js para REST

| Framework | Madurez | Rendimiento | TypeScript | OpenAPI | Docs |
| :-- | :-- | :-- | :-- | :-- | :-- |
| **Express** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| Fastify | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| NestJS | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Koa | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ |

#### 3.2. Bibliotecas esenciales para Express + REST

```
npm i express cors helmet morgan compression zod jsonwebtoken
npm i -D @types/express swagger-ui-express openapi-typescript
```

**Gestión seguridad**:

```typescript
app.use(helmet());           // Headers seguridad
app.use(cors(config));       // CORS configurado
app.use(rateLimit(config));  // Rate limiting
```

**Serialización y validación**:

```typescript
// Zod para entrada
const schema = z.object({ email: z.string().email() });
const resultado = schema.safeParse(req.body);
if (!resultado.success) return res.status(400).json(resultado.error);
```

### 4. Buenas prácticas y pruebas de APIs REST

#### 4.1. Versionado de la API

```
GET /api/v1/usuarios
GET /api/v2/usuarios  (nuevos campos)
GET /api/usuarios     (symlink → latest)
```

**Headers recomendados**:

```
Accept: application/vnd.miapi.v1+json
```


#### 4.2. Pruebas automatizadas

**Supertest para Express**:

```typescript
describe('API Usuarios', () => {
  it('GET /usuarios devuelve 200', async () => {
    const res = await request(app)
      .get('/api/usuarios')
      .set('Authorization', `Bearer ${token}`);
    
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(3);
  });
});
```

#### 4.3. Documentación viva

**Swagger UI integrado**:

```typescript
app.use('/docs', swaggerUi.serve);
app.get('/docs.json', swaggerUi.setup(openApiDocument));
```

**Postman collections** compartidas en equipo para pruebas manuales.

Esta estructura proporciona una base sólida para construir APIs REST profesionales con Node.js + Express, cubriendo desde el diseño hasta la documentación y pruebas automatizadas, todo alineado con estándares de mercado actuales.
