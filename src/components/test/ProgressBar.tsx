import { Progress } from '@/components/ui/progress';
import type { TestProgress } from '@/types/test';

interface ProgressBarProps {
  progress: TestProgress;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  const minutes = Math.floor(progress.timeElapsed / 60);
  const seconds = progress.timeElapsed % 60;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3">
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          已完成: {progress.answeredCount} / {progress.totalCount}
        </span>
        <span className="text-muted-foreground">
          用时: {minutes}:{seconds.toString().padStart(2, '0')}
        </span>
      </div>
      <Progress value={progress.percentage} className="h-2" />
      <div className="text-center text-sm font-medium text-primary">
        {progress.percentage}% 完成
      </div>
    </div>
  );
}
