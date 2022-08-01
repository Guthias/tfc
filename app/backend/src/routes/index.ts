import * as express from 'express';
import LoginRoutes from './login.routes';

const router = express.Router();

router.use('/login', LoginRoutes);

export default router;