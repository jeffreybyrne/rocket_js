
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

  describe('land', () => {
    test('a flying rocket can land', () => {
      let newRocket = new Rocket({flying: true});

      result = newRocket.land();

      expect(result).toEqual(true);
    });

    test('a grounded rocket cannot land', () => {
      let newRocket = new Rocket({flying: false});

      result = newRocket.land();

      expect(result).toEqual(false);
    });
  });

  describe('status', () => {
    test('a flying rocket has a status that says it is flying', () => {
      let newRocket = new Rocket({flying: true});

      result = newRocket.status();

      expect(result).toContain('flying');
    });

    test('a grounded rocket has a status that says it is ready for liftoff', () => {
      let newRocket = new Rocket({flying: false});

      result = newRocket.status();

      expect(result).toContain('liftoff');
    });
  });

  describe('sendCodedSignal', () => {
    test('a rocket with no message returns boop', () => {
      let newRocket = new Rocket();

      result = newRocket.sendCodedSignal();

      expect(result).toEqual('boop');
    });

    test('a rocket with a small message returns beep', () => {
      let newRocket = new Rocket();

      result = newRocket.sendCodedSignal(8);

      expect(result).toContain('beep');
    });

    test('a flying rocket with a short message returns beep', () => {
      let newRocket = new Rocket({flying: true});

      result = newRocket.sendCodedSignal(3);

      expect(result).toContain('beep beep');
    });

    test('a grounded rocket with a long message returns boop beep beep', () => {
      let newRocket = new Rocket({flying: false});

      result = newRocket.sendCodedSignal(42);

      expect(result).toContain('boop beep beep');
    });

    test('a flying rocket with a long message returns boop boop boop', () => {
      let newRocket = new Rocket({flying: true});

      result = newRocket.sendCodedSignal(42);

      expect(result).toContain('boop boop boop');
    });
  });

});
