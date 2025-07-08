const DB = require('./conn')

const getAllPokemons = async () => {
    const allPokemons = await DB.query(`SELECT * FROM pokemons;`)
    return allPokemons.rows
}

const getOnePokemon = async (pokemonId) => {
    const pokemon = await DB.query(`SELECT * FROM pokemons WHERE id = $1;`,
    [pokemonId])
    return pokemon.rows[0]
}

const createNewPokemon = async (newPokemon) => {
  const values = [...Object.values(newPokemon)]
  const query = `
    INSERT INTO pokemons (nombre, tipo, nivel_poder, altura, peso)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;
  
  const result = await DB.query(query, values)
  return result.rows[0]
}

module.exports = {
    getAllPokemons, 
    getOnePokemon
}