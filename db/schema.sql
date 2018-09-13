-- Schema

CREATE DATABASE m4ox5wjfhr14l61i;
USE m4ox5wjfhr14l61i;

CREATE TABLE bucketList
(
	id int NOT NULL AUTO_INCREMENT,
	item varchar(255) NOT NULL,
	completed BOOLEAN DEFAULT 0,
	PRIMARY KEY (id)
);
