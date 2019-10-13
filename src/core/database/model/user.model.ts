import * as mongoose from 'mongoose';

import userSchema from '../schemas/user.scheme';

export default mongoose.model('User', userSchema);
