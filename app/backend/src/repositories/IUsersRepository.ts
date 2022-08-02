import User from '../entries/User';

export interface IUsersRepository {
  findByEmail(email: string): Promise<User | null>
  getRoleById(id: number): Promise<User['role']>
}
