const express = require('express')
const router = express.Router()
const controller = require('../controllers/combates')

router.get('/', async (req, res) => {
    try {
        const combates = await controller.getAll()
        res.status(200).send({ status: 'OK', data: combates }) 
    } catch (error) {
        res.status(500).send({ status: 'Error', error: error })
    }
})

router.get('/:id', async (req, res) => {
    try {

        const id = Number(req.params.id)

        if (isNaN(id)) {
            return res.status(400).send({ status: 'OK', error: 'ID inválido' })
        }

        const combate = await controller.get()

        if (!combate) {
            return res.status(404).send({ status: 'Combate NO encontrado', data: undefined })
        }

        res.status(200).send({ status: 'OK', data: combate })
    } catch (error) {
        res.status(500).send({ status: 'Error', error: error })
    }
})

module.exports = router