import 'dotenv/config';
import * as joi from 'joi';

interface EnvsVarsI {
  PORT: number;
  HOST: string;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    HOST: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validator error: ${error.message}`);
}

const envVars: EnvsVarsI = value;

export const envs = {
  port: envVars.PORT,
  host: envVars.HOST,
};
