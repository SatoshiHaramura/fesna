import Image from 'next/image';
import { FC } from 'react';

import logo from '/public/logo.png';
import StartButton from '@/components/pages/home/StartButton';
import TermsOfUseDialog from '@/components/pages/home/TermsOfUseDialog';
import PrivacyPolicyDialog from '@/components/pages/home/PrivacyPolicyDialog';
import GithubIcon from '@/components/pages/home/GithubIcon';
import TwitterIcon from '@/components/pages/home/TwitterIcon';

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
          <StartButton />
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 bg-slate-50 p-2">
          <div className="flex flex-row justify-center gap-10 p-2">
            <button
              onClick={handleClickTermsOfUse}
              className="text-xs text-gray-600 hover:underline"
            >
              利用規約
            </button>
            <TermsOfUseDialog
              isOpen={isTermsOfUseDialogOpen}
              onClose={onCloseTermsOfUseDialog}
            />
            <button
              onClick={handleClickPrivacyPolicy}
              className="text-xs text-gray-600 hover:underline"
            >
              プライバシーポリシー
            </button>
            <PrivacyPolicyDialog
              isOpen={isPrivacyPolicyDialogOpen}
              onClose={onClosePrivacyPolicyDialog}
            />
          </div>
          <div className="flex flex-row justify-center gap-4 p-0.5">
            <GithubIcon />
            <TwitterIcon />
          </div>
          <div className="p-0.5 text-center text-xs text-gray-600">
            © 2023 s_haramura
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presenter;
