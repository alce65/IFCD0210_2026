# Aplicaciones Web Distribuidas

Denominación: DESARROLLO DE APLICACIONES WEB DISTRIBUIDAS
(Desarrollo de aplicaciones web distribuidas)
Código: UF1846
cve: BOE-A-2011-19503
Antes 60 horas (12 días)
Ahora 50 horas (10 días)

1. Arquitecturas distribuidas orientadas a servicios
2. Programación de servicios web en entornos distribuidos

## Competencia

RP3: Utilizar servicios distribuidos en otros entornos para integrar funcionalidades de desarrollo según los estándares establecidos del mercado.

- CR3.1 La integración de otros **servicios web** en la aplicación web se utiliza mediante el uso de tecnologías **estándares** del mercado que permiten intercambiar información de manera rápida, fácil y transparente con la aplicación web.
- CR3.2 La gestión del **intercambio de información** entre la aplicación web en el entorno servidor y otro servicio web se realiza mediante las **interfaces de acceso** correspondientes dependiendo de la tecnología utilizada.
- CR3.3 Las **búsquedas** de servicios se realizan para obtener las funcionalidades adecuadas a las especificaciones del diseño e integrarlos en la aplicación web.
- CR3.4 La **documentación** técnica del servicio web utilizado se interpreta tanto si está editada en castellano o las lenguas oficiales de las Comunidades Autónomas como si lo está en el idioma extranjero de uso más frecuente en el sector.

## Capacidades y criterios de evaluación

- C1: Seleccionar y emplear **servicios distribuidos** para su integración en la aplicación web.
  - CE1.1 Identificar las **posibilidades** que ofrecen los servicios distribuidos web para su integración en la aplicación a desarrollar.
  - CE1.2 Especificar las características de los **protocolos** estándares del mercado para poder utilizar servicios web en la aplicación a desarrollar.
  - CE1.3 Seleccionar y **emplear** los servicios web más adecuados para ser utilizados en la aplicación web en función del diseño especificado

## Contenidos

1. Arquitecturas distribuidas orientadas a servicios

  – Características generales de las arquitecturas de servicios distribuidos
  – Modelo conceptual de las arquitecturas orientadas a servicios
    – Basados en mensajes
    – Basados en recursos
    – Políticas y contratos de servicios
  – Aspectos de seguridad en arquitecturas orientadas a servicios
    – Seguridad de datos
    – Seguridad de mensajes
    – Control de acceso. El modelo RBAC
    – Seguridad en comunicaciones. Protocolos seguros
  – Implementación de arquitecturas orientadas a servicios mediante tecnologías web
    – Especificaciones de servicios web de uso común: SOAP, REST, etc.
    – Lenguajes de definición de servicios: el estándar WSDL
    – Estándares de seguridad en servicios web: WS-Security, SAML, XACML, etc.
  – Implementación de la seguridad en arquitecturas orientadas a servicios
    – Conceptos básicos de criptografía
    – Tipos de criptografía
    – Entidades certificadoras
    – Certificados digitales. Características
    – Identificación y firma digital mediante certificados digitales
    – Cifrado de datos
  – Directorios de servicios
    – Concepto de directorio
    – Ventajas e inconvenientes
    – Directorios distribuidos
    – Estándares sobre directorios de servicios: UDDI

2. Programación de servicios web en entornos distribuidos

  – Componentes software para el acceso a servicios distribuidos
    – Definición de servicios
    – Generación automática de servicios
  – Programación de diferentes tipos de acceso a servicios
    – Servicios basados en publicación/suscripción.
    – Servicios basados en repositorios
    – Servicios accesibles desde agentes de usuario
    – Proveedores y consumidores de servicios en entorno servidor
  – Herramientas para la programación de servicios web
    – Comparativa
    – Bibliotecas y entornos integrados (frameworks) de uso común

## Reorganización de la unidad UF1846 centrada en APIs REST

### 1. Punto de partida: unidad original

La unidad «Desarrollo de aplicaciones web distribuidas» (UF1846) se estructura en dos grandes bloques: «Arquitecturas distribuidas orientadas a servicios» y «Programación de servicios web en entornos distribuidos», con una fuerte presencia de conceptos generales de SOA, seguridad y servicios web (SOAP, REST, WSDL, WS-Security, etc.).[^1]

El archivo `rest.md` sintetiza el bloque de «Arquitecturas distribuidas orientadas a servicios» mediante un esquema de apartados sobre características generales, modelo conceptual (basado en mensajes y en recursos), políticas y contratos, y aspectos de seguridad (datos, mensajes, RBAC, comunicaciones seguras).[^2]

### 2. Nueva introducción orientada a APIs REST

A continuación se propone un texto breve para abrir la unidad, que conecta el contexto de arquitecturas distribuidas con el foco específico en APIs REST.

#### 2.1. Texto de introducción propuesto

> Las aplicaciones web modernas rara vez funcionan de forma aislada: necesitan comunicarse con otros sistemas para compartir datos y funcionalidades. Esta integración se realiza, cada vez más, mediante **servicios web** expuestos como **APIs** (Interfaces de Programación de Aplicaciones) accesibles a través de la red.
>
> Dentro de las arquitecturas orientadas a servicios, el estilo **REST** (Representational State Transfer) se ha convertido en el estándar de facto para construir APIs web simples, escalables y fácilmente integrables. En una **API REST**, los datos y funcionalidades se modelan como **recursos** identificados por URLs, que se manipulan mediante los métodos del protocolo HTTP (GET, POST, PUT, DELETE, etc.) y se representan normalmente en formatos ligeros como JSON.
>
> En esta unidad se estudiarán las **arquitecturas distribuidas orientadas a servicios** y, de forma especialmente detallada, el diseño e implementación de **APIs REST seguras**, desde la definición de recursos y contratos hasta su consumo desde aplicaciones web. También se revisarán brevemente otras tecnologías de servicios web (como SOAP y estándares asociados) para situar REST dentro del conjunto de soluciones disponibles en el mercado.

### 3. Reorganización de bloques de contenidos

Se mantiene la estructura general en dos grandes epígrafes, pero se reordenan y agrupan los contenidos para que REST sea el eje central.

#### 3.1. Bloque 1: Arquitecturas orientadas a servicios y APIs REST

Este bloque combina la introducción conceptual de arquitecturas de servicios con un foco claro en REST.

1. Arquitecturas distribuidas orientadas a servicios y APIs REST
   - Características generales de las arquitecturas de servicios distribuidos.[^1]
   - Modelo conceptual de las arquitecturas orientadas a servicios:[^1]
     - Arquitecturas basadas en mensajes (visión general y relación con servicios web tradicionales).
     - Arquitecturas basadas en recursos: fundamentos de REST (recursos, URIs, representaciones, hipermedios).
     - Políticas y contratos de servicios: contratos de APIs REST, documentación y especificaciones (OpenAPI/Swagger) enlazando con el concepto general de «políticas y contratos» de la unidad.[^1]
   - Introducción a las APIs REST:
     - Concepto de API y API web.
     - Principios del estilo REST (cliente-servidor, sin estado, caché, interfaz uniforme).
     - Operaciones típicas sobre recursos (CRUD) y uso de métodos HTTP.
     - Formatos de representación: JSON como formato predominante.
   - Aspectos de seguridad en arquitecturas orientadas a servicios (enfocados a REST):[^1]
     - Seguridad de datos y mensajes en APIs REST (HTTPS, cifrado en tránsito, registros).
     - Control de acceso y modelo RBAC aplicados a APIs (roles, permisos sobre recursos y operaciones).
     - Seguridad en comunicaciones: uso de protocolos seguros (TLS) y consideraciones de CORS.
   - Implementación de arquitecturas orientadas a servicios mediante tecnologías web (centrado en REST):[^1]
     - Especificaciones de servicios web de uso común: breve comparación entre SOAP y REST, destacando ventajas de REST para aplicaciones web.[^1]
     - Lenguajes de definición de servicios: se sitúa WSDL como estándar histórico frente a enfoques modernos como OpenAPI, manteniendo la referencia al currículo original.[^1]
     - Estándares de seguridad en servicios web: se mencionan WS-Security, SAML, XACML como parte del contexto, pero se enfatizan mecanismos prácticos habituales en APIs REST (tokens, JWT, OAuth2 de forma introductoria).[^1]
   - Directorios y descubrimiento de servicios:
     - Concepto de directorio de servicios y ventajas/inconvenientes.[^1]
     - Estándares sobre directorios de servicios: UDDI (enfoque histórico) y mención de prácticas actuales (catálogos de APIs, portales de desarrolladores).

#### 3.2. Bloque 2: Programación de servicios web con foco en APIs REST

En este bloque se reinterpretan los apartados de «Programación de servicios web en entornos distribuidos» para que el hilo conductor sea el diseño, implementación y consumo de APIs REST.[^1]

2. Programación de servicios web en entornos distribuidos (APIs REST)
   - Componentes software para el acceso a servicios distribuidos:
     - Definición de servicios: diseño de una API REST (identificación de recursos, rutas, parámetros, filtrado, paginación, códigos de estado).
     - Generación automática de servicios: uso de frameworks y herramientas que generan código de servidor/cliente a partir de especificaciones (OpenAPI, herramientas equivalentes), manteniendo la idea original de generación automática.[^1]
   - Programación de diferentes tipos de acceso a servicios:
     - Consumo de APIs REST desde aplicaciones web (cliente JavaScript, peticiones HTTP, uso de librerías).
     - Servicios basados en publicación/suscripción y repositorios: se tratan como otros patrones de integración, pero siempre contrastando con el modelo REST.[^1]
     - Servicios accesibles desde agentes de usuario: consumo de APIs desde navegadores, aplicaciones móviles u otros agentes.
     - Proveedores y consumidores de servicios en entorno servidor: implementación de un backend que expone una API REST y consumo desde otros servicios.
   - Herramientas para la programación de servicios web:
     - Comparativa de herramientas y frameworks orientados a APIs REST (por ejemplo, frameworks web en el lenguaje que se use en el módulo).
     - Bibliotecas y entornos integrados (frameworks) de uso común, poniendo ejemplos concretos de librerías para definir rutas, serializar JSON, gestionar seguridad, etc.[^1]
   - Buenas prácticas y pruebas de APIs REST:
     - Manejo coherente de códigos de estado HTTP y mensajes de error.
     - Versionado de la API y compatibilidad.
     - Pruebas y documentación: uso de herramientas como Postman, colecciones de pruebas y documentación viva.

### 4. Alineación con competencias y criterios de evaluación

La reorganización propuesta mantiene la alineación con la competencia RP3 («Utilizar servicios distribuidos en otros entornos para integrar funcionalidades de desarrollo según los estándares establecidos del mercado»), reforzando la parte de integración mediante APIs REST, que son precisamente uno de esos estándares de mercado.[^1]

Los criterios de evaluación C1, CE1.1, CE1.2 y CE1.3 siguen cubiertos, ya que el alumnado:

- Identifica las posibilidades que ofrecen los servicios distribuidos (ahora con énfasis en APIs REST) para integrarlos en la aplicación web.[^1]
- Especifica las características de los protocolos estándares del mercado, con especial atención al uso de HTTP y formatos JSON para REST, sin dejar de mencionar SOAP y otros estándares.[^1]
- Selecciona y emplea servicios web adecuados, priorizando APIs REST reales (por ejemplo, públicas o de terceros) para integrarlas en los ejercicios y prácticas.[^1]

### 5. Uso práctico del material reorganizado

Con esta reorganización se sugieren las siguientes orientaciones didácticas:

- Comenzar la unidad con la **introducción textual** sobre APIs y REST (apartado 2.1) para contextualizar al alumnado.
- Utilizar el esquema de `rest.md` como base del Bloque 1, pero enriquecido con el enfoque en recursos, APIs REST y ejemplos concretos.[^2]
- Replantear el Bloque 2 como un itinerario práctico: diseño de una pequeña API REST, implementación con un framework concreto, aseguramiento básico (autenticación/autorización) y consumo desde una aplicación web cliente.[^1]

De este modo, la unidad pasa de un enfoque genérico sobre servicios web distribuidos a uno claramente centrado en el diseño, implementación y consumo de **APIs REST**, sin perder la coherencia con el currículo oficial ni con los contenidos de seguridad y estándares previstos originalmente.[^2][^1]

---

### References

1. [unidad.3-2.md](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/826912118/9c2376a6-e1cd-47d8-a93f-db4348d9bf3b/unidad.3-2.md?AWSAccessKeyId=ASIA2F3EMEYEX3ICMF6N&Signature=Ov1d8rTz%2BfXyPUnJX8NLtAxrEzw%3D&x-amz-security-token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIB4pIBfdKxysfomgUTouFxXw5TJb3w3kGckd3MO9FrEwAiEA2KphCZ%2BJKUxgyaby0VMkZ0Thnl5j2Z38yn9OXAFyI9wq8wQIfBABGgw2OTk3NTMzMDk3MDUiDL3nApEWcYD2zJqHsCrQBLbBXblE9MpsS8BybYyzb%2F77IfC5bJJzzEEIesUc8I161tokJfszi4SLQUKNH3hkMgcwSnfhpD3Tc668wRDmwygXPWDkGdwCBnuDmIVmJcIP6TsPpXwvV3aDMEhlHWVwL6EmQm9jqHqro7wW%2Fkvk0JvOy6rnyWHDSE8Gv%2B5Fcdx0CPlxbikOstUz3nwXtdZZXYn3prjvOctrtShvIarbpF%2BZI%2F9oiFyhNTtyGBm8jfDIdz6x0ea2XIH2aDkdRImx13RBjgBh2NtgeEjFnyWqU1qWpSIGscbwxGviBLoF%2F6aN2M%2B6YYPYa8vJ%2F1ThlvPd95NRx0vrN99ScAnVnR5FZbYHqsHPx4ybOWfmWrwT%2BOMX%2Bs02sTURKfGvp%2FWfhNSrMw05RwWyJMuAgCs8uNaJU1TpM%2BtBmBnbN5gkkCtXF38fudfKn%2Bm2OoAVj4%2FSWDeUQpkQfYsYV7QL%2Fze1VGn2ZR5d%2FKKTKl6CvywoZpB%2BGOh9d5MluPqHvFG2aKtf0sAWxsOWK5iE0z0JboRU0HABunLAqwwR1kBMoOm3kpE%2FQdFAGkHlFXXxxc3R1JXvfDjG5GSMYebEKzOQe7qwCekwjkvPoTnZa3J4Nm%2BDRBb5NBXLjnmNGZ686wqUFMfJSmZoiTfel0i07R6GEUjfCWxyFIfZ7vsvmSKqU2xmj2D6ZrXWDTvq5IKQxTliEZgNqdim5LF1GVBfNBM9VbWDtFsRRrsPZ6c%2BKpsDtMn%2FExluW8ekK95KgP5UVmV0UCQNsJYZ138kgou%2BEewqqbFu7%2FBwVAkwn5atzwY6mAF%2FC%2Fa148TnxVJAxVxmrvbE9Alq4lwhSOajPHiZS0JY8NMKCZ%2Brgn5DvW9%2BYu0bk8kZKyWJlMKv%2FkKswB5ItqO2X8O%2Bzs4WT%2FVQ%2F9V1dcQaj1zhcIQdgKdtLLXP69zFIM7XY79WZL56zLvkBafXXoN6ORpOqPRwSobP%2BYXU1zaX9tyD%2FG%2BFWTPOfEQKiQqseP6pAnJRV5rbNg%3D%3D&Expires=1777031410) - ## Aplicaciones Web Distribuidas

Denominación: DESARROLLO DE APLICACIONES WEB DISTRIBUIDAS
(Desarrol...

2. [rest.md](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/826912118/343e91f2-38f8-4912-bd00-a1d9b677f967/rest.md?AWSAccessKeyId=ASIA2F3EMEYEX3ICMF6N&Signature=x7nYx3Qc1VJ3ioLUScICqnCN4Qs%3D&x-amz-security-token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIB4pIBfdKxysfomgUTouFxXw5TJb3w3kGckd3MO9FrEwAiEA2KphCZ%2BJKUxgyaby0VMkZ0Thnl5j2Z38yn9OXAFyI9wq8wQIfBABGgw2OTk3NTMzMDk3MDUiDL3nApEWcYD2zJqHsCrQBLbBXblE9MpsS8BybYyzb%2F77IfC5bJJzzEEIesUc8I161tokJfszi4SLQUKNH3hkMgcwSnfhpD3Tc668wRDmwygXPWDkGdwCBnuDmIVmJcIP6TsPpXwvV3aDMEhlHWVwL6EmQm9jqHqro7wW%2Fkvk0JvOy6rnyWHDSE8Gv%2B5Fcdx0CPlxbikOstUz3nwXtdZZXYn3prjvOctrtShvIarbpF%2BZI%2F9oiFyhNTtyGBm8jfDIdz6x0ea2XIH2aDkdRImx13RBjgBh2NtgeEjFnyWqU1qWpSIGscbwxGviBLoF%2F6aN2M%2B6YYPYa8vJ%2F1ThlvPd95NRx0vrN99ScAnVnR5FZbYHqsHPx4ybOWfmWrwT%2BOMX%2Bs02sTURKfGvp%2FWfhNSrMw05RwWyJMuAgCs8uNaJU1TpM%2BtBmBnbN5gkkCtXF38fudfKn%2Bm2OoAVj4%2FSWDeUQpkQfYsYV7QL%2Fze1VGn2ZR5d%2FKKTKl6CvywoZpB%2BGOh9d5MluPqHvFG2aKtf0sAWxsOWK5iE0z0JboRU0HABunLAqwwR1kBMoOm3kpE%2FQdFAGkHlFXXxxc3R1JXvfDjG5GSMYebEKzOQe7qwCekwjkvPoTnZa3J4Nm%2BDRBb5NBXLjnmNGZ686wqUFMfJSmZoiTfel0i07R6GEUjfCWxyFIfZ7vsvmSKqU2xmj2D6ZrXWDTvq5IKQxTliEZgNqdim5LF1GVBfNBM9VbWDtFsRRrsPZ6c%2BKpsDtMn%2FExluW8ekK95KgP5UVmV0UCQNsJYZ138kgou%2BEewqqbFu7%2FBwVAkwn5atzwY6mAF%2FC%2Fa148TnxVJAxVxmrvbE9Alq4lwhSOajPHiZS0JY8NMKCZ%2Brgn5DvW9%2BYu0bk8kZKyWJlMKv%2FkKswB5ItqO2X8O%2Bzs4WT%2FVQ%2F9V1dcQaj1zhcIQdgKdtLLXP69zFIM7XY79WZL56zLvkBafXXoN6ORpOqPRwSobP%2BYXU1zaX9tyD%2FG%2BFWTPOfEQKiQqseP6pAnJRV5rbNg%3D%3D&Expires=1777031410) - ## API REST

1. Arquitecturas distribuidas orientadas a servicios

  – Características generales de l...

