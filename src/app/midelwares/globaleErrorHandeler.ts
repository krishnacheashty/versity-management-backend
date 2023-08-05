import { ErrorRequestHandler } from 'express'
import config from '../../config'
import handelValidationError from '../../error/handelValidationError'
import { IGenericErrormessage } from '../../interfaces/error'
import ApiError from '../../error/ApiError'

const globalErrorHandeler: ErrorRequestHandler = (error, req, res, next) => {
  let statusCode = 500
  let message = 'something want wrong'
  let errormessage: IGenericErrormessage[] = []

  if (error?.name === 'ValidationError') {
    const simplefiederror = handelValidationError(error)
    statusCode = simplefiederror.statusCode
    message = simplefiederror.message
    errormessage = simplefiederror.errorMessages
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
