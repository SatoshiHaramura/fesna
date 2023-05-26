import { render, RenderResult, within } from '@testing-library/react';

import type { UseExample as UseExampleType } from '@/types';

import UseExample from '@/components/pages/lessons/UseExample';

describe('UseExample component', () => {
  const useExamples: UseExampleType[] = [
    {
      example: 'the email including a malicious macro',
      meaning: '悪意のあるマクロを含むメール',
    },
    {
      example:
        'This security system includes various features such as intrusion detection',
      meaning: 'このセキュリティシステムは、侵入検知を含む多くの機能がある',
    },
  ];

  let renderResult: RenderResult;
  beforeEach(() => {
    renderResult = render(<UseExample useExamples={useExamples} />);
  });
  afterEach(() => {
    renderResult.unmount();
  });

  test('display the heading', () => {
    const heading = renderResult.getByRole('heading');
    expect(heading).toHaveTextContent('使用例');
  });

  test('display examples of word usage and its meaning', () => {
    const list = renderResult.getByRole('list');
    const listItem = within(list).getAllByRole('listitem');
    expect(listItem[0]).toHaveTextContent(
      'the email including a malicious macro'
    );
    expect(listItem[0]).toHaveTextContent('悪意のあるマクロを含むメール');

    expect(listItem.at(-1)).toHaveTextContent(
      'This security system includes various features such as intrusion detection'
    );
    expect(listItem.at(-1)).toHaveTextContent(
      'このセキュリティシステムは、侵入検知を含む多くの機能がある'
    );
  });

  test('display all use examples', () => {
    const list = renderResult.getByRole('list');
    expect(list).toBeInTheDocument();
    expect(within(list).getAllByRole('listitem')).toHaveLength(2);
  });
});
