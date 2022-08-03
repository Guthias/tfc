import GetAllTeamsUseCase from './GetAllTeamsUseCase';
import GetAllTeamsController from './GetAllTeamsController';
import { teamsRepository } from '..';

export const getAllTeamsUsecase = new GetAllTeamsUseCase(teamsRepository);

export const getAllTeamsController = new GetAllTeamsController(getAllTeamsUsecase);
