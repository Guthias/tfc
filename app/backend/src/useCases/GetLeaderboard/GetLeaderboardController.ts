import { Request, Response } from 'express';
import GetLeaderboardUseCase from './GetLeaderboardUseCase';

class GetLeaderboardController {
  constructor(
    private getLeaderboardUseCase: GetLeaderboardUseCase,
  ) { }

  async handleHomeLeaderboard(_req: Request, res: Response) {
    const leaderboard = await this.getLeaderboardUseCase
      .execute({ filterHome: true, filterAway: false });

    return res.status(200).json(leaderboard);
  }

  async handleAwayLeaderboard(_req: Request, res: Response) {
    const leaderboard = await this.getLeaderboardUseCase
      .execute({ filterHome: false, filterAway: true });

    return res.status(200).json(leaderboard);
  }

  async handleLeaderboard(_req: Request, res: Response) {
    const leaderboard = await this.getLeaderboardUseCase
      .execute({ filterHome: true, filterAway: true });

    return res.status(200).json(leaderboard);
  }
}

export default GetLeaderboardController;
