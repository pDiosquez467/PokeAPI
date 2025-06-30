const db = require('../db/conexion.js')

async function getAll() {
    const result = await db.query('SELECT * FROM pokemons')
    return result.rows
}

async function get(id) {
    const result = await db.query(
        'SELECT * FROM pokemons WHERE id = $1;',
        [id]
    )
    return result.rows[0]
}

async function create(data) {
  const query = `
    INSERT INTO pokemons 
      (nombre, tipo, habilidades, nivel_poder, imagen, altura, peso, descripcion, evoluciona_de, evoluciona_a)
    VALUES 
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *;
  `;

  const values = [
    data.nombre,
    data.tipo,
    data.habilidades || null,
    data.nivel_poder || null,
    data.imagen || null,
    data.altura || null,
    data.peso || null,
    data.descripcion || null,
    data.evoluciona_de || null,
    data.evoluciona_a || null,
  ];

  const result = await db.query(query, values);
  return result.rows[0];
}

async function deleteByID(id) {
    const result = await db.query(
        `DELETE FROM pokemons WHERE id = $1 RETURNING *`,
        [id]
    );
    return result.rows[0];

}

module.exports = {
    getAll,
    get,
    create,
    deleteByID
};
