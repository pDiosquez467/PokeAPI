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

async function create(data) {

    const query = `INSERT INTO entrenadores
    (nombre, nacionalidad, escuela, medallas, pokemon_default, edad, experiencia)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`

    values = [
        data.nombre,
        data.nacionalidad ?? null,
        data.escuela ?? null,
        data.medallas ?? null,
        data.pokemon_default,
        data.edad ?? 0,
        data.experiencia ?? 0
    ]

    const result = await db.query(query, values)
    return result.rows[0]
}

async function deleteByID(id) {
    const deleted = await db.query(`DELETE FROM entrenadores WHERE id = $1 RETURNING *`,
        [id]
    )
    return deleted.rows[0]
} 


module.exports = {
    getAll,
    get, 
    create, 
    deleteByID
}