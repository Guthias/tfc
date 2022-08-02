import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

const AuthVerify = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  const SECRET = process.env.JWT_SECRET as string;

  try {
    if (!token) throw new Error('Missing token');
    jwt.verify(token, SECRET);
  } catch (e) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  return next();
};

export default AuthVerify;
