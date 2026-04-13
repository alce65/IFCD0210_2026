---
title: SQL
---

- [Introducción](#introducción)
  - [Bases de datos Relacionales (RDB)](#bases-de-datos-relacionales-rdb)
    - [SQL (1974)](#sql-1974)
    - [Componentes de SQL](#componentes-de-sql)
    - [Estandarización](#estandarización)
    - [Aprendizaje del Lenguaje SQL](#aprendizaje-del-lenguaje-sql)
    - [Sistemas de gestión de bases de datos relacionales (R-DBMS)](#sistemas-de-gestión-de-bases-de-datos-relacionales-r-dbms)
  - [Base de datos No Relacionales o NoSQL](#base-de-datos-no-relacionales-o-nosql)
    - [Historia de las Bases de Datos NoSQL](#historia-de-las-bases-de-datos-nosql)
    - [Principales Ejemplos de Bases de Datos NoSQL](#principales-ejemplos-de-bases-de-datos-nosql)
    - [Ventajas de las Bases de Datos NoSQL](#ventajas-de-las-bases-de-datos-nosql)
    - [Desventajas de las Bases de Datos NoSQL](#desventajas-de-las-bases-de-datos-nosql)
- [Conceptos básicos de bases de datos relacionales](#conceptos-básicos-de-bases-de-datos-relacionales)
  - [Modelos entidad/relación](#modelos-entidadrelación)
    - [Tipos de atributos](#tipos-de-atributos)
    - [Clave](#clave)
    - [Características de las relaciones](#características-de-las-relaciones)
    - [Clave y relaciones](#clave-y-relaciones)
  - [Modelo relacional y normalización](#modelo-relacional-y-normalización)
    - [Formas normales](#formas-normales)
      - [Primera Forma Normal](#primera-forma-normal)
      - [Segunda Forma Normal](#segunda-forma-normal)
      - [Tercera Forma Normal](#tercera-forma-normal)
  - [Diseño de bases de datos](#diseño-de-bases-de-datos)
  - [Modelos gráficos E/R](#modelos-gráficos-er)
    - [Elementos en el modelo Entidad/Relación original](#elementos-en-el-modelo-entidadrelación-original)
    - [Modelo entidad/relación extendido (ERE)](#modelo-entidadrelación-extendido-ere)
    - [Modificaciones gráficas del modelo E/R](#modificaciones-gráficas-del-modelo-er)
- [MySQL](#mysql)
  - [Que es MySQL](#que-es-mysql)
  - [Características de MySQL](#características-de-mysql)
    - [El principal objetivo de MySQL es velocidad y robustez](#el-principal-objetivo-de-mysql-es-velocidad-y-robustez)
    - [Escalabilidad y límites](#escalabilidad-y-límites)
    - [Conectividad](#conectividad)
  - [Tipos de tablas en MySQL](#tipos-de-tablas-en-mysql)
    - [Motor MyISAM](#motor-myisam)
    - [Motor InnoDB](#motor-innodb)
    - [Motor HEAP](#motor-heap)
    - [Motor NDB](#motor-ndb)
  - [Instalación](#instalación)
- [PostgreSQL](#postgresql)
  - [¿Qué es PostgreSQL?](#qué-es-postgresql)
  - [Características de PostgreSQL](#características-de-postgresql)
    - [Robustez y estándares](#robustez-y-estándares)
    - [Escalabilidad y límites](#escalabilidad-y-límites-1)
    - [Conectividad](#conectividad-1)
    - [Seguridad](#seguridad)
  - [Tipos de almacenamiento en PostgreSQL](#tipos-de-almacenamiento-en-postgresql)
  - [Instalación](#instalación-1)
  - [Tipos de datos en PostgreSQL](#tipos-de-datos-en-postgresql)
- [Lenguaje SQL: Definición de datos (DDL)](#lenguaje-sql-definición-de-datos-ddl)
  - [Conexión](#conexión)
  - [Información de las DB en el servidor (PostgreSQL)](#información-de-las-db-en-el-servidor-postgresql)
  - [Creación de una base de datos](#creación-de-una-base-de-datos)
  - [Uso de una base de datos](#uso-de-una-base-de-datos)
  - [Descripción de una tabla (PostgreSQL)](#descripción-de-una-tabla-postgresql)
  - [Creación de tablas](#creación-de-tablas)
    - [Clave primaria o Primary Key](#clave-primaria-o-primary-key)
    - [Restricciones a los campos](#restricciones-a-los-campos)
    - [Foreign Key](#foreign-key)
    - [Restricciones posteriores](#restricciones-posteriores)
    - [Tablas de relación](#tablas-de-relación)
  - [Borrado de las tablas](#borrado-de-las-tablas)
  - [Indexación](#indexación)
  - [Cambios en tablas ya creadas](#cambios-en-tablas-ya-creadas)
- [Lenguaje SQL: control de datos (DCL)](#lenguaje-sql-control-de-datos-dcl)
- [Lenguaje SQL: manipulación de datos (DML)](#lenguaje-sql-manipulación-de-datos-dml)
  - [SELECT (Read)](#select-read)
    - [JOIN](#join)
    - [Unions](#unions)
    - [Expresiones de comparación](#expresiones-de-comparación)
  - [Funciones nativas del lenguaje](#funciones-nativas-del-lenguaje)
    - [Funciones de agregación](#funciones-de-agregación)
    - [Funciones de cadena (PostgreSQL)](#funciones-de-cadena-postgresql)
    - [Funciones numéricas (PostgreSQL)](#funciones-numéricas-postgresql)
    - [Funciones de fecha y hora (PostgreSQL)](#funciones-de-fecha-y-hora-postgresql)
    - [Otras funciones](#otras-funciones)
      - [Funciones de control de flujo (PostgreSQL)](#funciones-de-control-de-flujo-postgresql)
      - [Funciones de conversión (PostgreSQL)](#funciones-de-conversión-postgresql)
      - [Funciones de sistema (PostgreSQL)](#funciones-de-sistema-postgresql)
      - [Funciones de cifrado (PostgreSQL)](#funciones-de-cifrado-postgresql)
  - [INSERT (Create)](#insert-create)
  - [UPDATE (Update)](#update-update)
  - [DELETE (Delete)](#delete-delete)
- [Advanced SQL](#advanced-sql)
  - [Subqueries](#subqueries)
  - [Índices](#índices)
    - [Búsqueda de texto completo (Full-text search) en PostgreSQL](#búsqueda-de-texto-completo-full-text-search-en-postgresql)
  - [Views](#views)
  - [Bloqueos y transactions](#bloqueos-y-transactions)
    - [Bloqueos en Bases de Datos SQL](#bloqueos-en-bases-de-datos-sql)
      - [Problemas de Concurrencia](#problemas-de-concurrencia)
      - [Tipos de Bloqueos](#tipos-de-bloqueos)
      - [Niveles de Bloqueo](#niveles-de-bloqueo)
      - [Consideraciones Adicionales](#consideraciones-adicionales)
    - [Transacciones en PostgreSQL](#transacciones-en-postgresql)
      - [Propiedades ACID de las Transacciones](#propiedades-acid-de-las-transacciones)
      - [Gestión de Transacciones en PostgreSQL](#gestión-de-transacciones-en-postgresql)
      - [Niveles de Aislamiento](#niveles-de-aislamiento)
      - [Ejemplo de Transacción](#ejemplo-de-transacción)
  - [Procedimientos almacenados (Stored Procedures) y funciones (Functions) en PostgreSQL](#procedimientos-almacenados-stored-procedures-y-funciones-functions-en-postgresql)
    - [Procedimientos almacenados (Procedures)](#procedimientos-almacenados-procedures)
    - [Funciones (Functions)](#funciones-functions)
    - [Diferencias clave respecto a MySQL](#diferencias-clave-respecto-a-mysql)
    - [Ventajas y desventajas](#ventajas-y-desventajas)
  - [Triggers (Disparadores) en PostgreSQL](#triggers-disparadores-en-postgresql)
    - [Sintaxis básica](#sintaxis-básica)
    - [Ejemplo: actualizar número de likes](#ejemplo-actualizar-número-de-likes)
    - [Diferencias clave en los triggers respecto a MySQL](#diferencias-clave-en-los-triggers-respecto-a-mysql)

## Introducción

- DB (data bases). Historia
  - Sistema gestor de base de datos (Data Base Management System o DBMS)
    - Sistemas de bases de datos de propósito genera (1960s): CODASYL ligado a COBOL
    - RDB (Relational Data Bases): SQL (1970s): modelo relacional de Edgar Frank Codd
      - IBM: System R (SEQUEL) --> SQL/DS --> DB2
      - Berkeley: INGRES --> Postgres, Sybase, Informix, NonStop SQL
  - SQL (Structured Query Language).

### Bases de datos Relacionales (RDB)

- **álgebra y el cálculo relacional** en base al **modelo relacional** de **Edgar Frank Codd** (1970)

Desde el punto de vista más práctico

- la información se organiza **TABLAS**
- en ellas se distinguen la mínimas unidades significativas llamadas **campos**
- los campos relativos a una determinada **entidad** se agrupa en sucesivos **registros**.
- las tablas se relacionan entre si, en función de la información (i.e. los campos) que comparten
  - las **relaciones** entre datos deben ser representadas explícitamente en esos mismos datos.

Si representamos una tabla como una rejilla, al estilo de las hojas de cálculo

- las filas son los registros
- las columnas son los campos

#### SQL (1974)

El lenguaje SQL (Structured Query Language, Lenguaje de Consulta Estructurado) es un lenguaje de programación utilizado para gestionar y manipular bases de datos relacionales. SQL es un lenguaje declarativo, lo que significa que los usuarios especifican qué resultados desean obtener, en lugar de cómo obtenerlos.

- **lenguaje específico de dominio**, a veces se describe como un **lenguaje declarativo**
- diseñado para administrar, y recuperar información de **sistemas de gestión de bases de datos relacionales** (R-DBMS)
- manejo del **álgebra y el cálculo relacional** en base al **modelo relacional** de **Edgar Frank Codd** (1970)

#### Componentes de SQL

- SQL permite realizar todo tipo de operaciones con los datos
  - efectuar consultas con el fin de recuperar, de forma sencilla, información de bases de datos
  - realizar cambios en ellas, incluyendo la inserción de datos, actualizaciones y borrado
  - la creación y modificación de esquemas
  - el control de acceso a los datos

Esto da lugar a tres bloques de instrucciones:

- lenguaje de definición de datos (**DDL**): CREATE, DROP, ALTER ...
- lenguaje de manipulación de datos (**DML**): SELECT, INSERT, UPDATE, DELETE ...
- lenguaje de control de datos (**DCL**): GRANT, REVOKE...

#### Estandarización

SQL es un estándar internacional, y la mayoría de los sistemas de gestión de bases de datos relacionales (RDBMS) lo implementan con algunas variaciones y extensiones específicas de cada sistema, por lo que se habla de **dialectos SQL**.

- Instituto Nacional Estadounidense de Estándares (ANSI) en 1986
- Organización Internacional de Normalización (ISO) en 1987

#### Aprendizaje del Lenguaje SQL

- [sqlBolt](https://sqlbolt.com/)
- [aprende sql](https://www.aprendesql.dev)

#### Sistemas de gestión de bases de datos relacionales (R-DBMS)

Propietarios (Wikipedia)

**_Oracle_** - Oracle Corporation (1977)
**Ingres** - Berkeley University, Computer Associates (1980) CA-TOSL
**_DB2_** - IBM (1982)
**Informix** - Informix Software (1985)
**_Microsoft SQL Server_** - Microsoft (1989)
**InterBase** - Borland (1985)
**Adaptive Server Anywhere** - Sybase/iAnywhere (1992)
**Adaptive Server Enterprise** - Sybase Inc (1987)
**ANTs Data Server** - ANTs Software (1999)
**Microsoft Access** - Microsoft (1992)

Públicos (Wikipedia)

**_PostgreSQL_** - PostgreSQL Global Development Group (Junio de 1989) Licencia BSD
**_MySQL_** - MySQL AB (Noviembre de 1996) GPL o propietario
**SQLite** - D. Richard Hipp (agosto de 2000) Dominio público
**MaxDB** - MySQL AB, SAP AG (?) GPL o propietario
**SapDB** - SAP AG (?) GPL con drivers LGPL
**Firebird** - Firebird Foundation (2000) Licencia Pública InterBase
**HSQLDB** - Hsqldb.Org (2001) Licencia BSD
**SmallSQL** - SmallSQL (abril de 2005) LGPL

### Base de datos No Relacionales o NoSQL

La alternativa a las relacionales son las bases de datos no relacionales, también conocidas como bases de datos NoSQL (Not Only SQL), especialmente las **bases de datos documentales (DDB)** como **MongoDB**.

Son sistemas de gestión de bases de datos diseñados para manejar grandes volúmenes de datos no estructurados o semi estructurados. A diferencia de las bases de datos relacionales, que utilizan tablas y relaciones para organizar los datos, las bases de datos NoSQL utilizan diversos modelos de datos para almacenar y gestionar información.

Es el caso de **MongoDB**.

- la información se organiza **COLECCIONES**
- las colecciones están formadas por una serie de **documentos**
- cada documento se asimila a un **objeto** de ES que contiene una serie de propiedades
- cada documento puede ser completamente diferente del anterior
  - aunque en realidad es muy común que compartan una misma estructura
- los documentes pueden establecer relaciones con documentos de otras colecciones

#### Historia de las Bases de Datos NoSQL

El término "NoSQL" fue acuñado por **Carlo Strozzi** en 1998 para referirse a su base de datos ligera y open-source que no utilizaba SQL. Sin embargo, el concepto moderno de NoSQL surgió a finales de la década de 2000, impulsado por la necesidad de manejar grandes volúmenes de datos generados por aplicaciones web y servicios en línea. Empresas como Google, Amazon y Facebook necesitaban soluciones escalables y flexibles que las bases de datos relacionales tradicionales no podían proporcionar de manera eficiente.

En 2009, **Johan Oskarsson** organizó un evento llamado "NoSQL Meetup" en San Francisco, lo que ayudó a popularizar el término y a consolidar la comunidad alrededor de estas nuevas tecnologías. Desde entonces, las bases de datos NoSQL han ganado popularidad y se han convertido en una opción viable para muchas aplicaciones modernas.

#### Principales Ejemplos de Bases de Datos NoSQL

1. **MongoDB**: Base de datos orientada a documentos.
   Almacena datos en documentos JSON-like llamados BSON (Binary JSON). Es conocida por su flexibilidad y escalabilidad.
   Uso: Aplicaciones web, gestión de contenidos, análisis en tiempo real.

2. #**Cassandra**: Base de datos de columnas amplias.
   Diseñada para manejar grandes volúmenes de datos distribuidos en múltiples nodos sin un único punto de fallo.
   Uso: Aplicaciones que requieren alta disponibilidad y escalabilidad, como sistemas de mensajería y análisis de big data.

3. **Redis**: Base de datos en memoria de tipo clave-valor.
   Almacena datos en estructuras de datos simples como cadenas, listas y conjuntos. Es extremadamente rápida debido a su almacenamiento en memoria.
   Uso: Caching, sesiones de usuario, colas de mensajes.

4. **Neo4j**: Base de datos orientada a grafos.
   Almacena datos en nodos y relaciones, lo que permite consultas eficientes sobre relaciones complejas.
   Uso: Redes sociales, recomendaciones, análisis de fraude.

5. **Couchbase**: Base de datos orientada a documentos y clave-valor.
   Combina características de bases de datos de documentos y clave-valor, con capacidades de sincronización y almacenamiento en memoria.
   Uso: Aplicaciones móviles, comercio electrónico, aplicaciones en tiempo real.

6. **DynamoDB** Base de datos clave-valor y de documentos.
   Servicio de base de datos NoSQL gestionado por Amazon Web Services (AWS), conocido por su escalabilidad automática y bajo mantenimiento.
   Uso: Aplicaciones web, IoT, análisis en tiempo real.

#### Ventajas de las Bases de Datos NoSQL

- **Escalabilidad**: Diseñadas para escalar horizontalmente, añadiendo más nodos a medida que crece la carga de trabajo.
- **Flexibilidad**: Permiten almacenar datos no estructurados o semi-estructurados sin necesidad de un esquema fijo.
- **Rendimiento**: Optimizadas para operaciones de lectura y escritura rápidas, especialmente en entornos distribuidos.
- **Disponibilidad**: Muchas bases de datos NoSQL están diseñadas para ofrecer alta disponibilidad y tolerancia a fallos.

#### Desventajas de las Bases de Datos NoSQL

- **Consistencia**: Algunas bases de datos NoSQL sacrifican la consistencia en favor de la disponibilidad y la tolerancia a particiones, siguiendo el teorema CAP.
- **Complejidad**: La gestión y el mantenimiento de sistemas distribuidos pueden ser complejos.
- **Madurez**: Aunque han evolucionado rápidamente, algunas bases de datos NoSQL no tienen la misma madurez y soporte que las bases de datos relacionales.

En resumen, las bases de datos NoSQL ofrecen una alternativa poderosa y flexible a las bases de datos relacionales tradicionales, especialmente en entornos que requieren manejar grandes volúmenes de datos no estructurados y necesitan escalabilidad y rendimiento.

## Conceptos básicos de bases de datos relacionales

### Modelos entidad/relación

- **Entidades**: Conceptos de interés: objetos, reales o abstractos, distinguibles de otros objetos.
  - Los grupos de entidades con cualidades similares acerca de los cuales se almacena información se denominan tipos
- **Atributos**: Características de las entidades: propiedades asociadas a un conjunto de entidades.
  - Para cada atributo (representación de las propiedades de los objetos ), existe un conjunto de valores permitidos llamado dominio.
- **Relaciones**: Conexiones o asociaciones: conexiones semánticas entre conjuntos de entidades.

#### Tipos de atributos

- **Atributos compuestos** vs. **Atributos simples** (atómicos)
  - Los atributos compuestos se pueden dividir en componentes más pequeños con significado propio
  - e.g. dirección = calle + municipio + CP + provincia

- Atributos mono-valuados vs. **Atributos multi-valuados**
  - Un atributo mono-valuado tiene un único valor para una entidad particular
  - e.g. el atributo hijos, será multi-valuado en numerosas entidades “persona”

- Atributos almacenados vs. **Atributos derivados**
  - en la base de dato almacenamos los atributos de partida (atributo almacenado), no los resultados que se derivan a partir de ellos (atributo derivado)
  - e.g. la edad de una persona [atributo derivado] se puede calcular (derivar) de su fecha de nacimiento [atributo almacenado]

#### Clave

Claves: Conjuntos de atributos que permiten **identificar unívocamente** a una entidad dentro de un conjunto de entidades

Del libro: ISBN
Del escritor: (nombre, apellidos, fecha de nacimiento)

- Super-clave: Conjunto de atributos que permite identificar unívocamente a una entidad dentro de un conjunto de entidades.
- Clave candidata: Super-clave con un número mínimo de atributos.
- Clave primaria: Clave candidata elegida por el diseñador de la base de datos para identificar unívocamente a las distintas entidades de un tipo.
- Clave alternativa: Cualquiera de las claves candidatas no elegidas por el diseñador de la base de datos.

En la practica, es habitual generar un atributo para que actúe como clave primaria

- los R-DBMS pueden generarlos de forma **auto-incremental** con tipo numérico
- se puede usar el estándar **UUID** (Universal Unique Identifier, Identificador único universal), un valor de 128 bits que se utiliza para identificar de forma única un objeto o entidad, frecuentemente usado en Internet . Dependiendo de los mecanismos específicos utilizados, se garantiza que un UUID será diferente o, al menos, es muy probable que sea diferente de cualquier otro UUID generado hasta el año 3400 d.C.

#### Características de las relaciones

**Grado**: Número de tipos de entidades que participan en la conexión, haciéndola binaria, terciaria…

**Cardinalidad**: Numero de elementos de un tipo que se conectan con un elemento de otro (restricción que se observa en el dominio del problema y que controla las ocurrencias de las relaciones).

- En el caso de las relaciones binarias (grado 2):
  - Relaciones uno a uno (1:1) La clave aparece una sola vez en cada una de las tablas relacionadas
  - Relaciones uno a muchos (1:n) La clave de una tabla aparece n veces en la tabla relacionada.
    - Es el tipo de relación más común
    - e.g. Lista de twits (post, notas...)
      - un Autor tiene n notas
      - cada nota tiene 1 autor
      - Relación Autor 1 ---- n Nota
  - Relaciones muchos a muchos (n:m) Es una conflictiva combinación de varias de las anteriores, por lo que suele romperse en la serie de relaciones 1:n que la componen

**Modalidad**: Indica si la participación en una relación es obligatoria o opcional, es decir si la cardinalidad mínima es 0 o 1.

Por ejemplo, un "Cliente" puede no haber realizado ninguna "Compra" (participación opcional).

#### Clave y relaciones

**Relaciones uno a muchos (1:N)**: La clave de la relación es la clave primaria de la entidad que interviene en la relación con cardinalidad N.

Relación Autor 1 ---- n Nota
Clave de la relación Autor.ID

Lo podemos representar en la dirección contraria

Profesor n ---- 1 Departamento (N:1)

Profesor: 1 Departamento
Departamento: N Profesores

**Relaciones uno a uno (1:1)**: Las claves primarias de las entidades participantes son claves candidatas de la relación entre entidades, por lo que puede elegirse cualquiera de ellas.

Relación Trabajador 1 ---- 1 Contrato

Estas relaciones no tienen que dar necesariamente lugar a nuevas tablas, sino que pueden reflejarse como atributos en las ya existentes

- En una relación 1:N la clave de la tabla de cardinalidad 1 (autor) se incorpora como un atributo más en la tabla de cardinalidad N (nota)

Relación Autor 1 ---- n Nota (Incluye el atributo Autor.ID, clave de la relación)

- En la relación 1:1 la información de una de las tablas se incorpora en la otra

**Relaciones muchos a muchos (N:M)**: La clave primaria será la unión de las claves primarias de las entidades participantes en la relación.

En consecuencia estas relaciones se reflejan siempre en la aparición de una nueva tabla, correspondiente a la propia relación

Relación (n:m) Autor m ---- n Libro

Un autor escribe n libros
Un libro tiene m autores

Aparece la tabla autores_libros para representar la relación

id_autor
id_libro
order
...

### Modelo relacional y normalización

En el modelo relacional, las entidades y las relaciones dan lugar a tablas, que deben cumplir con algunas restricciones:

- Cada tabla debe tener su nombre único.
- No puede haber dos filas iguales. No se permiten los duplicados.
- Todos los datos en una columna deben ser del mismo tipo.

La normalización consiste en aplicar una serie de reglas a las relaciones obtenidas como parte del proceso que transforma el modelo entidad-relación en el modelo relacional.

Objetivo de la normalización

- Evitar la redundancia de los datos.
- Evitar problemas de actualización de los datos en las tablas.
- Proteger la integridad de los datos, garantizando dependencias lógicas.

#### Formas normales

Son los sucesivos niveles inclusivos en el proceso de normalización de una base de datos.

Aunque hay hasta seis niveles principales (y otros 3 que los complementan), los de uso más común son los tres primeros, definidos inicialmente por **Edgar F. Codd**.

- **1FN** Todos los atributos de una relación o tabla toman valores atómicos y existe una clave primaria única.
- **2FN** Todos los atributos de una relación dependen funcionalmente de las claves candidatas de la relación (y no de partes de ellas)
- **3FN** existe una total independencia funcional transitiva entre los atributos que no son clave; es decir el valor de un atributo no puede determinarse a partir de los valores de otros atributos que no formen una clave candidata

##### Primera Forma Normal

Objetivos

- Eliminar grupos de datos repetidos en tablas individuales.
- Crear una tabla separada para cada conjunto de datos relacionados. Idealmente, entre las tablas habrá relaciones 1:N
- Identificar cada conjunto de datos relacionados con una clave principal. Ejemplo ID, Primary Key, FK.

Procedimiento

- Todos los atributos de una relación o tabla toman valores atómicos. Un atributo es atómico si los elementos del dominio son indivisibles, mínimos.
- Existe una clave primaria única, que no contiene atributos nulos.
- No debe existir variación en el número de columnas.
- Los campos no clave deben identificarse por la clave, es decir deben depender funcionalmente de la clave.
- Debe existir una independencia del orden tanto de las filas como de las columnas, es decir, si los datos cambian de orden no deben cambiar sus significados
- Una tabla no puede tener múltiples valores en cada columna

Caso práctico

No utilizar varios campos en una sola tabla para almacenar datos similares.

Por ejemplo, para el seguimiento de un artículo del inventario que proviene de dos fuentes diferentes, el registro puede contener campos para el código de proveedor 1 y un código de proveedor 2.

¿Qué sucede cuando se agrega un tercer proveedor? Agregar un campo no es la respuesta, ya que requiere de programación y modificación de tablas y la necesidad de repetirlo cada vez que se agregué a un nuevo proveedor.

En su lugar, se deberá poner toda la información del proveedor en una tabla independiente denominada Proveedores, y vincular el inventario con
los proveedores por medio de una clave o de sus claves.

##### Segunda Forma Normal

- Crear tablas separadas para aquellos conjuntos de valores que se aplican a varios registros; e.g. ciudades, profesión.
- Relacionar estas tablas por medio de una clave externa, e.g. ID, Primary Key, FK

De ese modo todos los atributos de una relación dependen funcionalmente de las claves candidatas (completas) de la relación (y no de partes de ellas), es decir que los registros no deben depender de nada que no sea la clave primaria de una tabla (una clave compuesta, si es necesario).

Caso práctico

Consideremos la dirección de un cliente en un sistema contable. La dirección no solo se necesita en la tabla de clientes, sino también para los pedidos, envío, facturas, cuentas por cobrar, e inclusive en las ordenes. En lugar de almacenar la dirección del cliente como una entrada independiente en cada una de estas tablas, guárdela en un lugar, ya sea en la tabla Clientes o en una tabla de direcciones separada.

##### Tercera Forma Normal

Total independencia funcional transitiva entre los atributos que no son clave; es decir el valor de un atributo no puede determinarse a partir de los valores de otros atributos que no formen una clave candidata.

El objetivo es eliminar los campos que no dependan de las claves, de forma que los valores de un registro que no forman parte de la clave de registro no tienen cabida en la tabla

Caso práctico

En una tabla que contiene los datos de los candidatos a un puesto, el nombre del candidato, nombre de la universidad a la que asistió y la dirección pueden estar incluidos. Pero existen muchas universidades.

Si la información de la universidad se almacena en la tabla de candidatos, no hay manera de listar las universidades que no tengan candidatos.

La mejor opción es crear una tabla separada de Universidades y vincularlo a la tabla candidatos con una llave de código de la universidad.

### Diseño de bases de datos

Durante el desarrollo de un sistema de información, se han de modelar tanto los datos empleados por el sistema como los procesos que realizan tareas sobre esos datos

- Modelado de datos
  - Representación gráfica del modelo de datos
    - Modelos entidad/relación
      - Diagramas E/R (clásico)
      - Diagramas UML (Lenguaje Unificado de Modelado)
      - Diagramas CASE\*Method
      - Diagramas ORM (Object-Role Modeling)
      - Diagramas IDEF1X
  - Diccionario de datos
- Modelado de procesos
  - Diagramas de flujo de datos
  - Diagramas de estados (autómatas finitos)
  - Casos de uso

### Modelos gráficos E/R

Los diagramas entidad-relación (ER) son herramientas visuales utilizadas en el diseño y desarrollo de bases de datos. Estos diagramas ayudan a representar la estructura de los datos y las relaciones entre diferentes entidades en un sistema de información. Los diagramas ER se basan en el modelo entidad-relación, que describe cómo los datos se organizan y se relacionan en una base de datos relacional. Se realizan a partir de los planteamientos presentados por Peter P. Chen en sus artículos de 1976 y 1977.

Originalmente se trataba de **diagramas ER Lógicos**, que no incluye detalles de la implementación real en un sistema de gestión de bases de datos (DBMS). Ni siquiera pueden considerarse exclusivos de las bases de datos relacionales, ya que el concepto de relación en este esquema tiene poco que ver con la idea de relación expuesta por Codd en su modelo relacional. Por tanto los modelos ER se pueden aplicar a otros tipos de bases de datos, como las bases de datos orientadas a objetos o incluso las bases de datos no relacionales.

Posteriormente otros autores han añadido mejoras a este modelo dando lugar a toda una serie de modelos basados en el modelo Entidad/Relación original. La más aceptada actualmente es el **modelo entidad/relación extendido (ERE)** que complementa algunas carencias del modelo original. No obstante las diversas variantes del modelo hacen que los esquemas que dibujan los profesionales no sigan un verdadero estándar y sean dispares, aunque hay ideas muy comunes a todos los “dialectos” del modelo entidad/relación.

A partir de los diagramas ER lógicos, se pueden derivar **diagramas ER Físicos** que incluyen detalles específicos de la implementación, como los tipos de datos, las restricciones de integridad y las claves primarias y foráneas. Muy próximos a estos estarían los **diagramas de esquema de base de datos**, que muestran la estructura física de la base de datos, incluyendo tablas, columnas, índices y relaciones. Estos diagramas son útiles para la implementación real de la base de datos en un DBMS.

Podemos encontrar herramientas de software que permiten la creación de diagramas ER, como **Microsoft Visio**, **Lucidchart**, **Draw.io**, **MySQL Workbench**, **Oracle SQL Developer**, **ER/Studio**, **Toad Data Modeler**, **DbSchema**, **Dia**, **PowerDesigner**, **ERwin Data Modeler**, **DeZign for Databases**, **DbVisualizer**, **Navicat Data Modeler**, **SQL Power Architect**, **SAP PowerDesigner**, **ER/Studio Data Architect**, **DbVisualizer**, **DbWrench**

Paro obtener más información sobre el modelado de bases de datos, se pueden consultar las siguientes referencias

- **Database Design for Mere Mortals** de Michael J. Hernandez
- **Beginning Database Design: From Novice to Professional** de Clare Churcher
- **Database Design and Relational Theory: Normal Forms and All That Jazz** de C.J. Date

En cuanto a los detalles técnicos de los diagramas ER, se pueden consultar los siguientes enlaces

- <https://jorgesanchez.net/manuales/gbd/entidad-relacion.html>
- <https://www.ilerna.es/blog/modelo-entidad-relacion-base-datos>

#### Elementos en el modelo Entidad/Relación original

Los diagramas ER constan de varios elementos clave:

1. **Entidades**: Representan objetos o conceptos del mundo real que tienen una existencia independiente y sobre los cuales se desea almacenar información. Por ejemplo, en un sistema de gestión de una biblioteca, las entidades podrían ser "Libro", "Autor", "Usuario", etc. Se representan con un rectángulo con el nombre de la entidad en su interior.

2. **Atributos**: Son las propiedades o características de una entidad. Por ejemplo, una entidad "Libro" podría tener atributos como "Título", "ISBN", "Año de publicación", etc. Los atributos pueden ser de diferentes tipos:
   - **Atributos simples**: No pueden dividirse en componentes más pequeños. Se representan con un óvalo unido a la entidad por una línea.
   - **Atributos compuestos**: Pueden dividirse en componentes más pequeños. Se representan con un óvalo unido al atributo agrupador por una línea.
   - **Atributos derivados**: Se calculan a partir de otros atributos. Se representan con un óvalo punteado unido a la entidad o al atributo del que se derivan por una línea.
   - **Atributos clave**: Identifican de manera única a una entidad. Se representan subrayados.

3. **Relaciones**: Representan las asociaciones entre entidades. Por ejemplo, una relación podría ser "Escribe", que asocia a un "Autor" con un "Libro". Las relaciones pueden tener atributos propios. Se representan con un rombo unido a las entidades que se relacionan por líneas.

4. **Cardinalidad**: Indica el número de instancias de una entidad que pueden estar asociadas con instancias de otra entidad. Por ejemplo, en una relación "Escribe" entre "Autor" y "Libro", la cardinalidad podría ser "uno a muchos" si un autor puede escribir muchos libros, pero cada libro es escrito por un solo autor. Se representa con un número o un rango de números en los extremos de la línea de relación.

5. **Tipos de relaciones**: La inclusión de las relaciones junto con su cardinalidad permite representar los tres tipos de relaciones ya mencionados:
   - **Uno a uno (1:1)**: Una instancia de una entidad se relaciona con una instancia de otra entidad.
   - **Uno a muchos (1:N)**: Una instancia de una entidad se relaciona con muchas instancias de otra entidad.
   - **Muchos a muchos (M:N)**: Muchas instancias de una entidad se relacionan con muchas instancias de otra entidad.

Los diagramas ER son útiles en la fase de diseño conceptual de una base de datos, ya que permiten visualizar y entender la estructura de los datos antes de implementarla en un sistema de gestión de bases de datos (DBMS).

#### Modelo entidad/relación extendido (ERE)

Se incluye la distinción entre dos tipos de entidades diferentes:

- Entidad fuerte: Tiene una existencia independiente y no depende de otras entidades. Por ejemplo, "Cliente" en un sistema de ventas.
- **Entidad débil**: Depende de otra entidad para su existencia. Por ejemplo, "Dirección" podría ser una entidad débil que depende de "Cliente".

Las entidades débiles se representan con un doble rectángulo conectado por una línea con la entidad de la que dependen, mientras que las entidades fuertes se siguen representando con un rectángulo simple.

**Generalización y especialización**: son dos procesos que permiten dar lugar a jerarquías de entidades.

- La generalización agrupa entidades con características comunes en una entidad más general. Por ejemplo, "Vehículo" podría ser una generalización de "Coche" y "Motocicleta".
- la especialización divide una entidad en subtipos más específicos. Por ejemplo, "Empleado" podría especializarse en "Gerente" y "Técnico".

Herencia: En la especialización, las entidades hijas heredan los atributos y relaciones de la entidad padre. Por ejemplo, "Gerente" y "Técnico" heredarían atributos comunes de "Empleado".

Representar jerarquías de entidades en un diagrama ER extendido, se utilizan líneas de generalización y especialización para conectar las entidades padre e hijas, muy similares a las que se emplean para representar la herencia en los diagramas de clases de UML.

#### Modificaciones gráficas del modelo E/R

Existen diversas formas de incluir los datos de cardinalidad en los diagramas E/R, aunque la más común es la notación de Chen, que incluye los datos de cardinalidad en los extremos de las líneas de relación.

Una variante de esta notación es la notación de Crow's Foot, que utiliza símbolos en forma de "pata de cuervo" para representar la cardinalidad y la participación en las relaciones.

## MySQL

### Que es MySQL

Licencia dual: Licencia pública general (GPL) / Licencia comercial por Oracle Corporation

- inicialmente desarrollado por MySQL AB con el nombre de mSQL
  - empresa fundada por David Axmark, Allan Larsson y Michael Widenius (“Monty”)
- MySQL AB fue adquirida por Sun Microsystems en 2008
- Sun fue comprada por Oracle Corporation en 2010
- En respuesta a estos cambios aparece **MariaDB**, como fork de MySQL

Está considerada como la base de datos de código abierto más popular del mundo
Tradicionalmente se considera uno de los cuatro componentes del stack de desarrollo xAMP (lAMP, wAMP, mAMP).

- Linux, Windows, Mac
- Apache
- MySQL
- PHP

Con estos stacks -> CRM basados en PHP (WordPress, Joomla, Drupal)

Sitios web grandes y populares (Wikipedia)

- Wikipedia
- Google​ (aunque no para búsquedas)
- Facebook
- Twitter
- Flickr
- YouTube​

Escrito principalmente en C / C++

Y lo más importante, el nombre del delfín es **“Sakila”**

### Características de MySQL

#### El principal objetivo de MySQL es velocidad y robustez

- Escrito en C y C++, testado con GCC 2.7.2.1.
  - Usa GNU auto-confort para potabilidad.
- Puede trabajar en distintas plataformas y S.O. distintos, incluyendo Windows, Mac OS X, Linux, FreeBSD y Solaris.
- Dispone de APIs para numerosos lenguajes: C, C++, Eiffel, Java, Perl, PHP, Python, TCL y JavaScript.
- Usa tablas en disco B-Tree muy rápidas con compresión de índice.
  - Su sistema de archivo de almacenamiento plano, aumenta la eficiencia de la lectura, permitiendo un acceso muy rápido a al información
- Su diseño inicial multi-hilos (multithreaded) le permite sacar gran ventaja del multi-proceso, cuando están disponibles varias CPUs.
- Utiliza (ANSI) SQL 2 con algunas extensiones.
- Desde la versión 3 incorpora la opción de activar transacciones
- Desde la versión 4 incorpora procedimientos almacenados

#### Escalabilidad y límites

- Registros de longitud fija y variable.
- Se permite hasta 64 índices por tabla.
  - Cada índice puede consistir desde 1 hasta 16 columnas o partes de columnas.
  - El máximo ancho de límite son 1000 bytes.
  - Un índice puede usar prefijos de una columna para los tipos de columna CHAR, VARCHAR, BLOB, o TEXT.
- Diversos tipos de columnas como enteros de 1, 2, 3, 4, y 8 bytes, coma flotante, doble precisión, carácter, fechas, enumerados, etc.
- Todas las columnas pueden tener valores por defecto.
- Utilidad (Isamchk) para chequear, optimizar y reparar tablas.
- Todos los datos están grabados en formato ISO8859_1.
- Permite consultas (queries) en las que se unen tablas de diferentes bases de datos
- Soporta los outer joins tanto a derecha como a izquierda

#### Conectividad

- Los clientes usan TCP/IP (para cualquier plataforma).
  - En windows pueden usar names pipes y en Unix utilizan socket unix para conectarse al servidor.
- El servidor soporta mensajes de error en distintas lenguas (permite escoger el lenguaje).
- Todos los comandos tienen -help o -? Para las ayudas.
- Soporta ODBC (Open Database Connectivity): se puede utilizar ACCESS para conectar con el servidor MySQL y los clientes pueden ejecutarse en Windows o Unix.

Seguridad

- Sistema de contraseñas y privilegios muy flexible y segura (se encriptan cuando se conectan a un servidor).
- Todas la palabras de paso viajan encriptadas en la red

### Tipos de tablas en MySQL

MySQL incorpora "motores de almacenamiento", que nos permite seleccionar el tipo de almacenamiento interno de cada tabla

- no afecta a la interacción del cliente con el servidor
- los comandos SQL son los mismos
- el cliente no necesita saber como se guardan los datos

Hay una docena de motores de almacenamiento propios de MySQL, más los desarrollados por terceros.
Los más conocidos son: MyISAM, InnoDB, HEAP, NDB.

- **MyISAM**: formato estable, maduro y simple de manejar. Internamente admite tres posibilidades que gestiona directamente MySQL: Estáticas, Dinámicas y Comprimidas
- **InnoDB**: formato más moderno, que soporta transacciones y bloqueos a nivel de fila, claves foráneas y recuperación frente a desastres.
  Como inconvenientes: ocupan más espacio, su administración es más compleja (debido a sus índices), no soportan índices de texto completo…

Ambos pueden coexistir en una misma DB, las primeras cuando se necesite la máxima eficacia y las segundas cuando interesa utilizar transacciones

#### Motor MyISAM

- No transaccional.
- Bloqueos a nivel de tabla.
- Muy rápido en lectura y escritura (excepto escrituras simultaneas en la misma tabla).
- Bajo requerimiento de espacio en disco y memoria.
- Los datos se guardan en disco: diferentes ficheros para la definición de la tabla, los datos y los índices.
- Es el motor por defecto de MySQL.
- Es una buena elección cuando necesitamos velocidad, y tenemos pocas modificaciones simultaneas de la tabla.

#### Motor InnoDB

- Transaccional. Permite deshacer transacciones a medias ("rollback"). Multiversionado
- Bloqueos a nivel de registro
- Restricciones en claves foráneas
- Fácil recuperación de datos en caso de error.
- Alta concurrencia más segura en escritura.
- Los datos se guardan en un fichero para la definición de la tabla, y un "table_space" para guardar conjuntamente datos e índices.
- Necesita mas espacio en disco y memoria
- Es una buena elección cuando necesitamos transacciones, restricciones en claves foráneas, o tenemos muchas escrituras simultaneas.
- Multiversionado: cuando múltiples transacciones modifican registros, InnoDB mantiene aisladas las transacciones guardando para cada una de ellas un versión distinta de un mismo registro, a cada transacción la versión que le corresponde

#### Motor HEAP

- Los datos se guardan en memoria, utilizando algoritmos que hacen un uso óptimo de este medio.
- Es muy, muy rápido.
- Podemos crear una tabla HEAP a partir de una tabla en disco con:

```sql
CREATE TABLE nombre_tabla ENGINE=MEMORY
SELECT * FROM nombre_tabla_disco;
```

- Es una buena elección cuando necesitamos realizar operaciones muy rápidas sobre conjuntos pequeños de datos

#### Motor NDB

- Es el motor de almacenamiento de los clúster de MySQL.
- La base de datos esta repartida por los diferentes nodos del clúster.
- Proporciona alta disponibilidad mediante redundancia.
- Proporciona alto rendimiento mediante fragmentación de datos sobre los grupos de nodos.
- Proporciona alta escalabilidad mediante la combinación de las dos características anteriores.
- Los datos se guardan en memoria, pero los logs van a disco.
- Es una buena elección cuando disponiendo de varios servidores necesitamos a la vez velocidad, transacciones y redundancia de datos; replicación síncrona; y resistencia a caídas de servidores

### Instalación

[mysql/downloads/](https://www.mysql.com/downloads/)

- al final de la página [MySQL Community (GPL) Downloads](https://dev.mysql.com/downloads/)
  - [MySQL Community Server](https://dev.mysql.com/downloads/mysql/)
  - [MySQL Shell](https://dev.mysql.com/downloads/shell/)
  - [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)

- en todos ellos, al final de la página
  - _No thanks, just start my download_

- en el server, incluir
  - documentation
  - samples y examples
  - puerto: 3306 (default)
  - cuenta root: password
  - añadir otra cuenta: All Hosts / Role: User Admin

## PostgreSQL

### ¿Qué es PostgreSQL?

PostgreSQL es un sistema de gestión de bases de datos relacional de código abierto, desarrollado y mantenido por la comunidad global de PostgreSQL Global Development Group desde 1989. Está licenciado bajo la Licencia BSD, lo que permite su uso, modificación y distribución libremente.

- Escrito principalmente en C.
- Considerado uno de los sistemas de bases de datos más avanzados y robustos del mundo open source.
- Soporta los principales sistemas operativos: Linux, Windows, macOS, FreeBSD, Solaris, etc.
- Muy utilizado en aplicaciones empresariales, web, científicas y de análisis de datos.

### Características de PostgreSQL

#### Robustez y estándares

- Cumple con el estándar SQL (actualmente SQL:2016) y soporta muchas extensiones propias.
- Soporta transacciones ACID completas, integridad referencial, vistas, procedimientos almacenados, triggers, y tipos de datos avanzados.
- Permite extensiones y personalización mediante funciones escritas en varios lenguajes (PL/pgSQL, PL/Python, PL/Perl, etc.).

#### Escalabilidad y límites

- Maneja grandes volúmenes de datos y concurrencia de usuarios.
- Soporta índices avanzados: B-tree, Hash, GiST, SP-GiST, GIN, BRIN.
- Permite hasta 32 TB por tabla y bases de datos de tamaño prácticamente ilimitado (limitado por el sistema de archivos).
- No tiene un límite estricto en el número de índices por tabla ni en el número de columnas (hasta 1600 columnas por tabla).
- Permite replicación nativa (streaming replication), particionamiento de tablas y alta disponibilidad.

#### Conectividad

- Acceso mediante TCP/IP, sockets Unix y conexiones seguras SSL/TLS.
- APIs y drivers para numerosos lenguajes: C, C++, Java (JDBC), Python (psycopg2), Node.js, PHP, Ruby, Go, etc.
- Soporta autenticación por contraseña, certificados, Kerberos, LDAP, y otros métodos.

#### Seguridad

- Sistema de roles y privilegios muy granular.
- Soporta cifrado de conexiones y de datos en reposo (a través de herramientas externas o extensiones).
- Permite políticas de control de acceso a nivel de fila (Row Level Security).

### Tipos de almacenamiento en PostgreSQL

PostgreSQL utiliza un único motor de almacenamiento integrado, que soporta todas las características avanzadas (transacciones, bloqueos a nivel de fila, MVCC, etc.). No existen motores alternativos como en MySQL, pero se pueden crear tablas no permanentes:

- **Tablas permanentes**: por defecto, almacenadas en disco.
- **Tablas temporales**: válidas solo durante la sesión.
- **Tablas UNLOGGED**: no registran cambios en el WAL (Write-Ahead Log), por lo que son más rápidas pero menos seguras ante fallos.

### Instalación

La instalación de PostgreSQL puede realizarse desde el sitio oficial [https://www.postgresql.org/download/](https://www.postgresql.org/download/) o mediante gestores de paquetes del sistema operativo (apt, yum, brew, chocolatey, etc.).

Herramientas incluidas:

- **psql**: cliente de línea de comandos.
- **pgAdmin**: interfaz gráfica para administración.
- **pg_dump/pg_restore**: utilidades para backup y restauración.
- **initdb**: inicialización de clústeres de bases de datos.

El puerto por defecto es el **5432**.

Durante la instalación se crea el usuario "postgres" (superusuario por defecto).

### Tipos de datos en PostgreSQL

- **Numéricos**:
  - `SMALLINT` (2 bytes): -32.768 a 32.767
  - `INTEGER` o `INT` (4 bytes): -2.147.483.648 a 2.147.483.647
  - `BIGINT` (8 bytes): -9.223.372.036.854.775.808 a 9.223.372.036.854.775.807
  - `SERIAL`, `BIGSERIAL`: enteros autoincrementales
  - `REAL` (4 bytes, 6 dígitos de precisión)
  - `DOUBLE PRECISION` (8 bytes, 15 dígitos de precisión)
  - `NUMERIC(p,s)` o `DECIMAL(p,s)`: precisión arbitraria

- **Cadenas de caracteres**:
  - `CHAR(n)`: longitud fija
  - `VARCHAR(n)`: longitud variable
  - `TEXT`: longitud ilimitada (hasta 1 GB)

- **Fecha y hora**:
  - `DATE`, `TIME`, `TIMESTAMP`, `TIMESTAMPTZ`, `INTERVAL`

- **Binarios**:
  - `BYTEA`: datos binarios de cualquier tamaño

- **Booleanos**:
  - `BOOLEAN`: valores `TRUE` o `FALSE`

- **UUID**:
  - `UUID`: identificador único universal

- **JSON**:
  - `JSON`, `JSONB`: almacenamiento y consulta de datos en formato JSON

- **ARRAY**:
  - `ARRAY`: permite almacenar listas de valores del mismo tipo

- **ENUM**:
  - Se pueden definir tipos enumerados personalizados:

```sql
CREATE TYPE mood AS ENUM ('happy', 'sad', 'neutral');
CREATE TABLE persona (
  estado_animo mood
);
-- Alternativamente, usar CHECK:
CREATE TABLE persona (
  estado_animo VARCHAR(10) CHECK (estado_animo IN ('happy', 'sad', 'neutral'))
);
```

**Notas:**

- Para textos largos, usa `TEXT`.
- Para datos binarios, usa `BYTEA`.
- Para autoincremento, usa `SERIAL` o `BIGSERIAL`.
- Para valores restringidos, usa tipos ENUM personalizados o restricciones `CHECK`.
- Para datos semiestructurados, usa `JSON` o `JSONB`.

## Lenguaje SQL: Definición de datos (DDL)

Lenguaje de definición de datos (**DDL**): CREATE, DROP, ALTER ...

- Conexión: Shell v. Workbench (GUI)
- Listado y Creación de bases de datos. Uso
- Listado y descripción de tablas
- Creación de tablas. Uso de IF NOT EXISTS
  - Tipos de datos
  - Restricciones
    - NOT NULL
    - UNIQUE
    - DEFAULT
    - CHECK
    - AUTO_INCREMENT
  - Claves primarias y foráneas
    - PRIMARY KEY numérica
    - PRIMARY KEY UUID
    - FOREIGN KEY
  - Named Constraints
- Borrado de tablas (DROP)
- Indexación
- Modificación de tablas (ALTER)
- Claves primarias y foráneas
- Creación de índices

### Conexión

Para conectarnos desde el cmd a nuestro servidor ejecutamos **mysql.exe**

```shell
cd C:\Program Files\MySQL\MySQL Server 8.2\bin
..\bin> mysql.exe -u root // any_user -p
◀┙
Password:
```

En general, para cualquier conexión

```shell
..> mysql.exe -h [host] – P [port] –u [root] -p –D db_name
```

Estos mismos datos de conexión:

- host (-h)
- port (-P) default 3306
- user (-u) root / user siempre con acceso por consola habilitado
- passwd (-p)
- db_name (-D)

serán los que proporcionemos desde un programa JS que quiera hacer una conexión a la DB.

Normalmente, los valores se tomarán de .env y podrán variar en función del entorno

### Información de las DB en el servidor (PostgreSQL)

Una vez dentro del shell de PostgreSQL (`psql`), los comandos pueden terminar en **punto y coma** pero no lo hacen los comandos internos (metacomandos), comienzan por barra invertida (`\`).
El shell no es sensible al uso de mayúsculas y minúsculas.

Para comprobar las bases de datos que existen, podemos usar el metacomando **\l** o **\list**:

```shell
\l
```

La respuesta nos muestra las bases de datos existentes, por ejemplo:

```shell
                                  List of databases
   Name    |  Owner   | Encoding |   Collate   |    Ctype    |   Access privileges
-----------+----------+----------+-------------+-------------+-----------------------
 postgres  | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
 template0 | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres          +
 template1 | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 | =c/postgres          +
 world     | postgres | UTF8     | en_US.UTF-8 | en_US.UTF-8 |
```

Para conectarse a una base de datos específica desde el shell de PostgreSQL:

```shell
\c nombre_basedatos
```

Por ejemplo:

```shell
\c world
```

### Creación de una base de datos

Para crear una base de datos nueva, utiliza el comando **CREATE DATABASE**:

```shell
CREATE DATABASE sample;
```

Esto creará una base de datos vacía y no contendrá ninguna tabla.

### Uso de una base de datos

Para conectarte a una base de datos (si no lo hiciste al iniciar `psql`):

```shell
\c sample
```

Para comprobar en cualquier momento a qué base de datos estás conectado, puedes usar:

```shell
SELECT current_database();
```

El resultado será similar a:

```shell
 current_database
------------------
 sample
(1 row)
```

Para listar las tablas existentes en la base de datos actual, usa el metacomando **\dt**:

```shell
\dt
```

Por ejemplo, si estás en la base de datos `world`:

```shell
\c world
\dt
```

El resultado será algo como:

```shell
             List of tables
 Schema |    Name    | Type  |  Owner
--------+------------+-------+----------
 public | cities     | table | postgres
 public | countries  | table | postgres
 public | regions    | table | postgres
 public | states     | table | postgres
 public | subregions | table | postgres
```

### Descripción de una tabla (PostgreSQL)

Una vez conectados a la base de datos y sabiendo que existe una tabla, podemos consultar su estructura mediante el metacomando **\d nombre_tabla** en `psql`.

```shell
\d regions;
```

El resultado será similar a:

```shell
                                        Table "public.regions"
    Column    |            Type             | Collation | Nullable |             Default
--------------+-----------------------------+-----------+----------+----------------------------------
 id           | bigint                      |           | not null | generated by default as identity
 name         | character varying(100)      |           | not null |
 translations | text                        |           |          |
 created_at   | timestamp without time zone |           |          |
 updated_at   | timestamp without time zone |           | not null | CURRENT_TIMESTAMP
 flag         | smallint                    |           | not null | 1
 wikiDataId   | character varying(255)      |           |          |
Indexes:
    "regions_pkey" PRIMARY KEY, btree (id)
Referenced by:
    TABLE "countries" CONSTRAINT "countries_region_id_fkey" FOREIGN KEY (region_id) REFERENCES regions(id)
    TABLE "subregions" CONSTRAINT "subregions_region_id_fkey" FOREIGN KEY (region_id) REFERENCES regions(id)
```

La descripción nos indica algunas de las **propiedades** importantes de cada campo:

- type (tipo de dato)
- not null / null (si admite valores nulos)
- default (valor por defecto)
- Indexes
  - PRIMARY KEY (si es clave primaria y si es autoincremental)
- References / ReferencedBy
  - Foreign-key constraints (si es clave foránea)

### Creación de tablas

La sentencia **CREATE TABLE** es usado para crear una tabla en MySQL con restricciones.
La sintaxis de Create es

CREATE TABLE tableName
(
field_name1 dataType(size) [NULL | NOT NULL],
field_name2 dataType(size) [NULL | NOT NULL]
);

Para cada campo indicamos

- nombre
- tipo(tamaño)
- restricción para el comportamiento de la variable (campo), cono el not null
  - si NULL está especificado o no se indica nada, el campo se puede dejar vacío.
  - si NOT NULL está especificado, el campo debe tener un valor

Para evitar errores si la tabla ya existe,
podemos añadir una condición en el comando que la crea

CREATE TABLE **IF NOT EXISTS** tableName ...

- si la tabla existe se anula el proceso de intentar crearla y no se produce ningún error
- Como consecuencia el mensaje devuelto es “Query OK”, tanto si se crea la tabla como si ya existía

#### Clave primaria o Primary Key

**CLAVE PRIMARIA (PRIMARY KEY)** es un campo o campos en una tabla que identifican unívocamente a cada registro. Este atributo es usado para definir el nombre del campo para crear una clave primaria

Puede indicarse al final del comando para crear la tabla o, si es única, al definir el campo

```sql
CREATE TABLE tableName
(
  field_name1 dataType(size) [NULL | NOT NULL],
  field_name2 dataType(size) [NULL | NOT NULL]
  PRIMARY KEY (field_name_1, field_name_2,…)
);

CREATE TABLE tableName (
  field_name1 SERIAL PRIMARY KEY,
  field_name2 dataType(size) [NULL | NOT NULL]
);

-- Alternativamente, con la sintaxis moderna:
CREATE TABLE tableName (
  field_name1 INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  field_name2 dataType(size) [NULL | NOT NULL]
);
```

Los formatos de las claves primarias pueden ser:

- `SERIAL PRIMARY KEY` o `INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY` (autoincremental)
- `UUID PRIMARY KEY DEFAULT gen_random_uuid()` (UUID en formato texto estándar)

En PostgreSQL, para usar UUID como clave primaria, se recomienda el tipo de dato `UUID` y establecer el valor por defecto con la función `gen_random_uuid()`. Es necesario tener instalada la extensión `pgcrypto` para usar esta función:

```sql
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE ejemplo_uuid (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ...
);
```

Esto crea un campo que almacena un UUID (Identificador Único Universal) en formato texto estándar (36 caracteres, incluyendo guiones).

#### Restricciones a los campos

Entre las restricciones que podemos añadir a un campo en PostgreSQL:

- `NOT NULL` para que el campo no pueda quedar vacío
- `UNIQUE` para que el campo no pueda tener valores repetidos
- `DEFAULT` para que el campo tenga un valor por defecto
- `CHECK` para establecer condiciones que deben cumplirse

En PostgreSQL, el incremento automático se consigue con `SERIAL` o `GENERATED ALWAYS AS IDENTITY` (no existe `AUTO_INCREMENT`). Tampoco existe `ZERO_FILL` como restricción.

<!-- -------------------------------- -->

Ejemplo de tabla `users` en PostgreSQL:

```sql
CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  user_alias VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(50) NOT NULL UNIQUE,
  first_name VARCHAR(100) NOT NULL,
  surname VARCHAR(100),
  phone CHAR(12) UNIQUE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

Alternativamente, para usar UUID como clave primaria:

```sql
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE users (
  user_id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_alias VARCHAR(50) NOT NULL UNIQUE,
  email VARCHAR(50) NOT NULL UNIQUE,
  first_name VARCHAR(100) NOT NULL,
  surname VARCHAR(100),
  phone CHAR(12) UNIQUE,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

#### Foreign Key

Relación 1:N con tabla de notas (PostgreSQL):

id, title, is_important, content, author_id, created_at

```sql
CREATE TABLE notes (
  note_id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  is_important BOOLEAN DEFAULT FALSE,
  content TEXT,
  author_id UUID NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  FOREIGN KEY (author_id) REFERENCES users(user_id)
);
```

En otro ejemplo vemos una relación N:N, de una tabla consigo misma (PostgreSQL):

Por ejemplo, una tabla refleja las relaciones de unos usuarios con otros, como amigos o enemigos

- source_user_id
- target_user_id
- relation_type

```sql
CREATE TABLE user_others (
  source_user_id UUID NOT NULL,
  target_user_id UUID NOT NULL,
  relation_type VARCHAR(10) NOT NULL CHECK (relation_type IN ('friend', 'enemy')),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
  PRIMARY KEY (source_user_id, target_user_id),
  FOREIGN KEY (source_user_id) REFERENCES users(user_id),
  FOREIGN KEY (target_user_id) REFERENCES users(user_id)
);
```

#### Restricciones posteriores

A posteriori, podemos decidir que un usuario no puede tener una relación consigo mismo, y para evitar que la tabla pueda reflejar esa situación, le añadimos una **CONSTRAIN**

Por ejemplo, en el caso anterior, podemos evitar que un usuario tenga una relación de amigo o enemigo consigo mismo

```sql
  ALTER TABLE user_others
  ADD CONSTRAIN check_other_id
  CHECK (first_user_id != second_user_id);
```

Un ejemplo similar sería una tabla de seguidores, en el que añadimos la restricción al crearla

```sql
  CREATE TABLE followers (
    follower_id INT NOT NULL
    followed_id INT NOT NULL
    CONSTRAIN check_follower_id
      CHECK (follower_id != followed_id);
    FOREIGN KEY(follower_id) REFERENCES users(user_id)
    FOREIGN KEY(followed_id) REFERENCES users(user_id)
    PRIMARY KEY (follower_id, followed_id)
  )
```

#### Tablas de relación

<!-- -------------------------------- -->

Un ejemplo más habitual, con relación n:m entre dos tablas, movies y genres, creando una tabla de relación entre ambas movies_genres

- movies
  - movie_id
  - title
  - year
  - director
  - duration
  - poster
  - rate
- genres
  - movie_id
  - name
  <!-- -------------------------------- -->

```sql


-- Ejemplo equivalente en PostgreSQL:

CREATE TABLE movies (
  movie_id SERIAL PRIMARY KEY,
  title VARCHAR(250) NOT NULL,
  year INT NOT NULL,
  director VARCHAR(250) NOT NULL,
  duration INT NOT NULL,
  poster TEXT,
  rate DECIMAL(3,1) NOT NULL
);

CREATE TABLE genres (
  genre_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE movies_genres (
  movie_id INT NOT NULL,
  genre_id INT NOT NULL,
  PRIMARY KEY (movie_id, genre_id),
  FOREIGN KEY (movie_id) REFERENCES movies(movie_id),
  FOREIGN KEY (genre_id) REFERENCES genres(genre_id)
);
```

Para la tabla de la relación, hay una alternativa para escribirlo de forma más compacta

```sql


-- Alternativa compacta en PostgreSQL:
CREATE TABLE movies_genres (
  movie_id INT REFERENCES movies(movie_id),
  genre_id INT REFERENCES genres(genre_id),
  PRIMARY KEY (movie_id, genre_id)
);
```

### Borrado de las tablas

La sentencia TRUNCATE borra completamente todas las filas de un o tabla, pero sin eliminar la tabla misma.

```shell
  truncate table tableName;
  ◀┙
  Query OK, 0 rows affected (0.00 sec)
```

La sentencia DROP es usada para borrar completamente una o más tablas o la base de datos completa

```shell
  drop table tableName;
  ◀┙
  Query OK, 0 rows affected (0.00 sec)
```

```shell
  drop database dbName;
  ◀┙
  Query OK, 1 row affected (0.05 sec)
```

### Indexación

La creación de índices aporta velocidad a las búsquedas,
sacrificando espacio en disco y rapidez a la hora de realizar modificaciones.

```sql
-- Sintaxis en PostgreSQL para crear un índice:
CREATE INDEX index_name ON table_name (column1, column2, ...);

-- Para un índice único:
CREATE UNIQUE INDEX index_name ON table_name (column1);
```

Por ejemplo, para crear la tabla y los índices:

```sql
CREATE TABLE material (
  id INT NOT NULL,
  name CHAR(50) NOT NULL,
  resistance INT,
  melting_pt FLOAT
);

CREATE INDEX index_id_name ON material (id, name);
CREATE UNIQUE INDEX index_name ON material (name);
```

### Cambios en tablas ya creadas

ALTER TABLE es usado para cambiar la estructura de una tabla existente en PostgreSQL. Podemos añadir o borrar columnas, cambiar el tipo de las columnas existentes, o renombrar las columnas o la tabla misma.

```sql
-- Añadir una columna
ALTER TABLE tbl_name ADD COLUMN field_name_n INT;

-- Borrar una columna
ALTER TABLE tbl_name DROP COLUMN field_name_n;

-- Renombrar una columna
ALTER TABLE tbl_name RENAME COLUMN field_name_n TO field_name_new;

-- Cambiar el tipo de una columna
ALTER TABLE tbl_name ALTER COLUMN field_name_n TYPE VARCHAR(40);

-- Renombrar una tabla
ALTER TABLE tbl_name RENAME TO tbl_name_new;
```

En PostgreSQL no existen los modificadores FIRST o AFTER al añadir columnas; las nuevas columnas siempre se añaden al final. Tampoco existen los comandos CHANGE o MODIFY, se usan RENAME COLUMN y ALTER COLUMN TYPE.

## Lenguaje SQL: control de datos (DCL)

Lenguaje de control de accesos (**DCL**): GRANT, REVOKE...

## Lenguaje SQL: manipulación de datos (DML)

CRUD (**DML**): SELECT, INSERT, UPDATE, DELETE ...

### SELECT (Read)

- SELECT
  - FROM
  - WHERE (constraints and operators)

Alias en tablas y campos

```sql
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at
  FROM
    users AS u
  WHERE
    u.id = 1;
```

Filtrado y ordenación de resultados

- ORDER BY .. ASC | DESC
- LIMIT
- OFFSET
- DISTINCT
- GROUP BY

Ejemplo

```sql
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at
  FROM
    users AS u
  WHERE
    u.id > 1
  ORDER BY
    u.id DESC
  LIMIT 10
  OFFSET 5;
```

#### JOIN

JOIN: FROM t1 JOIN t2 ON t1.key = t2.key

- INNER JOIN
- LEFT JOIN
- RIGHT JOIN
- FULL JOIN

- INNER JOIN: devuelve las filas en las que hay coincidencia en ambas tablas.
- LEFT [OUTER] JOIN: devuelve todas las filas de la tabla izquierda, incluso cuando no hay coincidencia con la tabla derecha.
- RIGHT [OUTER] JOIN: devuelve todas las filas de la tabla derecha, incluso cuando no hay coincidencia con la tabla izquierda.
- FULL JOIN: devuelve las filas en las que hay coincidencia en al menos una de las tablas.
- SELF JOIN: se utiliza para unir una tabla consigo misma, como si en realidad fueran dos tablas.
- CARTESIAN JOIN: devuelve el producto cartesiano de un conjunto de registros de dos o más tablas unidas. En PostgreSQL (y en SQL estándar), esto se consigue usando CROSS JOIN o separando las tablas por coma en la cláusula FROM.

````sql
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at
  FROM
    users AS u
  INSERT INTO
    - VALUES

  ```sql
  -- Sintaxis estándar en PostgreSQL para insertar varias filas:
  INSERT INTO users
    (user_alias, email, first_name, surname, phone)
  VALUES
    ('@pepe', 'pepe@sample.com', 'Pepe', 'Pérez', '123456789'),
    ('@juan', 'juan@sample.com', 'Juan', 'Gómez', '987654321');

  -- No existe la sintaxis SET en PostgreSQL. Para insertar una sola fila:
  INSERT INTO users
    (user_alias, email, first_name, surname, phone)
  VALUES
    ('@erni', 'erni@sample.com', 'Ernestina', 'Gómez', '987654321');
````

FROM
users AS u
INNER JOIN
notes AS n
USING
(user_id);

````

En MySQL no existe como tal el FULL JOIN pero se consigue con la unión de un LEFT y un RIGHT JOIN

```sql
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at
  FROM
    users AS u
  LEFT JOIN
    user_others AS uo
  ON
    u.id = uo.first_user_id
  WHERE
    uo.relation_type = 'friend'
  UNION
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at
  FROM
    users AS u
  RIGHT JOIN
    user_others AS uo
  ON
    u.id = uo.first_user_id
  WHERE
    uo.relation_type = 'friend';
````

#### Unions

Combina rows de multiples tablas, siempre que estas tengan la misma estructura, es decir el mismo número de columnas y el mismo tipo de datos.

El nombre de las columnas en el resultado es el de la primera tabla

- UNION (elimina duplicados)
- UNION ALL (no elimina duplicados)
- INTERSECT (devuelve las filas que están en ambas tablas)

```sql
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at
  FROM
    users AS u
  WHERE
    u.first_name LIKE 'A%'
  UNION
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at
  FROM
    users AS u
  WHERE
    u.first_name LIKE 'B%';
```

Se puede usar una union de diferentes consultas a una misma tabla, añadiendo una columna con un determinado valor para cada una de ellas

```sql
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at,
    'A' AS group
  FROM
    users AS u
  WHERE
    u.first_name LIKE 'A%'
  UNION
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at,
    'B' AS group
  FROM
    users AS u
  WHERE
    u.first_name LIKE 'B%';
```

#### Expresiones de comparación

- =, <>, !=, >, <, >=, <=
- BETWEEN .. AND
- LIKE (en PostgreSQL distingue mayúsculas/minúsculas)
- ILIKE (en PostgreSQL, insensible a mayúsculas/minúsculas)
- IN
- IS NULL, IS NOT NULL
- EXISTS
- ANY, ALL
- AND, OR, NOT

- Caracteres comodines
  - % -> cualquier cadena de caracteres
  - \_ -> cualquier carácter

```sql
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at
  FROM
    users AS u
  WHERE
    u.first_name LIKE 'A%'
  ORDER BY
    u.id DESC
  LIMIT 10
  OFFSET 5;
```

- Expresiones regulares
  - REGEXP
  - RLIKE

```sql
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at
  FROM
    users AS u
  WHERE
    u.first_name REGEXP 'A.*'
  ORDER BY
    u.id DESC
  LIMIT 10
  OFFSET 5;
```

### Funciones nativas del lenguaje

- Funciones matemáticas
- Funciones de agregación
- Funciones de cadena
- Funciones de fecha y hora

#### Funciones de agregación

- COUNT(field) devuelve el número de filas que coinciden con la condición
- SUM(field) devuelve la suma de los valores de un campo
- AVG(field) devuelve la media de los valores de un campo
- MIN(field) devuelve el valor mínimo de un campo
- MAX(field) devuelve el valor máximo de un campo
- FIRST(field) y LAST(field) no existen como funciones agregadas estándar en PostgreSQL. Para obtener el primer o último valor, se suele usar ORDER BY junto con LIMIT 1, o funciones como array_agg y luego acceder al primer/último elemento del array.

Se usan con:

- GROUP BY
- HAVING(field) se utiliza para filtrar los resultados de una consulta que contiene una cláusula GROUP BY

#### Funciones de cadena (PostgreSQL)

- CHAR_LENGTH(str) / CHARACTER_LENGTH(str): número de caracteres en str
- LENGTH(str): número de bytes en str
- CONCAT(str1, str2, ...): concatenación de cadenas
- CONCAT_WS(sep, str1, str2, ...): concatenación con separador
- TRIM(str), LTRIM(str), RTRIM(str): eliminan espacios en blanco
- RPAD(str, n, char), LPAD(str, n, char): rellenan cadenas
- POSITION(substr IN str): posición de la primera aparición de substr
- SUBSTRING(str FROM pos FOR len): subcadena desde pos, longitud len
- REPLACE(str, from, to): reemplaza todas las apariciones
- LOWER(str), UPPER(str): minúsculas/mayúsculas
- REVERSE(str): invierte la cadena
- REPEAT(str, n): repite la cadena n veces
- OVERLAY(str PLACING new_str FROM pos [FOR len]): inserta new_str en str
- SPACE(n): cadena de n espacios
- STRPOS(str, substr): posición de substr en str
- ASCII(str): código ASCII del primer carácter
- CHR(num): carácter correspondiente al código ASCII

Las siguientes funciones no existen en PostgreSQL o tienen alternativas:

- FORMAT(num): usar TO_CHAR(num, formato)
- LCASE/UCASE: usar LOWER/UPPER
- SUBSTRING_INDEX, MID, FIELD, FIND_IN_SET, INSTR, STRCMP: no existen directamente, se pueden reemplazar con expresiones o funciones equivalentes.

Por ejemplo, para mostrar un número con separadores de miles y formato local (por ejemplo, 8.400.000,00 en español), se utiliza la función TO_CHAR junto con un formato adecuado:

```sql
SELECT TO_CHAR(8400000.00, '9G999G999D99D99', 'NL') AS formatted_number FROM ...;
```

El caracter G es el separador de miles y D es el separador decimal. El tercer argumento 'NL' indica que se use el formato local, lo que en español resultará en puntos para los miles y coma para los decimales.

Para asegurar el formato español (punto como separador de miles), puedes establecer la configuración regional de la sesión:

```sql
SET lc_numeric TO 'es_ES.UTF-8';
```

#### Funciones numéricas (PostgreSQL)

- ABS(num): valor absoluto
- SIGN(num): signo
- CEIL(num) / CEILING(num): entero mayor o igual
- FLOOR(num): entero menor o igual
- ROUND(num [, n]): redondeo (opcional decimales)
- TRUNC(num [, n]): trunca decimales
- MOD(num1, num2): resto de la división
- POWER(num1, num2): potencia
- SQRT(num): raíz cuadrada
- EXP(num): exponencial
- LN(num): logaritmo natural
- LOG(base, num): logaritmo en base específica
- LOG(num): logaritmo natural
- GREATEST(num1, num2, ...): mayor de la lista
- LEAST(num1, num2, ...): menor de la lista
- SIN, COS, TAN, COT, ASIN, ACOS, ATAN, ATAN2: funciones trigonométricas
- PI(): valor de PI
- DEGREES(num), RADIANS(num): conversión grados/radianes
- RANDOM(): número aleatorio entre 0 y 1

Frente a MySQL no existen como tales

- RAND(), DIV() usar RANDOM() y / o expresiones aritméticas.
- LOG10(num), LOG2(num): usar LOG(num)/LN(10) o LOG(num)/LN(2)

#### Funciones de fecha y hora (PostgreSQL)

- NOW(), CURRENT_TIMESTAMP, CURRENT_DATE, CURRENT_TIME: fecha y hora actuales
- EXTRACT(unit FROM date): extrae parte de la fecha/hora
- AGE(date1, date2): diferencia entre fechas
- DATE_TRUNC('field', date): trunca la fecha a una precisión
- TO_CHAR(date, formato): formatea fecha/hora
- INTERVAL: tipo de dato para intervalos
- date + INTERVAL 'n unit', date - INTERVAL 'n unit': suma/resta intervalos
- DATE_PART('field', date): parte de la fecha
- MAKE_DATE(year, month, day), MAKE_TIME(hour, min, sec): crear fechas/horas
- JUSTIFY_DAYS, JUSTIFY_HOURS, JUSTIFY_INTERVAL: normalizan intervalos
- DATE(date), TIME(time): extraen fecha/hora
- DATE_TRUNC, DATE_PART, EXTRACT, TO_CHAR cubren la mayoría de funciones de MySQL

Frente a MySQL no existen como tales:

- DAYNAME, MONTHNAME: usar TO_CHAR(fecha, 'Day') o ('Month')
- DATEDIFF: usar AGE o date1 - date2
- STR_TO_DATE: usar TO_DATE
- DATE_FORMAT: usar TO_CHAR
- WEEK, WEEKDAY, WEEKOFYEAR, YEARWEEK, PERIOD_ADD, PERIOD_DIFF, FROM_DAYS: no existen directamente, se pueden construir con expresiones

#### Otras funciones

##### Funciones de control de flujo (PostgreSQL)

- CASE WHEN ... THEN ... ELSE ... END: expresión condicional estándar
- COALESCE(value1, value2, ...): primer valor no nulo
- NULLIF(value1, value2): NULL si iguales, si no value1

Frente a MySQL:

- IF y IFNULL no existen, usar CASE y COALESCE

##### Funciones de conversión (PostgreSQL)

- CAST(expr AS type), expr::type: conversión de tipos
- TO_NUMBER, TO_CHAR, TO_DATE, TO_TIMESTAMP: conversión y formateo
- ENCODE/DECODE: codificación binaria/base64/hex
- HEX(expr): usar ENCODE(expr, 'hex')
- COALESCE(value1, value2, ...): primer valor no nulo
- NULLIF(value1, value2): NULL si iguales

Frente a MySQL:

- CONV, BIN, BINARY, SIGNED, UNSIGNED, UNHEX, OCT, BIN_TO_UUID, UUID_TO_BIN, ISNULL: no existen directamente

##### Funciones de sistema (PostgreSQL)

- CURRENT_DATABASE(): nombre de la base de datos actual
- CURRENT_USER, SESSION_USER, USER: usuario actual
- VERSION(): versión de PostgreSQL
- ROW_COUNT(): usar GET DIAGNOSTICS o funciones de control

Frente a MySQL:

- BENCHMARK, CONNECTION_ID, LAST_INSERT_ID, SCHEMA: no existen directamente

##### Funciones de cifrado (PostgreSQL)

- MD5(str): hash MD5
- SHA1(str), SHA224, SHA256, SHA384, SHA512: funciones hash (requieren extensión pgcrypto)
- ENCRYPT, DECRYPT: cifrado simétrico (requiere extensión pgcrypto)
- PGP_SYM_ENCRYPT, PGP_SYM_DECRYPT: cifrado simétrico tipo PGP
- PGP_PUB_ENCRYPT, PGP_PUB_DECRYPT: cifrado asimétrico tipo PGP
- ENCODE/DECODE: codificación base64, hex, etc.

Frente a MySQL:

- AES_ENCRYPT/AES_DECRYPT, COMPRESS/UNCOMPRESS, UNCOMPRESSED_LENGTH: no existen directamente, usar funciones de pgcrypto o extensiones

### INSERT (Create)

- INSERT INTO
  - VALUES
  - SET

```sql
INSERT INTO users
  (user_alias, email, first_name, surname, phone)
  VALUES
  ('@pepe', 'pepe@sample.com', 'Pepe', 'Pérez', '123456789')
  ('@juan', 'juan@sample.com', 'Juan', 'Gómez', '987654321');
```

### UPDATE (Update)

- UPDATE
  - SET
  - WHERE

```sql
UPDATE users

  SET
    user_alias = '@jose',
    first_name = 'Jose'
  WHERE
    id = 1;
```

### DELETE (Delete)

- DELETE FROM
  - WHERE

```sql
DELETE FROM users
  WHERE
    id = 1;
```

- DELETE FROM users v.s. TRUNCATE TABLE users
  - DELETE FROM elimina filas de una tabla
  - TRUNCATE TABLE elimina todas las filas de una tabla

TRUNCATE TABLE es más rápido que DELETE FROM, y actualiza a 0 el AUTO_INCREMENT.
Sin embargo, no se puede usar si hay claves foráneas

## Advanced SQL

- Subqueries
- Views
- Stored Procedures and Functions
- Triggers
- Transactions
- Indexes
- Full-text search
- JSON

### Subqueries

Una subconsulta (subquery) es una sentencia SELECT que se utiliza como parte de otra sentencia SQL, normalmente dentro de un WHERE, pero también en SELECT, FROM, INSERT, UPDATE o DELETE.

En PostgreSQL, las subconsultas funcionan igual que en el estándar SQL y siempre se indican entre paréntesis.

Ejemplo en una cláusula WHERE:

```sql
SELECT
  u.id AS user_id,
  u.user_alias,
  u.email,
  u.first_name,
  u.surname,
  u.phone,
  u.created_at,
  u.modified_at
FROM
  users AS u
WHERE
  u.id IN (
    SELECT user_id FROM user_others WHERE relation_type = 'friend'
  );
```

También se pueden usar subconsultas en la lista de selección o en la cláusula FROM:

```sql
SELECT
  u.user_alias,
  (SELECT COUNT(*) FROM notes n WHERE n.author_id = u.user_id) AS notas
FROM users u;
```

Papel de las subconsultas:

- Permiten evitar algunos JOINs innecesarios.
- Permiten usar resultados de funciones o cálculos en condiciones.
- Facilitan consultas complejas y reutilización de lógica.
- Se usan mucho en aplicaciones para evitar múltiples queries en bucles.

### Índices

Un índice es una estructura de datos que mejora la velocidad de las operaciones de búsqueda en una tabla de una base de datos.

- **Índices simples**: se crean en una sola columna
- **Índices compuestos**: se crean en varias columnas
- **Índices únicos**: no permiten duplicados

Para la PK y la FK se crean índices automáticamente

Ejemplo

```sql
CREATE INDEX idx_texto ON tabla (campos)
```

Desventajas

- Ocupan espacio en disco
- Ralentizan las operaciones de escritura
- Manteniendo más complejo al tener en cuenta de los índices

#### Búsqueda de texto completo (Full-text search) en PostgreSQL

En PostgreSQL, la búsqueda de texto completo se realiza usando los tipos y funciones `tsvector`, `tsquery`, y los índices GIN o GiST.

Para crear un índice de texto completo:

```sql
CREATE INDEX idx_texto ON tabla USING GIN (to_tsvector('spanish', columna_texto));
```

Para buscar texto:

```sql
SELECT * FROM tabla
WHERE to_tsvector('spanish', columna_texto) @@ plainto_tsquery('spanish', 'Pepe');
```

- `to_tsvector` convierte el texto en un vector de términos.
- `plainto_tsquery` convierte la consulta en una expresión de búsqueda.
- El operador `@@` evalúa si hay coincidencia.

Puedes combinar varias columnas:

```sql
CREATE INDEX idx_fulltext ON users USING GIN (
  to_tsvector('spanish', first_name || ' ' || surname)
);

SELECT * FROM users
WHERE to_tsvector('spanish', first_name || ' ' || surname) @@ plainto_tsquery('spanish', 'Pepe');
```

Consulta la documentación oficial de PostgreSQL para más opciones avanzadas de búsqueda de texto completo.

### Views

Una vista es una tabla virtual basada en el resultado de una consulta SQL.

- **Vistas simples**: se crean a partir de una sola tabla
- **Vistas complejas**: se crean a partir de varias tablas
- **Vistas actualizables**: se pueden modificar
- **Vistas no actualizables**: no se pueden modificar

Por ejemplo, para crear una vista de la tabla de usuarios

```sql
  CREATE VIEW user_view AS
  SELECT
    u.id AS user_id,
    u.user_alias,
    u.email,
    u.first_name,
    u.surname,
    u.phone,
    u.created_at,
    u.modified_at
  FROM
    users AS u;
```

Se utilizan como si fueran tables

```sql
  SELECT * FROM user_view;
```

Ventajas

- Simplifican las consultas
- Mejoran la seguridad
- Simplifican la gestión de permisos
- Simplifican la gestión de cambios en la estructura de la base de datos

Desventajas

- Rendimiento (en realidad se ejecuta una consulta)
- Complejidad y dificultad de mantenimiento

### Bloqueos y transactions

#### Bloqueos en Bases de Datos SQL

Los bloqueos son mecanismos esenciales utilizados por los sistemas de gestión de bases de datos (DBMS) para controlar el acceso a los datos, especialmente en entornos con accesos concurrentes. Los bloqueos ayudan a mantener la integridad y consistencia de los datos al gestionar cómo y cuándo los usuarios pueden leer o modificar la información.

En el caso de la escritura, se pueden producir problemas de concurrencia si dos o más usuarios intentan modificar los mismos datos al mismo tiempo. Para evitar estos problemas, se utilizan los bloqueos, que la base de datos realiza de forma automática.

En el caso de la lectura, no existe problema de concurrencia, pero si de consistencia. Si un usuario está leyendo un dato que otro usuario está modificando, el primero puede obtener un valor incorrecto. Para evitar este problema, se utilizan los bloqueos de lectura.

##### Problemas de Concurrencia

En un entorno concurrente, donde múltiples usuarios o procesos acceden a la base de datos simultáneamente, pueden surgir varios problemas:

1. **Lecturas sucias**: Un usuario lee datos que están siendo modificados por otro usuario, obteniendo así valores incorrectos o incompletos.
2. **Lecturas no repetibles**: Un usuario lee el mismo dato dos veces y obtiene diferentes valores porque otro usuario lo ha modificado entre las lecturas.
3. **Lecturas fantasma**: Un usuario realiza una consulta y obtiene un conjunto de resultados, pero si repite la consulta, obtiene un conjunto diferente debido a inserciones o eliminaciones realizadas por otros usuarios.

##### Tipos de Bloqueos

Para abordar estos problemas, los DBMS utilizan diferentes tipos de bloqueos. A continuación, se describen los más comunes:

1. **Bloqueo de Lectura (Shared Lock)**: Permite a múltiples usuarios leer los mismos datos simultáneamente, pero impide que cualquier usuario modifique los datos mientras están siendo leídos. Se utiliza para evitar lecturas sucias. Mientras un usuario tiene un bloqueo de lectura, otros usuarios pueden obtener bloqueos de lectura, pero no bloqueos de escritura.

2. **Bloqueo de Escritura (Exclusive Lock)**: Impide que otros usuarios lean o modifiquen los datos mientras se están escribiendo. Se utiliza para asegurar que solo un usuario puede modificar los datos en un momento dado, evitando así conflictos de escritura.

3. **Bloqueo de Actualización (Update Lock)**: Se utiliza cuando un usuario tiene la intención de modificar los datos, pero aún no ha realizado la modificación. Permite a otros usuarios leer los datos, pero impide que otros usuarios obtengan bloqueos de escritura. Es una forma de preparar el camino para un bloqueo de escritura.

4. **Bloqueo de Exclusión (Exclusion Lock)** Similar al bloqueo de escritura, pero se utiliza en contextos específicos donde se necesita un control más estricto sobre el acceso a los datos. Puede ser utilizado en operaciones críticas donde es esencial que ningún otro usuario pueda acceder a los datos, ni siquiera para lectura.

##### Niveles de Bloqueo

Los bloqueos pueden aplicarse a diferentes niveles de granularidad:

1. **Bloqueo de Fila (Row-Level Locking)**: Aplica el bloqueo a nivel de fila individual.
   - **Ventajas**: Permite un alto nivel de concurrencia, ya que solo las filas afectadas están bloqueadas.
   - **Desventajas**: Puede requerir más recursos del sistema para gestionar los bloqueos.

2. **Bloqueo de Página (Page-Level Locking)**: Aplica el bloqueo a nivel de página de datos, que puede contener múltiples filas.
   - **Ventajas**: Menos recursos del sistema en comparación con el bloqueo de fila.
   - **Desventajas**: Menor concurrencia, ya que más datos están bloqueados.

3. **Bloqueo de Tabla (Table-Level Locking)**: Aplica el bloqueo a nivel de tabla completa.
   - **Ventajas**: Fácil de implementar y gestionar.
   - **Desventajas**: Baja concurrencia, ya que toda la tabla está bloqueada.

##### Consideraciones Adicionales

- **Deadlocks (Interbloqueos)**: Situaciones donde dos o más transacciones están esperando indefinidamente por recursos que están siendo utilizados por las otras. Los DBMS suelen tener mecanismos para detectar y resolver deadlocks.
- **Timeouts**: Los bloqueos suelen tener tiempos de espera (timeouts) para evitar que las transacciones queden bloqueadas indefinidamente.
- **Aislamiento de Transacciones**: Los niveles de aislamiento de transacciones (como "Read Uncommitted", "Read Committed", "Repeatable Read", y "Serializable") determinan cómo se manejan los bloqueos y la visibilidad de los datos entre transacciones concurrentes.

En resumen, los bloqueos son fundamentales para garantizar la integridad y consistencia de los datos en entornos concurrentes. Aunque no todos los motores de bases de datos soportan todos los tipos de bloqueos, la mayoría ofrece mecanismos para gestionar el acceso concurrente de manera eficiente.

#### Transacciones en PostgreSQL

Las transacciones en PostgreSQL funcionan como una unidad lógica de trabajo que agrupa una o más **consultas SQL** que modifican los datos. Son esenciales para garantizar la integridad y consistencia de los datos, especialmente en entornos concurrentes. PostgreSQL implementa completamente el modelo ACID y ofrece un control avanzado sobre las transacciones y sus niveles de aislamiento.

Las transacciones afectan principalmente a las operaciones DML (Data Manipulation Language), como `INSERT`, `UPDATE` y `DELETE`. Las operaciones DDL (`CREATE`, `ALTER`, `DROP`) en PostgreSQL también pueden formar parte de una transacción, a diferencia de otros sistemas como MySQL, donde suelen hacer un `COMMIT` automático. Esto permite deshacer cambios estructurales si es necesario, siempre que no se haya confirmado la transacción.

##### Propiedades ACID de las Transacciones

Las transacciones en PostgreSQL cumplen las propiedades ACID:

1. **Atomicidad**: Todas las operaciones dentro de una transacción se completan con éxito o, si alguna falla, se deshacen todas, dejando la base de datos en el estado anterior.
2. **Consistencia**: Una transacción lleva la base de datos de un estado válido a otro, respetando todas las reglas y restricciones.
3. **Aislamiento**: Las operaciones de una transacción no interfieren con otras concurrentes, gracias a los niveles de aislamiento configurables.
4. **Durabilidad**: Una vez confirmada (commit), los cambios son permanentes, incluso ante fallos del sistema.

##### Gestión de Transacciones en PostgreSQL

PostgreSQL soporta transacciones de forma nativa y completa. Los comandos básicos para gestionar transacciones son:

1. **Iniciar una Transacción**:

   - `BEGIN;` o `START TRANSACTION;` (ambos válidos en PostgreSQL)

   ```sql
   BEGIN;
   -- o
   START TRANSACTION;
   ```

2. **Confirmar una Transacción**:

   - `COMMIT;` confirma la transacción y hace permanentes todos los cambios.

   ```sql
   COMMIT;
   ```

3. **Deshacer una Transacción**:

   - `ROLLBACK;` deshace todos los cambios realizados durante la transacción.

   ```sql
   ROLLBACK;
   ```

4. **Puntos de Salvaguarda**:

   - `SAVEPOINT nombre_save_point;` crea un punto de restauración dentro de la transacción.
   - `ROLLBACK TO nombre_save_point;` revierte los cambios realizados desde ese punto.

   ```sql
   SAVEPOINT punto1;
   -- Realizar algunas operaciones
   ROLLBACK TO punto1;
   ```

##### Niveles de Aislamiento

PostgreSQL permite configurar el nivel de aislamiento de las transacciones para controlar la visibilidad de los datos entre transacciones concurrentes. Los niveles disponibles son:

1. **READ UNCOMMITTED**: Permite leer datos no confirmados (no recomendado, se comporta igual que READ COMMITTED en PostgreSQL).
2. **READ COMMITTED**: Solo permite leer datos confirmados. Es el valor por defecto.
3. **REPEATABLE READ**: Garantiza que todas las lecturas dentro de la transacción ven un snapshot consistente.
4. **SERIALIZABLE**: El nivel más estricto, simula la ejecución secuencial de las transacciones.

Para establecer el nivel de aislamiento:

```sql
SET TRANSACTION ISOLATION LEVEL nombre_nivel;
```

Ejemplo:

```sql
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
```

##### Ejemplo de Transacción

Ejemplo típico de transferencia entre cuentas en PostgreSQL:

```sql
BEGIN;

-- Operación 1
UPDATE cuenta SET saldo = saldo - 100 WHERE id_cuenta = 1;

-- Operación 2
UPDATE cuenta SET saldo = saldo + 100 WHERE id_cuenta = 2;

-- Si todo está bien
COMMIT;

-- Si algo falla
-- ROLLBACK;
```

En este ejemplo, si ambas operaciones se ejecutan correctamente, se confirma la transacción con `COMMIT`. Si ocurre algún error, se puede deshacer todo con `ROLLBACK`. En aplicaciones reales, la lógica de control de errores suele estar en el código de la aplicación que interactúa con la base de datos.

### Procedimientos almacenados (Stored Procedures) y funciones (Functions) en PostgreSQL

En PostgreSQL, los procedimientos almacenados y las funciones permiten encapsular lógica compleja y reutilizable dentro de la base de datos. Aunque el concepto es similar al de MySQL, la sintaxis y algunas capacidades difieren.

#### Procedimientos almacenados (Procedures)

Desde PostgreSQL 11 existen los procedimientos almacenados como tal (`CREATE PROCEDURE`). Antes, solo existían funciones (`CREATE FUNCTION`). Los procedimientos se ejecutan con `CALL` y pueden realizar transacciones internas (COMMIT/ROLLBACK dentro del procedimiento).

**Sintaxis básica:**

```sql
CREATE PROCEDURE nombre_procedimiento([parámetros])
LANGUAGE plpgsql
AS $$
BEGIN
  -- Cuerpo del procedimiento
END;
$$;
```

**Ejemplo:**

```sql
CREATE PROCEDURE actualizar_salario(empleado_id INT, nuevo_salario NUMERIC)
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE empleados SET salario = nuevo_salario WHERE id = empleado_id;
END;
$$;
```

Para ejecutar el procedimiento:

```sql
CALL actualizar_salario(1, 50000.00);
```

#### Funciones (Functions)

Las funciones en PostgreSQL pueden devolver un valor escalar, un registro o un conjunto de registros. Se pueden usar en consultas SQL y pueden aceptar parámetros de entrada y salida.

**Sintaxis básica:**

```sql
CREATE FUNCTION nombre_funcion([parámetros])
RETURNS tipo_retorno
LANGUAGE plpgsql
AS $$
BEGIN
  -- Cuerpo de la función
  RETURN valor;
END;
$$;
```

**Ejemplo:**

```sql
CREATE FUNCTION calcular_impuesto(precio NUMERIC)
RETURNS NUMERIC
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN precio * 0.21;
END;
$$;
```

Para utilizar la función en una consulta:

```sql
SELECT producto_id, precio, calcular_impuesto(precio) AS impuesto
FROM productos;
```

#### Diferencias clave respecto a MySQL

- En PostgreSQL, las funciones pueden devolver múltiples tipos de datos, incluso tablas completas (`RETURNS TABLE(...)`).
- Los procedimientos (`CREATE PROCEDURE`) no devuelven valores, pero pueden gestionar transacciones internas.
- Las funciones pueden usarse en SELECT, WHERE, etc.; los procedimientos solo se ejecutan con `CALL`.
- No es necesario cambiar el delimitador (`DELIMITER`) como en MySQL.

#### Ventajas y desventajas

**Ventajas:**

- Modularidad y reutilización de lógica.
- Posibilidad de crear funciones en otros lenguajes (Python, SQL, C, etc.).
- Control de transacciones en procedimientos.

**Desventajas:**

- La depuración puede ser compleja.
- El rendimiento depende de la complejidad y uso adecuado.

### Triggers (Disparadores) en PostgreSQL

Los triggers (disparadores) en PostgreSQL son bloques de código que se ejecutan automáticamente en respuesta a eventos como `INSERT`, `UPDATE` o `DELETE` sobre una tabla. Permiten automatizar tareas, mantener la integridad de los datos y aplicar reglas de negocio.

En PostgreSQL, los triggers siempre llaman a una función (trigger function) escrita normalmente en PL/pgSQL.

#### Sintaxis básica

1. Crear la función del trigger:

    ```sql
    CREATE OR REPLACE FUNCTION actualizar_salario()
    RETURNS TRIGGER AS $$
    BEGIN
      IF NEW.experiencia > 5 THEN
        NEW.salario := NEW.salario * 1.1;
      END IF;
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
    ```

2. Crear el trigger asociado a la tabla:

  ```sql
  CREATE TRIGGER trg_actualizar_salario
  BEFORE UPDATE ON empleados
  FOR EACH ROW
  EXECUTE FUNCTION actualizar_salario();
  ```

**Uso:**

```sql
UPDATE empleados SET experiencia = 6 WHERE id = 1;
```

#### Ejemplo: actualizar número de likes

1. Función para incrementar likes:

    ```sql
    CREATE OR REPLACE FUNCTION incrementar_likes()
    RETURNS TRIGGER AS $$
    BEGIN
      UPDATE tweets SET num_likes = num_likes + 1 WHERE tweet_id = NEW.tweet_id;
      RETURN NEW;
    END;
    $$ LANGUAGE plpgsql;
    ```

2. Trigger:

    ```sql
    CREATE TRIGGER trg_incrementar_likes
    AFTER INSERT ON tweet_likes
    FOR EACH ROW
    EXECUTE FUNCTION incrementar_likes();
    ```

Para decrementar:

```sql
CREATE OR REPLACE FUNCTION decrementar_likes()
RETURNS TRIGGER AS $$
BEGIN
  UPDATE tweets SET num_likes = num_likes - 1 WHERE tweet_id = OLD.tweet_id;
  RETURN OLD;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_decrementar_likes
AFTER DELETE ON tweet_likes
FOR EACH ROW
EXECUTE FUNCTION decrementar_likes();
```

#### Diferencias clave en los triggers respecto a MySQL

- En PostgreSQL, el trigger ejecuta siempre una función.
- No se usa `DELIMITER`.
- Se puede elegir BEFORE o AFTER, y trabajar con NEW y OLD.
- El trigger puede devolver NEW (para INSERT/UPDATE) u OLD (para DELETE).
