const express = require('express')
const router = express.Router()

const pokemonController = require('../../controllers/pokemonsController')
const { validateId: validatePokemonId } = require('../../middlewares/validateId')

/**
 * @swagger
 * components:
 *   schemas:
 *     Pokemon:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the Pokemon
 *         name:
 *           type: string
 *           description: The name of the Pokemon
 */

/**
 * @swagger
 * tags:
 *   name: Pokemons
 *   description: The Pokemons managing API
 */

/**
 * @swagger
 * /api/v2/pokemons:
 *   get:
 *     summary: Returns the list of all the Pokemons
 *     tags: [Pokemon]
 *     responses:
 *       200:
 *         description: The list of the Pokemons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Pokemon'
 */
router.get('/', pokemonController.getAllPokemons)
    
router.post('/', pokemonController.createOnePokemon)

router.get('/id/:id', validatePokemonId, pokemonController.getOnePokemon)

router.delete('/id/:id', validatePokemonId, pokemonController.deleteOnePokemon)

router.patch('/id/:id', validatePokemonId, pokemonController.updateOnePokemon)

module.exports = router