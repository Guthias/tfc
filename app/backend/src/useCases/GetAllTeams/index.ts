import GetAllTeamsUseCase from './GetAllTeamsUseCase';
import SequelizeTeamsRepository from '../../repositories/implementations/SequelizeTeamsRepository';
import GetAllTeamsController from './GetAllTeamsController';

const sequelizeTeamsRepository = new SequelizeTeamsRepository();

export const getAllTeamsUsecase = new GetAllTeamsUseCase(sequelizeTeamsRepository);

export const getAllTeamsController = new GetAllTeamsController(getAllTeamsUsecase);
