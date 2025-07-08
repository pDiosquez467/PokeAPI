const Pokemons = require('../db/Pokemons')

const getAllPokemons = async () => {
    const allPokemons = await Pokemons.getAllPokemons()
    return allPokemons 
}

const getOnePokemon = async () => {
    return 
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