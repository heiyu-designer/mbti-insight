import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTest } from '@/contexts/TestContext';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import QuestionCard from '@/components/test/QuestionCard';
import ProgressBar from '@/components/test/ProgressBar';
import type { TestLevel } from '@/types/test';

export default function Test() {
  const { level } = useParams<{ level: TestLevel }>();
  const navigate = useNavigate();
  const { session, progress, currentQuestion, startTest, answerQuestion, goToQuestion, submitTest } = useTest();
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);

  useEffect(() => {
    // 如果没有session，或者session的级别与当前URL级别不匹配，则开始新测试
    if (level && (!session || session.level !== level)) {
      startTest(level as TestLevel);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  const handleAnswer = (answer: number) => {
    if (!currentQuestion) return;
    answerQuestion(currentQuestion.id, answer);

    // 自动跳转到下一题
    if (session && session.currentIndex < session.questions.length - 1) {
      setTimeout(() => {
        goToQuestion(session.currentIndex + 1);
      }, 300);
    }
  };

  const handlePrevious = () => {
    if (session && session.currentIndex > 0) {
      goToQuestion(session.currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (session && session.currentIndex < session.questions.length - 1) {
      goToQuestion(session.currentIndex + 1);
    }
  };

  const handleSubmit = () => {
    if (progress.answeredCount < progress.totalCount) {
      setShowSubmitConfirm(true);
      return;
    }

    completeTest();
  };

  const completeTest = () => {
    try {
      const result = submitTest();
      // 跳转到结果页面，传递结果数据
      navigate('/result', { state: { result } });
    } catch (error) {
      console.error('提交测试失败:', error);
      alert('提交失败，请确保所有题目都已回答');
    }
  };

  if (!session || !currentQuestion) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">加载测试...</p>
        </div>
      </div>
    );
  }

  const currentAnswer = session.answers[currentQuestion.id];
  const isFirstQuestion = session.currentIndex === 0;
  const isLastQuestion = session.currentIndex === session.questions.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                if (confirm('确定要退出测试吗？进度将会保存。')) {
                  navigate('/');
                }
              }}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              退出测试
            </Button>
            <span className="text-sm font-medium text-muted-foreground">
              {level === 'quick' && '快速测试'}
              {level === 'standard' && '标准测试'}
              {level === 'deep' && '深度测试'}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Progress Bar */}
        <ProgressBar progress={progress} />

        {/* Question Card */}
        <QuestionCard
          question={currentQuestion}
          questionNumber={session.currentIndex + 1}
          totalQuestions={session.questions.length}
          currentAnswer={currentAnswer}
          onAnswer={handleAnswer}
        />

        {/* Navigation Buttons */}
        <div className="w-full max-w-3xl mx-auto flex items-center justify-between gap-4">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={isFirstQuestion}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            上一题
          </Button>

          {isLastQuestion ? (
            <Button
              onClick={handleSubmit}
              className="gap-2"
              size="lg"
            >
              <CheckCircle className="h-5 w-5" />
              提交测试
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="gap-2"
            >
              下一题
              <ArrowRight className="h-4 w-4" />
            </Button>
          )}
        </div>

        {/* Answer Status Grid */}
        <div className="w-full max-w-3xl mx-auto">
          <div className="p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-semibold text-gray-700">答题进度</p>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500"></div>
                  <span className="text-gray-600 font-medium">已答</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-gray-200 border border-gray-300"></div>
                  <span className="text-gray-600 font-medium">未答</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600"></div>
                  <span className="text-gray-600 font-medium">当前</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-10 gap-2.5">
              {session.questions.map((q, index) => {
                const isAnswered = session.answers[q.id] !== undefined;
                const isCurrent = index === session.currentIndex;

                let buttonStyle = {};
                let buttonClasses = 'relative aspect-square rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-300 ';

                if (isCurrent) {
                  buttonClasses += 'text-white shadow-lg scale-110 ring-4 ring-blue-200';
                  buttonStyle = { background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)' };
                } else if (isAnswered) {
                  buttonClasses += 'text-white shadow-md hover:scale-110 hover:shadow-lg';
                  buttonStyle = { background: 'linear-gradient(135deg, #10b981 0%, #14b8a6 100%)' };
                } else {
                  buttonClasses += 'bg-gray-100 text-gray-500 border border-gray-200 hover:bg-gradient-to-br hover:from-orange-50 hover:to-pink-50 hover:text-orange-600 hover:border-orange-200 hover:scale-105';
                }

                return (
                  <button
                    key={q.id}
                    onClick={() => goToQuestion(index)}
                    className={buttonClasses}
                    style={buttonStyle}
                  >
                    {isCurrent && (
                      <span className="absolute inset-0 rounded-xl bg-white/20 animate-ping"></span>
                    )}
                    <span className="relative">{index + 1}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Submit Confirmation Dialog */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border rounded-lg p-6 max-w-md w-full space-y-4 animate-scale-in">
            <h3 className="text-lg font-semibold">确定要提交吗？</h3>
            <p className="text-sm text-muted-foreground">
              还有 {progress.totalCount - progress.answeredCount} 道题未回答。
              未回答的题目将不计入分数统计。
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => setShowSubmitConfirm(false)}
                className="flex-1"
              >
                继续答题
              </Button>
              <Button
                onClick={completeTest}
                className="flex-1"
              >
                确认提交
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
