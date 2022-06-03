
/*
 *@Description: 不是太优雅
 *@param: 
 *@ClassAuthor: Happy Ma
 *@Date: 2022-06-03 15:26:58
*/
describe('doMock config',()=>{
  beforeEach(()=>{
    // 必须重置模块，否则无法再次应用 doMock 的内容
    jest.resetModules();
  })

  it('开发环境',()=>{
    jest.doMock('utils/env',()=>{
      return {
        __esModule:true,
        config:{
          getEnv:()=>'dev'
        }
      }
    })

    const {config}=require('utils/env')

    expect(config.getEnv()).toBe('dev')
  })

  it('正式环境', () => {
    jest.doMock('utils/env', () => ({
      __esModule: true,
      config: {
        getEnv: () => 'prod'
      }
    }));

    const { config } = require('utils/env');

    expect(config.getEnv()).toEqual('prod');
  })
})