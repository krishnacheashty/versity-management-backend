import express, { Application, Response, Request, NextFunction } from 'express'
import cors from 'cors'
import globalErrorHandeler from './app/midelwares/globaleErrorHandeler'
import router from './app/route'
import httpStatus from 'http-status'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/', router)

app.use(globalErrorHandeler)

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API is not exist',
      },
    ],
  })
  next()
})

export default app

// app.get('/', async (req: Request, res: Response) => {
//   Promise.reject(new Error('tasting error handeling'))
// })

// app.get('/', async (req: Request, res: Response) => {
//   // res.send('working successfully')
//   throw new Error('ore baba error')
// })
