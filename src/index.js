const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
 
const pokemonsRoutes = require('./routes/pokemons')
app.use('/api/pokemons', pokemonsRoutes)

const entrenadoresRoutes = require('./routes/entrenadores')
app.use('/api/entrenadores', entrenadoresRoutes)

const combatesRoutes = require('./routes/combates')
app.use('/api/combates', combatesRoutes)

app.use(express.json())

app.get('/api/health', (req, res) => {
    res.json({ msg: "Hola, Mundo!" })
})

app.listen(PORT, () => {
    console.log('Activo')
})