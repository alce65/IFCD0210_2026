---
title: 'Caso práctico: modelo E/R de una escuela'
---

## Solución

### Entidades y atributos

asignatura: id_asignatura, nombre, curso, horas_semana
alumno: id_alumno, nombre, apellidos, fecha_nacimiento, dirección, teléfono, email
profesor: id_profesor, nombre, apellidos, fecha_nacimiento, dirección, teléfono, email
departamento: id_departamento, nombre, teléfono, email
grupo: id_grupo, curso, letra
aula: id_aula, capacidad, ubicación

### Relaciones

Los alumnos se matriculan de varias asignaturas (al menos una) siendo adscritos a un grupo de dicha asignatura

se_matricula

- entidades: alumno + grupo
- relaciones: id_alumno, id_grupo
- cardinalidad: M:N
- opcionalidad: 1:1
- atributos: fecha_matriculación, calificación

Un profesor puede impartir varios grupos de la misma asignatura
(o de asignaturas diferentes).
Un grupo de una asignatura ha de estar impartido, al menos, por un profesor.

imparte

- entidades: profesor + grupo
- relaciones: id_profesor, id_grupo
- cardinalidad: M:N
- opcionalidad: 1:1
- atributos:

Una asignatura se divide en grupos, que son específicos de una asignatura.

se_divide (impartida_en)

- entidades: asignatura + grupo
- relaciones: id_asignatura, id_grupo
- cardinalidad: 1:N
- opcionalidad: 1:1

Las clases de cada grupo de una asignatura se imparten en días, horas y aulas determinadas

se imparte

- entidades: grupo + aula
- relaciones: id_grupo, id_aula
- cardinalidad: M:N
- opcionalidad: 1:1
- atributos: día, hora_inicio, hora_fin

Todo profesor pertenece a un departamento concreto.

pertenece

- entidades: profesor + departamento
- relaciones: id_profesor, id_departamento
- cardinalidad: N:1
- opcionalidad: 1:1
- atributos: is

Todo departamento debe tener un director, que es un profesor.

dirige

- entidades: profesor + departamento
- relaciones: id_profesor, id_departamento
- cardinalidad: 1:1
- opcionalidad: 1:1
- atributos: desde, hasta
