import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import { ITokenProvider, tokenData } from '../ITokenProvider';

export default class JWtTokenProvider implements ITokenProvider {
  private secret = process.env.JWT_SECRET || 'jwt_secret';

  generateToken({ id, email, username }: tokenData): string {
    const token = jwt.sign({ id, email, username }, this.secret, {
      expiresIn: '15m'
    });

    return token;
  }
}
