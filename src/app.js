const express = require('express')
const app = express()

// const v1PokemonRouter = require('./v2/routes/pokemonsRoutes')

app.use(express.json())

// app.use('/api/v2/pokemons', v1PokemonRouter)

app.get('/', (req, res) => {
    res.send(`<h1>It's working!!</h1>`)
})

module.exports = app 