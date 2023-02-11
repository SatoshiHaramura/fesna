import { FC } from 'react';

type Props = {
  questionWord: string;
  judgedAnswer: boolean;
};

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
    <div className="relative flex h-44 w-80 items-center justify-center rounded-xl border border-gray-100">
      <div
        className="font-sans text-5xl text-gray-700"
        data-testid="question-word"
      >
        {questionWord}
      </div>
      <div
        className={`${addedStyle} z-1 absolute top-5 left-0 right-0 bottom-0 m-auto text-center text-9xl font-bold opacity-50`}
      >
        {correctMarkOrIncorrectMark}
      </div>
    </div>
  );
};

export default QuestionWord;
