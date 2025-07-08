const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Get All pokemons!')
})

router.get('/:pokemonId', (req, res) => {
    res.send('Get an existing pokemon!')
})

router.post('/', (req, res) => {
    res.send('Create a new pokemon!')
})

router.patch('/:pokemonId', (req, res) => {
    res.send('Update an existing pokemon!')
})

router.delete('/:pokemonId', (req, res) => {
    res.send('Delete an existing pokemon!')
})


module.exports = router