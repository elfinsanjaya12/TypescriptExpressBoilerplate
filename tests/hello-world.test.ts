import { expect } from 'chai';
import { hello } from '../hello-world';

describe('Hello function', () => {
  it('should return hello world', () => {
    const result = hello();
    expect(result).to.equal('Add Configuration Travis CI & Install Redis In Travis CI');
  });
});