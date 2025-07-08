const DB = require('./conn')

const getAllPokemons = async () => {
    const allPokemons = await DB.query(`SELECT * FROM pokemons;`)
    return allPokemons.rows
}

module.exports = {
    getAllPokemons
}