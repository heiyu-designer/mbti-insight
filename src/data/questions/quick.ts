import type { Question } from '@/types/question';

// 快速版题库 - 15题，每个维度3-4题
export const quickQuestions: Question[] = [
  // E/I 维度 - 4题
  {
    id: 'quick-ei-01',
    dimension: 'E/I',
    type: 'likert',
    question: '在社交场合中，我通常是主动发起对话的人',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-ei-02',
    dimension: 'E/I',
    type: 'likert',
    question: '长时间独处后，我会感到精力充沛',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },
  {
    id: 'quick-ei-03',
    dimension: 'E/I',
    type: 'likert',
    question: '我喜欢参加热闹的聚会和活动',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-ei-04',
    dimension: 'E/I',
    type: 'likert',
    question: '我需要独处的时间来恢复精力',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },

  // S/N 维度 - 4题
  {
    id: 'quick-sn-01',
    dimension: 'S/N',
    type: 'likert',
    question: '我更关注事物的实际应用而非理论可能性',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-sn-02',
    dimension: 'S/N',
    type: 'likert',
    question: '我经常思考未来的各种可能性',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },
  {
    id: 'quick-sn-03',
    dimension: 'S/N',
    type: 'likert',
    question: '我注重细节和准确性',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-sn-04',
    dimension: 'S/N',
    type: 'likert',
    question: '我喜欢探索新的想法和概念',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },

  // T/F 维度 - 4题
  {
    id: 'quick-tf-01',
    dimension: 'T/F',
    type: 'likert',
    question: '做决定时，我更依赖逻辑分析而非个人感受',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-tf-02',
    dimension: 'T/F',
    type: 'likert',
    question: '我很容易感受到他人的情绪',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },
  {
    id: 'quick-tf-03',
    dimension: 'T/F',
    type: 'likert',
    question: '我认为公平比和谐更重要',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-tf-04',
    dimension: 'T/F',
    type: 'likert',
    question: '在批评别人时，我会考虑对方的感受',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },

  // J/P 维度 - 12题
  {
    id: 'quick-jp-01',
    dimension: 'J/P',
    type: 'likert',
    question: '我喜欢制定详细的计划并严格执行',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-jp-02',
    dimension: 'J/P',
    type: 'likert',
    question: '我喜欢保持灵活性，随机应变',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },
  {
    id: 'quick-jp-03',
    dimension: 'J/P',
    type: 'likert',
    question: '我喜欢把事情安排得井井有条',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-jp-04',
    dimension: 'J/P',
    type: 'likert',
    question: '我倾向于在最后期限前完成任务',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },
  {
    id: 'quick-jp-05',
    dimension: 'J/P',
    type: 'likert',
    question: '我喜欢有明确的工作计划',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-jp-06',
    dimension: 'J/P',
    type: 'likert',
    question: '我喜欢即兴处理问题',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },
  {
    id: 'quick-jp-07',
    dimension: 'J/P',
    type: 'likert',
    question: '我更喜欢按时完成每一步工作',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-jp-08',
    dimension: 'J/P',
    type: 'likert',
    question: '我喜欢保持多种可能性',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },
  {
    id: 'quick-jp-09',
    dimension: 'J/P',
    type: 'likert',
    question: '我倾向于提前做决定',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-jp-10',
    dimension: 'J/P',
    type: 'likert',
    question: '我喜欢顺其自然',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },
  {
    id: 'quick-jp-11',
    dimension: 'J/P',
    type: 'likert',
    question: '我喜欢遵循日程安排',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-jp-12',
    dimension: 'J/P',
    type: 'likert',
    question: '我喜欢自由安排时间',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },

  // E/I 维度 - 补充9题 (quick-ei-05 到 quick-ei-13)
  {
    id: 'quick-ei-05',
    dimension: 'E/I',
    type: 'likert',
    question: '我喜欢结识新朋友',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-ei-06',
    dimension: 'E/I',
    type: 'likert',
    question: '我更喜欢独自工作',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },
  {
    id: 'quick-ei-07',
    dimension: 'E/I',
    type: 'likert',
    question: '我在社交场合感到精力充沛',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-ei-08',
    dimension: 'E/I',
    type: 'likert',
    question: '我喜欢安静的环境',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },
  {
    id: 'quick-ei-09',
    dimension: 'E/I',
    type: 'likert',
    question: '我乐于主动与人交流',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-ei-10',
    dimension: 'E/I',
    type: 'likert',
    question: '我更喜欢倾听而非表达',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },
  {
    id: 'quick-ei-11',
    dimension: 'E/I',
    type: 'likert',
    question: '我喜欢在团队中工作',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-ei-12',
    dimension: 'E/I',
    type: 'likert',
    question: '我需要时间独自思考',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },
  {
    id: 'quick-ei-13',
    dimension: 'E/I',
    type: 'likert',
    question: '我喜欢主动组织活动',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },

  // S/N 维度 - 补充8题 (quick-sn-05 到 quick-sn-12)
  {
    id: 'quick-sn-05',
    dimension: 'S/N',
    type: 'likert',
    question: '我更关注现实而非理想',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-sn-06',
    dimension: 'S/N',
    type: 'likert',
    question: '我喜欢抽象思考',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },
  {
    id: 'quick-sn-07',
    dimension: 'S/N',
    type: 'likert',
    question: '我重视实际经验',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-sn-08',
    dimension: 'S/N',
    type: 'likert',
    question: '我经常想象各种可能性',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },
  {
    id: 'quick-sn-09',
    dimension: 'S/N',
    type: 'likert',
    question: '我喜欢遵循传统方法',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-sn-10',
    dimension: 'S/N',
    type: 'likert',
    question: '我喜欢创新和变化',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },
  {
    id: 'quick-sn-11',
    dimension: 'S/N',
    type: 'likert',
    question: '我注重事实和数据',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-sn-12',
    dimension: 'S/N',
    type: 'likert',
    question: '我喜欢思考理论概念',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },

  // T/F 维度 - 补充9题 (quick-tf-05 到 quick-tf-13)
  {
    id: 'quick-tf-05',
    dimension: 'T/F',
    type: 'likert',
    question: '我更注重客观事实',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-tf-06',
    dimension: 'T/F',
    type: 'likert',
    question: '我很在意他人的感受',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },
  {
    id: 'quick-tf-07',
    dimension: 'T/F',
    type: 'likert',
    question: '我喜欢逻辑推理',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-tf-08',
    dimension: 'T/F',
    type: 'likert',
    question: '我会优先考虑他人需求',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },
  {
    id: 'quick-tf-09',
    dimension: 'T/F',
    type: 'likert',
    question: '我更看重效率',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-tf-10',
    dimension: 'T/F',
    type: 'likert',
    question: '我重视人际和谐',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },
  {
    id: 'quick-tf-11',
    dimension: 'T/F',
    type: 'likert',
    question: '我倾向于理性分析',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
  {
    id: 'quick-tf-12',
    dimension: 'T/F',
    type: 'likert',
    question: '我容易受情绪影响',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'negative',
      weights: [5, 4, 3, 2, 1],
    },
  },
  {
    id: 'quick-tf-13',
    dimension: 'T/F',
    type: 'likert',
    question: '我认为原则很重要',
    options: ['非常不同意', '不同意', '中立', '同意', '非常同意'],
    scoring: {
      direction: 'positive',
      weights: [1, 2, 3, 4, 5],
    },
  },
];
