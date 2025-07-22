const combatesModel = require('../models/Combates')
const { sendError } = require('../utils/sendError')

const getAllCombates = async (req, res) => {
    try {
        const allCombates = await combatesModel.getAllCombates()

        res.status(200).send({ status: 'OK', data: allCombates })
    } catch (error) {
        sendError(res, error)
    }
}

const getOneCombate = async (req, res) => {
    try {
        const combateId = Number(req.params.id)
        const combate = await combatesModel.getOneCombate(combateId)

        res.status(200).send({ status: 'OK', data: combate })

    } catch (error) {
        sendError(res, error)
    }
}

const createOneCombate = async (req, res) => {
    try {
        const { body } = req

        if (!body.nombre) {
            return res.status(400).send({ status: 'FAILED', data: { error: "One of the following keys is missing or is empty in request body: 'nombre'" } })
        }

        const newCombate = {
            ...body
        }

        const created = await combatesModel.createOneCombate(newCombate)

        res.status(201).send({ status: 'OK', data: created })

    } catch (error) {
        sendError(res, error)
    }
}

const updateOneCombate = async (req, res) => {
    try {
        const combateId = Number(req.params.id)
        const { body } = req

        const updated = await combatesModel.updateOneCombate(combateId, body)

        res.status(200).send({ status: 'OK', data: updated })
    } catch (error) {
        sendError(res, error)
    }
}

const deleteOneCombate = async (req, res) => {
    try {
        const combateId = Number(req.params.id)
        const deleted = await combatesModel.deleteOneCombate(combateId)

        res.status(202).send({ status: 'OK', data: deleted })
    } catch (error) {
        sendError(res, error)
    }
}

module.exports = {
    getAllCombates,
    getOneCombate,
    createOneCombate,
    updateOneCombate,
    deleteOneCombate
}