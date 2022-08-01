import { Router, Request, Response } from 'express';
import LoginValidate from '../middlewares/LoginValidate';
import { signInController } from '../useCases/SignIn';

const router = Router();

router.post('/', LoginValidate, async (req: Request, res: Response) => signInController
  .handle(req, res));

export default router;
