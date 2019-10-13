import * as Hapi from '@hapi/hapi';

import EnvironmentVariables from './env.variables';
import registerRoutes from './core/routes';
import connectToDatabase from './core/database';

export const start = async () => {
  const server = new Hapi.Server({
    port: EnvironmentVariables.SERVER_PORT || 3000,
    host: 'localhost'
  });
  await connectToDatabase();
  registerRoutes(server);
  await server.start();
  return server;
};
export const startForTest = async () => {
  const server = new Hapi.Server({
    port: EnvironmentVariables.SERVER_PORT || 3000,
    host: 'localhost'
  });
  // await connectToDatabase();
  registerRoutes(server);
  await server.initialize();
  return server;
};
