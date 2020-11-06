const express = require('express');

const Recipes = require('./recipes-model')

const router = express.Router()

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.json(recipes)
    })
    .catch(error => {
        res.status(500).json({ message: 'Failed to get schemes' });
    })
})

router.get('/:id/shoppingList', (req, res) => {
    const {id} = req.params

    Recipes.getShoppingList(id)
    .then(steps => {
      if (steps.length) {
        res.json(steps);
      } else {
        res.status(404).json({ message: 'Could not find steps for given scheme' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get steps' });
    });
})

router.get('/:id/instructions', (req, res) => {
    const {id} = req.params

    Recipes.getInstructions(id)
    .then(instruction => {
        if (instruction.length) {
            res.json(instruction);
          } else {
            res.status(404).json({ message: 'Could not find instructions for given scheme' })
          }
    })
    .catch(err => {
        res.status(500).json({ message: err.message });
      });
})

module.exports= router;