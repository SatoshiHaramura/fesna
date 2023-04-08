import { useState } from 'react';

import HomePage from './presenter';

const Index = () => {
  const [isTermsOfUseDialogOpen, setIsTermsOfUseDialogOpen] =
    useState<boolean>(false);
  const [isPrivacyPolicyDialogOpen, setIsPrivacyPolicyDialogOpen] =
    useState(false);

  const handleClickTermsOfUse = () => setIsTermsOfUseDialogOpen(true);
  const onCloseTermsOfUseDialog = () => setIsTermsOfUseDialogOpen(false);
  const handleClickPrivacyPolicy = () => setIsPrivacyPolicyDialogOpen(true);
  const onClosePrivacyPolicyDialog = () => setIsPrivacyPolicyDialogOpen(false);

  return (
    <HomePage
      isTermsOfUseDialogOpen={isTermsOfUseDialogOpen}
      handleClickTermsOfUse={handleClickTermsOfUse}
      onCloseTermsOfUseDialog={onCloseTermsOfUseDialog}
      isPrivacyPolicyDialogOpen={isPrivacyPolicyDialogOpen}
      handleClickPrivacyPolicy={handleClickPrivacyPolicy}
      onClosePrivacyPolicyDialog={onClosePrivacyPolicyDialog}
    ></HomePage>
  );
};

export default Index;
