import { Request, Response } from 'express';
import GetMatchesUseCase from './GetMatchesUseCase';
import HttpError from '../../errors/HttpError';

class GetMatchesController {
  constructor(
    private getMatchesUseCase: GetMatchesUseCase,
  ) { }

  async handle(req: Request, res: Response): Promise <Response> {
    const { inProgress } = req.query;

    if (typeof inProgress === 'object') {
      throw new HttpError(500, 'Invalid query format');
    }

    const matchList = await this.getMatchesUseCase.execute({ inProgress });
    return res.status(200).json(matchList);
  }
}

export default GetMatchesController;
