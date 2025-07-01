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

module.exports = router 