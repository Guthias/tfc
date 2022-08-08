import { Request, Response } from 'express';
import UpdateMatchScoreUseCase from './UpdateMatchScoreUseCase';

export default class UpdateMatchScoreController {
  constructor(
    private updateMatchUseCase: UpdateMatchScoreUseCase,
  ) { }

  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    await this.updateMatchUseCase.execute({
      matchId: id,
      homeTeamGoals,
      awayTeamGoals,
    });

    res.status(200).send();
  }
}
