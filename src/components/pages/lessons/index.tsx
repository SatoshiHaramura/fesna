import React, { FC, useEffect, useState } from 'react';
import LessonsPage from './presenter';
import useLocalStorage from 'use-local-storage';
import {
  filterQuestionsByLessonId,
  findCategoryByLessonId,
  findLessonById,
} from '@/repositories';
import { categoryData, lessonData, questionData } from '@/data';
import { Question, UserSetting } from '@/types';

type Props = {
  handleClickMenuButton: () => void;
};

const Index: FC<Props> = ({ handleClickMenuButton }) => {
  const [userSetting, setUserSetting] = useLocalStorage<UserSetting>(
    'userSetting',
    {
      lessonId: 1,
      playSound: false,
    }
  );
  const [lessonId, setLessonId] = useState<number | undefined>(undefined);
  const [judgedAnswers, setJudgedAnswers] = useState<boolean[]>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<Question[]>([]);

  const lesson = findLessonById(lessonData, lessonId);
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
    setCurrentQuestionNumber(1);
  };
  const handleClickNextLessonButton = (): void => {
    let nextLessonId;
    if (lessonId === lessonData.length) {
      nextLessonId = 1;
    } else if (lessonId !== undefined) {
      nextLessonId = lessonId + 1;
    }

    setUserSetting({
      ...userSetting,
      lessonId: userSetting.lessonId ? nextLessonId : undefined,
    });
    setLessonId(userSetting.lessonId ? nextLessonId : undefined);
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
    setLessonId(userSetting.lessonId);

    setFilteredQuestions(
      filterQuestionsByLessonId(questionData, userSetting.lessonId)
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
      lesson={lesson}
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
