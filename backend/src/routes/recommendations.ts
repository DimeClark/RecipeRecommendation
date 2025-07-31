import { Router } from 'express'

const router = Router()

// POST /api/recommendations
router.post('/', (req, res) => {
  res.json({
    message: 'Recipe recommendations - Coming soon!',
    recommendations: []
  })
})

export default router
