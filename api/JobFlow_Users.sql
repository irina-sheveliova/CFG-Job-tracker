CREATE DATABASE JobFlow;
USE JobFlow;

CREATE TABLE Users (
	username varchar(20),
    password varchar(15),
    Primary Key(username)
);

INSERT INTO Users (username, password)
 VALUES 
 ("bob", "123"),
 ("billy", "567")
 
 