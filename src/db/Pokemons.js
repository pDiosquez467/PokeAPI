const DB = require('./conn')

const getAllPokemons = async () => {
    const allPokemons = await DB.query(`SELECT * FROM pokemons;`)
    return allPokemons.rows
}

const getOnePokemon = async (pokemonId) => {
    const pokemon = await DB.query(`SELECT * FROM pokemons WHERE id = $1;`,
    [pokemonId])
    return pokemon.rows[0]
}

module.exports = {
    getAllPokemons, 
    getOnePokemon
}