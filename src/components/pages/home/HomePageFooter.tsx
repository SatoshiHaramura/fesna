import { FC } from 'react';

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

const HomePageFooter: FC<Props> = ({
  isTermsOfUseDialogOpen,
  handleClickTermsOfUse,
  onCloseTermsOfUseDialog,
  isPrivacyPolicyDialogOpen,
  handleClickPrivacyPolicy,
  onClosePrivacyPolicyDialog,
}) => {
  return (
    <footer>
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 bg-slate-50 p-2">
        <ul className="flex flex-row justify-center gap-4 p-0.5">
          <li>
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
          </li>
          <li>
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
          </li>
        </ul>
        <ul className="flex flex-row justify-center gap-4 p-0.5">
          <li>
            <GithubIcon />
          </li>
          <li>
            <TwitterIcon />
          </li>
        </ul>
        <div className="p-0.5 text-center text-xs text-gray-600">
          © 2023 s_haramura
        </div>
      </div>
    </footer>
  );
};

export default HomePageFooter;
