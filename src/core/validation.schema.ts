import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().required(),
  STRING_CONNECTION: Joi.string().required(),
  URL:Joi.string().required()
});
