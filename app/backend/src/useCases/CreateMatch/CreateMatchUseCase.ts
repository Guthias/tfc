import { IMatchesRepository } from '../../repositories/IMatchesRespository';
import { ICreateMatchDTO } from './CreateMatchDTO';
import HttpError from '../../errors/HttpError';

export default class CreateMatchUseCase {
  constructor(
    private matchRepository: IMatchesRepository,
  ) {}

  async execute(data: ICreateMatchDTO) {
    if (data.homeTeam === data.awayTeam) {
      throw new HttpError(401, 'It is not possible to create a match with two equal teams');
    }

    const createdMatch = await this.matchRepository.createMatch(data);
    return createdMatch;
  }
}
