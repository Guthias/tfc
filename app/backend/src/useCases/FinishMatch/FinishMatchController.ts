import { Request, Response } from 'express';
import FinishMatchUseCase from './FinishMatchUseCase';

class FinishMatchController {
  constructor(
    private finishMatchUseCase: FinishMatchUseCase,
  ) { }

  async handle(req: Request, res: Response): Promise <Response> {
    const { id } = req.params;
    await this.finishMatchUseCase.execute({ id });
    return res.status(200).json({ message: 'Finished' });
  }
}

export default FinishMatchController;
