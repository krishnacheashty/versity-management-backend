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

const academicSemesterSchema = new Schema<IAcademicSemester>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      enum: academicSemestertitle,
    },
    year: {
      type: String || Number,
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

export const AcademicSemester = model<IAcademicSemester, AcademicSemesterModel>(
  'AcademicSemester',
  academicSemesterSchema,
)
