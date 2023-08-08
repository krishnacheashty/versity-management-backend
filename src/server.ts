import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorlogger, logger } from './sheared/logger'
import { Server } from 'http'

process.on('uncaughtException', error => {
  errorlogger.error(error)
  process.exit(1)
})

let server: Server

async function mongodbConnection() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('🤩 connect to database')

    server = app.listen(config.port, () => {
      logger.info(`Example app listening on port  ${config.port}`)
    })
  } catch (error) {
    errorlogger.error('failed to data base connection', error)
  }
  // unhandeledRejection bannan vul hole  process.on kaz kore na
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        errorlogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}
mongodbConnection()

process.on('SIGTERM', () => {
  logger.info(`😭 SIGTREM is resevied`)
  if (server) {
    server.close()
  }
})
