import storage from 'utils/storage';

describe('storage',()=>{
  it('缓存值',()=>{
    storage.set('test','test');
    expect(localStorage.getItem('my-app-test')).toBe('test');
  })

  it("可以设置值", () => {
    storage.set("newKye", "hello");
    expect(storage.get("newKye")).toBe("hello");
  });
})