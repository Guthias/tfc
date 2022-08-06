import * as express from 'express';
import LoginRoutes from './login.routes';
import TeamsRoutes from './teams.routes';
import MatchesRoutes from './matches.routes';

const router = express.Router();

router.use('/login', LoginRoutes);
router.use('/teams', TeamsRoutes);
router.use('/matches', MatchesRoutes);

export default router;
