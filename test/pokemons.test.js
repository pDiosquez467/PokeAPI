const request = require('supertest')
const app = require('../src/app') 

describe('Pokemons API', () => {

    let createdPokemonId = null

    describe('GET /api/v2/pokemons', () => {
        test('should return all pokemons', async () => {
            const res = await request(app).get('/api/v2/pokemons')
            expect(res.statusCode).toBe(200)
            expect(res.body.status).toBe('OK')
            expect(Array.isArray(res.body.data)).toBe(true)
        })
    })

    describe('POST /api/v2/pokemons', () => {
        test('should create a new pokemon', async () => {
            const newPokemon = {
                nombre: 'Charmander',
                tipo: 'Fuego',
                altura: 0.6,
                peso: 8.5
            }

            const res = await request(app)
                .post('/api/v2/pokemons')
                .send(newPokemon)

            expect(res.statusCode).toBe(201)
            expect(res.body.status).toBe('OK')
            expect(res.body.data).toHaveProperty('id')
            expect(res.body.data.nombre).toBe(newPokemon.nombre)

            createdPokemonId = res.body.data.id
        })

        test('should return 400 if missing fields', async () => {
            const res = await request(app)
                .post('/api/v2/pokemons')
                .send({ nombre: 'Bulbasaur' })

            expect(res.statusCode).toBe(400)
            expect(res.body.status).toBe('FAILED')
        })
    })

    describe('GET /api/v2/pokemons/id/:id', () => {
        test('should get a pokemon by ID', async () => {
            const res = await request(app)
                .get(`/api/v2/pokemons/id/${createdPokemonId}`)

            expect(res.statusCode).toBe(200)
            expect(res.body.status).toBe('OK')
            expect(res.body.data).toHaveProperty('id', createdPokemonId)
        })

        test('should return 404 for non-existent ID', async () => {
            const res = await request(app).get('/api/v2/pokemons/id/999999')
            expect(res.statusCode).toBe(404)
        })

        test('should return 400 for invalid ID', async () => {
            const res = await request(app).get('/api/v2/pokemons/id/abc')
            expect(res.statusCode).toBe(400)
        })
    })

    describe('PATCH /api/v2/pokemons/id/:id', () => {
        test('should update the pokemon', async () => {
            const changes = { peso: 10.0 }

            const res = await request(app)
                .patch(`/api/v2/pokemons/id/${createdPokemonId}`)
                .send(changes)

            expect(res.statusCode).toBe(200)
            expect(res.body.status).toBe('OK')
            expect(res.body.data.peso).toBe(changes.peso)
        })

        test('should return 404 for non-existent ID', async () => {
            const res = await request(app)
                .patch('/api/v2/pokemons/id/99999')
                .send({ peso: 12.0 })

            expect(res.statusCode).toBe(404)
        })

        test('should return 400 for invalid ID', async () => {
            const res = await request(app)
                .patch('/api/v2/pokemons/id/abc')
                .send({ peso: 12.0 })

            expect(res.statusCode).toBe(400)
        })
    })

    describe('DELETE /api/v2/pokemons/id/:id', () => {
        test('should delete the pokemon', async () => {
            const res = await request(app)
                .delete(`/api/v2/pokemons/id/${createdPokemonId}`)

            expect(res.statusCode).toBe(202)
            expect(res.body.status).toBe('OK')
            expect(res.body.data.id).toBe(createdPokemonId)
        })

        test('should return 404 if already deleted or not found', async () => {
            const res = await request(app)
                .delete(`/api/v2/pokemons/id/${createdPokemonId}`)

            expect(res.statusCode).toBe(404)
        })

        test('should return 400 for invalid ID', async () => {
            const res = await request(app)
                .delete('/api/v2/pokemons/id/abc')

            expect(res.statusCode).toBe(400)
        })
    })

})
