import { Router, Request, Response } from 'express';
import { getAllTeamsController } from '../useCases/GetAllTeams';

const router = Router();

router.get('/', async (req: Request, res: Response) => getAllTeamsController
  .handle(req, res));

export default router;
