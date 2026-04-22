# Films

Ejemplo de API de películas, géneros, reviews y usuarios (profile)

## Relación entre las tablas

películas -- n:n -->  géneros

[películas ---n:n---> usuarios]
películas --1:n ---> reviews
usuarios ---1:n -----> reviews

usuarios ---1:1 -----> profile

## EndPoints

[GET] /api/películas
[GET] /api/películas/:id
[POST] /api/películas [Admin/Editor]
[PATCH] /api/películas/:id [Admin/Editor]
[DELETE] /api/películas/id [Admin/Editor]

[POST] /api/user/registro
[POST] /api/user/login
[GET] /api/user/:id
[PATCH] /api/user/:id [Owner]
[DELETE] /api/user/:id [Owner,Admin]
  
[GET] /api/reviews [User]
[GET] /api/reviews/:id [User]
[POST] /api/reviews [User]
[PATCH] /api/reviews/:id [Owner]
[DELETE] /api/reviews/id [Owner,Admin]
