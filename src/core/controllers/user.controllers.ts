import { Lifecycle, Request, ResponseToolkit } from '@hapi/hapi';
import AuthService from '../services/auth.service';
import logger from '../../common/logger';

const userControllers: { [key: string]: Lifecycle.Method } = {
  getUser: async (request: Request, h: ResponseToolkit, err) => {
    try {
      const checkRole = request.query.checkRole;
      const role = request.query['role'];
      const id = +request.query.id;
      logger('userController.getUser').info('request query', request.query);
      // типо получили пользователя
      const user: any = {
        id,
        role,
        name: 'Yuri'
      };

      let hasRolePermissions = true;
      if (checkRole) {
        hasRolePermissions = await AuthService.isUserHasRole(id, role as string);
      }

      if (hasRolePermissions) {
        user.secretInfo = 'Matrix has you!';
      }

      return h.response(user).code(200);
    } catch (error) {
      logger('userController.getUser').error(error);
      return h.response(error).code(500);
    }
  },
  createUser: async (request: Request, h: ResponseToolkit, err) => {
    try {
      const { id, name, role } = request.payload as any;
      if (!id || !name || !role) {
        return h.response('bad request').code(400);
      }
      return await AuthService.createUser(id, name, role);
    } catch (error) {
      logger('userController.createUser').error(error);
      return h.response(error).code(500);
    }
  }
};
export default userControllers;
