import type { PersonalityProfile, MBTIType } from '@/types/personality';
import { analysts } from './analysts';
import { diplomats } from './diplomats';
import { sentinels } from './sentinels';
import { explorers } from './explorers';

// 合并所有性格数据
const allPersonalities: PersonalityProfile[] = [
  ...analysts,
  ...diplomats,
  ...sentinels,
  ...explorers,
];

// 创建快速查找映射
export const personalityMap = new Map<MBTIType, PersonalityProfile>(
  allPersonalities.map(p => [p.type, p])
);

// 根据MBTI类型获取性格资料
export function getPersonalityProfile(type: MBTIType): PersonalityProfile {
  const profile = personalityMap.get(type);
  if (!profile) {
    throw new Error(`未找到性格类型: ${type}`);
  }
  return profile;
}

// 导出所有数据
export { analysts, diplomats, sentinels, explorers };
export default allPersonalities;
