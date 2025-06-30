const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json( {msg: "Status OK"} )
})

router.get('/:id', (req, res) => {
    res.json( {msg: "Status OK"} )
})

router.post('/', (req, res) => {
    res.json( {msg: "Status OK"} )
})

router.put('/:id', (req, res) => {
    res.json( {msg: "Status OK"} )
})

router.delte('/:id', (req, res) => {
    res.json( {msg: "Status OK"} )
})

module.export = router 