import { Request, Response } from 'express'
import userService from './user.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await userService.createUser(user)
    res.status(200).json({
      success: 'true',
      massage: 'successfully create user',
    })
    return result
  } catch (error) {
    res.status(400).json({
      success: 'false',
      massage: 'failed to create user',
    })
  }
}

export default {
  createUser,
}
