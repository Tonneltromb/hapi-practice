import * as jest from 'jest'
import SquadStoreService from '../../src/core/services/squad-store.service';
import SquadPreparingService from '../../src/core/services/squad-preparing.service';

export enum MockType {
  RESOLVE = 'RESOLVE',
  REJECT = 'REJECT',
  CUSTOM_RESOLVE = 'CUSTOM_RESOLVE',
  CUSTOM_REJECT = 'CUSTOM_REJECT',
}

interface SquadStoreServiceSpyDefinitions {
  getSquad?: {
      mockType: MockType.RESOLVE | MockType.REJECT,
    }
    | {
    mockType: MockType.CUSTOM_RESOLVE | MockType.CUSTOM_REJECT,
    value: any
  }
}

class SpyBuilder {
  constructor(private jest) {
  }

  squadStoreService(spyDefinitions?: SquadStoreServiceSpyDefinitions) {
    let resolveValue = ['j1'];
    let rejectValue = [];
    if (spyDefinitions) {
      if (spyDefinitions.getSquad) {
        if (spyDefinitions.getSquad.mockType === MockType.CUSTOM_RESOLVE) {
          resolveValue = spyDefinitions.getSquad.value;
        }
      }
    }
    const getSquadSpy = this.jest.spyOn(SquadStoreService, 'getSquad').mockResolvedValue(resolveValue);
    return this;
  }

  squadPreparingService(spyDefinitions?: any) {
    this.jest.spyOn(SquadPreparingService, 'prepareSquad');
    return this;
  }

  defineSpies() {
  }
}

export default SpyBuilder;
