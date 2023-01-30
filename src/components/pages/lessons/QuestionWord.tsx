import { FC } from 'react';

type Props = {
  questionWord: string;
  judgedAnswer: boolean;
};

const QuestionWord: FC<Props> = ({ questionWord, judgedAnswer }) => {
  const addedStyle: string[] = [];
  const unansweredStyle = ``;
  const correctStyle = `before:content-['○'] before:text-sky-500`;
  const incorrectStyle = `before:content-['✗'] before:text-red-500`;

  if (judgedAnswer === undefined) {
    addedStyle.push(unansweredStyle);
  } else if (judgedAnswer) {
    addedStyle.push(correctStyle);
  } else {
    addedStyle.push(incorrectStyle);
  }

  return (
    <div
      className={`${addedStyle} relative before:absolute before:top-6 before:left-0 before:right-0 before:z-10 before:m-auto before:h-40 before:w-40 before:text-center before:text-9xl before:font-bold before:opacity-50`}
    >
      <div className="flex h-44 w-80 items-center justify-center rounded-xl border border-gray-100">
        <div className="font-sans text-5xl text-gray-700">{questionWord}</div>
      </div>
    </div>
  );
};

export default QuestionWord;
