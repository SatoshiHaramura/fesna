import { useState } from 'react';

import HomePage from './presenter';

const Index = () => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [isPrivacyPolicyDialogOpen, setIsPrivacyPolicyDialogOpen] =
    useState(false);

  const handleClickTermsOfUse = () => setIsDialogOpen(true);
  const handleClickPrivacyPolicy = () => setIsPrivacyPolicyDialogOpen(true);
  const onClose = () => setIsDialogOpen(false);
  const onClosePrivacyPolicyDialog = () => setIsPrivacyPolicyDialogOpen(false);

  return (
    <HomePage
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
