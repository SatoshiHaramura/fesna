import Image from 'next/image';
import { FC } from 'react';

import logo from '/public/logo.png';
import StartButton from '@/components/pages/home/StartButton';
import HomePageFooter from '@/components/pages/home/HomePageFooter';

type Props = {
  isTermsOfUseDialogOpen: boolean;
  handleClickTermsOfUse: () => void;
  onCloseTermsOfUseDialog: () => void;
  isPrivacyPolicyDialogOpen: boolean;
  handleClickPrivacyPolicy: () => void;
  onClosePrivacyPolicyDialog: () => void;
};
const Presenter: FC<Props> = ({
  isTermsOfUseDialogOpen,
  handleClickTermsOfUse,
  onCloseTermsOfUseDialog,
  isPrivacyPolicyDialogOpen,
  handleClickPrivacyPolicy,
  onClosePrivacyPolicyDialog,
}) => {
  return (
    <div className="bg-[url('/background.png')] bg-fixed">
      <div className="relative mx-auto flex h-screen max-w-sm flex-col justify-center border-x border-gray-100 bg-slate-50">
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
            alt="Webサービスのロゴ：サービス名はStock Word。"
            width={400}
            height={100}
            priority={true}
          />
        </div>
        <p className="py-8 px-10">
          情報セキュリティやサイバーセキュリティに関するニュース記事で実際に使われている英単語に特化しているため、生きた英語を身につける手助けになります。
        </p>
        <div className="py-6 px-8 text-center">
          <StartButton />
        </div>
        <HomePageFooter
          isTermsOfUseDialogOpen={isTermsOfUseDialogOpen}
          handleClickTermsOfUse={handleClickTermsOfUse}
          onCloseTermsOfUseDialog={onCloseTermsOfUseDialog}
          isPrivacyPolicyDialogOpen={isPrivacyPolicyDialogOpen}
          handleClickPrivacyPolicy={handleClickPrivacyPolicy}
          onClosePrivacyPolicyDialog={onClosePrivacyPolicyDialog}
        />
      </div>
    </div>
  );
};

export default Presenter;
