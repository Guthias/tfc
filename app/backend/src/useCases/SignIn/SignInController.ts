import { Request, Response } from 'express';
import signInUseCase from './SignInUseCase';

class signInController {
  constructor(
    private SignInUseCase: signInUseCase,
  ) { }

  async handle(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    const token = this.SignInUseCase.execute({ email, password });

    return res.status(200).json({ token });
  }
}

export default signInController;
