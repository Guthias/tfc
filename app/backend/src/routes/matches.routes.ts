import { Router, Request, Response } from 'express';
import { getMatchesController } from '../useCases/GetMatches';

const router = Router();

router.get('/', async (req: Request, res: Response) => getMatchesController
  .handle(req, res));

export default router;
