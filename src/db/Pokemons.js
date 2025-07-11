const DB = require('./conn')

const getAllPokemons = async () => {
	try {
		const allPokemons = await DB.query(`SELECT * FROM pokemons;`)
		return allPokemons.rows
	} catch (error) {
		throw { status: error?.status || 500, message: error?.message || error }
	}
}

const getOnePokemon = async (pokemonId) => {
	try {
		const pokemon = await DB.query(`SELECT * FROM pokemons WHERE id = $1;`,
			[pokemonId])

		if (pokemon.rows.length === 0) {
			throw { status: 404, message: `Can't find pokemon with the id '${pokemonId}'` }
		}

		return pokemon.rows[0]
	} catch (error) {
		throw { status: error?.status || 500, message: error?.message || error }
	}
}

const createNewPokemon = async (newPokemon) => {
	const values = [...Object.values(newPokemon)]
	const query = `
    INSERT INTO pokemons (nombre, tipo, nivel_poder, altura, peso)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

	try {
		const result = await DB.query(query, values)
		return result.rows[0]
	} catch (error) {
		throw { status: error?.status || 500, message: error?.message || error }
	}
}

const updateOnePokemon = async (pokemonId, changes) => {
	const fields = []
	const values = []

	if (changes.nombre !== undefined) {
		fields.push(`nombre = $${values.length + 1}`)
		values.push(changes.nombre)
	}

	if (changes.tipo !== undefined) {
		fields.push(`tipo = $${values.length + 1}`)
		values.push(changes.tipo)
	}

	if (changes.habilidades !== undefined) {
		fields.push(`habilidades = $${values.length + 1}`)
		values.push(changes.habilidades)
	}

	if (changes.nivel_poder !== undefined) {
		fields.push(`nivel_poder = $${values.length + 1}`)
		values.push(changes.nivel_poder)
	}

	if (changes.altura !== undefined) {
		fields.push(`altura = $${values.length + 1}`)
		values.push(changes.altura)
	}

	if (changes.peso !== undefined) {
		fields.push(`peso = $${values.length + 1}`)
		values.push(changes.peso)
	}

	if (fields.length === 0) {
		return undefined
	}

	values.push(pokemonId)
	const indiceId = values.length

	try {
		const query = {
			text: `UPDATE pokemons SET ${fields.join(', ')} WHERE id = $${indiceId} RETURNING *;`,
			values: values
		}
		const updatedPokemon = await DB.query(query)

		if (updatedPokemon.rows.length === 0) {
			throw { status: 404, message: `Can't find pokemon with the id '${pokemonId}'` }
		}

		return updatedPokemon.rows[0]
	} catch (error) {
		throw { status: error?.status || 500, message: error?.message || error }
	}
}

const deleteOnePokemon = async (pokemonId) => {
	try {
		const query = `DELETE FROM pokemons WHERE id = $1 RETURNING *;`
		const deletedPokemon = await DB.query(query, [pokemonId])

		if (deletedPokemon.rows.length === 0) {
			throw { status: 404, message: `Can't find pokemon with the id '${pokemonId}'` }
		}

		return deletedPokemon.rows[0]
	} catch (error) {
		throw { status: error?.status || 500, message: error?.message || error }
	}
}

module.exports = {
	getAllPokemons,
	getOnePokemon,
	createNewPokemon,
	updateOnePokemon,
	deleteOnePokemon
}