import * as express from 'express';
import LoginValidate from '../middlewares/LoginValidate';

const routes = express.Router();

routes.post('/', LoginValidate);

export default routes;