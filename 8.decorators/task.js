function cachingDecoratorNew(func) {
  let cash = [];
  function wrapper(...args) {
    const hash = args.join(',');
    let checkIndex = cash.findIndex((item) => item.hash === hash);
    if (checkIndex !== -1) {
      console.log(`Из кэша: ${cash[checkIndex].result}`);
      return `Из кэша: ${cash[checkIndex].result}`;
    };
    let result = func( ...args);
    cash.push({hash, result});
    if (cash.length > 5) {
      cash.shift();
      console.log(`Удален элемент`);
    };
    console.log(`Вычисляем: ${result}`);
    return `Вычисляем: ${result}`;
  };
  return wrapper;
};

function debounceDecoratorNew(func, ms) {
  let timeout;
  let flag = false;
  function wrapper(...rest) {
    clearTimeout(timeout);
    if (!flag) {
      func.apply(this, rest);
    };
    flag = true;
    timeout = setTimeout(() => {
      func.apply(this, rest);
    }, ms);
  };
  return wrapper;
};

function debounceDecorator2(func, ms) {
  wrapper.count = 0;
  let timeout;
  let flag = false;
  function wrapper(...rest) {
    clearTimeout(timeout);
    if (!flag) {
      func.apply(this, rest);
      wrapper.count++;
    };
    flag = true;
    timeout = setTimeout(() => {
      func.apply(this, rest);
      wrapper.count++;
    }, ms);
  };
  return wrapper;
};
