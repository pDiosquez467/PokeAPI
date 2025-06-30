const express = require('express');
const router = express.Router();
const controller = require('../controllers/pokemons');

router.get('/', async (req, res) => {
    try {
        const pokemons = await controller.getAll();
        res.json(pokemons);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        if (isNaN(id)) {
            return res.status(400).json({ error: 'ID inválido' });
        }

        const pokemon = await controller.get(id);

        if (!pokemon) {
            return res.status(404).json({ error: 'Pokémon no encontrado' });
        }

        res.json(pokemon);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', (req, res) => {
    res.json({ msg: "Status OK" });
});

router.put('/:id', (req, res) => {
    res.json({ msg: "Status OK" })
});

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: 'ID inválido' })
    }

    const deleted = await controller.deleteByID(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Pokémon no encontrado' })
    }

    res.json({
      msg: 'Pokémon eliminado correctamente',
      data: deleted
    })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
});


module.exports = router;
