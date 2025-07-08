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
        res.status(500).json({ error: err.message })
    }
});

router.post('/', async (req, res) => {
    try {
        const nuevo = await controller.create(req.body)
        res.status(201).json(nuevo)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.put('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      return res.status(400).json({ error: 'ID inválido' });
    }

    const updated = await controller.update(id, req.body);

    if (!updated) {
      return res.status(404).json({ error: 'Pokémon no encontrado o sin cambios' });
    }

    res.status(200).json(updated);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

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
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
});


module.exports = router;
