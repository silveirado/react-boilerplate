// import { get, size, keys } from 'lodash';
//import winston from 'winston';
import 'winston-daily-rotate-file';
// import moment from 'moment';
import ip from 'ip';

// const transport = new winston.transports.DailyRotateFile({
//   filename: 'log',
//   datePattern: 'yyyy-MM-dd.',
//   prepend: true,
//   timestamp: () => moment().format('DD/MM/YYYY HH:mm:SS'),
//   level: process.env.LOG_LEVEL || 'debug'
// });

// const LOGGER = new winston.Logger({
//   transports: [
//     new winston.transports.Console({
//       colorize: true,
//       timestamp: () => moment().format('DD/MM/YYYY HH:mm:SS'),
//       formatter: options =>
//         `${options.timestamp()} ${options.level.toUpperCase()} ${get(
//           options,
//           'message',
//           ''
//         )} ${
//           size(keys(get(options, 'meta'))) > 0
//             ? JSON.stringify(options.meta)
//             : ''
//         }`
//     }),
//     transport
//   ]
// });

// LOGGER.level = process.env.LOG_LEVEL || 'debug';

const LOGGER = console;

const divider = '\n==============================';
export default {
  ...LOGGER,
  error: err => {
    LOGGER.error(err);
  },
  appStarted: (port, host, tunnelStarted) => {
    LOGGER.log(`Server started !`);

    // If the tunnel started, log that and the URL it's available at
    if (tunnelStarted) {
      LOGGER.log(`Tunnel initialised`);
    }

    LOGGER.log(`
Access URLs:${divider}
Localhost: ${`http://${host}:${port}`}
      LAN: ${`http://${ip.address()}:${port}`}
        ${tunnelStarted ? `\n    Proxy: ${tunnelStarted}` : ''}${divider}
${`Press CTRL-C to stop`}
    `);
  }
};
