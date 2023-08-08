import { createLogger, format, transports } from 'winston'
import path from 'path'
import DailyRotateFile from 'winston-daily-rotate-file'

const { combine, timestamp, label, prettyPrint, printf } = format

//custom formeter
const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp)
  const hour = date.getHours()
  const minuits = date.getMinutes()
  const seconds = date.getSeconds()
  return `${date.toDateString()} ${hour}:${minuits}:${seconds} [${label}] ${level}: ${message}`
})

const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'KC' }), timestamp(), myFormat, prettyPrint()),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'success',
        'vm-%DATE%-success.log',
      ),
      datePattern: 'DD-MM-YYYY-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '2d',
    }),
  ],
})

const errorlogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'KC' }), timestamp(), myFormat, prettyPrint()),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'error',
        'vm-%DATE%-error.log',
      ),
      datePattern: 'DD-MM-YYYY-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '2d',
    }),
  ],
})

export { logger, errorlogger }
