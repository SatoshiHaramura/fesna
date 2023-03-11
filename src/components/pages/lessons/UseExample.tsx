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
    <div className="flex flex-row gap-2 py-2">
      <div className="m-auto w-2/12 rounded-xl border border-gray-300 px-0.5 py-2 text-center text-sm">
        使用例
      </div>
      <div className="w-10/12">
        {useExamples.map(({ example, meaning }, index) => {
          return (
            <div key={index}>
              <div className={`${roboto.className} p-0.5 text-sm leading-4`}>
                {example}
              </div>
              <div className="p-0.5 text-sm leading-4">{meaning}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseExample;
