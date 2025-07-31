import { Router } from 'express'

const router = Router()

// GET /api/shopping-lists
router.get('/', (req, res) => {
  res.json({
    message: 'Shopping lists - Coming soon!',
    lists: []
  })
})

export default router
