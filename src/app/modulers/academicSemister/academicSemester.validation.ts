import { z } from 'zod'
import {
  academicSemesterMonth,
  academicSemestercode,
  academicSemestertitle,
} from './academicSemester.const'

//create zod validation sheama
const zodAcademicSemesterSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemestertitle] as [string, ...string[]], {
      required_error: 'title is required',
    }),
    year: z.number({
      required_error: 'year is required',
    }),
    code: z.enum([...academicSemestercode] as [string, ...string[]], {
      required_error: 'code is required',
    }),
    startMonth: z.enum([...academicSemesterMonth] as [string, ...string[]], {
      required_error: 'start month is required',
    }),
    endMonth: z.enum([...academicSemesterMonth] as [string, ...string[]], {
      required_error: 'end month is required',
    }),
  }),
})

export const AcademicSemesterValidetion = {
  zodAcademicSemesterSchema,
}
