import GetMatchesController from './GetMatchesController';
import GetMatchesUseCase from './GetMatchesUseCase';
import { matchesRepository } from '..';

export const getMatchesUseCase = new GetMatchesUseCase(matchesRepository);
export const getMatchesController = new GetMatchesController(getMatchesUseCase);
