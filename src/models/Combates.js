const prisma = require('../prisma/prisma')

const getAllCombates = async () => {
    try {
        return await prisma.combates.findMany()

    } catch (error) {
        throw { status: error?.status ?? 500, message: error?.message ?? error }
    }
}

const getOneCombate = async (combateId) => {
    try {
        const combate = await prisma.combates.findUnique({
            where: {
                id: combateId
            }
        })

        if (!combate) {
            throw { status: 404, message: `Can't find combate with ID '${combateId}'` }
        }

        return combate
    } catch (error) {
        throw { status: error?.status ?? 500, message: error?.message ?? error }
    }
}

const createOneCombate = async (newCombate) => {
    try {
        const created = await prisma.combates.create({
            data: {
                ...newCombate
            }
        })

        return created
    } catch (error) {
        throw { status: error?.status ?? 500, message: error?.message ?? error }
    }
}

const updateOneCombate = async (combateId, changes) => {
    try {
        const exists = await prisma.combates.findUnique({
            where: {
                id: combateId
            }
        })

        if (!exists) {
            throw { status: 404, message: `Can't find combate with ID '${combateId}'` }
        }

        const updated = await prisma.combates.update({
            where: {
                id: combateId
            },
            data: changes
        })

        return updated
    } catch (error) {
        throw { status: error?.status ?? 500, message: error?.message ?? error }
    }
}

const deleteOneCombate = async (combateId) => {
    try {
        const exists = await prisma.combates.findUnique({
            where: {
                id: combateId
            }
        })

        if (!exists) {
            throw { status: 404, message: `Can't find combate with ID '${combateId}'` }
        }

        const deleted = await prisma.combates.delete({
            where: {
                id: combateId
            }
        })

        return deleted
    } catch (error) {
        throw { status: error?.status ?? 500, message: error?.message ?? error }
    }
}

module.exports = {
    getAllCombates,
    getOneCombate,
    createOneCombate,
    updateOneCombate,
    deleteOneCombate
}