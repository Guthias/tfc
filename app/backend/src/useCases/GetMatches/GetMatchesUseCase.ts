import { IMatchesRepository } from '../../repositories/IMatchesRespository';
import { IGetMatchesDTO } from './GetMatchesDTO';

export default class GetMatchesUseCase {
  constructor(
    private matchesRepository: IMatchesRepository,
  ) { }

  async execute(data: IGetMatchesDTO) {
    if (!data.inProgress) {
      const matches = await this.matchesRepository.getAllMatches();
      return matches;
    }

    const matches = await this.matchesRepository.getInProgressMatches(data.inProgress === 'true');
    return matches;
  }
}
