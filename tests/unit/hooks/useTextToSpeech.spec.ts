import { act, renderHook } from '@testing-library/react';

import { SPEECH_DELAY_TIME, useTextToSpeech } from '@/hooks/useTextToSpeech';

const mockSpeak = jest.fn();
const mockCancel = jest.fn();
const mockGetVoices = jest.fn();

const mockSpeechSynthesis: SpeechSynthesis = {
  speak: mockSpeak,
  cancel: mockCancel,
  getVoices: mockGetVoices,
  pause: jest.fn(),
  resume: jest.fn(),
  onvoiceschanged: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
  pending: false,
  speaking: false,
  paused: false,
};

global.SpeechSynthesisUtterance = jest.fn();
global.speechSynthesis = mockSpeechSynthesis;

describe('useTextToSpeech function', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('text should be spoken when soundToggle is true', async () => {
    const soundToggle = true;
    const text = 'include';
    renderHook(() => useTextToSpeech(soundToggle, text));
    mockGetVoices.mockReturnValue([
      {
        name: 'Samantha',
        lang: 'en-US',
        localService: true,
        voiceURL: 'Samantha',
        default: false,
      },
    ]);

    act(() => {
      jest.advanceTimersByTime(SPEECH_DELAY_TIME);
    });
    expect(mockSpeak).toHaveBeenCalledTimes(1);
  });

  test('text should not be spoken when soundToggle is false', async () => {
    const soundToggle = false;
    const text = 'include';
    renderHook(() => useTextToSpeech(soundToggle, text));
    mockGetVoices.mockReturnValue([
      {
        name: 'Samantha',
        lang: 'en-US',
        localService: true,
        voiceURL: 'Samantha',
        default: false,
      },
    ]);

    act(() => {
      jest.advanceTimersByTime(SPEECH_DELAY_TIME);
    });
    expect(mockSpeak).toHaveBeenCalledTimes(0);
  });

  test('should cancel speech when unmount', async () => {
    const soundToggle = true;
    const text = 'include';
    const { unmount } = renderHook(() => useTextToSpeech(soundToggle, text));
    mockGetVoices.mockReturnValue([
      {
        name: 'Samantha',
        lang: 'en-US',
        localService: true,
        voiceURL: 'Samantha',
        default: false,
      },
    ]);

    unmount();
    expect(mockCancel).toHaveBeenCalledTimes(1);
  });
});
