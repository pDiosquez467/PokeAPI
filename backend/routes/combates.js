const express = require('express')
const router = express.Router()
const controller = require('../controllers/combates')

router.get('/combates', async (req, res) => {
    try {
        const combates = await controller.getAll()
        res.status(200).send({ status: 'OK', data: combates }) 
    } catch (error) {
        res.status(500).send({ status: 'Error', error: error })
    }
})