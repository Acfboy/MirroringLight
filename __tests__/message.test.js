const msg = require('../src/message')

test('Message is right', () => {
  expect(msg()).toBe("Mirroring Light");
});