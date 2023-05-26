import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

import TermsOfUseDialog from '@/components/pages/home/TermsOfUseDialog';

describe('TermsOfUseDialog component', () => {
  beforeEach(() => {
    mockAllIsIntersecting(true);
  });
  afterEach(() => {
    mockAllIsIntersecting(false);
  });

  describe('when the dialog is opened', () => {
    test('display the dialog', () => {
      const isOpen = true;
      const onClose = jest.fn();
      render(<TermsOfUseDialog isOpen={isOpen} onClose={onClose} />);

      const termsOfUseDialog = screen.getByRole('dialog');
      expect(termsOfUseDialog).toBeInTheDocument();
    });

    test('event handler is called when the close button is clicked', async () => {
      const isOpen = true;
      const onClose = jest.fn();
      render(<TermsOfUseDialog isOpen={isOpen} onClose={onClose} />);

      const user = userEvent.setup();
      const closeButton = screen.getByRole('button', { name: '閉じる' });
      await user.click(closeButton);

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('when the dialog is closed', () => {
    test("doesn't display the dialog", () => {
      const isOpen = false;
      const onClose = jest.fn();
      render(<TermsOfUseDialog isOpen={isOpen} onClose={onClose} />);

      const termsOfUseDialog = screen.queryByRole('dialog');
      expect(termsOfUseDialog).not.toBeInTheDocument();
    });
  });
});
