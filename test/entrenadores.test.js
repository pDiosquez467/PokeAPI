const request = require('supertest')
const app = require('../src/app')

describe('Pokemons API', () => {

    let createdEntrenadorId = null

    describe('GET /api/v2/entrenadores', () => {
        test('Should return all entrenadores', async () => {
            const res = await request(app).get('/api/v2/entrenadores')
            expect(res.statusCode).toBe(200)
            expect(res.body.status).toBe('OK')
            expect(Array.isArray(res.body.data)).toBe(true)
        })
    })

    describe('POST /api/v2/entrenadores', () => {
        test('Should create a new entrenador', async () => {
            const newEntrenador = {
                nombre: 'Ash',
                origen: 'Pueblo 🍭',
                edad: 14
            }

            const res = await request(app).post('/api/v2/entrenadores').send(newEntrenador)

            expect(res.statusCode).toBe(201)
            expect(res.body.status).toBe('OK')
            expect(res.body.data).toHaveProperty('id')
            expect(res.body.data.nombre).toBe(newEntrenador.nombre)

            createdEntrenadorId = res.body.data.id
        })

        test('Should return 400 (BAD REQUEST) if missing fields', async () => {
            const res = await request(app).post('/api/v2/entrenadores').send({
                origen: 'Pueblo 🍭'
            })

            expect(res.statusCode).toBe(400)
            expect(res.body.status).toBe('FAILED')
        })
    })

    describe('GET /api/v2/entrenadores/id/:id', () => {
        test('Should get a entrenador by ID', async () => {
            const res = await request(app).get(`/api/v2/entrenadores/id/${createdEntrenadorId}`)

            expect(res.statusCode).toBe(200)
            expect(res.body.status).toBe('OK')
            expect(res.body.data).toHaveProperty('id', createdEntrenadorId)
        })

        test('Should return 404 NOT FOUND for non-existent ID', async () => {
            const res = await request(app).get('/api/v2/entrenadores/id/0')
            expect(res.statusCode).toBe(404)
        })
    })

    test('Should return 400 for invalid ID', async () => {
        const res = await request(app).get('/api/v2/entrenadores/id/abc')
        expect(res.statusCode).toBe(400)
    })

    describe('DELETE /api/v2/entrenadores/id/:id', () => {
        test('Should delete the entrenador', async () => {
            const res = await request(app).delete(`/api/v2/entrenadores/id/${createdEntrenadorId}`)

            expect(res.statusCode).toBe(202)
            expect(res.body.status).toBe('OK')
            expect(res.body.data.id).toBe(createdEntrenadorId)
        })
    })

    test('should return 404 if already deleted or not found', async () => {
        const res = await request(app)
            .delete(`/api/v2/entrenadores/id/${createdEntrenadorId}`)

        expect(res.statusCode).toBe(404)
    })

    test('should return 400 for invalid ID', async () => {
        const res = await request(app)
            .delete('/api/v2/entrenadores/id/abc')

        expect(res.statusCode).toBe(400)
    })

})