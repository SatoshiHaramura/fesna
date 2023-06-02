import { FC } from 'react';
import { UseExample } from '@/types';
import { Roboto_Flex } from '@next/font/google';

type Props = {
  useExamples: UseExample[];
};

const roboto = Roboto_Flex({
  weight: ['400'],
  preload: false,
});

const UseExample: FC<Props> = ({ useExamples }) => {
  return (
    <div className="flex flex-row gap-2 py-2" data-testid="use-example">
      <h2 className="m-auto w-2/12 rounded-xl border border-slate-400 bg-slate-100 px-0.5 py-2 text-center text-sm">
        使用例
      </h2>
      <ul className="w-10/12">
        {useExamples.map(({ example, meaning }) => {
          return (
            <li key={example}>
              <div className={`${roboto.className} p-0.5 leading-4`}>
                {example}
              </div>
              <div className="p-0.5 leading-4">{meaning}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseExample;
