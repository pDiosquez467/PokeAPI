const db = require('../db/conexion')

async function getAll() {
    const result = await db.query(`SELECT * FROM entrenadores;`)
    return result.rows
}

module.exports = {
    getAll
}