import BCryptHashProvider from '../../providers/implementations/BCryptHashProvider';
import JWtTokenProvider from '../../providers/implementations/JWTTokenProvider';

import SignInUseCase from './SignInUseCase';
import SignInController from './SignInController';
import SequelizeUsersRepository from '../../repositories/implementations/SequelizeUsersRepository';

const bcryptHashProvider = new BCryptHashProvider();
const jwtTokenProvider = new JWtTokenProvider();
const sequelizeUsersRepository = new SequelizeUsersRepository();

export const signInUseCase = new SignInUseCase(
  sequelizeUsersRepository,
  jwtTokenProvider,
  bcryptHashProvider,
);

export const signInController = new SignInController(signInUseCase);
