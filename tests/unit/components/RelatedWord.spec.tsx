import { render, RenderResult, within } from '@testing-library/react';

import type { RelatedWord as RelatedWordType } from '@/types';

import RelatedWord from '@/components/pages/lessons/RelatedWord';

describe('RelatedWord component', () => {
  const relatedWords: RelatedWordType[] = [
    {
      word: 'inclusion',
      meaning: '包含、含まれるもの',
      partOfSpeech: '名詞',
    },
    {
      word: 'inclusive',
      meaning: 'すべてを含んだ',
      partOfSpeech: '形容詞',
    },
  ];

  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<RelatedWord relatedWords={relatedWords} />);
  });
  afterEach(() => {
    renderResult.unmount();
  });

  test('display the heading', () => {
    const heading = renderResult.getByRole('heading');
    expect(heading).toHaveTextContent('関連語');
  });

  test('display the part of speech, word, and meaning for each related word', () => {
    const list = renderResult.getByRole('list');
    const listItem = within(list).getAllByRole('listitem');
    expect(listItem[0]).toHaveTextContent('名');
    expect(listItem[0]).toHaveTextContent('inclusion');
    expect(listItem[0]).toHaveTextContent('包含、含まれるもの');

    expect(listItem.at(-1)).toHaveTextContent('形');
    expect(listItem.at(-1)).toHaveTextContent('inclusive');
    expect(listItem.at(-1)).toHaveTextContent('すべてを含んだ');
  });

  test('display all related words', () => {
    const list = renderResult.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(within(list).getAllByRole('listitem')).toHaveLength(2);
  });
});
