# MBTI 性格测评系统

一个专业的 MBTI 性格测评 Web 应用，基于 React + TypeScript + Vite 构建。

## 项目简介

本系统提供科学的 MBTI 性格测试，帮助用户了解自己的性格类型。支持三种测试级别，提供详细的性格分析报告，包含职业建议、成长方向和人际关系指导。

### 核心功能

- **分级测试系统**
  - 快速测试：15 题（约 5 分钟）
  - 标准测试：30 题（约 10 分钟）
  - 深度测试：50 题（约 20 分钟）

- **智能题库系统**
  - 500 道题库（快速 50 题 + 标准 150 题 + 深度 300 题）
  - 随机抽题确保每次测试不重复
  - 自动保证 E/I、S/N、T/F、J/P 四个维度均匀分布

- **16 种性格详细分析**
  - 性格描述、特征、优势、劣势
  - 职业建议（高度适合/中度适合）
  - 个人成长建议（按优先级排序）
  - 性格匹配推荐（最佳/良好/挑战）
  - 四维度雷达图可视化

- **结果分享与导出**
  - PDF 报告导出（完美支持中文）
  - 生成精美分享卡片图片
  - 移动端原生分享支持
  - 链接复制分享

- **进度保存**
  - 自动保存答题进度
  - 24 小时内可恢复未完成的测试
  - 支持随时退出和继续

## 技术栈

- **前端框架**: React 19.2 + TypeScript 5.9
- **构建工具**: Vite 7.2
- **样式方案**: Tailwind CSS v4 + Shadcn/ui
- **路由管理**: React Router DOM 7.12
- **状态管理**: React Context + useReducer
- **数据可视化**: Recharts 3.6（雷达图）
- **PDF 导出**: jsPDF + html2canvas
- **数据持久化**: localStorage（24 小时有效期）

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:5173 查看应用

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm preview
```

### 代码检查

```bash
npm run lint
```

## 项目结构

```
src/
├── components/          # React 组件
│   ├── ui/             # Shadcn/ui 基础组件
│   ├── layout/         # 布局组件
│   ├── home/           # 首页组件
│   ├── test/           # 测试相关组件
│   ├── result/         # 结果展示组件
│   └── common/         # 通用组件
├── pages/              # 页面组件
├── data/               # 数据文件
│   ├── questions/      # 题库（quick/standard/deep）
│   └── personalities/  # 16 种性格数据
├── contexts/           # React Context
├── lib/                # 工具函数库
│   ├── test-engine/    # 测试引擎（抽题/计分/分类）
│   ├── storage/        # 本地存储管理
│   └── export/         # PDF/图片导出
├── types/              # TypeScript 类型定义
└── hooks/              # 自定义 Hooks
```

## 核心算法

### 随机抽题算法

位于 `src/lib/test-engine/questionSelector.ts`

1. 按 E/I、S/N、T/F、J/P 四个维度分组题目
2. 计算每个维度需要的题目数（确保平均分配）
3. 使用 Fisher-Yates 洗牌算法从各维度随机抽取
4. 最终打乱所有选中题目的顺序

**保证**：各维度题目数量差异 ≤ 1 题

### MBTI 计分逻辑

位于 `src/lib/test-engine/scoreCalculator.ts`

- 采用 5 级 Likert 量表（非常不同意 → 非常同意）
- 支持正向和反向计分题目
- 每个维度独立计算得分
- 得分 ≥50% 判定为该维度的前一个字母
- 最终组合四个维度字母得到 MBTI 类型

### PDF 中文导出方案

位于 `src/lib/export/pdfGenerator.ts`

使用 **html2canvas 截图 + jsPDF 插入图片** 的方式：

1. 创建临时 HTML 容器渲染内容
2. 使用 html2canvas 转换为高清图片（2倍比例）
3. 将图片插入 PDF 各页面
4. 完美支持中文显示，无需字体文件

## 配色方案

- **主色调**: `#0891B2` 青蓝色（专业信任感）
- **点缀色**: `#FF7F66` 珊瑚色（活力）
- **性格分类颜色**:
  - 分析师 (INTJ/INTP/ENTJ/ENTP): `#A855F7` 紫色
  - 外交官 (INFJ/INFP/ENFJ/ENFP): `#10B981` 绿色
  - 守护者 (ISTJ/ISFJ/ESTJ/ESFJ): `#3B82F6` 蓝色
  - 探险家 (ISTP/ISFP/ESTP/ESFP): `#F59E0B` 橙色

## 路由说明

- `/` - 首页（选择测试级别）
- `/test/:level` - 测试页面（level: quick/standard/deep）
- `/result` - 结果页面（性格分析报告）

## 注意事项

### Tailwind CSS v4 配置

本项目使用 Tailwind CSS v4，配置方式与 v3 不同：

- PostCSS 配置使用 `'@tailwindcss/postcss'` 插件
- CSS 导入语法为 `@import 'tailwindcss'`（不是 `@tailwind` 指令）

### 题库与测试题目数量

- **题库大小**：快速 50 题、标准 150 题、深度 300 题
- **实际测试**：快速 15 题、标准 30 题、深度 50 题
- 从大题库中随机抽取小题集，确保每次测试内容不同

### 数据持久化

- 测试进度自动保存到 localStorage
- 有效期 24 小时，过期自动清除
- 每次开始新测试会清除旧数据

## 开发指南

### 添加新题目

1. 编辑 `src/data/questions/[level].ts` 文件
2. 遵循 `Question` 接口定义
3. 确保 `scoring.direction` 正确（positive/negative）
4. 验证维度分布均匀性

### 修改性格数据

编辑 `src/data/personalities/` 目录下对应分类的文件：
- `analysts.ts` - 分析师类型
- `diplomats.ts` - 外交官类型
- `sentinels.ts` - 守护者类型
- `explorers.ts` - 探险家类型

## 许可证

本项目仅供学习和研究使用。

## 联系方式

如有问题或建议，欢迎提交 Issue。
