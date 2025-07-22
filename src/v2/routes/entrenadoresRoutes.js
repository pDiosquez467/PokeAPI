const express = require('express')
const router = express.Router()

const entrenadoresController = require('../../controllers/entrenadoresController')
const { validateId: validateEntrenadorId } = require('../../middlewares/validateValue')

/**
 * @swagger
 * components:
 *   schemas:
 *     Entrenador:
 *       type: object
 *       required:
 *         - name
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the Entrenador
 *         name:
 *           type: string
 *           description: The name of the Entrenador
 */

/**
 * @swagger
 * tags:
 *   name: Entrenadores
 *   description: The Entrenadores managing API
 */

/**
 * @swagger
 * /entrenadores:
 *   get:
 *     summary: Returns the list of all the Entrenadores
 *     tags: [Entrenadores]
 *     responses:
 *       200:
 *         description: The list of the Entrenadores
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Entrenador'
 */
router.get('/', entrenadoresController.getAllEntrenadores)

/**
 * @swagger
 * /entrenadores/id/{id}:
 *   get:
 *     summary: Get a Entrenador by id
 *     tags: [Entrenadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The Entrenador id
 *     responses:
 *       200:
 *         description: The Entrenador description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Entrenador'
 *       404:
 *         description: The Entrenador was not found
 */
router.get('/id/:id', validateEntrenadorId, entrenadoresController.getOneEntrenador)

/**
 * @swagger
 * /entrenadores:
 *   post:
 *     summary: Create a new Entrenador
 *     tags: [Entrenadores]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Entrenador'
 *     responses:
 *       201:
 *         description: The Entrenador was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Entrenador'
 *       500:
 *         description: Some server error
 */
router.post('/', entrenadoresController.createOneEntrenador)

/**
 * @swagger
 * /entrenadores/id/{id}:
 *   patch:
 *     summary: Update a Entrenador by the id
 *     tags: [Entrenadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The Entrenador id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Entrenador'
 *     responses:
 *       200:
 *         description: The Entrenador was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Entrenador'
 *       404:
 *         description: The Entrenador was not found
 *       500:
 *         description: Some error happened
 */
router.patch('/id/:id', validateEntrenadorId, entrenadoresController.updateOneEntrenador)

/**
 * @swagger
 * /entrenadores/id/{id}:
 *   delete:
 *     summary: Remove the Entrenador by id
 *     tags: [Entrenadores]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The Entrenador id
 *     responses:
 *       200:
 *         description: The Entrenador was deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Entrenador'
 *       404:
 *         description: The Entrenador was not found
 */
router.delete('/id/:id',  validateEntrenadorId, entrenadoresController.deleteOneEntrenador)


module.exports = router 