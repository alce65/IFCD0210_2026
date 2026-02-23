# API

- URL: https//empresa.com/api

- Recursos
  - tasks
  - users

- Operaciones
  - C
  - R
  - U
  - D

## NO estándar

- https//empresa.com/api/read/users
- https//empresa.com/api/create/users

## REST (transferencia de estado representacional)

- Recurso: estado en la url
- Operación: método protocolo HTTP

- Protocolo HTTP
  - Request / Response
  - Headers
    - Method:  GET, POST, PUT/PATCH, DELETE
  - Request
    - url
    - body

- [GET]https//empresa.com/api/users ----------------------> R
- [GET]https//empresa.com/api/users/id -------------------> R
- [POST]https//empresa.com/api/users // body: {...}-------> C
- [PATCH]https//empresa.com/api/users/id // body: {...}---> U
- [DELETE]https//empresa.com/api/users/id-----------------> D
