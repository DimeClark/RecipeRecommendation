import { Router } from 'express'

const router = Router()

// GET /api/recipes
router.get('/', (req, res) => {
  res.json({
    message: 'Recipes endpoint - Coming soon!',
    recipes: []
  })
})

// GET /api/recipes/:id
router.get('/:id', (req, res) => {
  const { id } = req.params
  res.json({
    message: `Recipe ${id} - Coming soon!`,
    recipe: null
  })
})

// POST /api/recipes
router.post('/', (req, res) => {
  res.json({
    message: 'Create recipe - Coming soon!',
    recipe: null
  })
})

export default router
