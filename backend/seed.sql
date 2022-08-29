USE `db`;

TRUNCATE TABLE `partidas`;
TRUNCATE TABLE `jogador`;

INSERT INTO
  jogador (nome, idade)
VALUES
  ('Nadal', 25),
  ('Murray', 28),
  ('Federer', 30);

INSERT INTO 
partidas (jogador1_id, jogador2_id, pontos_jogador1, pontos_jogador2, duracao) VALUES 

(1, 2, 15, 40, 100),
(2, 1, 30, 40, 120),
(2, 1, 30, 30, 140),
(2, 1, 15, 25, 100),
(1, 3, 15, 0, 20),
(3, 2, 15, 0, 90);