import ITeamsRepository from '../../repositories/ITeamsRepository';
import Team from '../../entities/Team';

class GetAllTeamsUseCase {
  constructor(
    private teamsRepository: ITeamsRepository,
  ) { }

  async execute(): Promise <Team[]> {
    const teamList = await this.teamsRepository.getAllTeams();

    return teamList;
  }
}

export default GetAllTeamsUseCase;
