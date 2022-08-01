import * as bcrypt from 'bcryptjs';
import { IHashProvider } from '../IHashProvider';

export default class BCryptHashProvider implements IHashProvider {
  private salt = 10;

  public async hashPassword(password: string) {
    const hashedPasssword = await bcrypt.hash(password, this.salt);
    return hashedPasssword;
  }

  public comparePassword = async (password: string, hashPassword: string) => {
    const match = await bcrypt.compare(password, hashPassword);
    return match;
  };
}
