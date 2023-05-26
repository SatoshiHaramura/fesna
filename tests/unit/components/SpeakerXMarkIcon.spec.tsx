import { render, screen } from '@testing-library/react';

import SpeakerXMarkIcon from '@/components/pages/lessons/SpeakerXMarkIcon';

describe('SpeakerXMarkIcon  component', () => {
  test('display the speaker x mark icon', () => {
    render(<SpeakerXMarkIcon />);

    const speakerXMarkIcon = screen.getByRole('img', {
      name: '音声読み上げ機能が無効になっています',
    });
    expect(speakerXMarkIcon).toBeInTheDocument();
  });
});
