import logger from './common/logger';
import { start } from './server.config';

process.on('unhandledRejection', err => {
  const error = err ? err : {};
  logger('unhandledRejection error').info(error);
  process.exit(1);
});

start()
  .then(server => logger('server').info('Server running at:', server.info!.uri));
