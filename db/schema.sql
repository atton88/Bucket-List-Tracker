-- Schema

CREATE DATABASE bucketList_db;
USE bucketList_db;

CREATE TABLE bucketList
(
	id int NOT NULL AUTO_INCREMENT,
	item varchar(255) NOT NULL,
	completed BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
