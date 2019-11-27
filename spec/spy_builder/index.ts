import SquadStoreService from '../../src/core/services/squad-store.service';
import SquadPreparingService from '../../src/core/services/squad-preparing.service';

export enum MockType {
  DEFAULT_RESOLVE = 'RESOLVE',
  DEFAULT_REJECT = 'REJECT',
  CUSTOM_RESOLVE = 'CUSTOM_RESOLVE',
  CUSTOM_REJECT = 'CUSTOM_REJECT',
}

interface FunctionSpyDefaultConfig {
  mockType: MockType.DEFAULT_RESOLVE | MockType.DEFAULT_REJECT
}

interface FunctionSpyCustomConfig {
  mockType: MockType.CUSTOM_RESOLVE | MockType.CUSTOM_REJECT,
  value: any
}

type FunctionSpyConfig = FunctionSpyDefaultConfig | FunctionSpyCustomConfig;

interface SquadStoreServiceSpyConfig {
  getSquad?: FunctionSpyConfig,
  getDutySquad?: FunctionSpyConfig,
}

const getSquad = (config: FunctionSpyConfig) => {
  let mockDefinitionFunction;
  switch (config.mockType) {
    case MockType.DEFAULT_RESOLVE: {
      mockDefinitionFunction = () => this.jest
        .spyOn(SquadStoreService, 'getSquad')
        .mockResolvedValue(['j1']);
      break;
    }
    case MockType.DEFAULT_REJECT: {
      mockDefinitionFunction = () => this.jest
        .spyOn(SquadStoreService, 'getSquad')
        .mockRejectedValue([]);
      break;
    }
    case MockType.CUSTOM_RESOLVE: {
      mockDefinitionFunction = () => this.jest
        .spyOn(SquadStoreService, 'getSquad')
        .mockResolvedValue(config.value);
      break;
    }
    case MockType.CUSTOM_REJECT: {
      mockDefinitionFunction = () => this.jest
        .spyOn(SquadStoreService, 'getSquad')
        .mockRejectedValue(config.value);
      break;
    }
  }
  return mockDefinitionFunction;
};

const configureSquadStoreServiceSpies = (config: SquadStoreServiceSpyConfig) => {
  // todo: check if config === undefined | {}
  // todo: iterate specified function names (for each other we have "spy-creator")
};


class SpyBuilder {
  // spies: Map<string, any>;
  public spies: { [key: string]: any; };
  private configuredSpies: Map<string, Function>;

  constructor(private jest) {
    // this.spies = new Map<string, any>();
    this.configuredSpies = new Map<string, Function>();
  }

  //
  // squadStoreService(spyDefinitions?: SquadStoreServiceSpyConfig) {
  //   let resolveValue = ['j1'];
  //   let rejectValue = [];
  //   if (spyDefinitions) {
  //     if (spyDefinitions.getSquad) {
  //       if (spyDefinitions.getSquad.mockType === MockType.CUSTOM_RESOLVE) {
  //         resolveValue = spyDefinitions.getSquad.value;
  //       }
  //     }
  //   }
  //   const getSquadSpy = this.jest.spyOn(SquadStoreService, 'getSquad').mockResolvedValue(resolveValue);
  //   return this;
  // }

  public squadStoreService = (config?: SquadStoreServiceSpyConfig) => {


    // this.configuredSpies.set('squadStoreService', () => {
    //   this.jest.spyOn(SquadStoreService, 'getSquad')[mockFunctionName](returnedValue);
    // });
    return this;
  };

  squadPreparingService(spyDefinitions?: any) {
    this.jest.spyOn(SquadPreparingService, 'prepareSquad');
    return this;
  }

  defineSpies() {
    // todo
    this.configuredSpies.forEach((func, key) => {
      this.spies[key] = func();
    });
    return this.spies;
  }
}

export default SpyBuilder;
