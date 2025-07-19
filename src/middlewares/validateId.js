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

module.exports = {
    validateId
}