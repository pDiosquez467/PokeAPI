const pokemonsModel = require('../models/Pokemons')

async function getAllPokemons(req, res) {
    try {
        const allPokemons = await pokemonsModel.getAllPokemons()

        res.status(200).send({ status: 'OK', data: allPokemons })

    } catch (error) {
        res.status(500).send({ status: 'FAILED', error: error?.message || error })
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
        res.status(500).send({ status: 'FAILED', error: error?.message || error })
    }
}

async function deleteOnePokemon(req, res) {
    try {
        const pokemonId = Number(req.params.id)

        if (isNaN(pokemonId)) {
            throw { status:'FAILED', error: 'Invalid ID' }
        }

        const deleted = await pokemonsModel.deleteOnePokemon(pokemonId)

        res.status(200).send({ status: 'OK', data: deleted })

    } catch (error) {
        res.status(500).send({ status: 'FAILED', error: error?.error })
    }
}

module.exports = {
    getAllPokemons,
    getOnePokemon,
    deleteOnePokemon
}