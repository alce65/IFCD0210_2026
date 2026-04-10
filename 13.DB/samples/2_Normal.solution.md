---
title: Ejercicio 1 - Normalización
---

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

| Alumno ID | Nombre | Aula | Asignatura 1 | Asignatura 2 | Asignatura 3 |
| --------- | ------ | ---- | ------------ | ------------ | ------------ |
| 1         | Juan   | 101  | Matemáticas  | Física       | Química      |
| 2         | María  | 101  | Matemáticas  | Física       | Química      |
| 3         | Pedro  | 102  | Biología     | Química      | Filosofía    |
| 4         | Luisa  | 102  | Biología     | Química      | Filosofía    |

## Primera forma normal

La primera forma normal (1FN) es una forma normal de una base de datos relacional. Requiere que la tabla tenga **una clave primaria** y que **los datos estén atómicos**, es decir, que no se puedan dividir en partes más pequeñas.

La tabla de alumnos no cumple con la primera forma normal, ya que los campos `Asignatura 1`, `Asignatura 2` y `Asignatura 3` no son atómicos. Las sustituimos por un campo `Asignatura` y otro `Hora`, para conservar la información que antes se repartía en los campos 1 2 y 3.

| Alumno ID | Nombre | Aula | Asignatura  | Hora |
| --------- | ------ | ---- | ----------- | ---- |
| 1         | Juan   | 101  | Matemáticas | 1    |
| 1         | Juan   | 101  | Física      | 2    |
| 1         | Juan   | 101  | Química     | 3    |
| 2         | María  | 101  | Matemáticas | 1    |
| 2         | María  | 101  | Física      | 2    |
| 2         | María  | 101  | Química     | 3    |
| 3         | Pedro  | 102  | Biología    | 1    |
| 3         | Pedro  | 102  | Química     | 2    |
| 3         | Pedro  | 102  | Filosofía   | 3    |
| 4         | Luisa  | 102  | Biología    | 1    |
| 4         | Luisa  | 102  | Química     | 2    |
| 4         | Luisa  | 102  | Filosofía   | 3    |

La segunda forma normal (2FN) es una forma normal de una base de datos relacional. Requiere que la tabla esté en 1FN y que **todos los campos no clave dependan** funcionalmente de las claves candidatas de la relación (y no de partes de ellas) es decir **de la clave primaria completa**.

Para cumplir con la 2FN, se deben separar estos campos en una tabla aparte.

| Alumno ID | Nombre | Aula |
| --------- | ------ | ---- |
| 1         | Juan   | 101  |
| 2         | María  | 101  |
| 3         | Pedro  | 102  |
| 4         | Luisa  | 102  |

| Alumno ID | Asignatura  | Hora |
| --------- | ----------- | ---- |
| 1         | Matemáticas | 1    |
| 1         | Física      | 2    |
| 1         | Química     | 3    |
| 2         | Matemáticas | 1    |
| 2         | Física      | 2    |
| 2         | Química     | 3    |
| 3         | Biología    | 1    |
| 3         | Química     | 2    |
| 3         | Filosofía   | 3    |
| 4         | Biología    | 1    |
| 4         | Química     | 2    |
| 4         | Filosofía   | 3    |

## Tercera forma normal

La tercera forma normal (3FN) es una forma normal de una base de datos relacional. Requiere que la tabla esté en 2FN y que existe una total independencia funcional transitiva entre los atributos que no son clave; es decir, que **todos los campos no clave dependan** funcionalmente de la clave primaria de la relación, pero no de otros campos no clave. O dicho de otra forma, que el valor de un atributo no puede determinarse a partir de los valores de otros atributos que no formen una clave candidata

En el último ejemplo, aula (aula/grupo asignado) no es funcionalmente dependiente del atributo “alumno”. La solución es mover dicho atributo de la tabla Alumnos a la tabla de Alumnos_Aulas.

Alumno

| Alumno ID | Nombre | --  |
| --------- | ------ | --- |
| 1         | Juan   | --  |
| 2         | María  | --  |
| 3         | Pedro  | --  |
| 4         | Luisa  | --  |

Alumno_Aula

| Alumno ID | Aula | Localización |
| --------- | ---- | ------------ |
| 1         | 101  | 1            |
| 2         | 101  | 1            |
| 3         | 102  | 2            |
| 4         | 102  | 2            |

Alumno_Asignatura

| Alumno ID | Asignatura  | Hora |
| --------- | ----------- | ---- |
| 1         | Matemáticas | 1    |
| 1         | Física      | 2    |
| 1         | Química     | 3    |
| 2         | Matemáticas | 1    |
| 2         | Física      | 2    |
| 2         | Química     | 3    |
| 3         | Biología    | 1    |
| 3         | Química     | 2    |
| 3         | Filosofía   | 3    |
| 4         | Biología    | 1    |
| 4         | Química     | 2    |
| 4         | Filosofía   | 3    |
