import Head from 'next/head';
import { NextPage } from 'next';

import Home from '@/components/pages/home';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SecuWord Boost</title>
        <meta
          name="description"
          content="セキュリティに関する英文記事を読むセキュリティエンジニア向けの英単語学習サービス。"
        />
        <meta name="keywords" content="セキュリティ, 英単語, 学習" />
      </Head>
      <Home />
    </>
  );
};

export default HomePage;
