const db = require('../../db/conexion.js');

async function getAll() {
    const result = await db.query('SELECT * FROM pokemons');
    return result.rows;
}

module.exports = { getAll };
