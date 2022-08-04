import { Request, Response, NextFunction } from 'express';
import HttpError from '../../errors/HttpError';
import { ITokenProvider } from '../../providers/ITokenProvider';

export default class AuthVerify {
  constructor(
    private tokenProvider: ITokenProvider,
  ) { }

  async handle(req: Request, _res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    if (!token) throw new HttpError(401, 'Missing token');

    if (this.tokenProvider.verifyToken(token)) {
      return next();
    }
    throw new HttpError(401, 'Token must be a valid token');
  }
}
