import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Download, Share2, Home, Copy, Check } from 'lucide-react';
import type { TestResult } from '@/types/personality';
import { getPersonalityProfile } from '@/data/personalities';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { generatePDF } from '@/lib/export/pdfGenerator';
import { generateShareImage, downloadImage, shareImage, copyImageToClipboard } from '@/lib/export/imageGenerator';

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const result = location.state?.result as TestResult;
  const [isExporting, setIsExporting] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  if (!result) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>未找到测试结果</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              没有找到测试结果数据。请重新进行测试。
            </p>
            <Button onClick={() => navigate('/')} className="w-full">
              返回首页
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const profile = getPersonalityProfile(result.mbtiType);

  // 准备雷达图数据
  const radarData = result.dimensions.map(dim => ({
    dimension: dim.dimension,
    score: dim.score,
    fullMark: 100,
  }));

  // 获取分类颜色
  const getCategoryColor = () => {
    const colors = {
      analyst: 'text-analyst border-analyst/20 bg-analyst/5',
      diplomat: 'text-diplomat border-diplomat/20 bg-diplomat/5',
      sentinel: 'text-sentinel border-sentinel/20 bg-sentinel/5',
      explorer: 'text-explorer border-explorer/20 bg-explorer/5',
    };
    return colors[profile.category];
  };

  const getCategoryName = () => {
    const names = {
      analyst: '分析师',
      diplomat: '外交官',
      sentinel: '守护者',
      explorer: '探险家',
    };
    return names[profile.category];
  };

  // 点击外部关闭分享菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showShareMenu) {
        const target = event.target as HTMLElement;
        if (!target.closest('.share-menu-container')) {
          setShowShareMenu(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showShareMenu]);

  // 导出PDF
  const handleExportPDF = async () => {
    setIsExporting(true);
    try {
      await generatePDF(result, profile);
    } catch (error) {
      console.error('PDF导出失败:', error);
      alert('PDF导出失败,请重试');
    } finally {
      setIsExporting(false);
    }
  };

  // 分享功能
  const handleShare = async () => {
    try {
      // 生成分享卡片
      const blob = await generateShareImage('share-card');
      const shareTitle = `我的MBTI性格类型是 ${result.mbtiType} - ${profile.name}`;
      const shareText = `${profile.description.substring(0, 100)}...`;

      // 尝试使用Web Share API
      const shared = await shareImage(blob, shareTitle, shareText);

      if (!shared) {
        // 如果不支持Web Share API,显示分享菜单
        setShowShareMenu(true);
      }
    } catch (error) {
      console.error('分享失败:', error);
      alert('生成分享图片失败,请重试');
    }
  };

  // 下载分享图片
  const handleDownloadImage = async () => {
    try {
      const blob = await generateShareImage('share-card');
      const filename = `MBTI_${result.mbtiType}_${new Date().toLocaleDateString('zh-CN').replace(/\//g, '-')}.png`;
      downloadImage(blob, filename);
      setShowShareMenu(false);
    } catch (error) {
      console.error('下载图片失败:', error);
      alert('下载失败,请重试');
    }
  };

  // 复制图片
  const handleCopyImage = async () => {
    try {
      const blob = await generateShareImage('share-card');
      const success = await copyImageToClipboard(blob);
      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        alert('您的浏览器不支持复制图片,请使用下载功能');
      }
    } catch (error) {
      console.error('复制失败:', error);
      alert('复制失败,请重试');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              返回首页
            </Button>
            <div className="flex gap-2">
              <div className="relative share-menu-container">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2"
                  onClick={handleShare}
                >
                  <Share2 className="h-4 w-4" />
                  分享结果
                </Button>

                {/* 分享菜单 */}
                {showShareMenu && (
                  <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl border p-2 z-50">
                    <button
                      onClick={handleDownloadImage}
                      className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2 text-sm"
                    >
                      <Download className="h-4 w-4" />
                      下载图片
                    </button>
                    <button
                      onClick={handleCopyImage}
                      className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded flex items-center gap-2 text-sm"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-green-500">已复制</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          复制图片
                        </>
                      )}
                    </button>
                    <div className="border-t my-1"></div>
                    <button
                      onClick={() => setShowShareMenu(false)}
                      className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded text-sm text-gray-500"
                    >
                      取消
                    </button>
                  </div>
                )}
              </div>

              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={handleExportPDF}
                disabled={isExporting}
              >
                <Download className="h-4 w-4" />
                {isExporting ? '导出中...' : '导出PDF'}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* 分享卡片 - 用于生成截图 (隐藏) */}
        <div id="share-card" className="fixed -left-[9999px] -top-[9999px] w-[600px]">
          <Card className={`border-2 ${getCategoryColor()}`}>
            <CardHeader className="text-center">
              <div className="inline-block px-3 py-1 rounded-full bg-background/50 text-sm font-medium mb-2">
                {getCategoryName()}
              </div>
              <CardTitle className="text-4xl font-bold mb-2">
                {profile.type}
              </CardTitle>
              <p className="text-2xl font-semibold">{profile.name}</p>
              <p className="text-muted-foreground">{profile.nickname}</p>
            </CardHeader>
            <CardContent>
              <p className="text-center text-lg leading-relaxed">
                {profile.description}
              </p>
              <div className="mt-6 text-center text-sm text-muted-foreground">
                MBTI Insight © 2026 · 探索你的内在性格
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 性格类型卡片 */}
        <Card className={`border-2 ${getCategoryColor()}`}>
          <CardHeader className="text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-background/50 text-sm font-medium mb-2">
              {getCategoryName()}
            </div>
            <CardTitle className="text-4xl font-bold mb-2">
              {profile.type}
            </CardTitle>
            <p className="text-2xl font-semibold">{profile.name}</p>
            <p className="text-muted-foreground">{profile.nickname}</p>
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg leading-relaxed">
              {profile.description}
            </p>
          </CardContent>
        </Card>

        {/* 维度雷达图 */}
        <Card>
          <CardHeader>
            <CardTitle>性格维度分析</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="dimension" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar
                    name="得分"
                    dataKey="score"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary))"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              {result.dimensions.map(dim => (
                <div key={dim.dimension} className="text-center">
                  <p className="text-sm text-muted-foreground">{dim.dimension}</p>
                  <p className="text-2xl font-bold">{dim.preference}</p>
                  <p className="text-xs text-muted-foreground">{dim.score}%</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 性格特征 */}
        <Card>
          <CardHeader>
            <CardTitle>性格特征</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {profile.traits.map((trait, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {trait}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 优势与劣势 */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-diplomat">优势</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {profile.strengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-diplomat mt-1">✓</span>
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-accent">成长空间</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {profile.weaknesses.map((weakness, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{weakness}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* 职业建议 */}
        <Card>
          <CardHeader>
            <CardTitle>职业建议</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2">高度适合</p>
                <div className="flex flex-wrap gap-2">
                  {profile.careers
                    .filter(c => c.suitability === 'high')
                    .map((career, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-diplomat/10 text-diplomat rounded-lg text-sm"
                      >
                        {career.title}
                      </span>
                    ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">中度适合</p>
                <div className="flex flex-wrap gap-2">
                  {profile.careers
                    .filter(c => c.suitability === 'medium')
                    .map((career, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm"
                      >
                        {career.title}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 成长建议 */}
        <Card>
          <CardHeader>
            <CardTitle>个人成长建议</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {profile.growthAdvice.map((advice, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span
                    className={`
                      px-2 py-1 rounded text-xs font-medium shrink-0
                      ${advice.priority === 'high' ? 'bg-accent/10 text-accent' : ''}
                      ${advice.priority === 'medium' ? 'bg-primary/10 text-primary' : ''}
                      ${advice.priority === 'low' ? 'bg-muted text-muted-foreground' : ''}
                    `}
                  >
                    {advice.priority === 'high' && '高优先级'}
                    {advice.priority === 'medium' && '中优先级'}
                    {advice.priority === 'low' && '低优先级'}
                  </span>
                  <p className="flex-1">{advice.advice}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 性格匹配 */}
        <Card>
          <CardHeader>
            <CardTitle>性格匹配度</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium mb-2 text-diplomat">最佳匹配</p>
                <div className="flex flex-wrap gap-2">
                  {profile.relationships.best.map((type, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-diplomat/10 text-diplomat rounded-lg font-medium"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-2 text-primary">良好匹配</p>
                <div className="flex flex-wrap gap-2">
                  {profile.relationships.good.map((type, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-lg"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-sm font-medium mb-2 text-muted-foreground">挑战性匹配</p>
                <div className="flex flex-wrap gap-2">
                  {profile.relationships.challenging.map((type, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-muted-foreground rounded-lg"
                    >
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 名人案例 */}
        {profile.famous && profile.famous.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle>著名人物</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {profile.famous.map((person, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-muted rounded-lg text-sm"
                  >
                    {person}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* 底部行动按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center py-8">
          <Button size="lg" onClick={() => navigate('/')} className="gap-2">
            <Home className="h-5 w-5" />
            返回首页
          </Button>
          <Button size="lg" variant="outline" onClick={() => navigate(`/test/${result.testLevel}`)} className="gap-2">
            重新测试
          </Button>
        </div>
      </main>
    </div>
  );
}
