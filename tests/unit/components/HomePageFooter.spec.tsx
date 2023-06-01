import { render, RenderResult, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

import HomePageFooter from '@/components/pages/home/HomePageFooter';

describe('HomePageFooter component', () => {
  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<HomePageFooter />);
    mockAllIsIntersecting(true);
  });
  afterEach(() => {
    renderResult.unmount();
    mockAllIsIntersecting(false);
  });

  describe('operations of the terms of use dialog', () => {
    test('display the dialog when the terms of use is clicked', async () => {
      const user = userEvent.setup();
      const termsOfUse = renderResult.getByRole('button', { name: '利用規約' });
      await user.click(termsOfUse);

      const dialog = renderResult.getByRole('dialog');
      expect(
        within(dialog).getByRole('heading', {
          name: '利用規約',
        })
      ).toBeInTheDocument();
    });

    test('close the dialog when the close button is clicked', async () => {
      const user = userEvent.setup();
      const termsOfUse = renderResult.getByRole('button', { name: '利用規約' });
      await user.click(termsOfUse);

      const dialog = renderResult.getByRole('dialog');
      expect(
        within(dialog).getByRole('heading', {
          name: '利用規約',
        })
      ).toBeInTheDocument();

      const closeButton = within(dialog).getByRole('button', {
        name: '閉じる',
      });
      await user.click(closeButton);

      expect(dialog).not.toBeInTheDocument();
    });
  });

  describe('operations of the privacy policy dialog', () => {
    test('display the dialog when the privacy policy is clicked', async () => {
      const user = userEvent.setup();
      const privacyPolicy = renderResult.getByRole('button', {
        name: 'プライバシーポリシー',
      });
      await user.click(privacyPolicy);

      const dialog = renderResult.getByRole('dialog');
      expect(
        within(dialog).getByRole('heading', {
          name: 'プライバシーポリシー',
        })
      ).toBeInTheDocument();
    });

    test('close the dialog when the close button is clicked', async () => {
      const user = userEvent.setup();
      const privacyPolicy = renderResult.getByRole('button', {
        name: 'プライバシーポリシー',
      });
      await user.click(privacyPolicy);

      const dialog = renderResult.getByRole('dialog');
      expect(
        within(dialog).getByRole('heading', {
          name: 'プライバシーポリシー',
        })
      ).toBeInTheDocument();

      const closeButton = within(dialog).getByRole('button', {
        name: '閉じる',
      });
      await user.click(closeButton);

      expect(dialog).not.toBeInTheDocument();
    });
  });

  describe('display of the sns link icons', () => {
    test('display the github icon', () => {
      const githubIcon = renderResult.getByRole('link', { name: 'GitHub' });
      expect(githubIcon).toBeInTheDocument();
    });

    test('display the twitter icon', () => {
      const twitterIcon = renderResult.getByRole('link', { name: 'Twitter' });
      expect(twitterIcon).toBeInTheDocument();
    });
  });

  test('display the copyright', () => {
    const copyright = renderResult.getByText('© 2023 s_haramura');
    expect(copyright).toBeInTheDocument();
  });
});
