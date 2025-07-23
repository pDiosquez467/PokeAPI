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

const updateOneEntrenador = async (entrenadorId, changes) => {
    try {
        const exists = await prisma.entrenadores.findUnique({
            where: {
                id: entrenadorId
            }
        })

        if (!exists) {
            throw { status: 404, message: `Can't find entrenador with ID '${entrenadorId}'` }
        }

        const updated = await prisma.entrenadores.update({
            where: {
                id: entrenadorId
            },
            data: changes
        })
        return updated
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

const getAllPokemonsByEntrenador = async (entrenadorId) => {
    try {
        const allPokemons = await prisma.entrenadores_pokemons.findMany({
            where: {
                entrenador_id: entrenadorId
            },
            include: {
                pokemon: true
            }
        })

        return allPokemons
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || String(error) }
    }
}

const getAllCombates = async (entrenadorId) => {
    try {
        const allCombates = await prisma.combates.findMany({
            where: {
                OR: [
                    { entrenador1_id: entrenadorId },
                    { entrenador2_id: entrenadorId }
                ]
            },
            include: {
                entrenadores_combates_entrenador1_idToentrenadores: true,
                entrenadores_combates_entrenador2_idToentrenadores: true,
                pokemons_combates_pokemon1_idTopokemons: true,
                pokemons_combates_pokemon2_idTopokemons: true
            }
        })

        return allCombates
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || String(error) }
    }
}

module.exports = {
    getAllEntrenadores,
    getOneEntrenador,
    createOneEntrenador,
    updateOneEntrenador,
    deleteOneEntrenador,
    getAllPokemonsByEntrenador,
    getAllCombates
}