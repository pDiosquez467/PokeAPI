const pokemonsModel = require('../models/Pokemons')

async function getAllPokemons(req, res) {
    try {
        const allPokemons = await pokemonsModel.getAllPokemons()
        res.status(200).send({ status:'OK', data: allPokemons })
    } catch (error) {
        res.status(500).send({ status: 'FAILED', error: error?.message || error })
    }
}

module.exports = {
    getAllPokemons
}