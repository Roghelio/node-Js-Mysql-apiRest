CREATE DATABASE IF NOT EXISTS centro_adopcion;

USE centro_adopcion;

CREATE TABLE cliente (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    telefono VARCHAR(12) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO cliente (name, email, telefono) 
VALUES ('Arturo Casco', 'casko@yahoo.com', '2367894120'),
        ('Samantha Camarena', 'sam@aol.com', '4567417896'),
        ('Diego Mujica', 'mujica@gmail.com', '7894561258'),
        ('Roman Romero', 'romero@hotmail.com', '2357451789');