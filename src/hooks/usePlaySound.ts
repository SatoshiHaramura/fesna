import { useEffect } from 'react';

export const usePlaySound = (
  soundToggle: boolean | undefined,
  text: string
) => {
  useEffect(() => {
    setTimeout(() => {
      if (soundToggle && text) {
        const utterance = new SpeechSynthesisUtterance();
        utterance.text = text;
        utterance.lang = 'en-US';
        utterance.rate = 1;
        utterance.pitch = 1;
        utterance.volume = 1;
        utterance.voice = window.speechSynthesis.getVoices().filter((voice) => {
          return voice.name === 'Alex' || voice.name === 'Samantha';
        })[0];
        window.speechSynthesis.speak(utterance);
      }
    }, 200);

    return () => {
      window.speechSynthesis.cancel();
    };
  }, [soundToggle, text]);
};
