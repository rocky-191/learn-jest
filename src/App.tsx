import React from 'react';
import Title from 'components/Title';
import AuthButton from 'components/AuthButton'

function App() {
  return (
    <div>
      <Title type='small' title='小字' />
      <Title type='large' title='大字' />
      <section>
        <AuthButton>登录</AuthButton>
      </section>
    </div>
  );
}

export default App;