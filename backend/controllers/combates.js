const db = require('../db/conexion')
const { get } = require('../routes/pokemons')

const getAll = async () => {
    const combates = await db.query(`SELECT * FROM combates;`)
    return combates.rows
}


module.exports = {
    getAll
}