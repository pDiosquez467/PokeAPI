const express = require('express')
const router = express.Router()
const controller = require('../controllers/entrenadores')

router.get('/', async (req, res) => {
    try {
        const entrenadores = await controller.getAll()
        res.status(200).json(entrenadores)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id)

        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID inválido' })
        }

        const entrenador = await controller.get(id)

        if (!entrenador) {
            return res.status(404).json({ error: 'Entrenador NO encontrado' })
        }

        res.status(200).json(entrenador)

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const nuevo = await controller.create(req.body)
        res.status(201).json({
                msg: 'Entrenador creado correctamente',
                data: nuevo
            }
        )

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {

        const id = Number(req.params.id)

        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID inválido' })
        }

        const deleted = await controller.deleteByID(id)

        if (!deleted) {
            return res.status(404).json({ error: 'Entrenador NO encontrado' })
        }

        res.status(200).json({
            msg: 'Entrenador eliminado correctamente',
            data: deleted
        })

    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


module.exports = router 