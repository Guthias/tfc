import user from '../../entries/User';
import { IUsersRepository } from '../IUsersRepository';
import Users from '../../database/models/UserModel';

export default class SequelizeUsersRepository implements IUsersRepository {
  public findByEmail = async (email: string): Promise<user | null> => {
    const foundUser = await Users.findOne({
      where: { email },
    });

    if (!foundUser) return null;

    return foundUser as unknown as user;
  };
}
