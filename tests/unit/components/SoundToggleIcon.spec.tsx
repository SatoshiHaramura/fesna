import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SoundToggleIcon from '@/components/pages/lessons/SoundToggleIcon';

describe('SoundToggleIcon component', () => {
  describe('when automaticTextToSpeechMode is true', () => {
    test('display the speaker wave icon', () => {
      const automaticTextToSpeechMode = true;
      const handleClickPlaySound = jest.fn();

      render(
        <SoundToggleIcon
          automaticTextToSpeechMode={automaticTextToSpeechMode}
          handleClickPlaySoundButton={handleClickPlaySound}
        />
      );

      const speakerWaveIcon = screen.getByRole('img', {
        name: '音声読み上げ機能が有効になっています',
      });
      expect(speakerWaveIcon).toBeInTheDocument();
    });
  });

  describe('when automaticTextToSpeechMode is false', () => {
    test('display the speaker x mark icon', () => {
      const automaticTextToSpeechMode = false;
      const handleClickPlaySound = jest.fn();
      render(
        <SoundToggleIcon
          automaticTextToSpeechMode={automaticTextToSpeechMode}
          handleClickPlaySoundButton={handleClickPlaySound}
        />
      );

      const speakerXMarkIcon = screen.getByRole('img', {
        name: '音声読み上げ機能が無効になっています',
      });
      expect(speakerXMarkIcon).toBeInTheDocument();
    });
  });

  test('event handler is called when the sound toggle icon is clicked', async () => {
    const automaticTextToSpeechMode = false;
    const handleClickPlaySound = jest.fn();
    render(
      <SoundToggleIcon
        automaticTextToSpeechMode={automaticTextToSpeechMode}
        handleClickPlaySoundButton={handleClickPlaySound}
      />
    );

    const user = userEvent.setup();
    const soundToggleIcon = screen.getByTestId('sound-toggle-icon');
    await user.click(soundToggleIcon);

    expect(handleClickPlaySound).toHaveBeenCalledTimes(1);
  });
});
