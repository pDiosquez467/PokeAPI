const express = require('express')
const app = express()

const v2PokemonRouter = require('./v2/routes/pokemonsRoutes')

const v2EntrenadorRouter = require('./v2/routes/entrenadoresRoutes')

const { swaggerUi, swaggerSpec } = require('./config/swagger');

app.use(express.json())

app.use('/api/v2/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/v2/pokemons', v2PokemonRouter)

app.use('/api/v2/entrenadores', v2EntrenadorRouter)

app.get('/', (req, res) => {
    res.send(`<h1>It's working!!</h1>`)
})

module.exports = app 