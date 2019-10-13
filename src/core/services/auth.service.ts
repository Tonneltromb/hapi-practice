import User from '../database/model/user.model';
import logger from '../../common/logger';

const AuthService = {
  isUserHasRole: async (userId: number, role: string) => {
    logger('AuthService').info('isUserHasRole executed');
    const user = await User.findOne({ id: userId }).lean();
    if (!user) {
      throw new Error('user not found');
    }
    logger('AuthService').info('isUserHasRole ',user);
    return user.role === role;
  },
  createUser: async (id, name, role) => {
    const users = await User.create({ id, name, role });
    logger('AuthService').info('user created users');
    return 'ok';
  }
};
export default AuthService;
