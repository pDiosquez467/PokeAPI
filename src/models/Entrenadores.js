const prisma = require('../prisma/prisma')

const getAllEntrenadores = async () => {
    return await prisma.entrenadores.findMany()
}