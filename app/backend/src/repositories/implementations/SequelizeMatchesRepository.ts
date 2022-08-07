import { IMatchesRepository, IMatchData } from '../IMatchesRespository';
import Matches from '../../database/models/MatchesModel';
import Teams from '../../database/models/TeamModel';
import HttpError from '../../errors/HttpError';
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

  public createMatch = async (matchData: IMatchData) => {
    try {
      const createdMatch = await Matches.create({
        homeTeam: matchData.homeTeam,
        homeTeamGoals: matchData.homeTeamGoals,
        awayTeam: matchData.awayTeam,
        awayTeamGoals: matchData.awayTeamGoals,
        inProgress: true,
      });
      return createdMatch as unknown as Match;
    } catch (e) {
      throw new HttpError(404, 'There is no team with such id!');
    }
  };

  public getMatchById = async (id: string): Promise<Match | null> => {
    const match = await Matches.findOne({ where: { id } });

    return match as unknown as Match;
  };

  public finishMatch = async (id: string): Promise<void> => {
    await Matches.update({ inProgress: false }, { where: { id } });
  };
}
