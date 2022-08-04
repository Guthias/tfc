import { NextFunction, Request, Response } from 'express';
import HttpError from '../errors/HttpError';

const ErrorHandler = (err: HttpError, _req: Request, res: Response, next: NextFunction) => {
  if (err) {
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
  next();
};

export default ErrorHandler;
