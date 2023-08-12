import {
  IAcademicSemesterCode,
  IAcademicSemesterMonth,
  IAcademicSemesterTitle,
} from './academicSemester.interface'

export const academicSemesterMonth: IAcademicSemesterMonth[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const academicSemestertitle: IAcademicSemesterTitle[] = [
  'Autumn',
  'Summer',
  'Fall',
]
export const academicSemestercode: IAcademicSemesterCode[] = ['01', '02', '03']

//here we make a type of key value and use in mapper.this mapper take it like a parameter like key value
export const academicSemesterTitleCodeMapper: { [key: string]: string } = {
  Autumn: '01',
  Summer: '02',
  Fall: '03',
}
