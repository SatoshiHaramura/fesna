import React, { useEffect, useState } from 'react';
import LessonsPage from './presenter';
import useLocalStorageState from 'use-local-storage-state';
import {
  filterQuestionsByLessonId,
  findCategoryByLessonId,
  findLessonById,
} from '@/repositories';
import { categoryData, lessonData, questionData } from '@/data';
import { Question, UserSetting } from '@/types';

const Index = () => {
  const [userSetting, setUserSetting] = useLocalStorageState<UserSetting>(
    'userSetting',
    {
      defaultValue: {
        lessonId: 1,
        playSound: false,
      },
    }
  );
  const [judgedAnswers, setJudgedAnswers] = useState<boolean[]>([]);
  const filteredQuestions = filterQuestionsByLessonId(
    questionData,
    userSetting.lessonId
  );

  const lesson = findLessonById(lessonData, userSetting.lessonId);
  const category = findCategoryByLessonId(categoryData, lesson?.categoryId);

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
  };
  const handleClickNextLessonButton = (): void => {
    let nextLessonId;
    if (userSetting.lessonId === lessonData.length) {
      nextLessonId = 1;
    } else if (userSetting.lessonId !== undefined) {
      nextLessonId = userSetting.lessonId + 1;
    }

    setUserSetting({
      ...userSetting,
      lessonId: nextLessonId,
    });
    setJudgedAnswers([]);
  };

  const handleClickPlaySoundButton = (): void => {
    setUserSetting({
      ...userSetting,
      playSound: !userSetting.playSound,
    });
  };

  useEffect(() => {
    if (judgedAnswers.length > 0) {
      setTimeout(() => {
        setCurrentQuestion(filteredQuestions[judgedAnswers.length]);
        setCurrentQuestionNumber(judgedAnswers.length + 1);
      }, 1000);
    } else {
      setCurrentQuestion(filteredQuestions[0]);
      setCurrentQuestionNumber(1);
    }
  }, [judgedAnswers, filteredQuestions]);

  return (
    <LessonsPage
      category={category}
      lesson={lesson}
      judgedAnswers={judgedAnswers}
      questions={filteredQuestions}
      currentQuestionNumber={currentQuestionNumber}
      question={currentQuestion}
      handleClickChoiceButton={handleClickChoiceButton}
      handleClickSameLessonButton={handleClickSameLessonButton}
      handleClickNextLessonButton={handleClickNextLessonButton}
      playSound={userSetting.playSound}
      handleClickPlaySoundButton={handleClickPlaySoundButton}
    />
  );
};

export default Index;
