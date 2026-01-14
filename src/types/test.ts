import type { Question } from './question';

// 测试级别
export type TestLevel = 'quick' | 'standard' | 'deep';

// 测试会话
export interface TestSession {
  id: string;                   // 会话ID (timestamp)
  level: TestLevel;             // 测试级别
  questions: Question[];        // 当前测试的题目列表
  answers: Record<string, number>;  // 答案映射 {questionId: answerValue}
  currentIndex: number;         // 当前题目索引
  startTime: number;            // 开始时间
  lastSaveTime: number;         // 最后保存时间
  completed: boolean;           // 是否完成
}

// 测试进度
export interface TestProgress {
  answeredCount: number;        // 已回答数量
  totalCount: number;          // 总题数
  percentage: number;          // 完成百分比
  timeElapsed: number;         // 已用时间(秒)
}
