const Pokemons = require('../db/Pokemons')

const getAllPokemons = async () => {
    try {
        return await Pokemons.getAllPokemons()
    } catch (error) {
        throw error 
    }
}

const getOnePokemon = async (pokemonId) => {
    try {
        return await Pokemons.getOnePokemon(pokemonId) 
    } catch (error) {
        throw error 
    }
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
    try {
        return await Pokemons.updateOnePokemon(pokemonId, changes)
    } catch (error) {
        throw error 
    }
}

const deleteOnePokemon = async (pokemonId) => {
    try {
        return await Pokemons.deleteOnePokemon(pokemonId)
    } catch (error) {
        throw error 
    }
}

module.exports = {
    getAllPokemons,
    getOnePokemon,
    createNewPokemon,
    updateOnePokemon,
    deleteOnePokemon
}