import * as Joi from 'joi';
import { NextFunction, Request, Response } from 'express';
import HttpError from '../errors/HttpError';

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const loginValidate = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body.email || !req.body.password) {
    throw new HttpError(400, 'All fields must be filled');
  }

  const { error } = loginSchema.validate(req.body);

  if (error) {
    const { message } = error.details[0];
    throw new HttpError(400, message);
  }

  next();
};

export default loginValidate;
