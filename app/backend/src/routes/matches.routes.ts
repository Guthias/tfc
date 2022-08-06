import { Router, Request, Response, NextFunction } from 'express';
import { getMatchesController } from '../useCases/GetMatches';
import { createMatchController } from '../useCases/CreateMatch';
import AuthVerify from '../middlewares/AuthVerify';

const router = Router();

router.get('/', async (req: Request, res: Response) => getMatchesController
  .handle(req, res));

router.post(
  '/',
  async (req: Request, res: Response, next: NextFunction) => AuthVerify.handle(req, res, next),
  async (req: Request, res: Response) => createMatchController.handle(req, res),
);

export default router;
