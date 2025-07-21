const entrenadoresModel = require('../models/Entrenadores')
const { sendError } = require('../utils/sendError')

const getAllEntrenadores = async (req, res) => {
    try {
        const allEntrenadores = await entrenadoresModel.getAllEntrenadores()

        res.status(200).send({ status: 'OK', data: allEntrenadores })

    } catch (error) {
        sendError(res, error)
    }
}


module.exports = {
    getAllEntrenadores
} 