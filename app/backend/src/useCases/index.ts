import JWTTokenProvider from '../providers/implementations/JWTTokenProvider';
import BCryptHashProvider from '../providers/implementations/BCryptHashProvider';

import SequelizeUsersRepository from '../repositories/implementations/SequelizeUsersRepository';
import SequelizeTeamsRepository from '../repositories/implementations/SequelizeTeamsRepository';
import SequelizeMatchesRepository from '../repositories/implementations/SequelizeMatchesRepository';

export const tokenProvider = new JWTTokenProvider();
export const hashProvider = new BCryptHashProvider();

export const usersRepository = new SequelizeUsersRepository();
export const teamsRepository = new SequelizeTeamsRepository();
export const matchesRepository = new SequelizeMatchesRepository();
