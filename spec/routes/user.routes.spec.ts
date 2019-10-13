import { startForTest } from '../../src/server.config';

import AuthService from '../../src/core/services/auth.service';

describe('getUser', () => {
  let server;

  beforeEach(async () => {
    server = await startForTest();
  });
  afterEach(async () => {
    await server.stop();

  });
  it('should return code 200', async () => {
    const spy = spyOn(AuthService, 'isUserHasRole').and.callFake(() => true);
    const response = await server.inject({
      method: 'GET',
      url: '/user?checkRole=true&role=admin&id=1',
    });
    expect(response.statusCode).toBe(200);
    expect(spy).toBeCalledWith(1, 'admin');
  });
});
