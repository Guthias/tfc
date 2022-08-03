import * as express from 'express';
import LoginRoutes from './login.routes';
import TeamsRoutes from './teams.routes';

const router = express.Router();

router.use('/login', LoginRoutes);
router.use('/teams', TeamsRoutes);

export default router;
