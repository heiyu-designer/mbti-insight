// 测试核心功能的临时测试页面
import { questionBank } from '@/data/questions';
import { selectQuestions, validateDistribution } from '@/lib/test-engine/questionSelector';
import { calculateDimensionScores, determineMBTIType, validateAnswers } from '@/lib/test-engine/scoreCalculator';
import { getPersonalityCategory, getCategoryName } from '@/lib/test-engine/typeClassifier';

export default function TestPage() {
  const runTest = () => {
    console.log('===== MBTI 核心功能测试 =====\n');

    // 测试1: 随机抽题
    console.log('【测试1: 随机抽题算法】');
    const standardQuestions = selectQuestions(questionBank.standard, 30);
    const validation = validateDistribution(standardQuestions);
    console.log('抽取题目数:', standardQuestions.length);
    console.log('维度分布:', validation.distribution);
    console.log('分布是否均匀:', validation.valid, '-', validation.message);
    console.log('');

    // 测试2: 模拟答题（全选"同意"）
    console.log('【测试2: 计分逻辑】');
    const mockAnswers: Record<string, number> = {};
    standardQuestions.forEach((q) => {
      mockAnswers[q.id] = 3; // 选择"同意"（索引3）
    });

    const answerValidation = validateAnswers(standardQuestions, mockAnswers);
    console.log('已回答题目:', answerValidation.answeredCount, '/', answerValidation.totalCount);
    console.log('');

    // 测试3: 计算维度得分
    console.log('【测试3: 维度得分计算】');
    const dimensionScores = calculateDimensionScores(standardQuestions, mockAnswers);
    dimensionScores.forEach((d) => {
      console.log(`${d.dimension}: ${d.letter} (${d.score}%) - ${d.description}`);
    });
    console.log('');

    // 测试4: 判定MBTI类型
    console.log('【测试4: MBTI类型判定】');
    const mbtiType = determineMBTIType(dimensionScores);
    const category = getPersonalityCategory(mbtiType);
    const categoryName = getCategoryName(category);
    console.log('MBTI类型:', mbtiType);
    console.log('性格分类:', categoryName, `(${category})`);
    console.log('');

    console.log('===== 测试完成 =====');
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">MBTI 核心功能测试</h1>
        <button
          onClick={runTest}
          className="px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
        >
          运行测试（查看控制台）
        </button>
        <div className="mt-6 p-4 bg-muted rounded-md">
          <p className="text-sm text-muted-foreground">
            点击按钮后，请打开浏览器控制台（F12）查看测试结果
          </p>
        </div>
      </div>
    </div>
  );
}
