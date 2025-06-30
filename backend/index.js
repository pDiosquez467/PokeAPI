const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())

app.get('/api/health', (req, res) => {
    res.json({ msg: "Hola, Mundo!" })
})

app.listen(PORT, () => {
    console.log('Activo')
})