import { Schema, model } from 'mongoose'
import {
  AcademicSemesterModel,
  IAcademicSemester,
} from './academicSemester.interface'
import {
  academicSemesterMonth,
  academicSemestercode,
  academicSemestertitle,
} from './academicSemester.const'
import status from 'http-status'
import ApiError from '../../../error/ApiError'

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      enum: academicSemestertitle,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemestercode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonth,
    },
  },
  {
    timestamps: true,
  },
)
//regist duplicate semester
academicSemesterSchema.pre('save', async function (next) {
  const isExist = await AcademicSemester.findOne({
    title: this.title,
    year: this.year,
  })
  if (isExist) {
    throw new ApiError(
      status.CONFLICT,
      'univercity semester is already created !',
    )
  }
  next()
})

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema,
)
