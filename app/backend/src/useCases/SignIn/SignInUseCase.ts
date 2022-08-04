import { IUsersRepository } from '../../repositories/IUsersRepository';
import { ISignInDTO } from './SignInDTO';
import { ITokenProvider } from '../../providers/ITokenProvider';
import HttpError from '../../errors/HttpError';
import { IHashProvider } from '../../providers/IHashProvider';

class signInUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private tokenProvider: ITokenProvider,
    private hashProvider: IHashProvider,
  ) { }

  async execute(data: ISignInDTO) {
    const user = await this.usersRepository.findByEmail(data.email);

    if (!user) throw new HttpError(401, 'Incorrect email or password');

    const match = await this.hashProvider.comparePassword(data.password, user.password);

    if (!match) throw new HttpError(401, 'Incorrect email or password');

    const token = this.tokenProvider.generateToken({
      id: user.id,
      username: user.username,
      email: user.email,
    });

    return token;
  }
}

export default signInUseCase;
