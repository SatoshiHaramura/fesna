import { FC } from 'react';
import { Roboto_Flex } from '@next/font/google';

type AnswerJudgmentProps = {
  isAnswerCorrect: boolean;
};

type QuestionWordProps = {
  questionWord: string;
  judgedAnswer: boolean | undefined;
};

const roboto = Roboto_Flex({
  weight: ['400'],
  preload: false,
});

const AnswerJudgmentMark: FC<AnswerJudgmentProps> = ({ isAnswerCorrect }) => {
  const style = isAnswerCorrect ? 'text-sky-500' : 'text-red-500';
  const mark = isAnswerCorrect ? '○' : '✗';
  return (
    <div
      className={`${style} text-center font-sans text-9xl font-bold opacity-70`}
      data-testid="answer-judgment-mark"
    >
      {mark}
    </div>
  );
};

const QuestionAndAnswerJudgment: FC<QuestionWordProps> = ({
  questionWord,
  judgedAnswer,
}) => {
  return (
    <div className="relative flex h-44 w-80 items-center justify-center rounded-xl">
      <div
        className={`${roboto.className} text-5xl text-gray-700`}
        data-testid="question-word"
      >
        {questionWord}
      </div>
      {judgedAnswer !== undefined && (
        <div className="z-1 absolute top-6 left-0 right-0 bottom-0 m-auto">
          <AnswerJudgmentMark isAnswerCorrect={judgedAnswer} />
        </div>
      )}
    </div>
  );
};

export default QuestionAndAnswerJudgment;
