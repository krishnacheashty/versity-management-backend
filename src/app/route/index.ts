import express from 'express'
import { UserRoutes } from '../modulers/users/user.router'
import { SemesterRoutes } from '../modulers/academicSemister/academicSemester.router'

const router = express.Router()

const moduleRouters = [
  {
    path: '/user/',
    router: UserRoutes,
  },
  {
    path: '/academic-semester/',
    router: SemesterRoutes,
  },
]

moduleRouters.forEach(route => router.use(route.path, route.router))

export default router
