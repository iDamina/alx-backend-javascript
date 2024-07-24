const displayMessage = require('../0-console');

test('displays message to STDOUT', () => {
  console.log = jest.fn();  // Mock console.log
  displayMessage('Hello, World!');
  expect(console.log).toHaveBeenCalledWith('Hello, World!');
});
