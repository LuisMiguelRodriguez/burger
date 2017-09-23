DROP DATABASE IF EXISTS burgers_db;
create database burgers_db;

use burgers_db;


  CREATE TABLE burgers (
	id integer(11) auto_increment not null ,
    burger_name varchar(30),
    devoured boolean,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    primary key (id)
);
