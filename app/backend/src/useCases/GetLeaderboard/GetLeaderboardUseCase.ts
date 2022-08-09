import ITeamsRepository from '../../repositories/ITeamsRepository';
import { IMatch, ITeamStats, LeaderboardStats } from '../../entities/LeaderboardStats';
import { IMatchesRepository } from '../../repositories/IMatchesRespository';
import { IGetLeaderboardDTO } from './IGetLeaderboardDTO';
import Match from '../../entities/Match';

export default class GetLeaderboardUseCase {
  constructor(
    private matchesRepository: IMatchesRepository,
    private teamsRepository: ITeamsRepository,
  ) { }

  // eslint-disable-next-line arrow-body-style
  private formatMatches = (data: IGetLeaderboardDTO, teanId: number, endedMatches: Match[]) => {
    return endedMatches.reduce((acc: IMatch[], match) => {
      if (data.filterHome && teanId === match.homeTeam) {
        acc.push({
          teamId: teanId,
          teamGoals: match.homeTeamGoals,
          rivalTeamGoals: match.awayTeamGoals,
        });
      }

      if (data.filterHome && teanId === match.awayTeam) {
        acc.push({
          teamId: teanId,
          teamGoals: match.awayTeamGoals,
          rivalTeamGoals: match.homeTeamGoals,
        });
      }

      return acc;
    }, []);
  };

  private getTeamStats = (teamName: string, teamMatches: IMatch[]) => {
    const teamStats = new LeaderboardStats(teamMatches);

    return {
      name: teamName,
      totalPoints: teamStats.totalPoints,
      totalGames: teamStats.totalGames,
      totalVictories: teamStats.totalVictories,
      totalDraws: teamStats.totalDraws,
      totalLosses: teamStats.totalLosses,
      goalsFavor: teamStats.goalsFavor,
      goalsOwn: teamStats.goalsOwn,
      goalsBalance: teamStats.goalsBalance,
      efficiency: teamStats.efficiency,
    };
  };

  private sortLeaderboard = (teamStats: ITeamStats[]) => teamStats.sort((a, b) => {
    if (a.totalPoints !== b.totalPoints) {
      return b.totalPoints - a.totalPoints;
    }
    if (a.totalVictories !== b.totalVictories) {
      return b.totalVictories - a.totalVictories;
    }
    if (a.goalsBalance !== b.goalsBalance) {
      return b.goalsBalance - a.goalsBalance;
    }
    if (a.goalsFavor !== b.goalsFavor) {
      return b.goalsFavor - a.goalsFavor;
    }
    return 0;
  });

  async execute(data: IGetLeaderboardDTO) {
    const endedMatches = await this.matchesRepository.getInProgressMatches(false);
    const teamList = await this.teamsRepository.getAllTeams();

    const teamMatches = teamList.map(({ id }) => this.formatMatches(data, id, endedMatches));

    const teamStats = teamList
      .map((team, index) => this.getTeamStats(team.teamName, teamMatches[index]));

    return this.sortLeaderboard(teamStats);
  }
}
