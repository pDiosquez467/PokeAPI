const express = require('express')
const router = express.Router()

const combatesController = require('../../controllers/combatesController')
const { validateId: validateCombateId } = require('../../middlewares/validateValue')

/**
 * @swagger
 * components:
 *   schemas:
 *     Combates:
 *       type: object
 *       required:
 *         - pokemon1_id
 *         - pokemon2_id
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the Combate
 */

/**
 * @swagger
 * tags:
 *   name: Combates
 *   description: The Combates managing API
 */

/**
 * @swagger
 * /combates:
 *   get:
 *     summary: Returns the list of all the Combates
 *     tags: [Combates]
 *     responses:
 *       200:
 *         description: The list of the Combates
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Combates'
 */
router.get('/', combatesController.getAllCombates)

/**
 * @swagger
 * /combates/id/{id}:
 *   get:
 *     summary: Get a Combate by id
 *     tags: [Combates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The Combate id
 *     responses:
 *       200:
 *         description: The Combate description by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Combates'
 *       404:
 *         description: The Combate was not found
 */
router.get('/id/:id', validateCombateId, combatesController.getOneCombate)

/**
 * @swagger
 * /combates:
 *   post:
 *     summary: Create a new Combate
 *     tags: [Combates]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Combates'
 *     responses:
 *       201:
 *         description: The Combate was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Combates'
 *       500:
 *         description: Some server error
 */
router.post('/', combatesController.createOneCombate)

/**
 * @swagger
 * /combates/id/{id}:
 *   patch:
 *     summary: Update a Combate by the id
 *     tags: [Combates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The Combate id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Combates'
 *     responses:
 *       200:
 *         description: The Combate was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Combates'
 *       404:
 *         description: The Combate was not found
 *       500:
 *         description: Some error happened
 */
router.patch('/id/:id', validateCombateId, combatesController.updateOneCombate)

/**
 * @swagger
 * /combates/id/{id}:
 *   delete:
 *     summary: Remove the Combate by id
 *     tags: [Combates]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The Combate id
 *     responses:
 *       200:
 *         description: The Combate was deleted
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Combates'
 *       404:
 *         description: The Combate was not found
 */
router.delete('/id/:id', validateCombateId, combatesController.deleteOneCombate)

module.exports = router