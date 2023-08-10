import express from 'express'
import { AcademicSemesterValidetion } from './academicSemester.validation'
import validateRequest from '../../midelwares/validationRequest'
import { AcademicSemesterController } from './academicSemester.controller'

const router = express.Router()

router.post(
  '/create-academicsemester',
  validateRequest(AcademicSemesterValidetion.zodAcademicSemesterSchema),
  AcademicSemesterController.createSemester,
)

export const SemesterRoutes = router
