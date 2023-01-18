import React, { FC, useEffect, useState } from 'react';
import LessonsPage from './presenter';
import useLocalStorage from 'use-local-storage';
import {
  filterQuestionsByQuestionGroupId,
  findCategoryByQuestionGroupId,
  findQuestionGroupById,
} from '@/repositories';
import { categoryData, questionData, questionGroupData } from '@/data';
import { Question, UserSetting } from '@/types';

type Props = {
  handleClickMenuButton: () => void;
};

const Index: FC<Props> = ({ handleClickMenuButton }) => {
  const [userSetting, setUserSetting] = useLocalStorage<UserSetting>(
    'userSetting',
    {
      questionGroupId: undefined,
      incorrectQuestionIds: undefined,
      playSound: false,
    }
  );
  const [questionGroupId, setQuestionGroupId] = useState<number | undefined>(
    undefined
  );
  const [playSound, setPlaySound] = useState<boolean>(!!userSetting.playSound);
  const [judgedAnswers, setJudgedAnswers] = useState<boolean[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);

  const questionGroup = findQuestionGroupById(
    questionGroupData,
    questionGroupId
  );
  const category = findCategoryByQuestionGroupId(
    categoryData,
    questionGroup?.categoryId
  );

  const [currentQuestion, setCurrentQuestion] = useState<Question>(
    filteredQuestions[0]
  );
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);

  const handleClickChoiceButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    const isCorrect: boolean =
      event.currentTarget.value === currentQuestion.answer;
    setJudgedAnswers([...judgedAnswers, isCorrect]);
  };
  const handleClickSameLessonButton = (): void => {
    setJudgedAnswers([]);
    setCurrentQuestionNumber(1);
  };
  const handleClickNextLessonButton = (): void => {
    setUserSetting({
      ...userSetting,
      questionGroupId: userSetting.questionGroupId
        ? userSetting.questionGroupId + 1
        : undefined,
    });
    setQuestionGroupId(
      userSetting.questionGroupId ? userSetting.questionGroupId + 1 : undefined
    );
    setJudgedAnswers([]);
    setCurrentQuestionNumber(1);
  };

  const handleClickPlaySoundButton = (): void => {
    setUserSetting({
      ...userSetting,
      playSound: !userSetting.playSound,
    });
  };

  useEffect(() => {
    setQuestionGroupId(userSetting.questionGroupId);

    setFilteredQuestions(
      filterQuestionsByQuestionGroupId(
        questionData,
        userSetting.questionGroupId
      )
    );
  }, [userSetting]);

  useEffect(() => {
    if (judgedAnswers.length > 0) {
      setTimeout(() => {
        setCurrentQuestion(filteredQuestions[judgedAnswers.length]);
        setCurrentQuestionNumber(judgedAnswers.length + 1);
      }, 1000);
    } else {
      setCurrentQuestion(filteredQuestions[0]);
    }
  }, [judgedAnswers, filteredQuestions]);

  return (
    <LessonsPage
      category={category}
      questionGroup={questionGroup}
      judgedAnswers={judgedAnswers}
      questions={filteredQuestions}
      currentQuestionNumber={currentQuestionNumber}
      question={currentQuestion}
      handleClickChoiceButton={handleClickChoiceButton}
      handleClickSameLessonButton={handleClickSameLessonButton}
      handleClickNextLessonButton={handleClickNextLessonButton}
      handleClickMenuButton={handleClickMenuButton}
      playSound={userSetting.playSound}
      handleClickPlaySoundButton={handleClickPlaySoundButton}
    />
  );
};

export default Index;
