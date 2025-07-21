const prisma = require('../prisma/prisma')

const getAllEntrenadores = async () => {
    try {
        return await prisma.entrenadores.findMany()
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || String(error) }
    }
}

const getOneEntrenador = async (entrenadorId) => {
    try {
        const entrenador = await prisma.entrenadores.findUnique({
            where: {
                id: entrenadorId
            }
        })

        if (!entrenador) {
            throw { status: 404, message: `Can't find entrenador with ID '${entrenadorId}'` }
        }

        return entrenador
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || String(error) }
    }
}

const createOneEntrenador = async (newEntrenador) => {
    try {
        const createdEntrenador = await prisma.entrenadores.create({
            data: {
                ...newEntrenador
            }
        })
        return createdEntrenador
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || String(error) }
    }
}

const deleteOneEntrenador = async (entrenadorId) => {
    try {
        const exist = await prisma.entrenadores.findUnique({
            where: {
                id: entrenadorId
            }
        })

        if (!exist) {
            throw { status: 404, message: `Can't find entrenador with ID '${entrenadorId}'` }
        }

        const deleted = await prisma.entrenadores.delete({
            where: {
                id: entrenadorId
            }
        })

        return deleted
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || String(error) }
    }
}

module.exports = {
    getAllEntrenadores,
    getOneEntrenador,
    createOneEntrenador,
    deleteOneEntrenador
}