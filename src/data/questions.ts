import type { Question } from '@/types';

export const questionData: Question[] = [
  {
    id: 1,
    lessonId: 1,
    question: 'include',
    choices: ['を含む', 'を盗む', 'を標的とする', 'を侵害する'],
    answer: 'を含む',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'inclusion',
        meaning: '包含、含まれるもの',
        partOfSpeech: '名詞',
      },
      {
        word: 'inclusive',
        meaning: 'すべてを含んだ',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'the email including a malicious macro',
        meaning: '悪意のあるマクロを含むメール',
      },
    ],
  },
  {
    id: 2,
    lessonId: 1,
    question: 'steal',
    choices: ['を侵害する', 'を盗む', 'を標的とする', 'を侵害する'],
    answer: 'を盗む',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'steal sensitive information',
        meaning: '機微な情報を盗む',
      },
    ],
  },
  {
    id: 3,
    lessonId: 1,
    question: 'exploit',
    choices: ['を含む', 'を盗む', '(脆弱性)を突いて攻撃する', 'を侵害する'],
    answer: '(脆弱性)を突いて攻撃する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'exploitation',
        meaning: '(脆弱性を突く)攻撃',
        partOfSpeech: '名詞',
      },
      {
        word: 'exploitable',
        meaning: '悪用可能な',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'actively exploited vulnerability',
        meaning: 'よく攻撃に使われる脆弱性',
      },
    ],
  },
  {
    id: 4,
    lessonId: 1,
    question: 'release',
    choices: ['を含む', 'を盗む', 'を標的とする', 'を入手可能な状態にする'],
    answer: 'を入手可能な状態にする',
    partOfSpeech: '動詞',
    relatedWords: [],
    useExamples: [
      {
        example: 'updates released today',
        meaning: '今日リリースされたアップデート',
      },
    ],
  },
  {
    id: 5,
    lessonId: 1,
    question: 'target',
    choices: ['を含む', 'を盗む', 'を標的とする', 'を侵害する'],
    answer: 'を標的とする',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'targeted',
        meaning: '狙われた、標的型の',
        partOfSpeech: '形容詞',
      },
    ],
    useExamples: [
      {
        example: 'targeted attack',
        meaning: '標的型攻撃',
      },
    ],
  },
  {
    id: 6,
    lessonId: 1,
    question: 'allow',
    choices: ['を含む', 'を盗む', 'を標的とする', 'を可能とする、許可する'],
    answer: 'を可能とする、許可する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'allowlist',
        meaning: '許可リスト',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'the bug allowing attackers to execute arbitrary code',
        meaning: '攻撃者に任意のコード実行を許すバグ',
      },
    ],
  },
  {
    id: 7,
    lessonId: 1,
    question: 'provide',
    choices: ['を含む', 'を盗む', 'を提供する', 'を侵害する'],
    answer: 'を提供する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'provider',
        meaning: 'プロバイダー',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'provide detailed information',
        meaning: '詳細な情報を提供する',
      },
    ],
  },
  {
    id: 8,
    lessonId: 1,
    question: 'create',
    choices: ['を含む', 'を盗む', 'を標的とする', 'を作り出す'],
    answer: 'を作り出す',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'creation',
        meaning: '作成',
        partOfSpeech: '名詞',
      },
      {
        word: 'creator',
        meaning: '作成者',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'create a new account',
        meaning: '新規アカウントを作成する',
      },
    ],
  },
  {
    id: 9,
    lessonId: 1,
    question: 'compromise',
    choices: ['を含む', 'を作り出す', 'を標的とする', 'を侵害する'],
    answer: 'を侵害する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'compromise',
        meaning: '侵害',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'compromised networks',
        meaning: '侵害されたネットワーク',
      },
    ],
  },
  {
    id: 10,
    lessonId: 1,
    question: 'warn',
    choices: ['を含む', 'を盗む', 'を標的とする', 'を警告する'],
    answer: 'を警告する',
    partOfSpeech: '動詞',
    relatedWords: [
      {
        word: 'warning',
        meaning: '警告、注意',
        partOfSpeech: '名詞',
      },
    ],
    useExamples: [
      {
        example: 'FBI warn of...',
        meaning: 'FBI が～について警告している',
      },
    ],
  },
];
