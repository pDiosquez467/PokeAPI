const pokemonsModel = require('../models/Pokemons')
const { sendError } = require('../utils/sendError')


async function getAllPokemons(req, res) {
    try {
        const allPokemons = await pokemonsModel.getAllPokemons()

        res.status(200).send({ status: 'OK', data: allPokemons })
    } catch (error) {
        sendError(res, error) 
    }
}

async function getOnePokemon(req, res) {
    try {
        const pokemonId = Number(req.params.id)
        const pokemon = await pokemonsModel.getOnePokemon(pokemonId)

        res.status(200).send({ status: 'OK', data: pokemon })

    } catch (error) {
        sendError(res, error)
    }
}

async function createOnePokemon(req, res) {
    try {
        const { body } = req

        if (
            !body.nombre ||
            !body.tipo ||
            !body.altura ||
            !body.peso
        ) {
            return res.status(400).send({ status: 'FAILED', data: { error: "One of the following keys is missing or is empty in request body: 'nombre', 'tipo', 'altura', 'peso'" } })
        }

        const newPokemon = {
            ...body
        }

        const createdPokemon = await pokemonsModel.createOnePokemon(newPokemon)

        res.status(201).send({ status: 'OK', data: createdPokemon })
    } catch (error) {
        sendError(res, error)
    }

}

async function updateOnePokemon(req, res) {
    try {
        const pokemonId = Number(req.params.id)
        const { body } = req

        const updatedPokemon = await pokemonsModel.updateOnePokemon(pokemonId, body)

        res.status(200).send({ status: 'OK', data: updatedPokemon })
    } catch (error) {
        sendError(res, error)
    }
}

async function deleteOnePokemon(req, res) {
    try {
        const pokemonId = Number(req.params.id)

        const deleted = await pokemonsModel.deleteOnePokemon(pokemonId)

        res.status(202).send({ status: 'OK', data: deleted })

    } catch (error) {
        sendError(res, error)
    }
}

module.exports = {
    getAllPokemons,
    getOnePokemon,
    createOnePokemon,
    updateOnePokemon,
    deleteOnePokemon
}