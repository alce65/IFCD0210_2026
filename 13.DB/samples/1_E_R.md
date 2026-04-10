---
title: "Casos prácticos: DB Relacionales"
---

## Caso práctico: modelo E/R de una escuela"

### Requerimientos (restricciones semánticas)

- Los alumnos se matriculan de varias asignaturas (al menos una) siendo adscritos a un grupo de dicha asignatura
  (Los grupos son específicos de una asignatura)
- Un grupo de una asignatura puede tener varios alumnos matriculados.
- Todo profesor pertenece a un departamento concreto.
- Todo departamento debe tener un director, que es un profesor.
- Un profesor puede impartir varios grupos de la misma asignatura
  (o de asignaturas diferentes).
- Un grupo de una asignatura ha de estar impartido, al menos, por un profesor.
- Las clases de cada asignatura se imparten en días, horas y aulas determinadas.
- Los atributos de cada entidad son “los habituales”.

### Preparación

- Identificación de entidades y atributos

El primer paso es la construcción de una tabla plana, con toda la información necesaria según las especificaciones del diseño

- Identificación de relaciones entre entidades

## Normalización

Proceso de normalización de una tabla que recoge información sobre estudiantes.

Alumno ID
Nombre
Aula
Piso
Asignatura 1
Profesor 1
Asignatura 2
Profesor 2
Asignatura 3
Profesor 3

### Tabla de alumnos

Para el ejercico nos limitaremos a los siguientes campos:

Alumno ID
Nombre
Aula
Asignatura 1
Asignatura 2
Asignatura 3

Ejemplo de tabla plana:

| Alumno ID | Nombre | Aula | Asignatura 1 | Asignatura 2 | Asignatura 3 |
| --------- | ------ | ---- | ------------ | ------------ | ------------ |
| 1         | Juan   | 101  | Matemáticas  | Física       | Química      |
| 2         | María  | 101  | Matemáticas  | Física       | Química      |
| 3         | Pedro  | 102  | Biología     | Química      | Filosofía    |
| 4         | Luisa  | 102  | Biología     | Química      | Filosofía    |

## Diseño completo de un modelo de basas de datos

- Primeramente plantear verbalmente los requisito exigidos al sistema
- Proponer un modelo que cumplimente dichos requisitos y plasmarlo en un diagrama e/r
- Construir el correspondiente sistema de tablas y normalizarlo.

Opciones

- Un sistema para gestionar una biblioteca
- Un sistema para gestionar venta de billetes de avión
- Un sistema para gestionar una tienda de determinados productos
- Un sistema para gestionar una escuela

### Creación de las tablas

A partir del modelo E/R, se crean las tablas correspondientes, definiendo el tipo de datos de cada campo y las restricciones de integridad, así como las claves primarias y foráneas.
