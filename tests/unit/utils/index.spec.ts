import { shortenPartOfSpeech } from '@/utils';

describe('shortenPartOfSpeech function', () => {
  test('when the verb is shortened', () => {
    expect(shortenPartOfSpeech('動詞')).toBe('動');
  });

  test('when the noun is shortened', () => {
    expect(shortenPartOfSpeech('名詞')).toBe('名');
  });

  test('when the adjective is shortened', () => {
    expect(shortenPartOfSpeech('形容詞')).toBe('形');
  });

  test('when the adverb is shortened', () => {
    expect(shortenPartOfSpeech('副詞')).toBe('副');
  });
});
