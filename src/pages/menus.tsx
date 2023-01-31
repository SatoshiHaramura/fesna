import Head from 'next/head';
import { useRouter } from 'next/router';
import { InferGetStaticPropsType, NextPage } from 'next';

import Menus from '@/components/pages/menus';
import { categoryData, lessonData } from '@/data';
import { buildCategories } from '@/repositories';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = () => {
  const categories = buildCategories(categoryData, lessonData);

  return {
    props: { categories },
  };
};

const MenusPage: NextPage<Props> = ({ categories }) => {
  const router = useRouter();
  const transitToLessonsPage = (): void => {
    router.push('/lessons');
  };

  return (
    <>
      <Head>
        <title>メニューページ</title>
      </Head>
      <Menus
        categories={categories}
        transitToLessonsPage={transitToLessonsPage}
      ></Menus>
    </>
  );
};

export default MenusPage;
