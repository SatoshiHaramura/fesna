import { FC } from 'react';
import SpeakerWaveIcon from '@/components/pages/lessons/SpeakerWaveIcon';
import SpeakerXMarkIcon from '@/components/pages/lessons/SpeakerXMarkIcon';

type Props = {
  playSound: boolean | undefined;
  handleClickPlaySoundButton: () => void;
};

const SoundToggleIcon: FC<Props> = ({
  playSound,
  handleClickPlaySoundButton,
}) => {
  return (
    <button
      onClick={handleClickPlaySoundButton}
      data-testid="sound-toggle-icon"
    >
      {playSound ? <SpeakerWaveIcon /> : <SpeakerXMarkIcon />}
    </button>
  );
};

export default SoundToggleIcon;
