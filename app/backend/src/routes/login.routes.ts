import { Router, Request, Response } from 'express';
import LoginValidate from '../middlewares/LoginValidate';
import { signInController } from '../useCases/SignIn';
import { getRoleController } from '../useCases/GetRole';

const router = Router();

router.post('/', LoginValidate, async (req: Request, res: Response) => signInController
  .handle(req, res));

router.get('/validate', async (req: Request, res: Response) => getRoleController
  .handle(req, res));

export default router;
