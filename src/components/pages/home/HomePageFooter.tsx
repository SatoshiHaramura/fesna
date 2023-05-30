import { FC } from 'react';

import TermsOfUseDialog from '@/components/pages/home/TermsOfUseDialog';
import PrivacyPolicyDialog from '@/components/pages/home/PrivacyPolicyDialog';
import GithubIcon from '@/components/pages/home/GithubIcon';
import TwitterIcon from '@/components/pages/home/TwitterIcon';

import useDialog from '@/hooks/useDialog';

const HomePageFooter: FC = () => {
  const [isTermsOfUseDialogOpen, openTermsOfUseDialog, closeTermsOfUseDialog] =
    useDialog();
  const [
    isPrivacyPolicyDialogOpen,
    openPrivacyPolicyDialog,
    closePrivacyPolicyDialog,
  ] = useDialog();

  return (
    <footer>
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100 bg-slate-50 p-2">
        <ul className="flex flex-row justify-center gap-4 p-0.5">
          <li>
            <button
              onClick={openTermsOfUseDialog}
              className="text-xs text-gray-600 hover:underline"
            >
              利用規約
            </button>
            <TermsOfUseDialog
              isOpen={isTermsOfUseDialogOpen}
              onClose={closeTermsOfUseDialog}
            />
          </li>
          <li>
            <button
              onClick={openPrivacyPolicyDialog}
              className="text-xs text-gray-600 hover:underline"
            >
              プライバシーポリシー
            </button>
            <PrivacyPolicyDialog
              isOpen={isPrivacyPolicyDialogOpen}
              onClose={closePrivacyPolicyDialog}
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
