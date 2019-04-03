
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      let newRocket = new Rocket();

      expect(newRocket).toBeInstanceOf(Rocket);
      expect(typeof newRocket.name).toBe("string");
      expect(typeof newRocket.colour).toBe("string");
    });

    test.skip("it should set the rocket's name if provided", () => {
      let newRocket = new Rocket({name: "ICBM"});

      result = newRocket.name;

      expect(result).toEqual("ICBM");
    });
  });

  describe('liftOff', () => {
    // ...
  });

  // ...

});
