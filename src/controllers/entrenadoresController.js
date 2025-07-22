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

const createOneEntrenador = async (req, res) => {
    try {
        const { body } = req

        if (!body.pokemon1_id || !body.pokemon2_id) {
            return res.status(400).send({ status: 'FAILED', data: { error: "One of the following keys is missing or is empty in request body: 'pokemon1_id', 'pokemon2_id'" } })
        }

        const newEntrenador = {
            ...body
        }

        const createdEntrenador = await entrenadoresModel.createOneEntrenador(newEntrenador)

        res.status(201).send({ status: 'OK', data: createdEntrenador })
    } catch (error) {
        sendError(res, error)
    }
}

const updateOneEntrenador = async (req, res) => {
    try {
        const entrenadorId = Number(req.params.id)
        const { body } = req

        const updatedEntrenador = await entrenadoresModel.updateOneEntrenador(entrenadorId, body)

        res.status(200).send({ status: 'OK', data: updatedEntrenador })
    } catch (error) {
        sendError(res, error)
    }
}

const deleteOneEntrenador = async (req, res) => {
    try {
        const entrenadorId = Number(req.params.id)
        const deleted = await entrenadoresModel.deleteOneEntrenador(entrenadorId)

        res.status(202).send({ status: 'OK', data: deleted })

    } catch (error) {
        sendError(res, error)
    }
}

module.exports = {
    getAllEntrenadores,
    getOneEntrenador,
    createOneEntrenador,
    updateOneEntrenador,
    deleteOneEntrenador
} 