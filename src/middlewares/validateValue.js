async function validateId(req, res, next) {
    let { id } = req.params 

    if (isNaN(id)) {
        return res.status(400).send( {
            status: 'FAILED',
            data: { error: 'Invalid ID' }
        })
    }

    req.params.id = Number(id)
    next()
}

const tiposValidos = [
    'agua', 'fuego', 'planta', 'eléctrico', 'tierra',
    'roca', 'psíquico', 'fantasma', 'veneno', 'lucha',
    'hielo', 'dragón', 'normal', 'volador', 'acero', 'siniestro', 'hada'
]

async function validateTipo(req, res, next) {
    const { tipo } = req.params

    const tipoNormalizado = tipo.toLowerCase().trim()

    if (!tiposValidos.includes(tipoNormalizado)) {
        return res.status(400).json({
            status: 'FAILED',
            data: { error: `"${tipo}" is not a valid type of Pokemon.` }
        })
    }

    req.tipoNormalizado = tipoNormalizado

    next()
}

module.exports = {
    validateId,
    validateTipo
}