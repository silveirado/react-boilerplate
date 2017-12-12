import { createServer } from 'net';
import aedes from 'aedes';
import logger from '../config/logger';

export default () => {
  const port = parseInt(process.env.MQTT_PORT || '1883', 10);
  const server = createServer(aedes().handle);
  server.listen(port, () => {
    logger.log(`MQTT server listening on port ${port}`);
  });
};
