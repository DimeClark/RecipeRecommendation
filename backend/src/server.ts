import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import compression from 'compression'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

import recipeRoutes from './routes/recipes'
import userRoutes from './routes/users'
import authRoutes from './routes/auth'
import recommendationRoutes from './routes/recommendations'
import shoppingListRoutes from './routes/shoppingLists'
import ingredientRoutes from './routes/ingredients'
import errorHandler from './middleware/errorHandler'
import { logger } from './utils/logger'

const app = express()
const PORT = process.env.PORT || 3001

// Security middleware
app.use(helmet())

// CORS configuration
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:5173',
  credentials: true
}))

// Rate limiting
const limiter = rateLimit({
  windowMs: Number(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: Number(process.env.RATE_LIMIT_MAX_REQUESTS) || 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.'
})
app.use(limiter)

// Body parsing middleware
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Compression middleware
app.use(compression())

// Logging middleware
app.use(morgan('combined', { stream: { write: (message) => logger.info(message.trim()) } }))

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV
  })
})

// API routes
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/recipes', recipeRoutes)
app.use('/api/recommendations', recommendationRoutes)
app.use('/api/shopping-lists', shoppingListRoutes)
app.use('/api/ingredients', ingredientRoutes)

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Route ${req.originalUrl} not found`
  })
})

// Error handling middleware
app.use(errorHandler)

// Start server
app.listen(PORT, () => {
  logger.info(`🚀 Server running on port ${PORT}`)
  logger.info(`📊 Environment: ${process.env.NODE_ENV}`)
  logger.info(`🌐 CORS enabled for: ${process.env.CORS_ORIGIN}`)
})

export default app
