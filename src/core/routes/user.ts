import {ServerRoute} from '@hapi/hapi';

import controllers from '../controllers'

const userRoutes: ServerRoute[] = [
  {
    method: 'GET',
    path: '/user',
    handler: controllers.user.getUser
  },
  {
    method: 'POST',
    path: '/user',
    handler: controllers.user.createUser
  }
];

export default userRoutes;
