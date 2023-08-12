import { NextFunction, Request, RequestHandler, Response } from 'express'

const caughtAsync =
  (fn: RequestHandler) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error)
    }
  }

export default caughtAsync
