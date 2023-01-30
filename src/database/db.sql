-- drop database if exists
DROP DATABASE contacts_app;

-- create db
CREATE DATABASE contacts_app;
USE contacts_app;

-- create tables
CREATE TABLE user(
    id varchar(400) NOT NULL,
    username varchar(30) NOT NULL,
    password varchar(16) NOT NULL,
    fullname varchar(70) NOT NULL,
    profile_img varchar(300) NOT NULL,
    CONSTRAINT pk_user PRIMARY KEY(id)
);

CREATE TABLE contacts(
    id varchar(400) NOT NULL,
    fullname varchar(70) NOT NULL,
    contact_img varchar(300),
    type varchar(20) NOT NULL,
    city varchar(50) NOT NULL,
    country varchar(50) NOT NULL,
    user varchar(400) NOT NULL,
    CONSTRAINT pk_c PRIMARY KEY(id),
    CONSTRAINT fk_c FOREIGN KEY(user) REFERENCES user(id),
    CONSTRAINT type_ok CHECK(type IN('FAMILIAR', 'AMIGO', 'TRABAJO', 'OTROS'))
);