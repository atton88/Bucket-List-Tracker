-- Schema

CREATE DATABASE i9kvfxhip01a6ak0;
USE i9kvfxhip01a6ak0;

CREATE TABLE bucketList
(
	id int NOT NULL AUTO_INCREMENT,
	item varchar(255) NOT NULL,
	completed BOOLEAN DEFAULT 0,
	PRIMARY KEY (id)
);
