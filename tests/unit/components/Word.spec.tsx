import { render, RenderResult } from '@testing-library/react';

import Word from '@/components/pages/lessons/Word';

describe('Word component', () => {
  const partOfSpeech = '動詞';
  const word = 'include';
  const meaning = 'を含む';

  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(
      <Word partOfSpeech={partOfSpeech} word={word} meaning={meaning} />
    );
  });
  afterEach(() => {
    renderResult.unmount();
  });

  test('display the shortened part of speech', () => {
    const shortenedPartOfSpeech = renderResult.getByText('動');
    expect(shortenedPartOfSpeech).toBeInTheDocument();
  });

  test('display the word', () => {
    const word = renderResult.getByText('include');
    expect(word).toBeInTheDocument();
  });

  test('display the meaning', () => {
    const meaning = renderResult.getByText('を含む');
    expect(meaning).toBeInTheDocument();
  });
});
