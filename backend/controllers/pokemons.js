const db = require('../db/conexion.js');

async function getAll() {
    const result = await db.query('SELECT * FROM pokemons');
    return result.rows;
}

async function get(id) {
    const result = await db.query(
        'SELECT * FROM pokemons WHERE id = $1;',
        [id]
    );
    return result.rows[0];
}

module.exports = {
    getAll,
    get
};
