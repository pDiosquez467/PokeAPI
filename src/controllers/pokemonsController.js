const pokemonService = require('../services/pokemonsService')

const getAllPokemons = async (req, res) => {
    const allPokemons = await pokemonService.getAllPokemons()
    res.send('Get All pokemons')
}

const getOnePokemon = async (req, res) => {
    const pokemon = await pokemonService.getOnePokemon()
    res.send('Get an existing pokemon')
}

const createNewPokemon = async (req, res) => {
    const createdPokemon = await pokemonService.createNewPokemon()
    res.send('Create a new pokemon')
}

const updateOnePokemon = async (req, res) => {
    const updatedPokemon = await pokemonService.updateOnePokemon()
    res.send('Update an existing pokemon')
}

const deleteOnePokemon = async (req, res) => {
    const deletedPokemon = await pokemonService.deleteOnePokemon()
    res.send('Delete an existing pokemon')
}

module.exports = {
    getAllPokemons,
    getOnePokemon, 
    createNewPokemon,
    updateOnePokemon,
    deleteOnePokemon
}