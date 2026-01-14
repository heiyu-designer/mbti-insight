import type { Dimension } from './question';
import type { TestLevel } from './test';

// MBTI类型
export type MBTIType =
  | 'INTJ' | 'INTP' | 'ENTJ' | 'ENTP'  // 分析师
  | 'INFJ' | 'INFP' | 'ENFJ' | 'ENFP'  // 外交官
  | 'ISTJ' | 'ISFJ' | 'ESTJ' | 'ESFJ'  // 守护者
  | 'ISTP' | 'ISFP' | 'ESTP' | 'ESFP'; // 探险家

// 性格分类
export type PersonalityCategory = 'analyst' | 'diplomat' | 'sentinel' | 'explorer';

// 维度得分
export interface DimensionScore {
  dimension: Dimension;
  letter: string;               // 'E' 或 'I'
  preference?: string;          // 偏好字母（用于显示）
  score: number;                // 0-100 分数
  percentage: number;           // 百分比
  description: string;          // 维度描述
}

// 测试结果
export interface TestResult {
  id: string;                   // 结果ID
  testSessionId: string;        // 测试会话ID
  mbtiType: MBTIType;          // MBTI类型
  category: PersonalityCategory;// 所属分类
  dimensions: DimensionScore[]; // 四个维度得分
  completedAt: number;          // 完成时间
  testLevel: TestLevel;         // 测试级别
}

// 职业建议
export interface Career {
  title: string;               // 职业名称
  suitability: 'high' | 'medium' | 'low';
  reason?: string;             // 适合原因（可选）
}

// 成长建议
export interface GrowthAdvice {
  area?: string;               // 成长领域（可选）
  advice: string;              // 具体建议
  priority: 'high' | 'medium' | 'low';
}

// 性格档案
export interface PersonalityProfile {
  type: MBTIType;
  name: string;                 // "建筑师"
  nickname: string;             // "战略家"
  category: PersonalityCategory;
  description: string;          // 总体描述
  traits: string[];            // 性格特征
  strengths: string[];         // 优势
  weaknesses: string[];        // 劣势
  careers: Career[];           // 职业建议
  relationships: {
    best: MBTIType[];          // 最佳匹配
    good: MBTIType[];          // 良好匹配
    challenging: MBTIType[];   // 挑战匹配
  };
  growthAdvice: GrowthAdvice[];// 成长建议
  famous: string[];            // 名人案例
}
