import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import { ITokenProvider, tokenData } from '../ITokenProvider';

export default class JWtTokenProvider implements ITokenProvider {
  private secret = process.env.SECRET || 'tokenSecreto';

  generateToken({ id, email, username }: tokenData): string {
    const token = jwt.sign({ id, email, username }, this.secret, {
      expiresIn: '15m',
      algorithm: 'HS256',
    });

    return token;
  }
}
