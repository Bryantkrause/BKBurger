-- this will build from scratch
DROP DATABASE IF EXISTS burger_time_db;
-- create brand new db
CREATE DATABASE burger_time_db_db;
-- use new db
USE burger_time_db_db;

CREATE TABLE burgers(
id INTEGER NOT NULL auto_increment PRIMARY KEY,
burger VARCHAR(255) NOT NULL,
devoured BOOLEAN NOT NULL,
);
