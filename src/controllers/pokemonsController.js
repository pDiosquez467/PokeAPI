const pokemonService = require('../services/pokemonsService')

const getAllPokemons = async (req, res) => {
    const allPokemons = await pokemonService.getAllPokemons()
    res.status(200).send({ status: 'OK', data: allPokemons })
}

const getOnePokemon = async (req, res) => {
    const {
        params: { pokemonId },
    } = req;

    if (!pokemonId) {
        return
    }

    const pokemon = await pokemonService.getOnePokemon(pokemonId)
    res.status(200).send({ status: 'OK', data: pokemon })
}

const createNewPokemon = async (req, res) => {
    const { body } = req

    if (
        !body.nombre ||
        !body.tipo ||
        !body.nivel_poder ||
        !body.altura ||
        !body.peso
    ) {
        return res
            .status(400)
            .send({ status: 'FAILED', data: { error: `One of the following keys is missing or is empty in request body: 'nombre', 'tipo', 'nivel_poder', 'altura', 'peso'` } })
    }

    const newPokemon = {
        nombre: body.nombre,
        tipo: body.tipo,
        nivel_poder: body.nivel_poder,
        altura: body.altura,
        peso: body.peso
    }

    try {
        const createdPokemon = await pokemonService.createNewPokemon(newPokemon)
        res.status(201).send({ status: 'OK', data: createdPokemon })
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ data: error?.message || error })
    }
}

const updateOnePokemon = async (req, res) => {
    const {
        body,
        params: { pokemonId }
    } = req 

    if (!pokemonId) {
        return 
    }

    const updatedPokemon = await pokemonService.updateOnePokemon(pokemonId, body)
    res.status(200).send({ status: 'OK', data: { updatedPokemon } })
}

const deleteOnePokemon = async (req, res) => {
    const {
        params: { pokemonId },
    } = req;

    if (!pokemonId) {
        return
    }

    const deletedPokemon = await pokemonService.deleteOnePokemon(pokemonId)
    res.status(202).send({ status: 'OK', data: deletedPokemon })
}

module.exports = {
    getAllPokemons,
    getOnePokemon,
    createNewPokemon,
    updateOnePokemon,
    deleteOnePokemon
}