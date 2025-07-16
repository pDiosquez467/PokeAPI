const express = require('express')
const router = express.Router()

const pokemonController = require('../../controllers/pokemonsController')

router.route('/')
    .get(pokemonController.getAllPokemons)
    // .post(pokemonController.createNewPokemon)

router.route('/:pokemonId')
    .get(pokemonController.getOnePokemon)
    .delete(pokemonController.deleteOnePokemon)
    // .patch('/:pokemonId', pokemonController.updateOnePokemon)

module.exports = router