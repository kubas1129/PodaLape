-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-04-06 15:09:45.81

-- tables
-- Table: customer
CREATE TABLE customer (
    id_customer int(6) UNSIGNED AUTO_INCREMENT  NOT NULL,
    first_name varchar(255)  NOT NULL,
    last_name varchar(255)  NOT NULL,
	primary key (id_customer)
);

-- Table: shelter
CREATE TABLE shelter (
    id_shelter int(6) UNSIGNED AUTO_INCREMENT  NOT NULL,
    name_shelter varchar(255)  NULL,
    latitude numeric(11,7)  NULL,
    longitude numeric(11,7)  NULL,
    city varchar(255)  NULL,
	primary key (id_shelter)
);

-- Table: shelter_post
CREATE TABLE shelter_post (
    id_shelter_post int(6) UNSIGNED AUTO_INCREMENT  NOT NULL,
    id_shelter int(6) UNSIGNED  NOT NULL,
    shelter_post_date date  NULL,
	primary key (id_shelter_post),
	foreign key (id_shelter) references shelter(id_shelter)
);

-- Table: dog
CREATE TABLE dog (
    id_dog int(6) UNSIGNED AUTO_INCREMENT  NOT NULL,
    name varchar(255)  NULL,
    age int  NULL,
    breed varchar(255)  NULL,
    gender varchar(255)  NULL,
    color varchar(255)  NULL,
    weight numeric(4,2)  NULL,
    id_shelter int(6) UNSIGNED  NOT NULL,
	primary key (id_dog),
	FOREIGN KEY (id_shelter) REFERENCES shelter(id_shelter)
);

-- Table: dog_post
CREATE TABLE dog_post (
    id_post_dog int(6) UNSIGNED AUTO_INCREMENT  NOT NULL,
    id_dog int(6) UNSIGNED NOT NULL,
    creationdate timestamp  NOT NULL,
    main_image varchar(255)  NOT NULL,
	primary key (id_post_dog),
	foreign key (id_dog) references dog(id_dog)
);

-- Table: image
CREATE TABLE image (
    id_image int(6) UNSIGNED AUTO_INCREMENT  NOT NULL,
    uri varchar(255)  NULL,
    id_post_dog int(6) UNSIGNED NOT NULL,
	primary key (id_image),
	foreign key (id_post_dog) references dog_post(id_post_dog)
);



-- Table: visit
CREATE TABLE visit (
    id_visit int(6) UNSIGNED AUTO_INCREMENT  NOT NULL,
    id_customer int(6) UNSIGNED NOT NULL,
    id_post_dog int(6) UNSIGNED NOT NULL,
    visit_date timestamp NOT NULL,
	primary key (id_visit),
	foreign key (id_customer) references customer(id_customer),
	foreign key (id_post_dog) references dog_post(id_post_dog)
);


