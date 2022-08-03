import GetRoleUseCase from './GetRoleUseCase';
import GetRoleController from './GetRoleController';
import { usersRepository, tokenProvider } from '..';

export const getRoleUseCase = new GetRoleUseCase(
  usersRepository,
  tokenProvider,
);

export const getRoleController = new GetRoleController(getRoleUseCase);
