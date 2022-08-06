import CreateMatchUseCase from './CreateMatchUseCase';
import CreateMatchController from './CreateMatchController';
import { matchesRepository } from '..';

export const createMatchUseCase = new CreateMatchUseCase(matchesRepository);
export const createMatchController = new CreateMatchController(createMatchUseCase);
