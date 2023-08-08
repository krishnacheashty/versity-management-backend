/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
import { ErrorRequestHandler } from 'express'
import config from '../../config'
import handelValidationError from '../../error/handelValidationError'
import { IGenericErrormessage } from '../../interfaces/error'
import ApiError from '../../error/ApiError'
import { errorlogger } from '../../sheared/logger'
import { ZodError } from 'zod'
import handelZodError from '../../error/handelZodError'

const globalErrorHandeler: ErrorRequestHandler = (error, req, res, next) => {
  // for controlling console depend on config.env

  config.env === 'development'
    ? console.log(`🦄 golbalhandeler `, error)
    : errorlogger.error('🦄 golbalhandeler ', error)

  let statusCode = 500
  let message = 'something want wrong'
  let errormessage: IGenericErrormessage[] = []

  if (error?.name === 'ValidationError') {
    const simplefiederror = handelValidationError(error)
    statusCode = simplefiederror.statusCode
    message = simplefiederror.message
    errormessage = simplefiederror.errorMessages
  } else if (error instanceof ZodError) {
    const simplifiedzoderror = handelZodError(error)
    statusCode = simplifiedzoderror.statusCode
    message = simplifiedzoderror.message
    errormessage = simplifiedzoderror.errorMessages
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode
    message = error?.message
    errormessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  } else if (error instanceof Error) {
    message = error?.message
    errormessage = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : []
  }

  res.status(statusCode).json({
    success: false,
    message,
    errormessage,
    stack: config.env !== 'production' ? error?.stack : undefined,
  })
  next()
}

export default globalErrorHandeler
