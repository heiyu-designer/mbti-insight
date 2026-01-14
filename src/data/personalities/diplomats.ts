import type { PersonalityProfile } from '@/types/personality';

export const diplomats: PersonalityProfile[] = [
  {
    type: 'INFJ',
    name: '提倡者',
    nickname: '咨询师',
    category: 'diplomat',
    description: '安静而神秘,同时鼓舞人心且不知疲倦的理想主义者。INFJ是稀有的性格类型,深刻理解他人的情感和动机。他们富有同理心、有远见、致力于帮助他人实现潜力。理想主义、坚定、富有创造力。',
    traits: [
      '深刻的同理心',
      '理想主义',
      '洞察力强',
      '富有创造力',
      '坚定的价值观',
      '善于倾听',
      '追求意义',
      '独立思考'
    ],
    strengths: [
      '深刻理解他人的情感和需求',
      '富有远见和洞察力',
      '创造性解决人际问题',
      '坚守原则和价值观',
      '激励和引导他人成长',
      '出色的沟通和写作能力'
    ],
    weaknesses: [
      '可能过于理想化,脱离现实',
      '容易感到疲惫和过度投入',
      '对批评过于敏感',
      '完美主义导致压力',
      '难以设定界限,过度付出',
      '可能显得神秘和难以接近'
    ],
    careers: [
      { title: '心理咨询师', suitability: 'high' },
      { title: '人力资源总监', suitability: 'high' },
      { title: '作家', suitability: 'high' },
      { title: '教育工作者', suitability: 'high' },
      { title: '社会工作者', suitability: 'high' },
      { title: '非营利组织负责人', suitability: 'medium' },
      { title: '艺术家', suitability: 'medium' },
      { title: '医疗工作者', suitability: 'medium' },
      { title: '职业规划师', suitability: 'medium' },
      { title: '宗教领袖', suitability: 'medium' }
    ],
    relationships: {
      best: ['ENTP', 'ENFP', 'INFP'],
      good: ['INFJ', 'INTJ', 'ENFJ', 'INTP'],
      challenging: ['ESTP', 'ESFP', 'ESTJ']
    },
    growthAdvice: [
      { priority: 'high', advice: '设定健康的界限,避免过度付出' },
      { priority: 'high', advice: '接受不完美,降低对自己和他人的期望' },
      { priority: 'medium', advice: '关注现实和实际,平衡理想与现实' },
      { priority: 'medium', advice: '学会说"不",保护自己的精力' },
      { priority: 'low', advice: '增强抗压能力,减少对批评的敏感' },
      { priority: 'low', advice: '更开放地分享自己,建立深度联系' }
    ],
    famous: ['马丁·路德·金', '尼尔森·曼德拉', '甘地', 'J.K.罗琳', '柏拉图']
  },
  {
    type: 'INFP',
    name: '调停者',
    nickname: '治愈者',
    category: 'diplomat',
    description: '诗意、善良的利他主义者,总是热心帮助他人。INFP是理想主义者,深深关心自己的价值观和信念。他们富有创造力、富有同情心、追求真实和意义。温和、灵活、但坚守核心价值。',
    traits: [
      '理想主义',
      '富有同情心',
      '创造力强',
      '追求真实',
      '灵活开放',
      '价值观坚定',
      '善于倾听',
      '关注意义'
    ],
    strengths: [
      '深刻的同理心和理解力',
      '创造性表达情感和想法',
      '坚守核心价值和原则',
      '适应力强,思维开放',
      '激发他人的潜力',
      '发现事物的深层意义'
    ],
    weaknesses: [
      '过于理想化,难以接受现实',
      '对批评非常敏感',
      '可能过于情绪化',
      '拖延和执行力不足',
      '难以做出决定',
      '可能过于自我批评'
    ],
    careers: [
      { title: '作家/诗人', suitability: 'high' },
      { title: '心理咨询师', suitability: 'high' },
      { title: '艺术家', suitability: 'high' },
      { title: '教师', suitability: 'high' },
      { title: '社会工作者', suitability: 'high' },
      { title: '图书管理员', suitability: 'medium' },
      { title: '音乐家', suitability: 'medium' },
      { title: '翻译', suitability: 'medium' },
      { title: '设计师', suitability: 'medium' },
      { title: '非营利工作者', suitability: 'medium' }
    ],
    relationships: {
      best: ['ENFJ', 'ENTJ', 'INFJ'],
      good: ['INFP', 'ENFP', 'INTP', 'INTJ'],
      challenging: ['ESTJ', 'ISTJ', 'ESTP']
    },
    growthAdvice: [
      { priority: 'high', advice: '提升执行力,将理想转化为行动' },
      { priority: 'high', advice: '增强抗压能力,减少过度敏感' },
      { priority: 'medium', advice: '培养决断力,避免过度犹豫' },
      { priority: 'medium', advice: '接受现实的不完美,平衡理想与实际' },
      { priority: 'low', advice: '减少自我批评,建立自信' },
      { priority: 'low', advice: '学会设定界限,保护自己的能量' }
    ],
    famous: ['威廉·莎士比亚', 'J.R.R.托尔金', '约翰尼·德普', '奥黛丽·赫本', '梵高']
  },
  {
    type: 'ENFJ',
    name: '主人公',
    nickname: '教导者',
    category: 'diplomat',
    description: '有魅力鼓舞人心的领袖,有能力让听众着迷。ENFJ是天生的领导者和导师,深刻理解他人的需求和潜力。他们热情、有同理心、善于激励,致力于帮助他人成长。富有感染力、组织能力强、追求和谐。',
    traits: [
      '领导魅力',
      '同理心强',
      '善于激励',
      '组织能力强',
      '热情洋溢',
      '追求和谐',
      '沟通能力强',
      '关注他人成长'
    ],
    strengths: [
      '卓越的人际沟通和领导能力',
      '深刻理解和关心他人',
      '激励和引导团队',
      '创造和谐的环境',
      '优秀的组织和协调能力',
      '富有感染力和说服力'
    ],
    weaknesses: [
      '可能过于关注他人,忽视自己',
      '对批评和冲突过于敏感',
      '可能过于理想化',
      '难以做出艰难决定',
      '容易感到疲惫和压力',
      '可能过于控制和干涉'
    ],
    careers: [
      { title: '人力资源总监', suitability: 'high' },
      { title: '教师/培训师', suitability: 'high' },
      { title: '咨询顾问', suitability: 'high' },
      { title: '公关经理', suitability: 'high' },
      { title: '非营利组织领导', suitability: 'high' },
      { title: '心理咨询师', suitability: 'medium' },
      { title: '销售经理', suitability: 'medium' },
      { title: '活动策划', suitability: 'medium' },
      { title: '政治家', suitability: 'medium' },
      { title: '演讲者', suitability: 'medium' }
    ],
    relationships: {
      best: ['INFP', 'ISFP', 'INTP'],
      good: ['ENFJ', 'INFJ', 'ENFP', 'ENTJ'],
      challenging: ['ISTP', 'ESTP', 'ISTJ']
    },
    growthAdvice: [
      { priority: 'high', advice: '关注自己的需求,避免过度付出' },
      { priority: 'high', advice: '学会接受冲突,做出艰难决定' },
      { priority: 'medium', advice: '设定界限,保护自己的精力' },
      { priority: 'medium', advice: '平衡理想与现实,接受不完美' },
      { priority: 'low', advice: '减少控制欲,给他人空间' },
      { priority: 'low', advice: '增强抗压能力,管理压力' }
    ],
    famous: ['奥普拉·温弗瑞', '巴拉克·奥巴马', '马丁·路德·金', '玛雅·安吉罗', '尼尔森·曼德拉']
  },
  {
    type: 'ENFP',
    name: '竞选者',
    nickname: '激励者',
    category: 'diplomat',
    description: '热情、有创造力、社交能力强的自由精神,总能找到理由微笑。ENFP充满活力和好奇心,热爱探索新的可能性和建立人际联系。他们热情、灵活、富有想象力,总是在寻找生活的意义和乐趣。充满激情、适应力强、乐观积极。',
    traits: [
      '热情洋溢',
      '创造力强',
      '社交能力强',
      '好奇心旺盛',
      '灵活适应',
      '乐观积极',
      '富有想象力',
      '追求意义'
    ],
    strengths: [
      '出色的沟通和人际交往能力',
      '创造性解决问题',
      '快速建立联系和关系',
      '适应变化,灵活应对',
      '激励和鼓舞他人',
      '发现新机会和可能性'
    ],
    weaknesses: [
      '容易分散注意力,缺乏专注',
      '执行力和持续性较弱',
      '可能过于情绪化',
      '难以做出决定和承诺',
      '可能过于理想化',
      '厌倦常规和重复工作'
    ],
    careers: [
      { title: '市场营销', suitability: 'high' },
      { title: '记者/媒体', suitability: 'high' },
      { title: '心理咨询师', suitability: 'high' },
      { title: '活动策划', suitability: 'high' },
      { title: '教师', suitability: 'high' },
      { title: '公关专员', suitability: 'medium' },
      { title: '演员/表演者', suitability: 'medium' },
      { title: '设计师', suitability: 'medium' },
      { title: '创业者', suitability: 'medium' },
      { title: '人力资源', suitability: 'medium' }
    ],
    relationships: {
      best: ['INTJ', 'INFJ', 'ENTJ'],
      good: ['ENFP', 'ENFJ', 'INFP', 'ENTP'],
      challenging: ['ISTJ', 'ESTJ', 'ISTP']
    },
    growthAdvice: [
      { priority: 'high', advice: '提升专注力和执行力,完成已开始的项目' },
      { priority: 'high', advice: '培养持续性,避免频繁更换目标' },
      { priority: 'medium', advice: '学会做出承诺和决定' },
      { priority: 'medium', advice: '管理情绪,保持稳定' },
      { priority: 'low', advice: '接受常规工作的价值' },
      { priority: 'low', advice: '平衡理想与现实' }
    ],
    famous: ['罗宾·威廉姆斯', '威尔·史密斯', '艾伦·德杰尼勒斯', '昆汀·塔伦蒂诺', '沃尔特·迪士尼']
  }
];
