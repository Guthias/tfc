import { NextFunction, Request, Response } from 'express';
import IHttpError from '../interfaces/IHttpError';

const ErrorHandler = (err: IHttpError, _req: Request, res: Response, next: NextFunction) => {
  if (err) {
    return res.status(err.status || 500).json({ message: err.message });
  }
  next();
};

export default ErrorHandler;
