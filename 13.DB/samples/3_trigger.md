# Ejercicio 3: Uso de Triggers

- Creamos la base de datos / usamos la base de datos `ejemplo`

- Creamos la tablas

  - users
  - users_relations

```sql
CREATE TABLE users (
    user_id uuid default gen_random_uuid() primary key,
    user_alias VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    surname VARCHAR(100),
    phone CHAR(12) UNIQUE,
    friends INT DEFAULT 0,
    enemies INT DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT (NOW()),
    updated_at TIMESTAMP NOT NULL DEFAULT (NOW()),
);

CREATE TYPE relation AS ENUM('friend', 'enemy')

CREATE TABLE users_relations (
  source_user_id uuid,
  target_user_id uuid,
  relation_type relation,
  created_at TIMESTAMP NOT NULL DEFAULT (NOW()),
  updated_at TIMESTAMP NOT NULL DEFAULT (NOW()),
  PRIMARY KEY (source_user_id, target_user_id),
  FOREIGN KEY(source_user_id) REFERENCES users(user_id),
  FOREIGN KEY(target_user_id) REFERENCES users(user_id),
  CONSTRAINT check_other_id CHECK (source_user_id != target_user_id)
);
```

- Creamos un trigger que se ejecute al insertar un registro en la tabla `users_relations` y que actualice el campo `friends` o `enemies` de la tabla users con el numero actualizado de amigos y enemigos.
