const pokemonsModel = require('../models/Pokemons')

async function getAllPokemons(req, res) {
    try {
        const allPokemons = await pokemonsModel.getAllPokemons()

        res.status(200).send({ status: 'OK', data: allPokemons })

    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

async function getOnePokemon(req, res) {
    try {
        const pokemonId = Number(req.params.pokemonId)

        if (isNaN(pokemonId)) {
            res.status(400).send({ status: 'FAILED', error: 'Invalid ID' })
        }

        const pokemon = await pokemonsModel.getOnePokemon(pokemonId)

        res.status(200).send({ status: 'OK', data: pokemon })

    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
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
            res.status(400).send({ status: 'FAILED', error: "One of the following keys is missing or is empty in request body: 'nombre', 'tipo', 'altura', 'peso'" })
        }

        const newPokemon = {
            nombre: body.nombre,
            tipo: body.tipo,
            altura: body.altura,
            peso: body.peso
        }

        const createdPokemon = await pokemonsModel.createOnePokemon(newPokemon)

        res.status(201).send({ status: 'OK', data: createdPokemon })
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } });
    }

}

async function updateOnePokemon(req, res) {
    try {
        const {
            body,
            params: { pokemonId }
        } = req

        if (!pokemonId) {
            return res.status(400).send({ status: 'FAILED', error: "Parameter ':pokemonId' can not be empty" })
        }

        const updatedPokemon = await pokemonsModel.updateOnePokemon(pokemonId, body)

        res.status(200).send({ status: 'OK', data: updatedPokemon })
    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } })
    }
}

async function deleteOnePokemon(req, res) {
    try {
        const pokemonId = Number(req.params.id)

        if (isNaN(pokemonId)) {
            throw { status: 'FAILED', error: 'Invalid ID' }
        }

        const deleted = await pokemonsModel.deleteOnePokemon(pokemonId)

        res.status(200).send({ status: 'OK', data: deleted })

    } catch (error) {
        res
            .status(error?.status || 500)
            .send({ status: "FAILED", data: { error: error?.message || error } })
    }
}

module.exports = {
    getAllPokemons,
    getOnePokemon,
    createOnePokemon,
    updateOnePokemon,
    deleteOnePokemon
}