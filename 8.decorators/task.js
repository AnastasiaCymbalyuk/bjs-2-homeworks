function cachingDecoratorNew(func) {
  let cash = [];
  function wrapper(...args) {
    const hash = args.join(',');
    let checkIndex = cash.findIndex((item) => item.hash === hash);
    if (checkIndex !== -1) {
      console.log(`Из кэша: ${cash[checkIndex].result}`);
      return `Из кэша: ${cash[checkIndex].result}`;
    } else {
      let result = func( ...args);
      cash.push({hash, result});
      if (cash.length > 5) {
        cash.shift();
        console.log(`Удален элемент`);
      };
      console.log(`Вычисляем: ${result}`);
      return `Вычисляем: ${result}`;
    };
  };
  return wrapper;
};

function debounceDecoratorNew(func, ms) {
  let flag = false;
  function wrapper(...rest) {
    if (!flag) {
      func(...rest);
      flag = true;
      setTimeout(() => {
        flag = false;
      }, ms);
    };
  };
  return wrapper;
};

function debounceDecorator2(func, ms) {
  let flag = false;
  wrapper.count = 0;
  function wrapper(...rest) {
    wrapper.count++;
    if (!flag) {
      func(...rest);
      flag = true;
      setTimeout(() => {
        flag = false;
      }, ms);
    };
  };
  return wrapper;
};
