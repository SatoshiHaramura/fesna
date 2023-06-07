import { shortenPartOfSpeech } from '@/utils';

describe('shortenPartOfSpeech function', () => {
  test('when the verb is omitted', () => {
    expect(shortenPartOfSpeech('動詞')).toBe('動');
  });

  test('when the noun is omitted', () => {
    expect(shortenPartOfSpeech('名詞')).toBe('名');
  });

  test('when the adjective is omitted', () => {
    expect(shortenPartOfSpeech('形容詞')).toBe('形');
  });

  test('when the adverb is omitted', () => {
    expect(shortenPartOfSpeech('副詞')).toBe('副');
  });
});
