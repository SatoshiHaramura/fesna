import { FC } from 'react';

import HomePage from './presenter';

type Props = {
  transitToMenusPage: () => void;
};

const Index: FC<Props> = ({ transitToMenusPage }) => {
  return <HomePage transitToMenusPage={transitToMenusPage}></HomePage>;
};

export default Index;
