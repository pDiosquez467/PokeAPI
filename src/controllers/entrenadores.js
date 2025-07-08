const db = require('../db/conexion')

async function getAll() {
    const result = await db.query(`SELECT * FROM entrenadores;`)
    return result.rows
}

async function get(id) {
    const result = await db.query(`SELECT * FROM entrenadores WHERE id = $1`,
    [id])
    return result.rows[0]
}

async function create(data) {
    const query = `INSERT INTO entrenadores
    (nombre, nacionalidad, escuela, medallas, pokemon_default, edad, experiencia)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`

    const values = [
        data.nombre,
        data.nacionalidad ?? null,
        data.escuela ?? null,
        data.medallas ?? null,
        data.pokemon_default,
        data.edad ?? 0,
        data.experiencia ?? 0
    ]

    const result = await db.query(query, values)
    return result.rows[0]
}

async function update(id, data) {
  const fields = [];
  const values = [];
  let i = 1;

  if (data.nombre !== undefined) {
    fields.push(`nombre = $${i++}`);
    values.push(data.nombre);
  }

  if (data.origen !== undefined) {
    fields.push(`origen = $${i++}`);
    values.push(data.origen);
  }

  if (data.escuela !== undefined) {
    fields.push(`escuela = $${i++}`);
    values.push(data.escuela);
  }

  if (data.medallas !== undefined) {
    fields.push(`medallas = $${i++}`);
    values.push(data.medallas);
  }

  if (data.pokemon_default !== undefined) {
    fields.push(`pokemon_default = $${i++}`);
    values.push(data.pokemon_default);
  }

  if (data.edad !== undefined) {
    fields.push(`edad = $${i++}`);
    values.push(data.edad);
  }

  if (data.experiencia !== undefined) {
    fields.push(`experiencia = $${i++}`);
    values.push(data.experiencia);
  }

  if (fields.length === 0) {
    return undefined; 
  }

  values.push(id); 
  const query = `UPDATE entrenadores SET ${fields.join(', ')} WHERE id = $${i} RETURNING *`;

  const updated = await db.query(query, values);
  return updated.rows[0]; 
}

async function deleteByID(id) {
    const deleted = await db.query(`DELETE FROM entrenadores WHERE id = $1 RETURNING *`,
        [id]
    )
    return deleted.rows[0]
} 


module.exports = {
    getAll,
    get, 
    create, 
    update,
    deleteByID
}