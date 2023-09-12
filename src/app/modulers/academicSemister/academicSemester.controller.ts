import { Request, Response, NextFunction } from 'express'
import { AcademicSemesterService } from './academicSemester.service'
import caughtAsync from '../../../sheared/caughtAsync'
import sendResponce from '../../../sheared/sendResponce'
import httpStatus from 'http-status'

const createSemester = caughtAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body

    const result = await AcademicSemesterService.createAcademicSemester(
      academicSemesterData,
    )

    sendResponce(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'successfully create Academic Semester Data',
      data: result,
    })
    next()
  },
)

export const AcademicSemesterController = {
  createSemester,
}
