const { sum } = require('../../utility/utilities');

test('should output sum', () => {
  expect(sum(1, 3)).toBe(4);
});
