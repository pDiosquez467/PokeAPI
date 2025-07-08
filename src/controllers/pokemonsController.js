const getAllPokemons = async (req, res) => {
    res.send('Get All pokemons')
}

const getOnePokemon = async (req, res) => {
    res.send('Get an existing pokemon')
}

const createNewPokemon = async (req, res) => {
    res.send('Create a new pokemon')
}

const updateOnePokemon = async (req, res) => {
    res.send('Update an existing pokemon')
}

const deleteOnePokemon = async (req, res) => {
    res.send('Delete an existing pokemon')
}

module.exports = {
    getAllPokemons,
    getOnePokemon, 
    createNewPokemon,
    updateOnePokemon,
    deleteOnePokemon
}