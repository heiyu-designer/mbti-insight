import type { Question, Dimension, DimensionDistribution } from '@/types/question';

/**
 * 按维度分组题目
 */
function groupByDimension(questions: Question[]): Record<Dimension, Question[]> {
  const groups: Record<Dimension, Question[]> = {
    'E/I': [],
    'S/N': [],
    'T/F': [],
    'J/P': [],
  };

  questions.forEach((q) => {
    groups[q.dimension].push(q);
  });

  return groups;
}

/**
 * Fisher-Yates 洗牌算法
 */
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * 确保维度均匀分布的随机抽题算法
 * @param bank 题库
 * @param totalCount 总题数
 * @returns 抽取的题目列表
 */
export function selectQuestions(
  bank: Question[],
  totalCount: number
): Question[] {
  // 1. 按维度分组题目
  const dimensionGroups = groupByDimension(bank);

  // 2. 计算每个维度需要的题目数（均匀分布）
  const questionsPerDimension = Math.floor(totalCount / 4);
  const remainder = totalCount % 4;

  // 分配余数给前几个维度
  const distribution: DimensionDistribution = {
    'E/I': questionsPerDimension + (remainder > 0 ? 1 : 0),
    'S/N': questionsPerDimension + (remainder > 1 ? 1 : 0),
    'T/F': questionsPerDimension + (remainder > 2 ? 1 : 0),
    'J/P': questionsPerDimension,
  };

  // 3. 从每个维度随机抽取指定数量
  const selected: Question[] = [];
  const dimensions: Dimension[] = ['E/I', 'S/N', 'T/F', 'J/P'];

  dimensions.forEach((dim) => {
    const dimQuestions = dimensionGroups[dim];
    const count = distribution[dim];

    if (dimQuestions.length < count) {
      throw new Error(
        `维度 ${dim} 的题目数量不足：需要 ${count} 题，但只有 ${dimQuestions.length} 题`
      );
    }

    const shuffled = shuffleArray(dimQuestions);
    selected.push(...shuffled.slice(0, count));
  });

  // 4. 最终打乱顺序
  return shuffleArray(selected);
}

/**
 * 验证题目分布是否均匀
 */
export function validateDistribution(questions: Question[]): {
  valid: boolean;
  distribution: DimensionDistribution;
  message: string;
} {
  const groups = groupByDimension(questions);
  const distribution: DimensionDistribution = {
    'E/I': groups['E/I'].length,
    'S/N': groups['S/N'].length,
    'T/F': groups['T/F'].length,
    'J/P': groups['J/P'].length,
  };

  const counts = Object.values(distribution);
  const maxCount = Math.max(...counts);
  const minCount = Math.min(...counts);
  const diff = maxCount - minCount;

  // 允许最多1题的差异
  const valid = diff <= 1;

  return {
    valid,
    distribution,
    message: valid
      ? '题目分布均匀'
      : `题目分布不均：最大差异为 ${diff} 题`,
  };
}
