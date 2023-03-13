import Image from 'next/image';
import { FC } from 'react';

import logo from '/public/logo.png';
import StartButton from '@/components/pages/home/StartButton';

type Props = {
  transitToMenusPage: () => void;
};
const Presenter: FC<Props> = ({ transitToMenusPage }) => {
  return (
    <div className="bg-[url('/background.png')]">
      <div className="mx-auto flex h-screen max-w-sm flex-col justify-center border-x border-gray-100 bg-slate-50">
        <h1 className="py-4 px-4">
          セキュリティに関する英文記事を読む
          <br />
          セキュリティエンジニア向けの
          <br />
          英単語 学習サービス
        </h1>
        <div className="mx-auto h-auto px-4">
          <Image
            src={logo}
            alt="Stock Word logo"
            width={400}
            height={100}
            priority={true}
          />
        </div>
        <h1 className="py-8 px-10">
          情報セキュリティやサイバーセキュリティに関するニュース記事で実際に使われている英単語に特化しているため、生きた英語を身につける手助けになります。
        </h1>
        <div className="py-6 px-8 text-center">
          <StartButton onClick={transitToMenusPage} />
        </div>
      </div>
    </div>
  );
};

export default Presenter;
