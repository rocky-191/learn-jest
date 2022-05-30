import after1000ms from 'utils/after1000ms';

describe('test after1000ms',()=>{
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('1000ms 后执行回调函数',()=>{
    jest.spyOn(global,'setTimeout');
    const callback = jest.fn();
    expect(setTimeout).not.toHaveBeenCalled();
    after1000ms(callback);

    jest.runAllTimers();

    expect(callback).toHaveBeenCalled();
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 1000);
  })
})