import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import { ITokenProvider, ITokenData } from '../ITokenProvider';

export default class JWtTokenProvider implements ITokenProvider {
  private secret = process.env.JWT_SECRET || 'jwt_secret';

  generateToken({ id, email, username }: ITokenData): string {
    const token = jwt.sign({ id, email, username }, this.secret, {
      expiresIn: '15m',
    });

    return token;
  }

  decodeToken = (token: string): ITokenData => {
    const tokenData = jwt.decode(token) as ITokenData;
    return tokenData;
  };

  verifyToken(token: string): boolean {
    try {
      jwt.verify(token, this.secret);
      return true;
    } catch (e) {
      return false;
    }
  }
}
