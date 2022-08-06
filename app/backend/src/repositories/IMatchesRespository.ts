import Match from '../entities/Match';

export interface IMatchData {
  homeTeam: number
  awayTeam: number
  homeTeamGoals: number
  awayTeamGoals: number
}

export interface IMatchesRepository {
  getAllMatches(): Promise<Match[]>;
  getInProgressMatches(inProgress: boolean): Promise<Match[]>
  createMatch(data: IMatchData): Promise<Match>
}