import add from '../src/index';

describe('add test', () => {
  test('1 + 1 = 2', () => {
    expect(add(1, 1)).toBe(2);
  });
});
