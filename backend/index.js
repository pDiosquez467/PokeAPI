const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
 
const pokemonsRoutes = require('./routes/pokemons')
app.use('/api/pokemons', pokemonsRoutes)

app.use(express.json())

app.get('/api/health', (req, res) => {
    res.json({ msg: "Hola, Mundo!" })
})

app.listen(PORT, () => {
    console.log('Activo')
})