DROP DATABASE IF EXISTS db;

CREATE DATABASE db;

USE db;

CREATE TABLE
  IF NOT EXISTS partidas (
    id INT NOT NULL auto_increment,
    jogador1_id INT NOT NULL,
    jogador2_id INT NOT NULL,
    pontos_jogador1 INTEGER NOT NULL,
    pontos_jogador2 INTEGER NOT NULL,
    duracao INTEGER NOT NULL,
    PRIMARY KEY (id)
  );

CREATE TABLE
  IF NOT EXISTS jogador (
    id INT NOT NULL auto_increment,
    nome VARCHAR(50) NOT NULL,
    idade INTEGER NOT NULL,
    PRIMARY KEY(id)
  );

SET SQL_SAFE_UPDATES = 0;