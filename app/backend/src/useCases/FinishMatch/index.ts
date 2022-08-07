import FinishMatchController from './FinishMatchController';
import FinishMatchUseCase from './FinishMatchUseCase';
import { matchesRepository } from '..';

export const finishMatchUseCase = new FinishMatchUseCase(matchesRepository);

export const finishMatchController = new FinishMatchController(finishMatchUseCase);
