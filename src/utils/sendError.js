function sendError(res, error) {
    res
        .status(error?.status || 500)
        .send({ 
            status: "FAILED",
            data: { error: error?.message || error }
    })
}

module.exports = {
    sendError
}