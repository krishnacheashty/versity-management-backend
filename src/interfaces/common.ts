import { IGenericErrormessage } from './error'

export type IGenericErrorResponse = {
  statusCode: number
  message: string
  errorMessages: IGenericErrormessage[]
}
