import { render, screen } from '@testing-library/react';

import SpeakerWaveIcon from '@/components/pages/lessons/SpeakerWaveIcon';

describe('SpeakerWaveIcon component', () => {
  test('display the speaker wave icon', () => {
    render(<SpeakerWaveIcon />);

    const speakerWaveIcon = screen.getByRole('img', {
      name: '音声読み上げ機能が有効になっています',
    });
    expect(speakerWaveIcon).toBeInTheDocument();
  });
});
