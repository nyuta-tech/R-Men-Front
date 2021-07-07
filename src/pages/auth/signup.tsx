import React from 'react';
import { VFC } from 'react';

import { Layout } from '../../components/Commons/Layout';
import { Auth } from '../../components/Uncommons/Auth';

const SignUp: VFC = () => {
  return (
    <Layout title="Home">
      <h1 className="text-center text-lg font-semibold pt-8 pb-4 tracking-wider">
        新規会員登録
      </h1>
      <Auth isLogin={false}></Auth>
    </Layout>
  );
};

export default SignUp;