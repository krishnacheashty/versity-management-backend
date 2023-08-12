import ApiError from '../../../error/ApiError'
import { academicSemesterTitleCodeMapper } from './academicSemester.const'
import { IAcademicSemester } from './academicSemester.interface'
import { AcademicSemester } from './academicSemester.model'
import httpstatus from 'http-status'

const createAcademicSemester = async (
  payload: IAcademicSemester,
): Promise<IAcademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpstatus.BAD_REQUEST, 'Invelid semester code')
  }
  const result = await AcademicSemester.create(payload)
  return result
}

export const AcademicSemesterService = {
  createAcademicSemester,
}
