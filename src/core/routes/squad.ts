import {ServerRoute} from '@hapi/hapi';

import controllers from '../controllers'

const squadRoutes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/squad',
    handler: controllers.squad.getPreparedSquad
  }
];

export default squadRoutes;
