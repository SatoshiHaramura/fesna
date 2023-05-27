import { FC } from 'react';
import SpeakerWaveIcon from '@/components/pages/lessons/SpeakerWaveIcon';
import SpeakerXMarkIcon from '@/components/pages/lessons/SpeakerXMarkIcon';

type Props = {
  automaticTextToSpeechMode: boolean | undefined;
  handleClickPlaySoundButton: () => void;
};

const SpeakerToggleButton: FC<Props> = ({
  automaticTextToSpeechMode,
  handleClickPlaySoundButton,
}) => {
  return (
    <button
      onClick={handleClickPlaySoundButton}
      data-testid="sound-toggle-icon"
    >
      {automaticTextToSpeechMode ? <SpeakerWaveIcon /> : <SpeakerXMarkIcon />}
    </button>
  );
};

export default SpeakerToggleButton;
