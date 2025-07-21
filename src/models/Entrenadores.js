const prisma = require('../prisma/prisma')

const getAllEntrenadores = async () => {
    try {
        return await prisma.entrenadores.findMany()
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || String(error) }
    }
}


module.exports = {
    getAllEntrenadores
}