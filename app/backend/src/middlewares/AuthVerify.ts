import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import HttpError from '../errors/HttpError';

const AuthVerify = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  const SECRET = process.env.JWT_SECRET as string;

  try {
    if (!token) throw new HttpError(401, 'Missing token');
    jwt.verify(token, SECRET);
  } catch (e) {
    throw new HttpError(401, 'Token must be a valid token');
  }

  return next();
};

export default AuthVerify;
