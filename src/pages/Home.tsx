import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">MBTI 性格测评</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            发现你的真实性格
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            通过科学的MBTI测评，深入了解你的性格特征、职业方向和成长建议
          </p>
        </div>

        {/* Test Level Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          <Card className="hover:shadow-lg transition-shadow animate-scale-in">
            <CardHeader>
              <CardTitle className="text-accent">快速测试</CardTitle>
              <CardDescription>15题 · 约5分钟</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                快速了解你的性格倾向，适合时间紧张的你
              </p>
              <Button
                className="w-full"
                variant="outline"
                onClick={() => navigate('/test/quick')}
              >
                开始快速测试
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow animate-scale-in border-primary">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-primary">标准测试</CardTitle>
                <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">
                  推荐
                </span>
              </div>
              <CardDescription>30题 · 约10分钟</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                全面评估你的性格类型，获得准确的分析结果
              </p>
              <Button
                className="w-full"
                onClick={() => navigate('/test/standard')}
              >
                开始标准测试
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow animate-scale-in">
            <CardHeader>
              <CardTitle className="text-diplomat">深度测试</CardTitle>
              <CardDescription>60题 · 约20分钟</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                深入探索你的性格细节，获得最详尽的个人分析
              </p>
              <Button
                className="w-full"
                variant="outline"
                onClick={() => navigate('/test/deep')}
              >
                开始深度测试
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Feature Section */}
        <div className="grid md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <div className="text-center p-6 rounded-lg bg-analyst/10 animate-fade-in">
            <div className="text-2xl font-bold text-analyst mb-2">16</div>
            <div className="text-sm text-muted-foreground">种性格类型</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-diplomat/10 animate-fade-in">
            <div className="text-2xl font-bold text-diplomat mb-2">4</div>
            <div className="text-sm text-muted-foreground">个核心维度</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-sentinel/10 animate-fade-in">
            <div className="text-2xl font-bold text-sentinel mb-2">PDF</div>
            <div className="text-sm text-muted-foreground">详细报告导出</div>
          </div>
          <div className="text-center p-6 rounded-lg bg-explorer/10 animate-fade-in">
            <div className="text-2xl font-bold text-explorer mb-2">∞</div>
            <div className="text-sm text-muted-foreground">不限次数测试</div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-24 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>MBTI Insight © 2026 · 探索你的内在性格</p>
        </div>
      </footer>
    </div>
  );
}
