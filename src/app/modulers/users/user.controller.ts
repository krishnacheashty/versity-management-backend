import { Request, Response, NextFunction } from 'express'
import { userService } from './user.service'
import caughtAsync from '../../../sheared/caughtAsync'
import sendResponce from '../../../sheared/sendResponce'
import httpStatus from 'http-status'

const createUser = caughtAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body
    const result = await userService.createUser(user)

    sendResponce(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user created successfully',
      data: result,
    })
    next()
  },
)

export const UserController = {
  createUser,
}
