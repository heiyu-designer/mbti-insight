// 维度类型
export type Dimension = 'E/I' | 'S/N' | 'T/F' | 'J/P';

// 题目类型
export type QuestionType = 'likert';

// 单个题目结构
export interface Question {
  id: string;                    // 唯一ID: "quick-ei-01"
  dimension: Dimension;          // 所属维度
  type: QuestionType;           // 题目类型
  question: string;             // 题目内容
  options: string[];            // Likert量表选项
  scoring: {                    // 计分规则
    direction: 'positive' | 'negative';  // 正向/反向计分
    weights: number[];          // 各选项权重 [1,2,3,4,5]
  };
}

// 题库结构
export interface QuestionBank {
  quick: Question[];            // 15题
  standard: Question[];         // 30题
  deep: Question[];            // 60题
}

// 题目分布策略
export interface DimensionDistribution {
  'E/I': number;  // 每个维度的题目数量
  'S/N': number;
  'T/F': number;
  'J/P': number;
}
