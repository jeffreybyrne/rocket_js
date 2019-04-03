
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      newRocket = Rocket.constructor();

      expect(newRocket).toBeDefined();
    });

    test("it should set the rocket's name if provided", () => {
      // ...
    });
  });

  describe('liftOff', () => {
    // ...
  });

  // ...

});
