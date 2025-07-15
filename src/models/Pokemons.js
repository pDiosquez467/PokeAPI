const prisma = require('../prisma/prisma')

async function getAllPokemons() {
    try {
        return await prisma.pokemons.findMany()
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error }
    }
}

async function getOnePokemon(pokemonId) {
    try {
        const pokemon = await prisma.pokemons.findFirst({
            where: {
                id: pokemonId
            }
        })

        if (!pokemon) {
            throw { status: 'FAILED', message: `Can't find pokemon with ID '${pokemonId}'` }
        }

        return pokemon

    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error }
    }
}

async function deleteOnePokemon(pokemonId) {
    try {
        const deleted = await prisma.pokemons.delete({
            where: {
                id: pokemonId
            }
        })
        return deleted

    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error }
    }
}

module.exports = {
    getAllPokemons,
    getOnePokemon,
    deleteOnePokemon
}
