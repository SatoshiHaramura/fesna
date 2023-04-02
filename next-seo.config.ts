import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  title: 'Stock Word',
  description:
    'セキュリティに関する英文記事を読むセキュリティエンジニア向けの英単語学習サービス',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://stock-word.vercel.app',
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
  },
  twitter: {
    handle: '@s_haramura',
    cardType: 'summary_large_image',
  },
};

export default config;
