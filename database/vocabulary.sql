CREATE DATABASE vocabulary;

use vocabulary;

CREATE TABLE vocabulary_conjunctions(
    id INT(11) PRIMARY KEY AUTO_INCREMENT,
    word VARCHAR(255) NOT NULL,
    translation TEXT
);