import SignInUseCase from './SignInUseCase';
import SignInController from './SignInController';
import { tokenProvider, hashProvider, usersRepository } from '..';

export const signInUseCase = new SignInUseCase(
  usersRepository,
  tokenProvider,
  hashProvider,
);

export const signInController = new SignInController(signInUseCase);
