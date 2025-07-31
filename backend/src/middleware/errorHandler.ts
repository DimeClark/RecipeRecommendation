import { Request, Response, NextFunction } from 'express'

interface AppError extends Error {
  statusCode?: number
  status?: string
  isOperational?: boolean
}

const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500
  err.status = err.status || 'error'

  if (process.env.NODE_ENV === 'development') {
    res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    })
  } else {
    // Production error response
    if (err.isOperational) {
      res.status(err.statusCode).json({
        status: err.status,
        message: err.message
      })
    } else {
      res.status(500).json({
        status: 'error',
        message: 'Something went wrong!'
      })
    }
  }
}

export default errorHandler
