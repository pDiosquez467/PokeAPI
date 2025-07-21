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

const getOneEntrenador = async (req, res) => {
    try {
        const entrenadorId = Number(req.params.id)
        const entrenador = await entrenadoresModel.getOneEntrenador(entrenadorId)

        res.status(200).send({ status: 'OK', data: entrenador })

    } catch (error) {
        sendError(res, error)
    }
}

module.exports = {
    getAllEntrenadores,
    getOneEntrenador
} 