type AnyFunction = (...args: any[]) => any;

const after1000ms = (cb?: AnyFunction) => {
  setTimeout(() => {
    cb && cb();
  }, 1000);
};

export default after1000ms;
