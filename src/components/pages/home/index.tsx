import { FC, useState } from 'react';

import HomePage from './presenter';

type Props = {
  transitToMenusPage: () => void;
};

const Index: FC<Props> = ({ transitToMenusPage }) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isPrivacyPolicyDialogOpen, setIsPrivacyPolicyDialogOpen] =
    useState(false);

  const handleClickTermsOfUse = () => setIsDialogOpen(true);
  const handleClickPrivacyPolicy = () => setIsPrivacyPolicyDialogOpen(true);
  const onClose = () => setIsDialogOpen(false);
  const onClosePrivacyPolicyDialog = () => setIsPrivacyPolicyDialogOpen(false);

  return (
    <HomePage
      transitToMenusPage={transitToMenusPage}
      isOpen={isDialogOpen}
      handleClickTermsOfUse={handleClickTermsOfUse}
      onClose={onClose}
      isPrivacyPolicyDialogOpen={isPrivacyPolicyDialogOpen}
      handleClickPrivacyPolicy={handleClickPrivacyPolicy}
      onClosePrivacyPolicyDialog={onClosePrivacyPolicyDialog}
    ></HomePage>
  );
};

export default Index;
