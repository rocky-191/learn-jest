import { selectUser, selectUserFetchStatus } from "store/user/selector";

describe('selector',()=>{
  describe('selectUser',()=>{
    it('可以获取用户信息',()=>{
      expect(selectUser({
        user:{
          id:'1',
          name:"rocky",
          age:18,
          status:'complete'
        }
      })).toEqual({
        id:'1',
        name:'rocky',
        age:18
      })
    })
  })

  describe('selectUserFetchStatus',()=>{
    it('获取加载状态',()=>{
      expect(selectUserFetchStatus({
        user:{
          id:'1',
          name:"rocky",
          age:18,
          status:'loading'
        }
      })).toBe('loading')
    })
  })
})