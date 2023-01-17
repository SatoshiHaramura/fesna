import { FC } from 'react';
import { UseExample } from '@/types';

type Props = {
  useExamples: UseExample[];
};

const UseExample: FC<Props> = ({ useExamples }) => {
  return (
    <div className="flex flex-row gap-0.5">
      <div className="m-auto w-2/12 rounded-xl border border-gray-300 p-0.5 text-center">
        使用例
      </div>
      <div className="w-10/12">
        {useExamples.map((example, index) => {
          return (
            <div key={index} className="px-1">
              <div className="p-0.5">{example.example}</div>
              <div className="p-0.5">{example.meaning}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseExample;
