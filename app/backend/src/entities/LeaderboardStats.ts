export type IMatch = {
  teamId: number;
  teamGoals: number;
  rivalTeamGoals: number;
};

export interface ITeamStats {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: string;
}

export interface ITeamResults {
  wins: number,
  draws: number,
  loses: number,
}

export class LeaderboardStats {
  private teamResults: ITeamResults;
  private goalsFor: number;
  private goalsAway: number;

  private getTeamResults = (matchList: IMatch[]) => matchList.reduce((acc, match) => {
    const matchGoals = match.teamGoals - match.rivalTeamGoals;
    if (matchGoals > 0) acc.wins += 1;
    if (matchGoals < 0) acc.loses += 1;
    if (matchGoals === 0) acc.draws += 1;
    return acc;
  }, { wins: 0, draws: 0, loses: 0 });

  constructor(matchList: IMatch[]) {
    this.teamResults = this.getTeamResults(matchList);
    this.goalsFor = matchList.reduce((acc, { teamGoals }) => acc + teamGoals, 0);
    this.goalsAway = matchList.reduce((acc, { rivalTeamGoals }) => acc + rivalTeamGoals, 0);
  }

  get totalPoints() {
    const { wins, draws } = this.teamResults;
    return (wins * 3) + draws;
  }

  get totalGames() {
    const { wins, draws, loses } = this.teamResults;
    return wins + draws + loses;
  }

  get totalVictories() {
    return this.teamResults.wins;
  }

  get totalDraws() {
    return this.teamResults.draws;
  }

  get totalLosses() {
    return this.teamResults.loses;
  }

  get goalsFavor() {
    return this.goalsFor;
  }

  get goalsOwn() {
    return this.goalsAway;
  }

  get goalsBalance() {
    return this.goalsFor - this.goalsAway;
  }

  get efficiency() {
    return Number((this.totalPoints / (this.totalGames * 3)) * 100).toFixed(2);
  }
}
