import type { Question, Dimension } from '@/types/question';
import type { DimensionScore, MBTIType } from '@/types/personality';

interface DimensionRawScore {
  dimension: Dimension;
  scores: { positive: number; negative: number };
}

/**
 * 计算每个维度的得分
 * @param questions 题目列表
 * @param answers 答案映射 {questionId: answerIndex}
 * @returns 四个维度的得分数组
 */
export function calculateDimensionScores(
  questions: Question[],
  answers: Record<string, number>
): DimensionScore[] {
  // 1. 按维度分组并累计得分
  const rawScores = new Map<Dimension, DimensionRawScore>();

  questions.forEach((q) => {
    const answerIndex = answers[q.id];
    if (answerIndex === undefined) return; // 未回答的题目跳过

    const score = q.scoring.weights[answerIndex];

    if (!rawScores.has(q.dimension)) {
      rawScores.set(q.dimension, {
        dimension: q.dimension,
        scores: { positive: 0, negative: 0 },
      });
    }

    const dimScore = rawScores.get(q.dimension)!;

    // 根据计分方向累加
    if (q.scoring.direction === 'positive') {
      dimScore.scores.positive += score;
    } else {
      dimScore.scores.negative += score;
    }
  });

  // 2. 计算每个维度的最终得分和字母
  const dimensionOrder: Dimension[] = ['E/I', 'S/N', 'T/F', 'J/P'];

  return dimensionOrder.map((dimension) => {
    const raw = rawScores.get(dimension);
    if (!raw) {
      throw new Error(`缺少维度 ${dimension} 的数据`);
    }

    const { scores } = raw;
    const total = scores.positive + scores.negative;

    if (total === 0) {
      throw new Error(`维度 ${dimension} 总分为0，无法计算`);
    }

    const percentage = (scores.positive / total) * 100;

    // 根据维度和百分比确定字母
    const [positive, negative] = dimension.split('/');
    const letter = percentage >= 50 ? positive : negative;
    const score = percentage >= 50 ? percentage : 100 - percentage;

    return {
      dimension,
      letter,
      score: Math.round(score),
      percentage: Math.round(percentage * 10) / 10, // 保留一位小数
      description: getDimensionDescription(dimension, letter),
    };
  });
}

/**
 * 根据维度得分确定MBTI类型
 * @param dimensions 四个维度的得分
 * @returns MBTI类型（如INTJ）
 */
export function determineMBTIType(dimensions: DimensionScore[]): MBTIType {
  const letters = dimensions
    .sort((a, b) => {
      const order = ['E/I', 'S/N', 'T/F', 'J/P'];
      return order.indexOf(a.dimension) - order.indexOf(b.dimension);
    })
    .map((d) => d.letter)
    .join('');

  // 验证是否是有效的MBTI类型
  const validTypes: MBTIType[] = [
    'INTJ', 'INTP', 'ENTJ', 'ENTP',
    'INFJ', 'INFP', 'ENFJ', 'ENFP',
    'ISTJ', 'ISFJ', 'ESTJ', 'ESFJ',
    'ISTP', 'ISFP', 'ESTP', 'ESFP',
  ];

  if (!validTypes.includes(letters as MBTIType)) {
    throw new Error(`无效的MBTI类型: ${letters}`);
  }

  return letters as MBTIType;
}

/**
 * 获取维度描述
 */
function getDimensionDescription(_dimension: Dimension, letter: string): string {
  const descriptions: Record<string, string> = {
    'E': '外向：从外部世界获取能量，喜欢与人交往',
    'I': '内向：从内心世界获取能量，需要独处时间',
    'S': '实感：关注具体事实和细节，注重实际',
    'N': '直觉：关注整体和可能性，注重未来',
    'T': '思考：基于逻辑分析做决策，注重客观',
    'F': '情感：基于价值观和感受做决策，注重和谐',
    'J': '判断：喜欢计划和组织，追求确定性',
    'P': '知觉：喜欢灵活和自发，保持开放性',
  };

  return descriptions[letter] || '';
}

/**
 * 验证答案完整性
 */
export function validateAnswers(
  questions: Question[],
  answers: Record<string, number>
): {
  valid: boolean;
  answeredCount: number;
  totalCount: number;
  missingQuestions: string[];
} {
  const missingQuestions: string[] = [];

  questions.forEach((q) => {
    if (answers[q.id] === undefined) {
      missingQuestions.push(q.id);
    }
  });

  return {
    valid: missingQuestions.length === 0,
    answeredCount: questions.length - missingQuestions.length,
    totalCount: questions.length,
    missingQuestions,
  };
}
