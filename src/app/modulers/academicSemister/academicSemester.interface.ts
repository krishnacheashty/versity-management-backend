import { Model } from 'mongoose'
export type IAcademicSemesterMonth =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December'

export type IAcademicSemesterTitle = 'autumn' | 'summer' | 'fall'
export type IAcademicSemesterCode = '01' | '02' | '03'

type IAcademicSemester = {
  title: IAcademicSemesterTitle
  year: string | number
  code: IAcademicSemesterCode
  startMonth: IAcademicSemesterMonth
  endMonth: IAcademicSemesterMonth
}

type AcademicSemesterModel = Model<IAcademicSemester, Record<string, unknown>>

export { IAcademicSemester, AcademicSemesterModel }
