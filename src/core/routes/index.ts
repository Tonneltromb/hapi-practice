import { Server } from '@hapi/hapi';

import userRoutes from './user';

const registerRoutes = (server: Server) => {
  server.route(userRoutes);
};

export default registerRoutes;
