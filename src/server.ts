import mongoose from 'mongoose'
import app from './app'
import config from './config/index'
import { errorLogger, logger } from './sheared/logger'

async function mongodbConnection() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info('🤩 connect to database')
    app.listen(config.port, () => {
      logger.info(`Example app listening on port  ${config.port}`)
    })
  } catch (err) {
    errorLogger.error('failed to data base connection', err)
  }
}
mongodbConnection()
