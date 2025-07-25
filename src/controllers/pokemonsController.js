const pokemonService = require('../services/pokemonsService')

const getAllPokemons = async (req, res) => {
    try {
        const allPokemons = await pokemonService.getAllPokemons()
        res.status(200).send({ status: 'OK', data: allPokemons })
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: { error: error?.message || error } })
    }
}

const getOnePokemon = async (req, res) => {
    const {
        params: { pokemonId },
    } = req;

    if (!pokemonId) {
        return res.status(400).send({ status: 'FAILED', data: { error: `Parameter ':pokemonId' can not be empty` } })
    }

    try {
        const pokemon = await pokemonService.getOnePokemon(pokemonId)
        res.status(200).send({ status: 'OK', data: pokemon })
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ data: { error: error?.message || error } })
    }
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
            .send({ data: { error: error?.message || error } })
    }
}

const updateOnePokemon = async (req, res) => {
    const {
        body,
        params: { pokemonId }
    } = req 

    if (!pokemonId) {
        return res.status(400).send({ status: 'FAILED', data: { error:  `Parameter ':pokemonId' can not be empty`} })
    }

    try {
        const updatedPokemon = await pokemonService.updateOnePokemon(pokemonId, body)
        res.status(200).send({ status: 'OK', data: { updatedPokemon } })
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: { error: error?.message || error } })
    }
}

const deleteOnePokemon = async (req, res) => {
    const {
        params: { pokemonId },
    } = req;

    if (!pokemonId) {
        return res.status(400).send({ status: 'FAILED', data: { error:  `Parameter ':pokemonId' can not be empty`} })
    }

    try {
        const deletedPokemon = await pokemonService.deleteOnePokemon(pokemonId)
        res.status(202).send({ status: 'OK', data: deletedPokemon })
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: 'FAILED', data: { error: error?.message || error } })
    }
}

module.exports = {
    getAllPokemons,
    getOnePokemon,
    createNewPokemon,
    updateOnePokemon,
    deleteOnePokemon
}