import * as React from 'react';
import {render} from '@testing-library/react';
import Title from '@/components/Title';

describe('Title component',()=>{
  it('正确渲染大字',()=>{
    const {baseElement}=render(<Title type='large' title='大字' />);
    expect(baseElement).toMatchSnapshot();
  })

  it('正确渲染小字',()=>{
    const {baseElement}=render(<Title type='small' title='小字1' />);
    // 如果snapshot不通过，可使用 npx jest --updateSnapshop 命令更新快照
    expect(baseElement).toMatchSnapshot();
  })
})