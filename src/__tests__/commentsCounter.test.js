import commentsCounter from '../__mocks__/commentsCounter.js';
import data from '../__mocks__/commentsData.js';

describe('Testing commentsCounterFunction', () => {
  it('should return the correct number of comments', () => {
    const count = commentsCounter(data);
    expect(count).toBe(4);
  });

  it('should have a length of greater than 0', () => {
    const value = 0;

    const count = commentsCounter(data);

    expect(count).toBeGreaterThan(value);
  });
});