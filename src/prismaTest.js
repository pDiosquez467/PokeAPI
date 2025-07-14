const prisma = require('./prisma/prisma')

async function main() {
  const resultado = await prisma.pokemons.findMany()
  console.log('✅ Pokémons:', resultado)
}

main()
  .catch((e) => console.error('❌ Prisma error:', e))
  .finally(() => prisma.$disconnect())
