const pokemonService = require('../services/pokemonsService')

const getAllPokemons = async (req, res) => {
    const allPokemons = await pokemonService.getAllPokemons()
    res.status(200).send({ status: 'OK', data: allPokemons })
}

const getOnePokemon = async (req, res) => {
    const {
        params: { pokemonId },
    } = req;

    if(!pokemonId) {
        return 
    }

    const pokemon = await pokemonService.getOnePokemon(pokemonId)
    res.status(200).send({ status: 'OK', data: pokemon })
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