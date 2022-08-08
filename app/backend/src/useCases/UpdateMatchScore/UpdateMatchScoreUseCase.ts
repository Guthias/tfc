import HttpError from '../../errors/HttpError';
import { IMatchesRepository } from '../../repositories/IMatchesRespository';
import { IUpdateMatchScoreDTO } from './UpdateMatchScoreDTO';

export default class UpdateMatchScoreUseCase {
  constructor(
    private matchRepository: IMatchesRepository,
  ) { }

  async execute(data: IUpdateMatchScoreDTO) {
    const match = await this.matchRepository.getMatchById(data.matchId);

    if (!match) throw new HttpError(404, 'Match not found');

    if (match.inProgress) {
      await this.matchRepository.updateMatchScore(
        data.matchId,
        data.homeTeamGoals,
        data.awayTeamGoals,
      );
    }
  }
}
