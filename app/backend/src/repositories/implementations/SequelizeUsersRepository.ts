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

  public getRoleById = async (id: number): Promise<user['role']> => {
    const { role } = await Users.findOne({
      attributes: ['role'],
      where: { id },
    }) as user;

    if (!role) throw new Error('User doens\'t exist');

    return role as user['role'];
  };
}
