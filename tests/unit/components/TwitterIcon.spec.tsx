import { render, screen } from '@testing-library/react';

import TwitterIcon from '@/components/pages/home/TwitterIcon';

describe('TwitterIcon component', () => {
  test('display the twitter icon', () => {
    render(<TwitterIcon />);

    const twitterIcon = screen.getByRole('link', { name: 'Twitter' });
    expect(twitterIcon).toBeInTheDocument();
  });
});
