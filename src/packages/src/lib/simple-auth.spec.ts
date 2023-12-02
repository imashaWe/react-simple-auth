import { simpleAuth } from './simple-auth';

describe('simpleAuth', () => {
  it('should work', () => {
    expect(simpleAuth()).toEqual('simple-auth');
  });
});
