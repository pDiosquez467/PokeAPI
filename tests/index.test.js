const request = require('supertest')
const app = require('../src/app')
const pool = require('../src/db/conn')

afterAll(async () => {
  await pool.end()
})

describe('GET /', () => {
  test('Should respond with a 200 status code', async () => {
    const response = await request(app).get('/')
    expect(response.status).toBe(200)
  })
})

describe('GET /api/v1/pokemons', () => {
  test('Should respond with a 200 status code and an array', async () => {
    const response = await request(app).get('/api/v1/pokemons')
    expect(response.status).toBe(200)
    expect(Array.isArray(response.body.data)).toBe(true)
  })
})

describe('POST /api/v1/pokemons', () => {
  const newPokemon = {
    nombre: 'Pikachu',
    tipo: 'Eléctrico',
    nivel_poder: 42,
    altura: 0.4,
    peso: 6.0
  }

  test('Should respond with 201 and return the created Pokémon with an ID', async () => {
    const response = await request(app)
      .post('/api/v1/pokemons')
      .send(newPokemon)

    expect(response.status).toBe(201)
    expect(response.body.data).toHaveProperty('id')
    expect(response.body.data.nombre).toBe(newPokemon.nombre)
  })


  test('Should have content-type: application/json', async () => {
    const response = await request(app)
      .post('/api/v1/pokemons')
      .send(newPokemon)

    expect(response.header['content-type']).toMatch(/application\/json/)
  })
})
