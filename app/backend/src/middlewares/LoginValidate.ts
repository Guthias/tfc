import * as Joi from 'joi';
import { NextFunction, Request, Response } from 'express';

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

const loginValidate = (req: Request, res: Response, next: NextFunction) => {
  const { error } = loginSchema.validate(req.body);
  if (error) {
    const { type, message } = error.details[0];
    if (type === 'any.required') {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    return res.status(400).json({ message });
  }
  next();
}

export default loginValidate;