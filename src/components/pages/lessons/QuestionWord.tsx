import { FC } from 'react';
import { Roboto_Flex } from '@next/font/google';

type Props = {
  questionWord: string;
  judgedAnswer: boolean | undefined;
};

const roboto = Roboto_Flex({
  weight: ['400'],
  preload: false,
});

const QuestionWord: FC<Props> = ({ questionWord, judgedAnswer }) => {
  const addedStyle: string[] = [];
  const correctStyle = `text-sky-500`;
  const incorrectStyle = `text-red-500`;
  let correctMarkOrIncorrectMark;

  if (judgedAnswer === undefined) {
    correctMarkOrIncorrectMark = '';
  } else if (judgedAnswer) {
    addedStyle.push(correctStyle);
    correctMarkOrIncorrectMark = '○';
  } else {
    addedStyle.push(incorrectStyle);
    correctMarkOrIncorrectMark = '✗';
  }

  return (
    <div className="relative flex h-44 w-80 items-center justify-center rounded-xl">
      <div
        className={`${roboto.className} text-5xl text-gray-700`}
        data-testid="question-word"
      >
        {questionWord}
      </div>
      <div
        className={`${addedStyle} z-1 absolute top-6 left-0 right-0 bottom-0 m-auto text-center font-sans text-9xl font-bold opacity-70`}
        data-testid="correct-mark-or-incorrect-mark"
      >
        {correctMarkOrIncorrectMark}
      </div>
    </div>
  );
};

export default QuestionWord;
