import type { MBTIType, PersonalityCategory } from '@/types/personality';

/**
 * 根据MBTI类型确定性格分类
 * @param mbtiType MBTI类型（如INTJ）
 * @returns 性格分类（analyst/diplomat/sentinel/explorer）
 */
export function getPersonalityCategory(mbtiType: MBTIType): PersonalityCategory {
  const analysts: MBTIType[] = ['INTJ', 'INTP', 'ENTJ', 'ENTP'];
  const diplomats: MBTIType[] = ['INFJ', 'INFP', 'ENFJ', 'ENFP'];
  const sentinels: MBTIType[] = ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ'];
  const explorers: MBTIType[] = ['ISTP', 'ISFP', 'ESTP', 'ESFP'];

  if (analysts.includes(mbtiType)) return 'analyst';
  if (diplomats.includes(mbtiType)) return 'diplomat';
  if (sentinels.includes(mbtiType)) return 'sentinel';
  if (explorers.includes(mbtiType)) return 'explorer';

  throw new Error(`未知的MBTI类型: ${mbtiType}`);
}

/**
 * 获取性格分类的中文名称
 */
export function getCategoryName(category: PersonalityCategory): string {
  const names: Record<PersonalityCategory, string> = {
    analyst: '分析师',
    diplomat: '外交官',
    sentinel: '守护者',
    explorer: '探险家',
  };

  return names[category];
}

/**
 * 获取性格分类的描述
 */
export function getCategoryDescription(category: PersonalityCategory): string {
  const descriptions: Record<PersonalityCategory, string> = {
    analyst: '理性、独立、富有想象力的思考者，对知识永不满足',
    diplomat: '安静而神秘，同时鼓舞人心，永不疲倦的理想主义者',
    sentinel: '务实可靠的个人，善于计划和执行',
    explorer: '自发而热情的行动者，随时准备应对挑战',
  };

  return descriptions[category];
}

/**
 * 获取性格分类的主题色
 */
export function getCategoryColor(category: PersonalityCategory): string {
  const colors: Record<PersonalityCategory, string> = {
    analyst: 'analyst',    // 紫色
    diplomat: 'diplomat',  // 绿色
    sentinel: 'sentinel',  // 蓝色
    explorer: 'explorer',  // 橙色
  };

  return colors[category];
}
