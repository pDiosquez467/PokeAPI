const express = require('express')
const router = express.Router()

const pokemonController = require('../../controllers/pokemonsController')
const { validateId: validatePokemonId } = require('../../middlewares/validateId')

router.route('/')
    .get(pokemonController.getAllPokemons)
    .post(pokemonController.createOnePokemon)

router.get('/id/:id', validatePokemonId, pokemonController.getOnePokemon)

router.delete('/id/:id', validatePokemonId, pokemonController.deleteOnePokemon)

router.patch('/id/:id', validatePokemonId, pokemonController.updateOnePokemon)

module.exports = router