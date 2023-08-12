import { ZodError, ZodIssue } from 'zod'
import { IGenericErrormessage } from '../interfaces/error'
import { IGenericErrorResponse } from '../interfaces/common'

const handelZodError = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrormessage[] = error.issues.map((issue: ZodIssue) => {
    //console.log('eta amer error', error)
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue?.message,
    }
  })

  const statusCode = 400
  return {
    statusCode,
    message: 'validation error',
    errorMessages: errors,
  }
}

export default handelZodError
