import JWtTokenProvider from '../../providers/implementations/JWTTokenProvider';

import GetRoleUseCase from './GetRoleUseCase';
import GetRoleController from './GetRoleController';
import SequelizeUsersRepository from '../../repositories/implementations/SequelizeUsersRepository';

const jwtTokenProvider = new JWtTokenProvider();
const sequelizeUsersRepository = new SequelizeUsersRepository();

export const getRoleUseCase = new GetRoleUseCase(
  sequelizeUsersRepository,
  jwtTokenProvider,
);

export const getRoleController = new GetRoleController(getRoleUseCase);
