import type { QuestionBank } from '@/types/question';
import { quickQuestions } from './quick';
import { standardQuestions } from './standard';
import { deepQuestions } from './deep';

export const questionBank: QuestionBank = {
  quick: quickQuestions,
  standard: standardQuestions,
  deep: deepQuestions,
};

export * from './quick';
export * from './standard';
export * from './deep';
