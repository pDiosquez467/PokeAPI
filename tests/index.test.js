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
