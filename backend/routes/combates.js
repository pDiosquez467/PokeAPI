const express = require('express')
const router = express.Router()
const controller = require('../controllers/combates')

router.get('/', async (req, res) => {
    try {
        const combates = await controller.getAll()
        res.status(200).send({ status: 'OK', data: combates }) 
    } catch (error) {
        res.status(500).send({ status: 'Error', error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {

        const id = Number(req.params.id)

        if (isNaN(id)) {
            return res.status(400).send({ status: 'Error', error: 'ID inválido' })
        }

        const combate = await controller.get()

        if (!combate) {
            return res.status(404).send({ status: 'Combate NO encontrado', data: undefined })
        }

        res.status(200).send({ status: 'OK', data: combate })
    } catch (error) {
        res.status(500).send({ status: 'Error', error: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const { body } = req 

        if (!body.pokemon_1_id ||
            !body.pokemon_2_id ||
            !body.lugar || 
            !body.ganador_id || 
            !body.fecha
        ) {
            return res.status(400).send({ status: 'Error', error: 'Faltan campos obligatorios' })
        }

        const nuevo = {
            ...body
        }

        const creado = await controller.create(nuevo)

        res.status(201).send({ status: 'Combate creado correctamente', data: creado })

    } catch (error) {
        res.status(500).send({ status: 'Error', error: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const combateID = Number(req.params.id)

        if (isNaN(id)) {
            return res.status(400).send({ status: 'Error', error: 'ID inválido' })
        }

        const borrado = await controller.deleteByID(combateID)

        if (!borrado) {
            return res.status(404).send({ status: 'Error', error: 'Combate NO encontrado' })
        }

        res.status(200).send({ status: 'Combate borrado con éxito', data: borrado })

    } catch (error) {
        res.status(500).send({ status: 'Error', error: error.message })
    }
})

module.exports = router