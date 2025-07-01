const db = require('../db/conexion')

async function getAll() {
    const result = await db.query(`SELECT * FROM entrenadores;`)
    return result.rows
}

async function get(id) {
    const result = await db.query(`SELECT * FROM entrenadores WHERE id = $1`,
    [id])
    return result.rows[0]
}

module.exports = {
    getAll,
    get
}