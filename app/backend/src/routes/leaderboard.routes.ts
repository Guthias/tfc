import { Router, Request, Response } from 'express';
import { getLeaderboardController } from '../useCases/GetLeaderboard';

const router = Router();

router.get(
  '/home',
  async (req: Request, res: Response) => getLeaderboardController.handleHomeLeaderboard(req, res),
);

router.get(
  '/away',
  async (req: Request, res: Response) => getLeaderboardController.handleAwayLeaderboard(req, res),
);

router.get(
  '/',
  async (req: Request, res: Response) => getLeaderboardController.handleLeaderboard(req, res),
);

export default router;
