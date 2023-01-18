import Head from 'next/head';
import { useRouter } from 'next/router';
import { InferGetStaticPropsType, NextPage } from 'next';

import Menus from '@/components/pages/menus';
import { categoryData, questionGroupData } from '@/data';
import type { UserSetting } from '@/types';
import { buildCategories } from '@/repositories';

import useLocalStorage from 'use-local-storage';

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = () => {
  const categories = buildCategories(categoryData, questionGroupData);

  return {
    props: { categories },
  };
};

const MenusPage: NextPage<Props> = ({ categories }) => {
  const [userSetting, setUserSetting] = useLocalStorage<UserSetting>(
    'userSetting',
    {
      questionGroupId: undefined,
      incorrectQuestionIds: undefined,
      playSound: false,
    }
  );

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
        userSetting={userSetting}
        setUserSetting={setUserSetting}
        transitToLessonsPage={transitToLessonsPage}
      ></Menus>
    </>
  );
};

export default MenusPage;
