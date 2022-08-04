import { Router, Request, Response } from 'express';

import { getAllTeamsController } from '../useCases/GetAllTeams';
import { getTeamByIdController } from '../useCases/GetTeamById';

const router = Router();

router.get('/', async (req: Request, res: Response) => getAllTeamsController
  .handle(req, res));

router.get('/:id', async (req: Request, res: Response) => getTeamByIdController
  .handle(req, res));

export default router;
