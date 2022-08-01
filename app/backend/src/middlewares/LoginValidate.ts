import * as Joi from 'joi';
import { NextFunction, Request, Response } from 'express';
import errorList from '../helpers/errorsList';

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

const loginValidate = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    const { type, message } = error.details[0];
    if (type === 'any.required') {
      throw errorList.missingFields;
    }
    return res.status(422).json({ message });
  }
  next();
}

export default loginValidate;