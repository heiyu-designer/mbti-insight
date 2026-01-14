import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Question } from '@/types/question';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  currentAnswer?: number;
  onAnswer: (answer: number) => void;
}

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  currentAnswer,
  onAnswer,
}: QuestionCardProps) {
  return (
    <Card className="w-full max-w-3xl mx-auto animate-fade-in shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">
            题目 {questionNumber} / {totalQuestions}
          </span>
          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">
            {question.dimension} 维度
          </span>
        </div>
        <CardTitle className="text-xl md:text-2xl leading-relaxed">
          {question.question}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2.5">
        {question.options.map((option, index) => {
          const isSelected = currentAnswer === index;

          // 为不同的选项定义渐变色
          const getGradient = () => {
            if (!isSelected) return '';
            const gradients = [
              'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', // 紫色渐变 - 非常不同意
              'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', // 粉红渐变 - 不同意
              'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', // 蓝色渐变 - 中立
              'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', // 绿色渐变 - 同意
              'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', // 橙黄渐变 - 非常同意
            ];
            return gradients[index];
          };

          return (
            <button
              key={index}
              type="button"
              className={`
                group relative w-full text-left h-auto py-4 px-5 rounded-xl transition-all duration-300
                ${isSelected
                  ? 'shadow-xl scale-[1.02] translate-x-1'
                  : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-md hover:scale-[1.01]'
                }
              `}
              style={isSelected ? {
                background: getGradient(),
                border: 'none'
              } : {}}
              onClick={() => onAnswer(index)}
            >
              <span className="flex items-center gap-4 w-full">
                <span
                  className={`
                    relative flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                    ${isSelected
                      ? 'bg-white/90 shadow-lg'
                      : 'bg-gray-100 text-gray-600 group-hover:bg-gray-200'
                    }
                  `}
                >
                  {isSelected && (
                    <span className="absolute inset-0 rounded-full bg-white/30 animate-ping"></span>
                  )}
                  <span className={`relative ${isSelected ? 'text-transparent bg-clip-text' : ''}`}
                    style={isSelected ? { backgroundImage: getGradient() } : {}}>
                    {index + 1}
                  </span>
                </span>
                <span className={`flex-1 font-medium ${isSelected ? 'text-white' : 'text-gray-700'}`}>
                  {option}
                </span>
                {isSelected && (
                  <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </span>
            </button>
          );
        })}
      </CardContent>
    </Card>
  );
}
