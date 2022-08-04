import { teamsRepository } from '..';

import GetTeamByIdUseCase from './GetTeamByIdUseCase';
import GetTeamByIdController from './GetTeamByIdController';

export const getTeamByIdUseCase = new GetTeamByIdUseCase(teamsRepository);

export const getTeamByIdController = new GetTeamByIdController(getTeamByIdUseCase);
