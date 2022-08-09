import GetLeaderboardController from './GetLeaderboardController';
import GetLeaderboardUseCase from './GetLeaderboardUseCase';
import { matchesRepository, teamsRepository } from '..';

export const getLeaderboardUseCase = new GetLeaderboardUseCase(matchesRepository, teamsRepository);
export const getLeaderboardController = new GetLeaderboardController(getLeaderboardUseCase);
