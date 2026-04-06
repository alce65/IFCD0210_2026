---
title: NoSQL
---

- [Introducción a NoSQL](#introducción-a-nosql)
- [MongoDB](#mongodb)
  - [Servidor: El servicio en la nube AtlasMongoDB](#servidor-el-servicio-en-la-nube-atlasmongodb)
    - [Descripción general de MongoDB y el modelo de documentos](#descripción-general-de-mongodb-y-el-modelo-de-documentos)
    - [Acceso a la base de datos](#acceso-a-la-base-de-datos)
  - [CLientes: Instalación](#clientes-instalación)
    - [MongoDB Shell](#mongodb-shell)
    - [MongoDB Compass](#mongodb-compass)

## Introducción a NoSQL

Las bases de datos NoSQL proporcionan un mecanismo para el almacenamiento y recuperación de datos que no se basa en el modelo relacional de las bases de datos tradicionales. NoSQL se refiere a una amplia clase de sistemas de gestión de bases de datos que difieren del modelo de bases de datos relacionales tradicionales en aspectos clave, como la forma en que se estructuran los datos o cómo se accede a ellos.

Las principales características de las bases de datos NoSQL son:

- **Escalabilidad horizontal**: Las bases de datos NoSQL están diseñadas para escalar horizontalmente, lo que significa que pueden manejar grandes volúmenes de datos y un alto rendimiento sin sacrificar la disponibilidad.
- **Esquema flexible**: Las bases de datos NoSQL no requieren un esquema fijo, lo que significa que pueden almacenar datos de diferentes tipos y estructuras en la misma base de datos. Admiten una amplia variedad de modelos de datos, como documentos, columnas, grafos y clave-valor.
- **Alta disponibilidad**: Las bases de datos NoSQL están diseñadas para ser altamente disponibles, lo que significa que pueden manejar fallos de hardware y software sin interrumpir el servicio.
- **Rendimiento optimizado**: Las bases de datos NoSQL están diseñadas para ofrecer un rendimiento óptimo en entornos de alta carga y grandes volúmenes de datos.

Las principales categorías de bases de datos NoSQL son:

- **Bases de datos de documentos**: Almacenan datos en forma de documentos, que pueden ser estructurados o semiestructurados. Los documentos se almacenan en formato JSON, BSON o XML y pueden contener datos anidados y arrays. Por ejemplo **MongoDB**.
- **Bases de datos de columnas**: Almacenan datos en columnas en lugar de filas, lo que permite un acceso rápido a los datos y un rendimiento óptimo en entornos de análisis y procesamiento de datos. Por ejemplo **Cassandra**.
- **Bases de datos de grafos**: Almacenan datos en forma de nodos y relaciones, lo que permite representar y consultar datos complejos y relaciones entre ellos. Por ejemplo **Neo4j**.
- **Bases de datos clave-valor**: Almacenan datos en forma de pares clave-valor, lo que permite un acceso rápido a los datos y un rendimiento óptimo en entornos de alta carga y grandes volúmenes de datos. Por ejemplo **Redis**.
- **Bases de datos de tiempo real**: Almacenan datos en forma de eventos y flujos de datos, lo que permite procesar y analizar datos en tiempo real. Por ejemplo **Apache Kafka**.
- **Bases de datos de búsqueda**: Almacenan datos en forma de índices invertidos, lo que permite realizar búsquedas rápidas y eficientes en grandes volúmenes de datos. Por ejemplo **Elasticsearch**.
- **Bases de datos de objetos**: Almacenan datos en forma de objetos, que pueden ser estructurados o semiestructurados. Los objetos se almacenan en formato JSON, BSON o XML y pueden contener datos anidados y arrays. Por ejemplo **RethinkDB**.

## MongoDB

MongoDB es una base de datos de documentos de código abierto y multiplataforma que proporciona un mecanismo para el almacenamiento y recuperación de datos en forma de documentos. Los documentos se almacenan en formato BSON (Binary JSON) y pueden contener datos anidados y arrays. MongoDB es una base de datos NoSQL que está diseñada para ser escalable, flexible y de alto rendimiento.

### Servidor: El servicio en la nube AtlasMongoDB

- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas): MongoDB Atlas es un servicio de base de datos en la nube que permite implementar, escalar y administrar bases de datos MongoDB en la nube. Proporciona una forma sencilla de implementar y administrar bases de datos MongoDB sin tener que preocuparse por la infraestructura subyacente.

- Sign up for MongoDB Atlas
- Veremos disponible una organization / project

  - Organizaciones: una organización puede tener varios proyectos y bases de datos.
  - Proyectos: un proyecto puede tener varias bases de datos

- Creamos una Database
- Seleccionamos el plan gratuito
- Creamos un cluster, seleccionamos la región y el proveedor de la nube
  - AWS
  - Azure
  - Google Cloud
- Creamos un usuario y contraseña
- Creamos una IP Whitelist
- Junto a la opción `Browse Collections` veremos un desplegable que nos permite acceder a `load sample dataset` para añadir un conjunto de datos de ejemplo. Tardará unos minutos en cargar.

Podemos utilizar el propio AtlasMongoDB para conectarnos a nuestra base de datos, o podemos utilizar un cliente de MongoDB como Compass o Robo 3T.

Si seguimos con AtlasMongoDB, la opción `Browse collections` nos permite acceder mediante el Data Explorer a las colecciones de nuestra base de datos.

Podemos

- ver las bases de datos
- ver y seleccionar las colecciones de cada una de ellas
- ver los documentos de cada colección
- filtrar los documentos por campos

Relación entre MongoDB y Atlas

- MongoDB es una base de datos de propósito general que se puede usar para una variedad de casos de uso.
- Es parte de Atlas, la plataforma de datos para desarrolladores.

#### Descripción general de MongoDB y el modelo de documentos

- Los datos se organizan en **documentos**, **colecciones** y **bases de datos**.
- Los **documentos** se almacenan en **BSON**, que admite una amplia gama de tipos de datos, incluidos todos los tipos de datos JSON, fechas, números y ObjectIds.
- Cada documento requiere un campo \`\_id`, que actúa como una clave primaria o identificador único. Si un documento insertado no tiene un campo \_id, MongoDB genera uno automáticamente.
- MongoDB tiene un **esquema flexible**, lo que significa que los documentos con diferentes estructuras se pueden almacenar en la misma colección.

Como ejemplo, veamos como Atlas Data Explorer permite crear

- una base de datos
- una colección
- un documento

Asi podemos y comenzar a almacenar tus propios datos.

#### Acceso a la base de datos

Desde AtlasMongoDB, en la sección `projects`, `database`, junto al `cluster` activo veremos un botón `Connect`. Seleccionamos `Connect your application` y copiamos la cadena de conexión.

Gracias a ella podemos conectarnos a nuestra base de datos desde

- el shell de MongoDB
- un cliente de MongoDB como Compass o Robo 3T
- cualquier aplicación en un lenguaje que soporte MongoDB. En nuestro caso, JavaScript desde NodeJS.

Existen dos formatos de conexion string

- Standard Format (`mongodb`) para conexiones a standalone clusters de MongoDB, replica sets o sharded clusters
- DNS Seed List Format (`mongodb+srv`) añadido en MongoBD 3.6 para conexiones mas flexibles a clusters de Atlas, permitiendo la resolución de DNS para los nodos del cluster y la rotación de los servidores sin necesidad de reconfigurar los clientes.

El formato de conexión es

```url
mongodb+srv://<db_username>:<db_password>@cluster0.dj9ya.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

- el protocolo `mongodb+srv://` identifica lo conexión a un cluster de Atlas del tipo DNS Seed List Format con la seguridad TLS habilitada
- `<db_username>` y `<db_password>` son las credenciales de acceso a la base de datos
- `cluster0.dj9ya.mongodb.net` es el host del cluster, con un puerto por defecto de 27017
- `?retryWrites=true&w=majority` es un conjunto de opciones de conexión

### CLientes: Instalación

Existen varios elementos disponibles para su instalación

- [MongoDB Community Server](https://www.mongodb.com/try/download/community): MongoDB Community Server es una base de datos de documentos de código abierto y multiplataforma que proporciona un mecanismo para el almacenamiento y recuperación de datos en forma de documentos. Los documentos se almacenan en formato BSON (Binary JSON) y pueden contener datos anidados y arrays. MongoDB Community Server es una base de datos NoSQL que está diseñada para ser escalable, flexible y de alto rendimiento.

- [Mongo Shell](https://www.mongodb.com/try/download/shell): MongoDB Shell es una interfaz de línea de comandos (CLI) para MongoDB que permite interactuar con bases de datos MongoDB y realizar operaciones como consultar, insertar, actualizar y eliminar documentos. MongoDB Shell es una herramienta útil para administrar bases de datos MongoDB y realizar tareas de administración y desarrollo.

- [MongoDB Compass](https://www.mongodb.com/try/download/compass): MongoDB Compass es una interfaz gráfica de usuario (GUI) para MongoDB que permite explorar y manipular bases de datos MongoDB de forma visual. Proporciona una forma intuitiva de interactuar con las bases de datos MongoDB y realizar operaciones como consultar, insertar, actualizar y eliminar documentos.

#### MongoDB Shell

Se descarga desde la [página oficial de MongoDB](https://www.mongodb.com/try/download/shell), en el caso de Windows como `msi` y se instala siguiendo las instrucciones del instalador.

Se puede elegir hacerlo para un usuario o para todos los usuarios del sistema, y se puede elegir la carpeta de instalación. Por defecto, para el segundo caso, se instala en `C:\Program Files\MongoDB\Server\5.0\bin`.

Una vez hecho, se puede comprobar desde la terminal con el comando `mongosh --version`.

```shell
mongosh --version
2.3.9
```

Para userlo se ejecuta la llamada al shell seguida de la cadena de conexión a la base de datos. Por ejemplo, para conectarse a un cluster de AtlasMongoDB

```shell
mongosh "mongosh "mongodb+srv://cluster0.dj9ya.mongodb.net/" --apiVersion 1 --username <db_username>"
```

Se pedirá la contraseña y se podrá comenzar a interactuar con la base de datos.

```shell
Enter password: ********
Current Mongosh Log ID: 67b4e206f906e9d8284d7941
Connecting to:          mongodb+srv://<credentials>@cluster0.dj9ya.mongodb.net/?appName=mongosh+2.3.9
Using MongoDB:          8.0.4 (API Version 1)
Using Mongosh:          2.3.9
```

A partir de aquí está disponible el shell de MongoDB, un REPL de Node que permite realizar operaciones sobre la base de datos.

Por ejemplo el comando que nos mostraría las bases de datos disponibles sería

```shell
Atlas atlas-1g0v3n-shard-0 [primary] test> show dbs
```

#### MongoDB Compass

Se descarga desde la [página oficial de MongoDB](https://www.mongodb.com/try/download/compass), en el caso de Windows como `msi` y se instala siguiendo las instrucciones del instalador.
