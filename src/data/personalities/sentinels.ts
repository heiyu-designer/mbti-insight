import type { PersonalityProfile } from '@/types/personality';

export const sentinels: PersonalityProfile[] = [
  {
    type: 'ISTJ',
    name: '物流师',
    nickname: '检查员',
    category: 'sentinel',
    description: '实际、注重事实的个人,可靠性不容怀疑。ISTJ是最负责任和可靠的性格类型,注重细节、遵守规则、高度组织化。他们务实、系统化、坚守承诺,是社会和组织的支柱。稳重、诚实、勤奋。',
    traits: [
      '高度负责任',
      '注重细节',
      '遵守规则',
      '组织能力强',
      '务实稳重',
      '诚实正直',
      '勤奋努力',
      '可靠性强'
    ],
    strengths: [
      '出色的组织和计划能力',
      '高度的责任感和可靠性',
      '关注细节和准确性',
      '遵守承诺和规则',
      '系统化解决问题',
      '勤奋和持之以恒'
    ],
    weaknesses: [
      '可能过于固执和缺乏灵活性',
      '难以适应变化',
      '忽视情感和人际关系',
      '可能过于严格和苛刻',
      '抗拒新想法和创新',
      '工作狂倾向,忽视休息'
    ],
    careers: [
      { title: '会计师', suitability: 'high' },
      { title: '审计师', suitability: 'high' },
      { title: '项目经理', suitability: 'high' },
      { title: '行政管理', suitability: 'high' },
      { title: '质量控制', suitability: 'high' },
      { title: '律师', suitability: 'medium' },
      { title: '银行职员', suitability: 'medium' },
      { title: '军官', suitability: 'medium' },
      { title: '工程师', suitability: 'medium' },
      { title: '数据分析师', suitability: 'medium' }
    ],
    relationships: {
      best: ['ESFP', 'ESTP', 'ISFP'],
      good: ['ISTJ', 'ESTJ', 'INTJ', 'ENTJ'],
      challenging: ['ENFP', 'INFP', 'ENTP']
    },
    growthAdvice: [
      { priority: 'high', advice: '培养灵活性,学会适应变化' },
      { priority: 'high', advice: '关注情感需求,改善人际关系' },
      { priority: 'medium', advice: '保持开放心态,接受新想法' },
      { priority: 'medium', advice: '平衡工作与生活,注重休息' },
      { priority: 'low', advice: '减少过度严格,给自己和他人空间' },
      { priority: 'low', advice: '尝试创新,突破常规思维' }
    ],
    famous: ['乔治·华盛顿', '安吉拉·默克尔', '沃伦·巴菲特', '纳特·金·科尔', '杰夫·贝索斯']
  },
  {
    type: 'ISFJ',
    name: '守卫者',
    nickname: '保护者',
    category: 'sentinel',
    description: '非常专注和温暖的守护者,时刻准备保护珍视的人。ISFJ是最体贴和关怀他人的性格类型,注重细节、忠诚可靠、富有同情心。他们务实、有责任感、致力于帮助和支持他人。温和、可靠、无私奉献。',
    traits: [
      '体贴关怀',
      '忠诚可靠',
      '注重细节',
      '责任感强',
      '温和友善',
      '无私奉献',
      '实际务实',
      '传统价值观'
    ],
    strengths: [
      '深刻的同理心和关怀',
      '高度的责任感和可靠性',
      '关注细节和他人需求',
      '忠诚和支持性强',
      '创造和谐稳定的环境',
      '勤奋和持之以恒'
    ],
    weaknesses: [
      '可能过于自我牺牲',
      '难以说"不",设定界限',
      '对批评过于敏感',
      '抗拒变化和新想法',
      '可能过于谦虚,不善表达',
      '承受压力时容易疲惫'
    ],
    careers: [
      { title: '护士/医疗工作者', suitability: 'high' },
      { title: '教师', suitability: 'high' },
      { title: '行政助理', suitability: 'high' },
      { title: '社会工作者', suitability: 'high' },
      { title: '图书管理员', suitability: 'high' },
      { title: '人力资源专员', suitability: 'medium' },
      { title: '客户服务', suitability: 'medium' },
      { title: '会计', suitability: 'medium' },
      { title: '营养师', suitability: 'medium' },
      { title: '办公室管理', suitability: 'medium' }
    ],
    relationships: {
      best: ['ESFP', 'ESTP', 'ENFP'],
      good: ['ISFJ', 'ESFJ', 'ISTJ', 'INFJ'],
      challenging: ['ENTP', 'INTP', 'ENTJ']
    },
    growthAdvice: [
      { priority: 'high', advice: '学会设定界限,避免过度付出' },
      { priority: 'high', advice: '增强自信,勇于表达自己的需求' },
      { priority: 'medium', advice: '培养灵活性,接受变化' },
      { priority: 'medium', advice: '减少对批评的敏感度' },
      { priority: 'low', advice: '关注自己的需求,避免自我牺牲' },
      { priority: 'low', advice: '学会说"不",保护自己的精力' }
    ],
    famous: ['特蕾莎修女', '凯特·米德尔顿', '劳拉·布什', '碧昂斯', '罗莎·帕克斯']
  },
  {
    type: 'ESTJ',
    name: '总经理',
    nickname: '监督者',
    category: 'sentinel',
    description: '出色的管理者,在管理事情或人时无与伦比。ESTJ是天生的组织者和领导者,注重秩序、效率和传统。他们果断、实际、有责任感,善于制定和执行计划。高效、可靠、追求结果。',
    traits: [
      '组织能力强',
      '领导力强',
      '注重效率',
      '果断决策',
      '责任感强',
      '实际务实',
      '遵守规则',
      '追求结果'
    ],
    strengths: [
      '卓越的组织和管理能力',
      '高效执行和完成任务',
      '果断的决策能力',
      '建立和维护秩序',
      '高度的责任感和可靠性',
      '优秀的沟通和领导能力'
    ],
    weaknesses: [
      '可能过于强势和控制',
      '缺乏灵活性和适应性',
      '忽视情感和人际关系',
      '可能过于固执和传统',
      '难以接受批评和新想法',
      '对他人要求过高'
    ],
    careers: [
      { title: '企业管理者', suitability: 'high' },
      { title: '项目经理', suitability: 'high' },
      { title: '运营总监', suitability: 'high' },
      { title: '军官', suitability: 'high' },
      { title: '银行经理', suitability: 'high' },
      { title: '律师', suitability: 'medium' },
      { title: '警察', suitability: 'medium' },
      { title: '会计师', suitability: 'medium' },
      { title: '销售经理', suitability: 'medium' },
      { title: '政府官员', suitability: 'medium' }
    ],
    relationships: {
      best: ['ISFP', 'ISTP', 'INFP'],
      good: ['ESTJ', 'ISTJ', 'ENTJ', 'ESFJ'],
      challenging: ['INFP', 'ENFP', 'INTP']
    },
    growthAdvice: [
      { priority: 'high', advice: '培养同理心,关注他人情感' },
      { priority: 'high', advice: '增强灵活性,接受变化和新想法' },
      { priority: 'medium', advice: '减少控制欲,给他人空间' },
      { priority: 'medium', advice: '学会倾听,避免过于强势' },
      { priority: 'low', advice: '降低对他人的期望,接受不完美' },
      { priority: 'low', advice: '平衡工作与生活' }
    ],
    famous: ['米歇尔·奥巴马', '亨利·福特', '法官朱迪', '林登·约翰逊', '约翰·洛克菲勒']
  },
  {
    type: 'ESFJ',
    name: '执政官',
    nickname: '供应者',
    category: 'sentinel',
    description: '极有同情心、受欢迎、总是热心帮助的人。ESFJ是最社交和关怀他人的性格类型,注重和谐、传统和人际关系。他们热情、有责任感、善于组织,致力于创造温暖和谐的环境。友善、可靠、乐于助人。',
    traits: [
      '热情友善',
      '同情心强',
      '社交能力强',
      '组织能力强',
      '责任感强',
      '注重和谐',
      '乐于助人',
      '传统价值观'
    ],
    strengths: [
      '出色的人际交往和沟通能力',
      '深刻的同理心和关怀',
      '组织和协调活动',
      '创造和谐的环境',
      '高度的责任感和可靠性',
      '支持和鼓励他人'
    ],
    weaknesses: [
      '可能过于关注他人认可',
      '对批评过于敏感',
      '难以处理冲突',
      '可能过于控制和干涉',
      '抗拒变化和新想法',
      '忽视自己的需求'
    ],
    careers: [
      { title: '护士', suitability: 'high' },
      { title: '教师', suitability: 'high' },
      { title: '活动策划', suitability: 'high' },
      { title: '人力资源', suitability: 'high' },
      { title: '客户服务经理', suitability: 'high' },
      { title: '办公室管理', suitability: 'medium' },
      { title: '公关专员', suitability: 'medium' },
      { title: '社会工作者', suitability: 'medium' },
      { title: '销售', suitability: 'medium' },
      { title: '餐饮管理', suitability: 'medium' }
    ],
    relationships: {
      best: ['ISFP', 'ISTP', 'INFP'],
      good: ['ESFJ', 'ISFJ', 'ESTJ', 'ENFJ'],
      challenging: ['INTP', 'ENTP', 'INTJ']
    },
    growthAdvice: [
      { priority: 'high', advice: '减少对他人认可的依赖,建立自信' },
      { priority: 'high', advice: '学会处理冲突,接受不和谐' },
      { priority: 'medium', advice: '关注自己的需求,避免过度付出' },
      { priority: 'medium', advice: '培养灵活性,接受变化' },
      { priority: 'low', advice: '增强抗压能力,减少对批评的敏感' },
      { priority: 'low', advice: '减少控制欲,给他人空间' }
    ],
    famous: ['泰勒·斯威夫特', '詹妮弗·加纳', '比尔·克林顿', '丹尼·格洛弗', '玛丽·泰勒·摩尔']
  }
];
