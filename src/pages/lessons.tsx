import { NextPage } from 'next';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

import Lessons from '@/components/pages/lessons';

const LessonsPage: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>レッスン | SecuWord Boost</title>
        <meta
          name="description"
          content="セキュリティに関する英文記事を読むセキュリティエンジニア向けの英単語学習サービス。品詞ごとに英単語の問題を最大10問出題します。"
        />
        <meta name="keywords" content="セキュリティ, 英単語, 学習" />
      </Head>
      <NextSeo
        openGraph={{
          url: 'https://secuword-boost.vercel.app/lessons',
        }}
      />
      <Lessons />
    </>
  );
};

export default LessonsPage;
