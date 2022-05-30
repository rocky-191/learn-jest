import objToSearchStr from 'utils/objToSearchStr';

it('test objToSearchStr',()=>{
  expect(objToSearchStr({
    a:1,
    b:'jack'
  })).toBe('a=1&b=jack')
})