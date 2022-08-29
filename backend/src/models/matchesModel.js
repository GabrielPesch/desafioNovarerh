const db = require('../database/connection');

const matchesModel = {
  async list() {
    const sql = 
    `
    SELECT
      CASE WHEN j1.nome < j2.nome then j1.nome else j2.nome END AS jogadorA,
      CASE WHEN j1.nome < j2.nome then j2.nome else j1.nome END AS jogadorB
    FROM
      partidas AS p
    INNER JOIN jogador AS j1 ON j1.id = p.jogador1_id
    INNER JOIN jogador AS j2 ON j2.id = p.jogador2_id
    WHERE
      p.duracao > 90 AND p.pontos_jogador1 + p.pontos_jogador2 > 30
    GROUP BY
      j1.nome, j2.nome
    HAVING 
      (COUNT(jogadorA or jogadorB ) > 1) 
    `
    const [result] = await db.execute(sql);
    return result;
  }
}

module.exports = matchesModel;