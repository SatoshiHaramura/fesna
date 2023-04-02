import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';

import Lessons from '@/components/pages/lessons';

export const LessonsPage = () => {
  const router = useRouter();
  const handleClickMenuButton = (): void => {
    router.push(`/menus`);
  };

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
      <Lessons handleClickMenuButton={handleClickMenuButton} />
    </>
  );
};

export default LessonsPage;
