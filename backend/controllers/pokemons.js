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
    deleteByID
};
