import { Request, ResponseToolkit } from '@hapi/hapi';

import SquadStoreService from '../services/squad-store.service';
import SquadPreparingService from '../services/squad-preparing.service';

import logger from '../../common/logger';

const squadControllers = {
  getPreparedSquad: async (request: Request, h: ResponseToolkit, err) => {
    try {
      if (!('squadNumber' in request.query)) {
        return h.response('Bad request')
          .code(400);
      }
      const squadNumber = +(request.query['squadNumber'] as string);
      const selectedSquad = await SquadStoreService.getSquad(squadNumber);
      const preparedSquad = await SquadPreparingService.prepareSquad(selectedSquad);
      return h.response({data: preparedSquad}).code(200);
    } catch (error) {
      logger('squadControllers.getPreparedSquad').error(error);
      return h.response(error).code(500);
    }
  },
};
export default squadControllers;
