import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Analytics } from '@vercel/analytics/react';
import { Noto_Sans_JP } from '@next/font/google';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import useLocalStorageState from 'use-local-storage-state';
import { UserSetting } from '@/types';

const notoSansJapanese = Noto_Sans_JP({
  weight: ['400'],
  preload: false,
});

const App = ({ Component, pageProps }: AppProps) => {
  const [userSetting, setUserSetting] = useLocalStorageState<UserSetting>(
    'userSetting',
    {
      defaultValue: {
        lessonId: 1,
        playSound: false,
      },
    }
  );

  const localStorage = {
    userSetting,
    setUserSetting,
  };

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${notoSansJapanese.style.fontFamily};
        }
      `}</style>
      <DefaultSeo {...SEO} />
      <Component localStorage={localStorage} {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;
