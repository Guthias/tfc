import { ITokenProvider } from '../../providers/ITokenProvider';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import GetRoleDTO from './GetRoleDTO';

class GetRoleUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private tokenProvider: ITokenProvider,
  ) { }

  async execute(data: GetRoleDTO) {
    const tokenData = this.tokenProvider.decodeToken(data.token);

    const role = await this.usersRepository.getRoleById(tokenData.id);

    return role;
  }
}

export default GetRoleUseCase;
