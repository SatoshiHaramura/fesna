import { useEffect } from 'react';

const UTTERANCE_LANG = 'en-US';
const UTTERANCE_RATE = 1;
const UTTERANCE_PITCH = 1;
const UTTERANCE_VOLUME = 1;
export const SPEECH_DELAY_TIME = 200;

const createUtterance = (text: string): SpeechSynthesisUtterance => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = UTTERANCE_LANG;
  utterance.rate = UTTERANCE_RATE;
  utterance.pitch = UTTERANCE_PITCH;
  utterance.volume = UTTERANCE_VOLUME;
  utterance.voice = window.speechSynthesis.getVoices().filter((voice) => {
    return voice.name === 'Alex' || voice.name === 'Samantha';
  })[0];

  return utterance;
};

export const useTextToSpeech = (
  soundToggle: boolean | undefined,
  text: string
): void => {
  useEffect(() => {
    if (soundToggle) {
      setTimeout(() => {
        const utterance = createUtterance(text);
        window.speechSynthesis.speak(utterance);
      }, SPEECH_DELAY_TIME);
    }

    return () => {
      window.speechSynthesis?.cancel();
    };
  }, [soundToggle, text]);
};
