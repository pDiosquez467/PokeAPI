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

module.exports = {
    getAll,
    get, 
}