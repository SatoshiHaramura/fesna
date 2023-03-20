import { FC, useState } from 'react';

import HomePage from './presenter';

type Props = {
  transitToMenusPage: () => void;
};

const Index: FC<Props> = ({ transitToMenusPage }) => {
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

  const handleClickTermsOfUse = () => setIsDialogOpen(true);
  const onClose = () => setIsDialogOpen(false);

  return (
    <HomePage
      transitToMenusPage={transitToMenusPage}
      isOpen={isDialogOpen}
      handleClickTermsOfUse={handleClickTermsOfUse}
      onClose={onClose}
    ></HomePage>
  );
};

export default Index;
