import { Router } from 'express'

const router = Router()

// GET /api/ingredients
router.get('/', (req, res) => {
  res.json({
    message: 'Ingredients - Coming soon!',
    ingredients: []
  })
})

export default router
