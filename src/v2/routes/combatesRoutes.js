const express = require('express')
const router = express.Router()

const combatesController = require('../../controllers/combatesController')
const { validateId: validateCombateId } = require('../../middlewares/validateId')

router.get('/', combatesController.getAllCombates)

router.get('/id/:id', validateCombateId, combatesController.getOneCombate)

router.post('/', combatesController.createOneCombate)

router.patch('/id/:id', validateCombateId, combatesController.updateOneCombate)

router.delete('/id/:id', validateCombateId, combatesController.deleteOneCombate)

module.exports = router