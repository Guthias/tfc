import Match from '../entities/Match';

export interface IMatchesRepository {
  getAllMatches(): Promise<Match[]>;
  getInProgressMatches(inProgress: boolean): Promise<Match[]>
}
