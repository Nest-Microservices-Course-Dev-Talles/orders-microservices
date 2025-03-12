import 'dotenv/config';
import * as joi from 'joi';

interface EnvsVarsI {
  PORT: number;
  NATS_SERVERS: string[];

  // HOST: string;
  // PRODUCTS_MICROSERVICE_PORT: number;
  // PRODUCTS_MICROSERVICE_HOST: string;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    NATS_SERVERS: joi.array().items(joi.string()).required(),

    // PRODUCTS_MICROSERVICE_PORT: joi.number().required(),
    // PRODUCTS_MICROSERVICE_HOST: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS?.split(','),
});

if (error) {
  throw new Error(`Config validator error: ${error.message}`);
}

const envVars: EnvsVarsI = value;

export const envs = {
  port: envVars.PORT,
  natsServers: envVars.NATS_SERVERS,

  // host: envVars.HOST,
  // productsMicroservicePort: envVars.PRODUCTS_MICROSERVICE_PORT,
  // productsMicroserviceHost: envVars.PRODUCTS_MICROSERVICE_HOST,
};
