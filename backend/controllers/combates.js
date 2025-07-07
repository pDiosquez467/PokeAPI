const { text } = require('express')
const db = require('../db/conexion')

const getAll = async () => {
    const combates = await db.query(`SELECT * FROM combates;`)
    return combates.rows
}

const get = async (combateId) => {
    const combate = await db.query(`SELECT * FROM combates WHERE id = $1;`, [combateId])
    return combate.rows[0]
}

const create = async (nuevoCombate) => {
    const values = {
        entrenador_1_id: nuevoCombate.entrenador_1_id ?? null,
        pokemon_1_id: nuevoCombate.pokemon_1_id,
        entrenador_2_id: nuevoCombate.entrenador_2_id ?? null,
        pokemon_2_id: nuevoCombate.pokemon_2_id,
        lugar: nuevoCombate.lugar,
        evento: nuevoCombate.evento ?? null,
        ganador_id: nuevoCombate.ganador_id,
        fecha: nuevoCombate.fecha, 
        rondas: nuevoCombate.rondas ?? 0,
        resumen: nuevoCombate.resumen ?? null,
    }

    const query = `INSERT INTO combates (entrenador_1_id, pokemon_1_id, pokemon_2_id, entrenador_2_id, lugar, evento, ganador_id, fecha, rondas, resumen) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;`

    const creado = await db.query(query, values)
    return creado.rows[0]
}

const deleteByID = async (combateId) => {
    const borrado = await db.query(`DELETE FROM combates WHERE id = %1 RETURNING *;`, [combateId])
    return borrado.rows[0]
}

module.exports = {
    getAll,
    get, 
    create, 
    deleteByID
}