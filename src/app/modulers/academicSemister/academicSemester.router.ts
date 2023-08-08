import express from 'express'
import { AcademicSemesterValidetion } from './academicSemester.validation'
import validateRequest from '../../midelwares/validationRequest'

const router = express.Router()

router.post(
  '/create-academicsemester',
  validateRequest(AcademicSemesterValidetion.zodAcademicSemesterSchema),
)

export const UserRoutes = router
