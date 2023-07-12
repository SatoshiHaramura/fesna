import { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://secuword-boost.vercel.app',
    title: 'SecuWord Boost',
    description:
      'セキュリティに関する英文記事を読むセキュリティエンジニア向けの英単語学習サービス',
    images: [
      {
        url: 'https://secuword-boost.vercel.app/ogp.png',
        width: 1200,
        height: 630,
      },
    ],
    siteName: 'SecuWord Boost',
  },
  twitter: {
    handle: '@s_haramura',
    cardType: 'summary_large_image',
  },
};

export default config;
