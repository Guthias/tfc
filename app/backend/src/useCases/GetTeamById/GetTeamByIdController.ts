import { Request, Response } from 'express';
import GetTeamByIdUseCase from './GetTeamByIdUseCase';

class GetTeamByIdController {
  constructor(
    private getTeamByIdUseCase: GetTeamByIdUseCase,
  ) { }

  async handle(req: Request, res: Response): Promise <Response> {
    const { id } = req.params;

    const team = await this.getTeamByIdUseCase.execute({ id });

    return res.status(200).json(team);
  }
}

export default GetTeamByIdController;
