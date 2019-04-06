-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-04-06 15:09:45.81

-- tables
-- Table: customer
CREATE TABLE customer (
    id_customer serial  NOT NULL,
    first_name varchar(255)  NOT NULL,
    last_name varchar(255)  NOT NULL,
    CONSTRAINT customer_pk PRIMARY KEY (id_customer)
);

-- Table: dog
CREATE TABLE dog (
    id_dog serial  NOT NULL,
    name varchar(255)  NULL,
    age int  NULL,
    breed varchar(255)  NULL,
    gender varchar(255)  NULL,
    color varchar(255)  NULL,
    weight numeric(4,2)  NULL,
    id_shelter serial  NOT NULL,
    CONSTRAINT dog_pk PRIMARY KEY (id_dog)
);

-- Table: dog_post
CREATE TABLE dog_post (
    id_post_dog serial  NOT NULL,
    id_dog serial  NOT NULL,
    creationdate timestamp  NOT NULL,
    main_image varchar(255)  NOT NULL,
    CONSTRAINT dog_post_pk PRIMARY KEY (id_post_dog)
);

-- Table: image
CREATE TABLE image (
    id_image serial  NOT NULL,
    uri varchar(255)  NULL,
    id_post_dog serial  NOT NULL,
    CONSTRAINT image_pk PRIMARY KEY (id_image)
);

-- Table: shelter
CREATE TABLE shelter (
    id_shelter serial  NOT NULL,
    name_shelter varchar(255)  NULL,
    latitude numeric(11,7)  NULL,
    longitude numeric(11,7)  NULL,
    city varchar(255)  NULL,
    CONSTRAINT shelter_pk PRIMARY KEY (id_shelter)
);

-- Table: shelter_post
CREATE TABLE shelter_post (
    id_shelter_post serial  NOT NULL,
    id_shelter serial  NOT NULL,
    shelter_post_date date  NULL,
    CONSTRAINT shelter_post_pk PRIMARY KEY (id_shelter_post)
);

-- Table: visit
CREATE TABLE visit (
    id_visit serial  NOT NULL,
    id_customer serial  NOT NULL,
    id_post_dog serial  NOT NULL,
    visit_date date  NOT NULL,
    CONSTRAINT visit_pk PRIMARY KEY (id_visit)
);

-- foreign keys
-- Reference: dog_post_dog (table: dog_post)
ALTER TABLE dog_post ADD CONSTRAINT dog_post_dog
    FOREIGN KEY (id_dog)
    REFERENCES dog (id_dog)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: dog_post_visit (table: visit)
ALTER TABLE visit ADD CONSTRAINT dog_post_visit
    FOREIGN KEY (id_post_dog)
    REFERENCES dog_post (id_post_dog)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: dog_shelter (table: dog)
ALTER TABLE dog ADD CONSTRAINT dog_shelter
    FOREIGN KEY (id_shelter)
    REFERENCES shelter (id_shelter)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: image_dog_post (table: image)
ALTER TABLE image ADD CONSTRAINT image_dog_post
    FOREIGN KEY (id_post_dog)
    REFERENCES dog_post (id_post_dog)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: shelter_shelter_post (table: shelter_post)
ALTER TABLE shelter_post ADD CONSTRAINT shelter_shelter_post
    FOREIGN KEY (id_shelter)
    REFERENCES shelter (id_shelter)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: visit_customer (table: visit)
ALTER TABLE visit ADD CONSTRAINT visit_customer
    FOREIGN KEY (id_customer)
    REFERENCES customer (id_customer)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- End of file.

