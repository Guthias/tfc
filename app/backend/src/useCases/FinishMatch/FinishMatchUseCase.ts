import { IMatchesRepository } from '../../repositories/IMatchesRespository';
import { IFinishMatchDTO } from './FinishMatchDTO';
import HttpError from '../../errors/HttpError';

export default class FinishMatchUseCase {
  constructor(
    private matchRepository: IMatchesRepository,
  ) {}

  async execute(data: IFinishMatchDTO) {
    const match = await this.matchRepository.getMatchById(data.id);

    if (!match) throw new HttpError(404, 'Match not found');

    await this.matchRepository.finishMatch(data.id);
  }
}
