import * as Joi from 'joi';
import { NextFunction, Request, Response } from 'express';
import errorList from '../helpers/errorsList';

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

const loginValidate = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.email || !req.body.password) {
    throw errorList.missingFields;
  }

  const { error } = loginSchema.validate(req.body);
  if (error) {
    const { message } = error.details[0];
    return res.status(400).json({ message });
  }
  next();
}

export default loginValidate;