import Head from 'next/head';
import Lessons from '@/components/pages/lessons';
import { useRouter } from 'next/router';

export const LessonsPage = () => {
  const router = useRouter();
  const handleClickMenuButton = (): void => {
    router.push(`/menus`);
  };

  return (
    <>
      <Head>
        <title>レッスンページ</title>
      </Head>
      <Lessons handleClickMenuButton={handleClickMenuButton} />
    </>
  );
};

export default LessonsPage;
