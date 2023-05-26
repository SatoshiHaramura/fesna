import { render, screen } from '@testing-library/react';

import GithubIcon from '@/components/pages/home/GithubIcon';

describe('GithubIcon component', () => {
  test('display the github icon', () => {
    render(<GithubIcon />);

    const githubIcon = screen.getByRole('link', { name: 'GitHub' });
    expect(githubIcon).toBeInTheDocument();
  });
});
