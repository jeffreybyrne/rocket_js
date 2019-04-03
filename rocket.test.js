
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      let newRocket = new Rocket();

      expect(newRocket).toBeInstanceOf(Rocket);
      expect(typeof newRocket.name).toBe("string");
      expect(typeof newRocket.colour).toBe("string");
    });

    test("it should set the rocket's name if provided", () => {
      let newRocket = new Rocket({name: "ICBM"});

      let result = newRocket.name;

      expect(result).toEqual("ICBM");
    });
  });

  describe('liftOff', () => {
    test('a flying rocket cannot lift off', () => {
      let newRocket = new Rocket({flying: true});

      result = newRocket.liftOff();

      expect(result).toEqual(false);
    });

    test('a grounded rocket can lift off', () => {
      let newRocket = new Rocket({flying: false});

      result = newRocket.liftOff();

      expect(result).toEqual(true);
    });
  });

  // ...

});
