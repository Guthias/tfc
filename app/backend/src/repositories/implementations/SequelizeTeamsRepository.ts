import Team from '../../entities/Team';
import ITeamsRepository from '../ITeamsRepository';
import Teams from '../../database/models/TeamModel';

class SequelizeTeamsRepository implements ITeamsRepository {
  public getAllTeams = async (): Promise<Team[]> => {
    const teamList = await Teams.findAll();

    return teamList as unknown as Team[];
  };

  public getTeamById = async (id: string): Promise<Team> => {
    const team = await Teams.findOne({ where: { id } });
    return team as unknown as Team;
  };
}

export default SequelizeTeamsRepository;
