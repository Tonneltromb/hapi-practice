import * as Mongoose from 'mongoose';

import logger from '../../common/logger';
import EnvironmentVariables from '../../env.variables';

const connectToDatabase = async () => {
  return await Mongoose.connect(
    `mongodb://${EnvironmentVariables.MONGO_HOST}/myapp`,
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
    (error) => {
      if (error) {
        throw new Error(`Connection error: ${error.message}`);
      } else {
        logger('server').info('Connected to myapp database on host', `${process.env.MONGO_HOST}`);
      }
    }
  );
};
export default connectToDatabase;
