import { Server } from '@hapi/hapi';

import userRoutes from './user';
import squadRoutes from './squad';

const registerRoutes = (server: Server) => {
  server.route(userRoutes);
  server.route(squadRoutes);
};

export default registerRoutes;
