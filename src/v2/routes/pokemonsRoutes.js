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
 * /pokemons:
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
    
/**
 * @swagger
 * /pokemons:
 *   post:
 *     summary: Create a new Pokemon
 *     tags: [Pokemons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pokemon'
 *     responses:
 *       201:
 *         description: The Pokemon was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pokemon'
 *       500:
 *         description: Some server error
 */
router.post('/', pokemonController.createOnePokemon)

/**
 * @swagger
 * /pokemons/id/{id}:
 *   get:
 *     summary: Get a Pokemon by id
 *     tags: [Pokemons]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The Pokemon id
 *     responses:
 *       200:
 *         description: The Pokemon description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Pokemon'
 *       404:
 *         description: The Pokemon was not found
 */
router.get('/id/:id', validatePokemonId, pokemonController.getOnePokemon)

router.delete('/id/:id', validatePokemonId, pokemonController.deleteOnePokemon)

router.patch('/id/:id', validatePokemonId, pokemonController.updateOnePokemon)

module.exports = router