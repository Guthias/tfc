import Team from '../entities/Team';

export default interface ITeamsRepository {
  getAllTeams(): Promise<Team []>
  getTeamById(id: string): Promise<Team>
}
