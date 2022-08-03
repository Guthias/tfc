import { Request, Response } from 'express';
import GetAllTeamsUseCase from './GetAllTeamsUseCase';

class GetAllTeamsController {
  constructor(
    private getAllTeamsUseCase: GetAllTeamsUseCase,
  ) { }

  async handle(_req: Request, res: Response): Promise <Response> {
    const teamList = await this.getAllTeamsUseCase.execute();

    return res.status(200).json(teamList);
  }
}

export default GetAllTeamsController;
