import express, { Application } from 'express'
import cors from 'cors'
import userRouter from './app/modulers/users/user.router'
import globalErrorHandeler from './app/midelwares/globaleErrorHandeler'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/user/', userRouter)

// app.get('/', async (req: Request, res: Response) => {
//   res.send('working successfully')
// })
app.use(globalErrorHandeler)

export default app
