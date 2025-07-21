const request = require('supertest')
const app = require('../src/app')

describe('GET /api/v2/pokemons', () => {
    test('Should return an array of pokemons', async () => {
        const res = await request(app).get('/api/v2/pokemons')
        expect(res.statusCode).toBe(200)
        expect(res.body).toHaveProperty('status', 'OK')
        expect(res.body).toHaveProperty('data')
        expect(Array.isArray(res.body.data)).toBe(true)
    })
})

describe('GET /api/v2/pokemons/id/:id', () => {
    test('Should return an existing Pokemon (status 200)', async () => {
        const res = await request(app).get('/api/v2/pokemons/id/3')
        expect(res.statusCode).toBe(200)
        expect(res.body.data).toHaveProperty('id', 2)
        expect(res.body.data).toHaveProperty('nombre')
    })

    test('Should return "Pokemon NOT FOUND"', async () => {
        const res = await request(app).get('/api/v2/pokemons/id/9999')
        expect(res.statusCode).toBe(404)
    })

    test('Should return status 400 BAD REQUEST', async () => {
        const res = await request(app).get('/api/v2/pokemons/id/abc')
        expect(res.statusCode).toBe(400)
    })
})

describe('DELETE /api/v2/pokemons/id/:id', () => {
    test('Should return a deleted pokemon (status 200)', async () => {
        const res = await request(app).delete('/api/v2/pokemons/id/3')
        expect(res.statusCode).toBe(200)
        expect(res.body.data).toHaveProperty('id', 3)
        expect(res.body.data).toHaveProperty('nombre', 'TestMon UpUp')
    })

    test('Should return status 404 NOT FOUND', async () => {
        const res = await request(app).delete('/api/v2/pokemons/id/0').send()
        expect(res.statusCode).toBe(404)
    })

    // test('Should return status 400 BAD REQUEST', async () => {
    //     const res = await request(app).delete('/api/v2/pokemons/abc').send()
    //     expect(res.statusCode).toBe(400)
    // })
})