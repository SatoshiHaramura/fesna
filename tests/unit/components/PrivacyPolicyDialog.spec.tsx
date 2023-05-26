import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils';

import PrivacyPolicyDialog from '@/components/pages/home/PrivacyPolicyDialog';

describe('PrivacyPolicyDialog component', () => {
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
      render(<PrivacyPolicyDialog isOpen={isOpen} onClose={onClose} />);

      const privacyPolicyDialog = screen.getByRole('dialog');
      expect(privacyPolicyDialog).toBeInTheDocument();
    });

    test('event handler is called when the close button is clicked', async () => {
      const isOpen = true;
      const onClose = jest.fn();
      render(<PrivacyPolicyDialog isOpen={isOpen} onClose={onClose} />);

      const user = userEvent.setup();
      const closeButton = screen.getByRole('button', { name: '閉じる' });
      await user.click(closeButton);

      expect(onClose).toHaveBeenCalledTimes(1);
    });
  });

  describe('when the dialog is closed', () => {
    test("doesn't the display dialog", () => {
      const isOpen = false;
      const onClose = jest.fn();
      render(<PrivacyPolicyDialog isOpen={isOpen} onClose={onClose} />);

      const privacyPolicyDialog = screen.queryByRole('dialog');
      expect(privacyPolicyDialog).not.toBeInTheDocument();
    });
  });
});
