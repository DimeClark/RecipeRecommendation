import { Router } from 'express'

const router = Router()

// POST /api/auth/login
router.post('/login', (req, res) => {
  res.json({
    message: 'Login - Coming soon!',
    token: null
  })
})

// POST /api/auth/register
router.post('/register', (req, res) => {
  res.json({
    message: 'Register - Coming soon!',
    user: null
  })
})

export default router
