const Pokemons = require('../db/Pokemons')

const getAllPokemons = async () => {
    return await Pokemons.getAllPokemons()
}

const getOnePokemon = async (pokemonId) => {
    return await Pokemons.getOnePokemon(pokemonId) 
}

const createNewPokemon = async (newPokemon) => {
    const pokemonToInsert = {
        ...newPokemon
    }
    
    return Pokemons.createNewPokemon(pokemonToInsert) 
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