const prisma = require('../prisma/prisma')

async function getAllPokemons() {
    try {
        return await prisma.pokemons.findMany()
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || String(error) }
    }
}

async function getOnePokemon(pokemonId) {
    try {
        const pokemon = await prisma.pokemons.findUnique({
            where: {
                id: pokemonId
            }
        })

        if (!pokemon) {
            throw { status: 404, message: `Can't find pokemon with ID '${pokemonId}'` }
        }

        return pokemon

    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || String(error) }
    }
}

async function createOnePokemon(newPokemon) {
    try {
        const createdPokemon = await prisma.pokemons.create({
            data: {
                ...newPokemon
            }
        })
        return createdPokemon

    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || String(error) }
    }
}

async function updateOnePokemon(pokemonId, changes) {
    try {

        const exists = await prisma.pokemons.findUnique({
            where: {
                id: pokemonId
            }
        })

        if (!exists) {
            throw { status: 404, message: `Can't find pokemon with ID '${pokemonId}'` }
        }

        const updatedPokemon = await prisma.pokemons.update({
            where: {
                id: pokemonId
            },
            data: changes
        })

        return updatedPokemon

    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || String(error) }
    }
}

async function deleteOnePokemon(pokemonId) {
    try {
        const exists = await prisma.pokemons.findUnique({
            where: {
                id: pokemonId
            }
        })

        if (!exists) {
            throw { status: 404, message: `Can't find pokemon with ID '${pokemonId}'` }
        }

        const deleted = await prisma.pokemons.delete({
            where: {
                id: pokemonId
            }
        })
        return deleted

    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || String(error) }
    }
}

async function getPokemonsByTipo(tipo) {
    try {
        const pokemons = await prisma.pokemons.findMany({
            where: {
                tipo: {
                    contains: tipo,
                    mode: 'insensitive'
                }
            }
        })

        return pokemons
    } catch (error) {
        throw {
            status: error?.status || 500,
            message: error?.message || String(error)
        }
    }
}

module.exports = {
    getAllPokemons,
    getOnePokemon,
    createOnePokemon,
    updateOnePokemon,
    deleteOnePokemon,
    getPokemonsByTipo
}
