import User from '../entries/User';

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | null>
}
