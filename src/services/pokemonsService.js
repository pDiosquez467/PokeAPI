const Pokemons = require('../db/Pokemons')

const getAllPokemons = async () => {
    return await Pokemons.getAllPokemons()
}

const getOnePokemon = async (pokemonId) => {
    return await Pokemons.getOnePokemon(pokemonId) 
}

const createNewPokemon = async () => {
    return 
}

const updateOnePokemon = async () => {
    return 
}

const deleteOnePokemon = async () => {
    return 
}

module.exports = {
    getAllPokemons,
    getOnePokemon,
    createNewPokemon,
    updateOnePokemon,
    deleteOnePokemon
}