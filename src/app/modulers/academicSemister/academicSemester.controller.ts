import { RequestHandler } from 'express'
import { AcademicSemesterService } from './academicSemester.service'

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemesterData } = req.body

    const result = await AcademicSemesterService.createAcademicSemester(
      academicSemesterData,
    )

    res.status(200).json({
      success: 'true',
      message: 'successfully create Academic Semester Data',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const AcademicSemesterController = {
  createSemester,
}
