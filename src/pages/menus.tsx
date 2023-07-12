import Head from 'next/head';
import { InferGetStaticPropsType, NextPage } from 'next';
import { NextSeo } from 'next-seo';

import Menus from '@/components/pages/menus';
import { categoryData, lessonData } from '@/data';
import { buildCategoriesWithLessons } from '@/repositories';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = () => {
  const categories = buildCategoriesWithLessons(categoryData, lessonData);

  return {
    props: { categories },
  };
};

const MenusPage: NextPage<Props> = ({ categories }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>メニュー | SecuWord Boost</title>
        <meta
          name="description"
          content="セキュリティに関する英文記事を読むセキュリティエンジニア向けの英単語学習サービス。出題する英単語の品詞を選択します。"
        />
        <meta name="keywords" content="セキュリティ, 英単語, 学習" />
      </Head>
      <NextSeo
        openGraph={{
          url: 'https://stock-word.vercel.app/menus',
        }}
      />
      <Menus categories={categories}></Menus>
    </>
  );
};

export default MenusPage;
