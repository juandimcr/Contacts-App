-- drop database if exists
DROP DATABASE contacts_app;

-- create db
CREATE DATABASE contacts_app;
USE contacts_app;

-- create tables
CREATE TABLE user(
    id varchar(400) NOT NULL,
    username varchar(30) NOT NULL,
    password varchar(100) NOT NULL,
    fullname varchar(70) NOT NULL,
    profileImg varchar(300) NOT NULL,
    email varchar(60) NOT NULL,
    CONSTRAINT pk_user PRIMARY KEY(id),
    CONSTRAINT ak_user UNIQUE(username),
    CONSTRAINT ak2_user UNIQUE(email)
);

CREATE TABLE contacts(
    id varchar(400) NOT NULL,
    fullname varchar(70) NOT NULL,
    contactImg varchar(300),
    type varchar(20) NOT NULL,
    city varchar(50) NOT NULL,
    country varchar(50) NOT NULL,
    user varchar(400) NOT NULL,
    CONSTRAINT pk_c PRIMARY KEY(id),
    CONSTRAINT fk_c FOREIGN KEY(user) REFERENCES user(id),
    CONSTRAINT type_ok CHECK(type IN('FAMILIAR', 'AMIGO', 'TRABAJO', 'OTROS'))
);