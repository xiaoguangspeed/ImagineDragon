const executeOperations = (operations, args) => {
    return operations.reduce((args, method) => {
      return [method(...args)];
    }, args);
  };
  
  const executeAsyncOperations = (operations, args) => {
    return operations.reduce(async (argsInPromise, method) => {
      const args = await argsInPromise;
  
      return Promise.all([method(...args)]);
    }, Promise.resolve(args));
  };
  
  const modes = {
    ASYNC: Symbol('ASYNC'),
    SYNC: Symbol('SYNC')
  };
  
  const $ = Symbol('RESULT_ARGUMENT');
  
  function lazify(
    instance,
    { mode = modes.SYNC, methodsNames = { run: 'run', chain: 'chain' } }
  ) {
    const operations = [];
  
    const proxy = new Proxy(instance, {
      get(target, propKey) {
        const propertyOrMethod = target[propKey];
  
        if (propKey === methodsNames.run) {
          return (...args) => {
            if (mode === modes.ASYNC) {
              return executeAsyncOperations(operations, args).then(
                result => result[0]
              );
            }
  
            if (mode === modes.SYNC) {
              return executeOperations(operations, args)[0];
            }
  
            throw new Error(
              'The mode provided to the [lazify] function is not supported.'
            );
          };
        }
  
        if (propKey === methodsNames.chain) {
          return fn => {
            operations.push(fn);
  
            return proxy;
          };
        }
  
        if (!propertyOrMethod) {
          throw new Error('No property found.');
        }
  
        // is not a function
        if (typeof propertyOrMethod !== 'function') {
          return target[propKey];
        }
  
        return (...args) => {
          operations.push(internalResult => {
            return propertyOrMethod.apply(
              target,
              [...args].map(arg => (arg === $ ? internalResult : arg))
            );
          });
  
          return proxy;
        };
      }
    });
  
    return proxy;
  }
  
  const lazyCalculatorFactory = () => {
    return lazify(new Calculator(), {
      mode: modes.ASYNC,
      methodsNames: {
        run: 'run',
        chain: 'chain'
      }
    });
  };
  
  class Calculator {
    async add(a, b) {
      return a + b;
    }
  
    async subtract(a, b) {
      return a - b;
    }
  
    async multiply(a, b) {
      return a * b;
    }
  
    async divide(a, b) {
      return a / b;
    }
  }
  
  const lazyCalculator = lazyCalculatorFactory();
  
  const a = lazyCalculator
    .add(5, 10)
    .subtract($, 5)
    .multiply($, 10);
  
  a.run().then(result => console.log('result async', result));
  