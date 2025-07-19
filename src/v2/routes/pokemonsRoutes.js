const express = require('express')
const router = express.Router()

const pokemonController = require('../../controllers/pokemonsController')
const validatePokemonId = require('../../middlewares/validateId')

router.route('/')
    .get(pokemonController.getAllPokemons)
    .post(pokemonController.createOnePokemon)

router.route('/:pokemonId', validatePokemonId)
    .get(pokemonController.getOnePokemon)
    .delete(pokemonController.deleteOnePokemon)
    .patch(pokemonController.updateOnePokemon)

module.exports = router