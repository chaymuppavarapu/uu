const assert = require('chai').assert;

// Ensure the function is properly imported or defined
const { greet } = require('../path/to/your/module'); // Update the path accordingly

describe('Unit Tests', () => {
  it('should return the correct greeting message', () => {
    const message = greet();
    assert.equal(message, 'Hello from Docker!');
  });
});
