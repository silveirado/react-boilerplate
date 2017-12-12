import express from 'express';
import { createServer } from 'http';
import dotenv from 'dotenv';
import { resolve } from 'path';

import logger from './config/logger';
import setup from './middlewares/frontendMiddleware';
import setupNodered from './middlewares/setupNodered';
import setupMqtt from './middlewares/setupMQTT';
import setupGraphql from './middlewares/setupGraphQL';

dotenv.config({ path: `${__dirname}/.env` });

const port = parseInt(process.env.PORT || '3000', 10);

const app = express();
const server = createServer(app);

if (/true/i.test(process.env.NODERED_SERVER)) {
  setupNodered(server, app);
}

if (/true/i.test(process.env.MQTT_SERVER)) {
  setupMqtt();
}

if (/true/i.test(process.env.GRAPHQL_SERVER)) {
  setupGraphql(app);
}

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/'
});

server.listen(port, () => {
  logger.info(`App Api listening on port ${port}!`);
});
