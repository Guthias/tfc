import UpdateMatchScoreUseCase from './UpdateMatchScoreUseCase';
import UpdateMatchScoreController from './UpdateMatchScoreController';
import { matchesRepository } from '..';

export const updateMatchScoreUseCase = new UpdateMatchScoreUseCase(matchesRepository);
export const updateMatchScoreController = new UpdateMatchScoreController(updateMatchScoreUseCase);
