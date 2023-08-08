import express from 'express'
import { UserController } from './user.controller'
import validateRequest from '../../midelwares/validationRequest'
import { userController } from './user.validation'

const router = express.Router()

router.post(
  '/create-user',
  validateRequest(userController.zodUserValidationSchema),
  UserController.createUser,
)

export const UserRoutes = router
