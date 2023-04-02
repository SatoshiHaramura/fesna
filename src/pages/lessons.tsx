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
        title="Stock Word"
        description="セキュリティに関する英文記事を読むセキュリティエンジニア向けの英単語学習サービス"
        openGraph={{
          url: 'https://stock-word.vercel.app/lessons',
          title: 'Stock Word',
          description:
            'セキュリティに関する英文記事を読むセキュリティエンジニア向けの英単語学習サービス',
          images: [
            {
              url: 'https://stock-word.vercel.app/ogp.png',
              width: 1200,
              height: 630,
            },
          ],
          siteName: 'Stock Word',
        }}
        twitter={{
          handle: '@s_haramura',
          cardType: 'summary_large_image',
        }}
      />
      <Lessons handleClickMenuButton={handleClickMenuButton} />
    </>
  );
};

export default LessonsPage;
