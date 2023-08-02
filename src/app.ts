import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modulers/users/user.router'

const app: Application = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/user/', userRouter)

app.get('/', async (req: Request, res: Response) => {
  res.send('working successfully')
})

export default app
