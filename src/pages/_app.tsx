import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { Noto_Sans_JP } from '@next/font/google';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';

const notoSansJapanese = Noto_Sans_JP({
  weight: ['400'],
  preload: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${notoSansJapanese.style.fontFamily};
        }
      `}</style>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
