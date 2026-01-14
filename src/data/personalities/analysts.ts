import type { PersonalityProfile } from '@/types/personality';

export const analysts: PersonalityProfile[] = [
  {
    type: 'INTJ',
    name: '建筑师',
    nickname: '战略家',
    category: 'analyst',
    description: '富有想象力和战略性的思想家,一切皆在计划之中。INTJ是完美主义者,对自己和他人都有很高的期望。他们善于看到大局,并能制定长期战略来实现目标。独立、果断、有时显得冷漠,但内心充满激情和创造力。',
    traits: [
      '理性分析能力强',
      '战略思维突出',
      '独立自主',
      '追求完美',
      '目标导向',
      '创新思维',
      '自信果断',
      '注重效率'
    ],
    strengths: [
      '擅长长期规划和战略思考',
      '快速学习新知识和技能',
      '独立解决复杂问题',
      '高度自律和执行力',
      '不受情绪影响的理性决策',
      '创新性的解决方案'
    ],
    weaknesses: [
      '可能显得过于冷漠和不近人情',
      '对他人的能力要求过高',
      '不善于表达情感',
      '可能忽视细节和当下',
      '固执己见,难以接受批评',
      '社交技能相对较弱'
    ],
    careers: [
      { title: '软件架构师', suitability: 'high' },
      { title: '战略咨询顾问', suitability: 'high' },
      { title: '投资分析师', suitability: 'high' },
      { title: '科学研究员', suitability: 'high' },
      { title: '系统工程师', suitability: 'high' },
      { title: '数据科学家', suitability: 'medium' },
      { title: '产品经理', suitability: 'medium' },
      { title: '律师', suitability: 'medium' },
      { title: '医学研究员', suitability: 'medium' },
      { title: '管理咨询师', suitability: 'medium' }
    ],
    relationships: {
      best: ['ENFP', 'ENTP', 'INFJ'],
      good: ['INTJ', 'ENTJ', 'INTP', 'INFP'],
      challenging: ['ESFJ', 'ISFJ', 'ESFP']
    },
    growthAdvice: [
      { priority: 'high', advice: '学会倾听他人意见,接受不同观点' },
      { priority: 'high', advice: '培养情感表达能力,增进人际关系' },
      { priority: 'medium', advice: '关注当下和细节,避免过度关注未来' },
      { priority: 'medium', advice: '学会欣赏他人的努力,降低过高期望' },
      { priority: 'low', advice: '尝试更灵活的思维方式,减少固执' },
      { priority: 'low', advice: '培养社交技能,扩展人际网络' }
    ],
    famous: ['埃隆·马斯克', '马克·扎克伯格', '克里斯托弗·诺兰', '艾萨克·牛顿', '尼古拉·特斯拉']
  },
  {
    type: 'INTP',
    name: '逻辑学家',
    nickname: '思想家',
    category: 'analyst',
    description: '创新的发明家,对知识有着止不住的渴望。INTP热爱抽象理论和哲学思考,善于发现事物背后的逻辑和模式。他们是天生的问题解决者,对任何事物都保持好奇心和质疑精神。独立、灵活、富有创造力。',
    traits: [
      '逻辑思维强',
      '好奇心旺盛',
      '热爱学习',
      '善于抽象思考',
      '独立自主',
      '灵活变通',
      '创新能力强',
      '客观分析'
    ],
    strengths: [
      '出色的逻辑分析和推理能力',
      '创新性解决复杂问题',
      '快速学习新概念和理论',
      '保持开放和灵活的思维',
      '客观公正的判断',
      '发现事物本质和模式'
    ],
    weaknesses: [
      '可能过于理论化,缺乏实践',
      '容易陷入分析瘫痪',
      '忽视情感和人际关系',
      '组织和执行能力较弱',
      '可能显得心不在焉',
      '完美主义导致拖延'
    ],
    careers: [
      { title: '软件工程师', suitability: 'high' },
      { title: '数据分析师', suitability: 'high' },
      { title: '理论物理学家', suitability: 'high' },
      { title: '哲学教授', suitability: 'high' },
      { title: '研发工程师', suitability: 'high' },
      { title: '算法工程师', suitability: 'medium' },
      { title: '系统分析师', suitability: 'medium' },
      { title: '数学家', suitability: 'medium' },
      { title: '技术写作', suitability: 'medium' },
      { title: '独立研究员', suitability: 'medium' }
    ],
    relationships: {
      best: ['ENTJ', 'ENFJ', 'INFJ'],
      good: ['INTP', 'INTJ', 'ENTP', 'INFP'],
      challenging: ['ESFJ', 'ISFJ', 'ESTJ']
    },
    growthAdvice: [
      { priority: 'high', advice: '提升执行力,将想法转化为行动' },
      { priority: 'high', advice: '关注情感需求,改善人际关系' },
      { priority: 'medium', advice: '培养时间管理和组织能力' },
      { priority: 'medium', advice: '学会在完美和完成之间取得平衡' },
      { priority: 'low', advice: '增强实践能力,减少过度理论化' },
      { priority: 'low', advice: '培养耐心,提升专注力' }
    ],
    famous: ['阿尔伯特·爱因斯坦', '比尔·盖茨', '拉里·佩奇', '艾伦·图灵', '查尔斯·达尔文']
  },
  {
    type: 'ENTJ',
    name: '指挥官',
    nickname: '领导者',
    category: 'analyst',
    description: '大胆、富有想象力且意志强大的领导者,总能找到或创造解决方法。ENTJ是天生的领导者,善于组织资源和人员来实现目标。他们果断、自信、有远见,能够激励他人追随自己的愿景。高效、理性、追求卓越。',
    traits: [
      '领导能力强',
      '果断自信',
      '战略思维',
      '目标导向',
      '高效执行',
      '逻辑分析',
      '善于组织',
      '追求卓越'
    ],
    strengths: [
      '卓越的领导和组织能力',
      '快速决策和执行',
      '战略规划和长远眼光',
      '善于激励和影响他人',
      '高效解决复杂问题',
      '强大的沟通和说服力'
    ],
    weaknesses: [
      '可能过于强势和控制欲强',
      '不够耐心,急于求成',
      '忽视他人的情感需求',
      '可能显得傲慢和不近人情',
      '难以接受批评和失败',
      '工作狂倾向,忽视生活平衡'
    ],
    careers: [
      { title: '企业CEO/高管', suitability: 'high' },
      { title: '创业者', suitability: 'high' },
      { title: '管理咨询顾问', suitability: 'high' },
      { title: '投资银行家', suitability: 'high' },
      { title: '战略规划师', suitability: 'high' },
      { title: '项目总监', suitability: 'medium' },
      { title: '律师', suitability: 'medium' },
      { title: '政治家', suitability: 'medium' },
      { title: '销售总监', suitability: 'medium' },
      { title: '运营总监', suitability: 'medium' }
    ],
    relationships: {
      best: ['INTP', 'INFP', 'ENFP'],
      good: ['ENTJ', 'INTJ', 'ENTP', 'INFJ'],
      challenging: ['ISFP', 'ESFP', 'ISFJ']
    },
    growthAdvice: [
      { priority: 'high', advice: '培养耐心和同理心,关注他人感受' },
      { priority: 'high', advice: '学会倾听,避免过于强势' },
      { priority: 'medium', advice: '平衡工作与生活,避免过度劳累' },
      { priority: 'medium', advice: '接受不完美,允许他人犯错' },
      { priority: 'low', advice: '培养谦逊,欣赏他人贡献' },
      { priority: 'low', advice: '学会放权,信任团队成员' }
    ],
    famous: ['史蒂夫·乔布斯', '玛格丽特·撒切尔', '拿破仑', '富兰克林·罗斯福', '戈登·拉姆齐']
  },
  {
    type: 'ENTP',
    name: '辩论家',
    nickname: '创新者',
    category: 'analyst',
    description: '聪明好奇的思想者,无法抗拒智力上的挑战。ENTP热爱辩论和头脑风暴,善于从不同角度看问题。他们机智、灵活、富有创造力,总是在寻找新的可能性和机会。充满活力、适应力强、喜欢挑战传统。',
    traits: [
      '聪明机智',
      '创新思维',
      '善于辩论',
      '适应力强',
      '好奇心强',
      '思维灵活',
      '充满活力',
      '挑战传统'
    ],
    strengths: [
      '快速学习和适应新环境',
      '创新性解决问题',
      '优秀的沟通和辩论技巧',
      '从多角度分析问题',
      '激发他人的创造力',
      '发现新机会和可能性'
    ],
    weaknesses: [
      '可能过于争辩,忽视他人感受',
      '容易分散注意力,缺乏专注',
      '执行力和持续性较弱',
      '可能显得不够可靠',
      '忽视细节和实际操作',
      '厌倦重复和常规工作'
    ],
    careers: [
      { title: '创业者', suitability: 'high' },
      { title: '产品经理', suitability: 'high' },
      { title: '营销策划', suitability: 'high' },
      { title: '发明家', suitability: 'high' },
      { title: '顾问', suitability: 'high' },
      { title: '投资人', suitability: 'medium' },
      { title: '律师', suitability: 'medium' },
      { title: '记者', suitability: 'medium' },
      { title: '演讲者', suitability: 'medium' },
      { title: '设计师', suitability: 'medium' }
    ],
    relationships: {
      best: ['INFJ', 'INTJ', 'ENFJ'],
      good: ['ENTP', 'ENTJ', 'INTP', 'INFP'],
      challenging: ['ISFJ', 'ISTJ', 'ESFJ']
    },
    growthAdvice: [
      { priority: 'high', advice: '提升执行力和持续性,完成已开始的项目' },
      { priority: 'high', advice: '关注他人情感,减少过度辩论' },
      { priority: 'medium', advice: '培养专注力,避免分散精力' },
      { priority: 'medium', advice: '重视细节和实际操作' },
      { priority: 'low', advice: '建立可靠性,遵守承诺' },
      { priority: 'low', advice: '学会接受常规,平衡创新与稳定' }
    ],
    famous: ['托马斯·爱迪生', '莱昂纳多·达·芬奇', '小罗伯特·唐尼', '马克·吐温', '本杰明·富兰克林']
  }
];
