import { render, RenderResult } from '@testing-library/react';

import HomePageFooter from '@/components/pages/home/HomePageFooter';

describe('HomePageFooter component', () => {
  const isTermsOfUseDialogOpen = false;
  const handleClickTermsOfUse = jest.fn();
  const onCloseTermsOfUseDialog = jest.fn();
  const isPrivacyPolicyDialogOpen = false;
  const handleClickPrivacyPolicy = jest.fn();
  const onClosePrivacyPolicyDialog = jest.fn();

  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <HomePageFooter
        isTermsOfUseDialogOpen={isTermsOfUseDialogOpen}
        handleClickTermsOfUse={handleClickTermsOfUse}
        onCloseTermsOfUseDialog={onCloseTermsOfUseDialog}
        isPrivacyPolicyDialogOpen={isPrivacyPolicyDialogOpen}
        handleClickPrivacyPolicy={handleClickPrivacyPolicy}
        onClosePrivacyPolicyDialog={onClosePrivacyPolicyDialog}
      />
    );
  });
  afterEach(() => {
    renderResult.unmount();
  });

  test('display the terms of use', () => {
    const termsOfUse = renderResult.getByRole('button', { name: '利用規約' });
    expect(termsOfUse).toBeInTheDocument();
  });

  test('display the privacy policy', () => {
    const privacyPolicy = renderResult.getByRole('button', {
      name: 'プライバシーポリシー',
    });
    expect(privacyPolicy).toBeInTheDocument();
  });

  test('display the github icon', () => {
    const githubIcon = renderResult.getByRole('link', { name: 'GitHub' });
    expect(githubIcon).toBeInTheDocument();
  });

  test('display the twitter icon', () => {
    const twitterIcon = renderResult.getByRole('link', { name: 'Twitter' });
    expect(twitterIcon).toBeInTheDocument();
  });

  test('display the copyright', () => {
    const copyright = renderResult.getByText('© 2023 s_haramura');
    expect(copyright).toBeInTheDocument();
  });
});
