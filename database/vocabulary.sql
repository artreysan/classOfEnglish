CREATE DATABASE vocabulary;

use vocabulary;

CREATE TABLE irregular_verbs(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    simpleForm VARCHAR(255) NOT NULL,
    simplePast VARCHAR(255) NOT NULL,
    participePast VARCHAR(255) NOT NULL,
    translation VARCHAR(255) NOT NULL,
);

INSERT INTO irregular_verbs(simpleForm, simplePast, participePast, translation ) 
VALUES ('run','ran','run','correr');
INSERT INTO irregular_verbs(simpleForm, simplePast, participePast, translation ) 
VALUES ('ring','rang','rung','anillo');
