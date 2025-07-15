const prisma = require('../prisma/prisma')

async function getAllPokemons() {
    return await prisma.pokemons.findMany()
} 

module.exports = {
    getAllPokemons
}
