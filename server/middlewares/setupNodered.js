import nodered from 'node-red';
import config from '../config/nodered';
const isDev = process.env.NODE_ENV !== 'production';

export default (server, app) => {
  nodered.init(server, config);
  app.use(config.httpAdminRoot, nodered.httpAdmin);
  if (isDev) {
    app.use(config.httpNodeRoot, nodered.httpNode);
  }

  nodered.start();
};
