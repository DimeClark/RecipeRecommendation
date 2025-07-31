import { Router } from 'express'

const router = Router()

// GET /api/users/profile
router.get('/profile', (req, res) => {
  res.json({
    message: 'User profile - Coming soon!',
    user: null
  })
})

export default router
