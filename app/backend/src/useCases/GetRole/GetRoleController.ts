import { Request, Response } from 'express';
import GetRoleUseCase from './GetRoleUseCase';

class GetRoleController {
  constructor(
    private getRoleUseCase: GetRoleUseCase,
  ) { }

  async handle(req: Request, res: Response): Promise <Response> {
    const token = req.headers.authorization as string;

    const role = await this.getRoleUseCase.execute({ token });

    return res.status(200).json({ role });
  }
}

export default GetRoleController;
