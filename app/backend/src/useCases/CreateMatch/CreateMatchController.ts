import { Request, Response } from 'express';
import CreateMatchUseCase from './CreateMatchUseCase';

class CreateMatchController {
  constructor(
    private createMatchUseCase: CreateMatchUseCase,
  ) { }

  async handle(req: Request, res: Response): Promise <Response> {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;

    const createdMatch = await this.createMatchUseCase.execute({
      homeTeam, awayTeam, homeTeamGoals, awayTeamGoals,
    });

    return res.status(201).json(createdMatch);
  }
}

export default CreateMatchController;
