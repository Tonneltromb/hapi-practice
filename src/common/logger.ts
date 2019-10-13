import * as pino from 'pino';

const logger = (name) => pino({
  name: name,
  base: {},
  timestamp: false
});

export default logger;
