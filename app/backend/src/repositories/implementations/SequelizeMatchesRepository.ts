import { IMatchesRepository } from '../IMatchesRespository';
import Matches from '../../database/models/MatchesModel';
import Teams from '../../database/models/TeamModel';
import Match from '../../entities/Match';

export default class SequelizeMatchesRepository implements IMatchesRepository {
  public getAllMatches = async () => {
    const matches = await Matches.findAll({
      include: [
        {
          model: Teams,
          as: 'teamHome',
          attributes: ['teamName'],
        },
        {
          model: Teams,
          as: 'teamAway',
          attributes: ['teamName'],
        },
      ],
    });

    return matches as unknown as Match[];
  };

  public getInProgressMatches = async (inProgress: boolean) => {
    const matches = await Matches.findAll({
      include: [
        {
          model: Teams,
          as: 'teamHome',
          attributes: ['teamName'],
        },
        {
          model: Teams,
          as: 'teamAway',
          attributes: ['teamName'],
        },
      ],
      where: { inProgress },
    });

    return matches as unknown as Match[];
  };
}
