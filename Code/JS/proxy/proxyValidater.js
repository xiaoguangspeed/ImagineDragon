const validators = {
    number: {
      greaterThan: expectedValue => {
        return value => {
          return value > expectedValue;
        };
      },
      isNumber: () => {
        return value => {
          return Number(value) === value;
        };
      }
    },
    string: {
      longerThan: expectedLength => {
        return value => {
          return value.length > expectedLength;
        };
      },
      isString: () => {
        return value => {
          return String(value) === value;
        };
      }
    }
  };
  
  const withValidation = (object, schema) => {
    return new Proxy(object, {
      set: (target, key, value) => {
        const validators = schema[key];
  
        if (!validators || !validators.length) {
          target[key] = value;
  
          return true;
        }
  
        const shouldSet = validators.every(validator => validator(value));
  
        if (!shouldSet) {
          // or get some custom error
          return false;
        }
  
        target[key] = value;
        return true;
      }
    });
  };
  
  const person = {
    firstName: 'Maciej',
    lastName: 'Cieslar',
    age: 20
  };
  
  const personWithValidation = withValidation(person, {
    firstName: [validators.string.isString(), validators.string.longerThan(3)],
    lastName: [validators.string.isString(), validators.string.longerThan(7)],
    age: [validators.number.isNumber(), validators.number.greaterThan(0)]
  });
  
  personWithValidation.firstName = 'Turk';
  personWithValidation.lastName = 'Turkleton';
  personWithValidation.age = 20;
  