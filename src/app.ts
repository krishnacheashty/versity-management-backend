import express, { Application } from 'express'
import cors from 'cors'
import globalErrorHandeler from './app/midelwares/globaleErrorHandeler'
import { UserRoutes } from './app/modulers/users/user.router'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/user/', UserRoutes)

// app.get('/', async (req: Request, res: Response) => {
//   Promise.reject(new Error('tasting error handeling'))
// })

// app.get('/', async (req: Request, res: Response) => {
//   // res.send('working successfully')
//   throw new Error('ore baba error')
// })
app.use(globalErrorHandeler)

export default app
