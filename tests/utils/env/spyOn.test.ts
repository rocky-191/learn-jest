import {config} from 'utils/env';

describe('spyOn config',()=>{
  it('开发环境',()=>{
    jest.spyOn(config,'getEnv').mockReturnValue('dev');

    expect(config.getEnv()).toBe('dev')
  })

  it('正式环境',()=>{
    jest.spyOn(config,'getEnv').mockReturnValue('prod');

    expect(config.getEnv()).toBe('prod')
  })
})