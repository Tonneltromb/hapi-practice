import { startForTest } from '../../../src/server.config';
import SpyBuilder, { MockType } from '../../spy_builder';

describe('getSquad', () => {
  let server;
  let spyBuilder = new SpyBuilder(jest);

  beforeAll(() => {
    spyBuilder
      .squadStoreService()
      .squadPreparingService();
  });
  beforeEach(async () => {
    server = await startForTest();
  });
  afterEach(async () => {
    await server.stop();
  });

  it('should return status code 400', async () => {
    spyBuilder.defineSpies();
    const response = await server.inject({
      method: 'GET',
      url: '/squad'
    });
    expect(response.statusCode).toBe(400)
  });
  it('should return status code 200', async () => {
    spyBuilder.squadStoreService({
      getSquad: { mockType: MockType.CUSTOM_RESOLVE, value: ['y1'] }
    });
    const response = await server.inject({
      method: 'GET',
      url: '/squad?squadNumber=1'
    });
    expect(response.statusCode).toBe(200)
  });
});
