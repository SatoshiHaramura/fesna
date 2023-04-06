import Head from 'next/head';
import { NextSeo } from 'next-seo';

import Lessons from '@/components/pages/lessons';

export const LessonsPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>レッスン | Stock Word</title>
        <meta name="keywords" content="セキュリティ, 英単語, 学習" />
      </Head>
      <NextSeo
        openGraph={{
          url: 'https://stock-word.vercel.app/lessons',
        }}
      />
      <Lessons />
    </>
  );
};

export default LessonsPage;
