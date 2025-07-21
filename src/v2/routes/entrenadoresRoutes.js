const express = require('express')
const router = express.Router()

const entrenadoresController = require('../../controllers/entrenadoresController')
const { validateId: validateEntrenadorId } = require('../../middlewares/validateId')

router.get('/', entrenadoresController.getAllEntrenadores)

router.get('/id/:id', validateEntrenadorId, entrenadoresController.getOneEntrenador)

router.post('/', entrenadoresController.createOneEntrenador)

router.patch('/id/:id', validateEntrenadorId, entrenadoresController.updateOneEntrenador)

router.delete('/id/:id',  validateEntrenadorId, entrenadoresController.deleteOneEntrenador)


module.exports = router 