import type { PersonalityProfile } from '@/types/personality';

export const explorers: PersonalityProfile[] = [
  {
    type: 'ISTP',
    name: '鉴赏家',
    nickname: '工匠',
    category: 'explorer',
    description: '大胆而实际的实验家,擅长使用各类工具。ISTP是天生的问题解决者,喜欢动手操作和实践探索。他们冷静、灵活、善于分析,总是在寻找新的体验和挑战。独立、适应力强、注重当下。',
    traits: [
      '实践能力强',
      '冷静理性',
      '灵活适应',
      '独立自主',
      '善于分析',
      '注重当下',
      '喜欢动手',
      '冒险精神'
    ],
    strengths: [
      '出色的实践和动手能力',
      '快速解决实际问题',
      '冷静应对危机',
      '灵活适应变化',
      '逻辑分析和推理',
      '高效利用资源'
    ],
    weaknesses: [
      '可能过于冲动和冒险',
      '难以承诺和规划未来',
      '忽视情感和人际关系',
      '可能显得冷漠和疏离',
      '厌倦常规和重复',
      '缺乏长期规划'
    ],
    careers: [
      { title: '机械工程师', suitability: 'high' },
      { title: '技术人员', suitability: 'high' },
      { title: '飞行员', suitability: 'high' },
      { title: '消防员', suitability: 'high' },
      { title: '运动员', suitability: 'high' },
      { title: '软件开发', suitability: 'medium' },
      { title: '摄影师', suitability: 'medium' },
      { title: '警察', suitability: 'medium' },
      { title: '电工', suitability: 'medium' },
      { title: '急救医疗', suitability: 'medium' }
    ],
    relationships: {
      best: ['ESFJ', 'ESTJ', 'ENFJ'],
      good: ['ISTP', 'ESTP', 'ISTJ', 'INTJ'],
      challenging: ['ENFP', 'INFP', 'ENFJ']
    },
    growthAdvice: [
      { priority: 'high', advice: '培养长期规划能力,设定目标' },
      { priority: 'high', advice: '关注情感需求,改善人际关系' },
      { priority: 'medium', advice: '学会做出承诺,增强责任感' },
      { priority: 'medium', advice: '减少冲动行为,三思而后行' },
      { priority: 'low', advice: '培养耐心,接受常规工作' },
      { priority: 'low', advice: '增强情感表达,建立深度联系' }
    ],
    famous: ['克林特·伊斯特伍德', '汤姆·克鲁斯', '布鲁斯·李', '迈克尔·乔丹', '史蒂夫·麦奎因']
  },
  {
    type: 'ISFP',
    name: '探险家',
    nickname: '艺术家',
    category: 'explorer',
    description: '灵活有魅力的艺术家,时刻准备探索和体验新事物。ISFP是最具艺术气质的性格类型,富有创造力、敏感、热爱美和自然。他们温和、适应力强、活在当下,通过行动和创作表达自己。艺术、自由、真实。',
    traits: [
      '艺术气质',
      '敏感细腻',
      '创造力强',
      '热爱自由',
      '适应力强',
      '活在当下',
      '温和友善',
      '追求真实'
    ],
    strengths: [
      '强大的艺术创造力',
      '敏锐的审美和感知',
      '灵活适应环境',
      '真实表达自己',
      '同理心和理解力',
      '享受当下的能力'
    ],
    weaknesses: [
      '可能过于敏感和情绪化',
      '难以做出决定和规划',
      '缺乏长期目标',
      '可能过于被动',
      '对批评非常敏感',
      '厌倦常规和结构'
    ],
    careers: [
      { title: '艺术家/画家', suitability: 'high' },
      { title: '音乐家', suitability: 'high' },
      { title: '设计师', suitability: 'high' },
      { title: '摄影师', suitability: 'high' },
      { title: '美容师', suitability: 'high' },
      { title: '厨师', suitability: 'medium' },
      { title: '珠宝设计', suitability: 'medium' },
      { title: '时装设计', suitability: 'medium' },
      { title: '园艺师', suitability: 'medium' },
      { title: '治疗师', suitability: 'medium' }
    ],
    relationships: {
      best: ['ESFJ', 'ESTJ', 'ENFJ'],
      good: ['ISFP', 'ESFP', 'INFP', 'ISTJ'],
      challenging: ['ENTJ', 'ENTP', 'INTJ']
    },
    growthAdvice: [
      { priority: 'high', advice: '培养决断力和规划能力' },
      { priority: 'high', advice: '增强抗压能力,减少过度敏感' },
      { priority: 'medium', advice: '设定长期目标,增强执行力' },
      { priority: 'medium', advice: '学会更主动地表达需求' },
      { priority: 'low', advice: '接受常规和结构的价值' },
      { priority: 'low', advice: '平衡当下与未来' }
    ],
    famous: ['迈克尔·杰克逊', '玛丽莲·梦露', '拉娜·德雷', '鲍勃·迪伦', '王子']
  },
  {
    type: 'ESTP',
    name: '企业家',
    nickname: '实干家',
    category: 'explorer',
    description: '聪明、充满活力、非常善于感知的人,真正享受生活的边缘。ESTP是最具冒险精神的性格类型,热爱行动、社交和新体验。他们大胆、实际、适应力强,总是在寻找刺激和机会。充满活力、果断、活在当下。',
    traits: [
      '充满活力',
      '冒险精神',
      '社交能力强',
      '果断行动',
      '适应力强',
      '实际务实',
      '活在当下',
      '机智灵活'
    ],
    strengths: [
      '快速行动和决策',
      '出色的社交和影响力',
      '灵活应对变化和危机',
      '实践能力和执行力强',
      '发现机会和资源',
      '享受生活和冒险'
    ],
    weaknesses: [
      '可能过于冲动和冒险',
      '难以承诺和长期规划',
      '忽视情感和深度思考',
      '可能不够敏感和体贴',
      '厌倦常规和理论',
      '寻求刺激,可能过度'
    ],
    careers: [
      { title: '销售经理', suitability: 'high' },
      { title: '创业者', suitability: 'high' },
      { title: '营销专员', suitability: 'high' },
      { title: '活动策划', suitability: 'high' },
      { title: '股票交易员', suitability: 'high' },
      { title: '警察', suitability: 'medium' },
      { title: '房地产经纪', suitability: 'medium' },
      { title: '消防员', suitability: 'medium' },
      { title: '运动员', suitability: 'medium' },
      { title: '导游', suitability: 'medium' }
    ],
    relationships: {
      best: ['ISFJ', 'ISTJ', 'INFJ'],
      good: ['ESTP', 'ISTP', 'ESFP', 'ESTJ'],
      challenging: ['INFP', 'INFJ', 'INTP']
    },
    growthAdvice: [
      { priority: 'high', advice: '培养长期规划和耐心' },
      { priority: 'high', advice: '关注他人情感,增强同理心' },
      { priority: 'medium', advice: '减少冲动,三思而后行' },
      { priority: 'medium', advice: '学会深度思考,避免表面化' },
      { priority: 'low', advice: '接受常规的价值,增强责任感' },
      { priority: 'low', advice: '平衡冒险与稳定' }
    ],
    famous: ['唐纳德·特朗普', '欧内斯特·海明威', '麦当娜', '布鲁斯·威利斯', '温斯顿·丘吉尔']
  },
  {
    type: 'ESFP',
    name: '表演者',
    nickname: '娱乐者',
    category: 'explorer',
    description: '自发的、充满活力和热情的表演者,周围永远不缺乏欢乐。ESFP是最外向和热情的性格类型,热爱社交、娱乐和新体验。他们友善、适应力强、活在当下,总是能带给他人快乐和正能量。热情、乐观、富有感染力。',
    traits: [
      '热情洋溢',
      '社交能力强',
      '乐观积极',
      '适应力强',
      '活在当下',
      '富有感染力',
      '友善亲和',
      '享受生活'
    ],
    strengths: [
      '出色的社交和娱乐能力',
      '快速建立联系和关系',
      '灵活适应环境',
      '带给他人快乐和正能量',
      '实践能力和执行力',
      '享受当下的能力'
    ],
    weaknesses: [
      '可能过于情绪化和冲动',
      '难以做出长期规划',
      '对批评过于敏感',
      '可能过于关注外界认可',
      '厌倦理论和抽象思考',
      '寻求刺激,避免冲突'
    ],
    careers: [
      { title: '演员/表演者', suitability: 'high' },
      { title: '活动策划', suitability: 'high' },
      { title: '销售', suitability: 'high' },
      { title: '公关专员', suitability: 'high' },
      { title: '导游', suitability: 'high' },
      { title: '教师', suitability: 'medium' },
      { title: '客户服务', suitability: 'medium' },
      { title: '美容师', suitability: 'medium' },
      { title: '健身教练', suitability: 'medium' },
      { title: '摄影师', suitability: 'medium' }
    ],
    relationships: {
      best: ['ISFJ', 'ISTJ', 'INFJ'],
      good: ['ESFP', 'ESTP', 'ISFP', 'ESFJ'],
      challenging: ['INTJ', 'INTP', 'ENTJ']
    },
    growthAdvice: [
      { priority: 'high', advice: '培养长期规划和目标设定' },
      { priority: 'high', advice: '增强抗压能力,减少对认可的依赖' },
      { priority: 'medium', advice: '学会深度思考,避免表面化' },
      { priority: 'medium', advice: '管理情绪,减少冲动行为' },
      { priority: 'low', advice: '接受冲突,学会处理不和谐' },
      { priority: 'low', advice: '平衡当下与未来' }
    ],
    famous: ['玛丽莲·梦露', '埃尔维斯·普雷斯利', '杰米·福克斯', '比尔·克林顿', '亚当·莱文']
  }
];
