import React, { createContext, useContext, useReducer, useCallback } from 'react';
import type { TestSession, TestLevel, TestProgress } from '@/types/test';
import type { Question } from '@/types/question';
import type { TestResult } from '@/types/personality';
import { questionBank } from '@/data/questions';
import { calculateDimensionScores, determineMBTIType } from '@/lib/test-engine/scoreCalculator';
import { getPersonalityCategory } from '@/lib/test-engine/typeClassifier';
import { saveTestSession, loadTestSession, clearTestSession } from '@/lib/storage/testStorage';
import { selectQuestions } from '@/lib/test-engine/questionSelector';

interface TestState {
  session: TestSession | null;
  progress: TestProgress;
  currentQuestion: Question | null;
}

type TestAction =
  | { type: 'START_TEST'; payload: { level: TestLevel } }
  | { type: 'ANSWER_QUESTION'; payload: { questionId: string; answer: number } }
  | { type: 'GO_TO_QUESTION'; payload: number }
  | { type: 'LOAD_SESSION'; payload: TestSession }
  | { type: 'RESET_TEST' };

interface TestContextValue extends TestState {
  startTest: (level: TestLevel) => void;
  answerQuestion: (questionId: string, answer: number) => void;
  goToQuestion: (index: number) => void;
  submitTest: () => TestResult;
  resetTest: () => void;
  resumeTest: () => boolean;
}

const TestContext = createContext<TestContextValue | undefined>(undefined);

// 测试题目数量配置
const TEST_QUESTION_COUNTS = {
  quick: 15,
  standard: 30,
  deep: 50,
} as const;

function calculateProgress(session: TestSession): TestProgress {
  const answeredCount = Object.keys(session.answers).length;
  const totalCount = session.questions.length;
  const percentage = totalCount > 0 ? (answeredCount / totalCount) * 100 : 0;
  const timeElapsed = Math.floor((Date.now() - session.startTime) / 1000);

  return {
    answeredCount,
    totalCount,
    percentage: Math.round(percentage),
    timeElapsed,
  };
}

function testReducer(state: TestState, action: TestAction): TestState {
  switch (action.type) {
    case 'START_TEST': {
      const { level } = action.payload;

      // 清除旧的测试会话
      clearTestSession();

      const bankQuestions = questionBank[level];
      const requiredCount = TEST_QUESTION_COUNTS[level];

      // 使用selectQuestions从题库中随机选择指定数量的题目，并确保维度均匀分布
      const questions = selectQuestions(bankQuestions, requiredCount);

      const session: TestSession = {
        id: Date.now().toString(),
        level,
        questions,
        answers: {},
        currentIndex: 0,
        startTime: Date.now(),
        lastSaveTime: Date.now(),
        completed: false,
      };

      saveTestSession(session);

      return {
        session,
        progress: calculateProgress(session),
        currentQuestion: questions[0] || null,
      };
    }

    case 'ANSWER_QUESTION': {
      if (!state.session) return state;

      const { questionId, answer } = action.payload;
      const newAnswers = { ...state.session.answers, [questionId]: answer };
      const newSession = { ...state.session, answers: newAnswers };

      saveTestSession(newSession);

      return {
        ...state,
        session: newSession,
        progress: calculateProgress(newSession),
      };
    }

    case 'GO_TO_QUESTION': {
      if (!state.session) return state;

      const index = Math.max(0, Math.min(action.payload, state.session.questions.length - 1));
      const newSession = { ...state.session, currentIndex: index };

      saveTestSession(newSession);

      return {
        ...state,
        session: newSession,
        currentQuestion: newSession.questions[index] || null,
      };
    }

    case 'LOAD_SESSION': {
      const session = action.payload;
      return {
        session,
        progress: calculateProgress(session),
        currentQuestion: session.questions[session.currentIndex] || null,
      };
    }

    case 'RESET_TEST': {
      clearTestSession();
      return {
        session: null,
        progress: { answeredCount: 0, totalCount: 0, percentage: 0, timeElapsed: 0 },
        currentQuestion: null,
      };
    }

    default:
      return state;
  }
}

export function TestProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(testReducer, {
    session: null,
    progress: { answeredCount: 0, totalCount: 0, percentage: 0, timeElapsed: 0 },
    currentQuestion: null,
  });

  const startTest = useCallback((level: TestLevel) => {
    dispatch({ type: 'START_TEST', payload: { level } });
  }, []);

  const answerQuestion = useCallback((questionId: string, answer: number) => {
    dispatch({ type: 'ANSWER_QUESTION', payload: { questionId, answer } });
  }, []);

  const goToQuestion = useCallback((index: number) => {
    dispatch({ type: 'GO_TO_QUESTION', payload: index });
  }, []);

  const submitTest = useCallback((): TestResult => {
    if (!state.session) {
      throw new Error('没有进行中的测试');
    }

    const dimensions = calculateDimensionScores(state.session.questions, state.session.answers);
    const mbtiType = determineMBTIType(dimensions);
    const category = getPersonalityCategory(mbtiType);

    const result: TestResult = {
      id: `result-${Date.now()}`,
      testSessionId: state.session.id,
      mbtiType,
      category,
      dimensions,
      completedAt: Date.now(),
      testLevel: state.session.level,
    };

    // 标记测试完成并清除存储
    clearTestSession();

    return result;
  }, [state.session]);

  const resetTest = useCallback(() => {
    dispatch({ type: 'RESET_TEST' });
  }, []);

  const resumeTest = useCallback((): boolean => {
    const savedSession = loadTestSession();
    if (savedSession && !savedSession.completed) {
      dispatch({ type: 'LOAD_SESSION', payload: savedSession });
      return true;
    }
    return false;
  }, []);

  const value: TestContextValue = {
    ...state,
    startTest,
    answerQuestion,
    goToQuestion,
    submitTest,
    resetTest,
    resumeTest,
  };

  return <TestContext.Provider value={value}>{children}</TestContext.Provider>;
}

export function useTest() {
  const context = useContext(TestContext);
  if (context === undefined) {
    throw new Error('useTest must be used within a TestProvider');
  }
  return context;
}
