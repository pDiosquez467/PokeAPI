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

    try {
        return await Pokemons.createNewPokemon(pokemonToInsert) 
    } catch (error) {
        throw error
    }
}

const updateOnePokemon = async (pokemonId, changes) => {
    return await Pokemons.updateOnePokemon(pokemonId, changes)
}

const deleteOnePokemon = async (pokemonId) => {
    return await Pokemons.deleteOnePokemon(pokemonId)
}

module.exports = {
    getAllPokemons,
    getOnePokemon,
    createNewPokemon,
    updateOnePokemon,
    deleteOnePokemon
}