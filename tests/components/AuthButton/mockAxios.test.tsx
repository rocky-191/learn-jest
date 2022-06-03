import * as React from 'react';
import axios from 'axios';
import { render,screen } from '@testing-library/react';
import AuthButton from 'components/AuthButton';

describe('mock axios',()=>{
  it('正确展示普通用户按钮内容',async ()=>{
    jest.spyOn(axios,'get').mockResolvedValueOnce({
      data:{userType:'user'}
    })

    render(<AuthButton>hello</AuthButton>)

    expect(await screen.findByText('普通用户hello')).toBeInTheDocument()
  })

  it("可以正确展示管理员按钮内容", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce({
      // 其它的实现...
      data: { userType: "admin" },
    });

    render(<AuthButton>你好</AuthButton>);

    expect(await screen.findByText("管理员你好")).toBeInTheDocument();
  });
})