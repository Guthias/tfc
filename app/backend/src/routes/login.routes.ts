import { Router, Request, Response, NextFunction } from 'express';
import LoginValidate from '../middlewares/LoginValidate';
import { signInController } from '../useCases/SignIn';
import { getRoleController } from '../useCases/GetRole';
import AuthVerify from '../middlewares/AuthVerify';

const router = Router();

router.post('/', LoginValidate, async (req: Request, res: Response) => signInController
  .handle(req, res));

router.get(
  '/validate',
  async (req: Request, res: Response, next: NextFunction) => AuthVerify.handle(req, res, next),
  async (req: Request, res: Response) => getRoleController.handle(req, res),
);

// router.get('/validate', AuthVerify.handle, getRoleController.handle);

export default router;
