
CREATE DATABASE if not exists demo_users;
use demo_users;

SET foreign_key_checks = 0;   
drop table if exists users;
SET foreign_key_checks = 1;     
  
CREATE TABLE users (
    user_id binary(16) default (uuid_to_bin(uuid())) primary key,
    user_alias VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    first_name VARCHAR(100) NOT NULL,
    surname VARCHAR(100),
    phone CHAR(12) UNIQUE,
	friends INT DEFAULT 0,
    enemies INT DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT (NOW()),
    updated_at TIMESTAMP NOT NULL DEFAULT (NOW())
);
    

SET foreign_key_checks = 0;   
drop table if exists users_relations ;
SET foreign_key_checks = 1;

  CREATE TABLE users_relations (
    source_user_id BINARY(16) NOT NULL,
    target_user_id BINARY(16) NOT NULL,
    relation_type ENUM('friend', 'enemy'),
    created_at TIMESTAMP NOT NULL DEFAULT (NOW()),
	updated_at TIMESTAMP NOT NULL DEFAULT (NOW()),
    PRIMARY KEY (source_user_id, target_user_id),
    FOREIGN KEY(source_user_id) REFERENCES users(user_id),
    FOREIGN KEY(target_user_id) REFERENCES users(user_id),
    CONSTRAINT check_other_id CHECK (source_user_id != target_user_id)
  );
  

insert into users (user_alias, email, first_name, surname, phone) values 
	('@pepe', 'pepe@sample.com', 'Pepe', 'Pérez', '687456234'),
	('@erni', 'erni@sample.com', 'Ernestina', 'Gálvez', '673874234'),
    ('@luis', 'luis@sample.com', 'Luis', 'Sánchez', '683456234'),
    ('@rosa', 'rosa@sample.com', 'Rosa', 'Moreno', '676384234'),
    ('@jon', 'jon@sample.com', 'Jon', 'Goicoechea', '697634234'),
    ('@helena', 'helena@sample.com', 'Helana', 'Lance', '687934234');


drop procedure if exists add_relation;

DELIMITER //

CREATE PROCEDURE add_relation (
	IN alias1 VARCHAR(50) , 
    IN alias2 VARCHAR(50), 
    IN rel ENUM('friend', 'enemy'))
BEGIN
    declare user1 BINARY(16);
    declare user2 BINARY(16);
	set user1 = (select user_id from users where user_alias = alias1);
    set user2 = (select user_id from users where user_alias = alias2);
    insert into users_relations 
		(source_user_id, target_user_id, relation_type ) 
		VALUES (user1, user2, rel);
        
END //

DELIMITER ;

drop trigger if exists update_num_relations;

DELIMITER //

CREATE TRIGGER update_num_relations
BEFORE INSERT ON users_relations
FOR EACH ROW
BEGIN
  UPDATE users
	SET friends = friends + 1
	WHERE user_id = NEW.source_user_id and NEW.relation_type = 'friend';
  UPDATE users
	SET friends = friends + 1
	WHERE user_id = NEW.target_user_id and NEW.relation_type = 'friend';
  UPDATE users
	SET enemies = enemies + 1
	WHERE user_id = NEW.source_user_id and NEW.relation_type = 'enemy';
  UPDATE users
	SET enemies = enemies + 1
	WHERE user_id = NEW.target_user_id and NEW.relation_type = 'enemy';
END //

DELIMITER ;
  
begin;  

call add_relation('@pepe', '@rosa', 'friend');
call add_relation('@pepe', '@erni', 'friend');
call add_relation('@erni', '@rosa', 'enemy');
call add_relation('@rosa', '@jon', 'enemy');

select BIN_TO_UUID(target_user_id), BIN_TO_UUID(source_user_id), relation_type from users_relations;
select first_name as nombre, surname as apellidos, friends, enemies from users; 

-- rollback; 
