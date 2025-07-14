const express = require('express')
const router = express.Router()

const pokemonController = require('../../controllers/pokemonsController')

router.get('/', pokemonController.getAllPokemons)

router.get('/:pokemonId', pokemonController.getOnePokemon)

router.post('/', pokemonController.createNewPokemon)

router.patch('/:pokemonId', pokemonController.updateOnePokemon)

router.delete('/:pokemonId', pokemonController.deleteOnePokemon)

module.exports = router