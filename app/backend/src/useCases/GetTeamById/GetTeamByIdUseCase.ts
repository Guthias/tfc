import ITeamsRepository from '../../repositories/ITeamsRepository';
import Team from '../../entities/Team';
import { IGetTeamByIdDTO } from './GetTeamByIdDTO';

class GetTeamByIdUseCase {
  constructor(
    private teamsRepository: ITeamsRepository,
  ) { }

  async execute(data: IGetTeamByIdDTO): Promise <Team> {
    const team = await this.teamsRepository.getTeamById(data.id);

    return team;
  }
}

export default GetTeamByIdUseCase;
