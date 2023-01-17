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
      className={`${addedStyle} relative p-4 before:absolute before:top-24 before:left-0 before:right-0 before:z-10 before:m-auto before:h-40 before:w-40 before:text-center before:text-9xl before:font-bold before:leading-5 before:opacity-50`}
    >
      <div className="card m-1 h-44 w-80 rounded-xl border border-gray-100 p-1">
        <div className="card-title m-auto text-center font-sans text-4xl text-gray-700">
          {questionWord}
        </div>
      </div>
    </div>
  );
};

export default QuestionWord;
