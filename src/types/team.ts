import type { MBTIType, PersonalityCategory } from './personality';

// 团队成员
export interface TeamMember {
  id: string;
  name?: string;
  mbtiType: MBTIType;
}

// 团队分析
export interface TeamAnalysis {
  members: TeamMember[];
  distribution: Record<PersonalityCategory, number>;
  insights: {
    strengths: string[];       // 团队优势
    risks: string[];          // 潜在风险
    recommendations: string[];// 建议
  };
  interactions: TypeInteraction[];
}

// 类型互动
export interface TypeInteraction {
  type1: MBTIType;
  type2: MBTIType;
  compatibility: number;      // 0-100
  advice: string;            // 相处建议
}
