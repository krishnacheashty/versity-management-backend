import { Response } from 'express'

type IApiResponce<T> = {
  statusCode: number
  success: boolean
  message?: string | null
  data?: T
}

const sendResponce = <T>(res: Response, data: IApiResponce<T>): void => {
  const responceData = {
    statusCode: data.statusCode,
    success: data.success,
    message: data.message || null,
    data: data.data || null,
  }
  res.status(data.statusCode).json(responceData)
}

export default sendResponce
