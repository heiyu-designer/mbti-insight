import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import type { TestResult } from '@/types/personality';
import type { PersonalityProfile } from '@/types/personality';

/**
 * 生成PDF报告（使用截图方式以支持中文显示）
 */
export async function generatePDF(result: TestResult, profile: PersonalityProfile): Promise<void> {
  const pdf = new jsPDF({
    orientation: 'p',
    unit: 'mm',
    format: 'a4',
  });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  // 创建临时容器用于渲染PDF内容
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.left = '-9999px';
  container.style.top = '0';
  container.style.width = '794px'; // A4 width in pixels at 96dpi
  container.style.minHeight = '1123px'; // A4 height in pixels
  container.style.background = 'white';
  container.style.padding = '60px 80px';
  container.style.fontFamily = 'system-ui, -apple-system, sans-serif';
  container.style.boxSizing = 'border-box';
  document.body.appendChild(container);

  // 辅助函数：添加分页内容
  const addPage = async (element: HTMLElement, isFirstPage: boolean = false) => {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
    });

    const imgData = canvas.toDataURL('image/png');
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * pageWidth) / canvas.width;

    if (!isFirstPage) {
      pdf.addPage();
    }

    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
  };

  // 封面页
  const coverPage = document.createElement('div');
  coverPage.innerHTML = `
    <div style="text-align: center; padding-top: 120px;">
      <h1 style="color: #0891B2; font-size: 48px; font-weight: bold; margin-bottom: 60px; letter-spacing: 2px;">MBTI性格测评报告</h1>
      <div style="margin: 60px 0;">
        <h2 style="font-size: 42px; font-weight: bold; margin-bottom: 20px;">${result.mbtiType} - ${profile.name}</h2>
        <p style="font-size: 24px; color: #666; margin-bottom: 40px;">${profile.nickname}</p>
        <div style="display: inline-block; padding: 12px 32px; background: rgba(8, 145, 178, 0.1); border-radius: 24px; margin-bottom: 30px;">
          <p style="font-size: 18px; color: #0891B2; margin: 0;">分类: ${getCategoryName(profile.category)}</p>
        </div>
        <p style="font-size: 16px; color: #999; margin-top: 40px;">
          测试日期: ${new Date(result.completedAt).toLocaleDateString('zh-CN')}
        </p>
      </div>
    </div>
  `;
  container.appendChild(coverPage);
  await addPage(coverPage, true);
  container.removeChild(coverPage);

  // 维度分析页
  const dimensionPage = document.createElement('div');
  let dimensionHTML = `
    <h2 style="color: #000; font-size: 32px; font-weight: bold; margin-bottom: 40px; text-align: center; border-bottom: 3px solid #0891B2; padding-bottom: 16px;">维度分析</h2>
    <div style="max-width: 600px; margin: 0 auto;">
  `;

  result.dimensions.forEach(dim => {
    dimensionHTML += `
      <div style="margin-bottom: 32px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <span style="font-size: 18px; font-weight: 600; color: #333;">${dim.dimension}</span>
          <span style="font-size: 18px; font-weight: bold; color: #0891B2;">${dim.preference} (${dim.score}%)</span>
        </div>
        <div style="width: 100%; height: 24px; background: #E6E6E6; border-radius: 12px; overflow: hidden; box-shadow: inset 0 2px 4px rgba(0,0,0,0.1);">
          <div style="width: ${dim.score}%; height: 100%; background: linear-gradient(90deg, #0891B2, #06B6D4); transition: width 0.3s ease;"></div>
        </div>
      </div>
    `;
  });

  dimensionHTML += `
    </div>
    <h3 style="color: #000; font-size: 24px; font-weight: bold; margin-top: 60px; margin-bottom: 24px; text-align: center;">性格描述</h3>
    <p style="font-size: 16px; line-height: 2; color: #333; text-align: justify; text-indent: 2em;">${profile.description}</p>
  `;

  dimensionPage.innerHTML = dimensionHTML;
  container.appendChild(dimensionPage);
  await addPage(dimensionPage);
  container.removeChild(dimensionPage);

  // 性格特征与优劣势页
  const traitsPage = document.createElement('div');
  let traitsHTML = `
    <h2 style="color: #000; font-size: 32px; font-weight: bold; margin-bottom: 30px; text-align: center; border-bottom: 3px solid #0891B2; padding-bottom: 16px;">性格特征</h2>
    <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-bottom: 60px;">
      ${profile.traits.map(trait => `
        <span style="padding: 10px 20px; background: linear-gradient(135deg, rgba(8, 145, 178, 0.15), rgba(8, 145, 178, 0.05)); color: #0891B2; border-radius: 20px; font-size: 15px; font-weight: 500; border: 1px solid rgba(8, 145, 178, 0.2);">
          ${trait}
        </span>
      `).join('')}
    </div>

    <h3 style="color: #10B981; font-size: 26px; font-weight: bold; margin-bottom: 24px; text-align: center;">✓ 优势</h3>
    <ul style="list-style: none; padding: 0; margin-bottom: 60px; max-width: 600px; margin-left: auto; margin-right: auto;">
      ${profile.strengths.map(strength => `
        <li style="padding: 14px 20px; font-size: 16px; line-height: 1.8; background: rgba(16, 185, 129, 0.05); margin-bottom: 12px; border-radius: 12px; border-left: 4px solid #10B981;">
          <span style="color: #10B981; margin-right: 12px; font-size: 18px; font-weight: bold;">✓</span>${strength}
        </li>
      `).join('')}
    </ul>

    <h3 style="color: #FF7F66; font-size: 26px; font-weight: bold; margin-bottom: 24px; text-align: center;">• 成长空间</h3>
    <ul style="list-style: none; padding: 0; max-width: 600px; margin-left: auto; margin-right: auto;">
      ${profile.weaknesses.map(weakness => `
        <li style="padding: 14px 20px; font-size: 16px; line-height: 1.8; background: rgba(255, 127, 102, 0.05); margin-bottom: 12px; border-radius: 12px; border-left: 4px solid #FF7F66;">
          <span style="color: #FF7F66; margin-right: 12px; font-size: 18px; font-weight: bold;">•</span>${weakness}
        </li>
      `).join('')}
    </ul>
  `;

  traitsPage.innerHTML = traitsHTML;
  container.appendChild(traitsPage);
  await addPage(traitsPage);
  container.removeChild(traitsPage);

  // 职业建议页
  const careerPage = document.createElement('div');
  const highCareers = profile.careers.filter(c => c.suitability === 'high');
  const mediumCareers = profile.careers.filter(c => c.suitability === 'medium');

  let careerHTML = `
    <h2 style="color: #000; font-size: 32px; font-weight: bold; margin-bottom: 40px; text-align: center; border-bottom: 3px solid #0891B2; padding-bottom: 16px;">职业建议</h2>

    <h3 style="color: #10B981; font-size: 24px; font-weight: bold; margin-bottom: 24px; text-align: center;">⭐ 高度适合</h3>
    <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center; margin-bottom: 60px;">
      ${highCareers.map(career => `
        <span style="padding: 12px 24px; background: linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(16, 185, 129, 0.05)); color: #10B981; border-radius: 12px; font-size: 16px; font-weight: 500; border: 1px solid rgba(16, 185, 129, 0.3);">
          ${career.title}
        </span>
      `).join('')}
    </div>

    <h3 style="color: #0891B2; font-size: 24px; font-weight: bold; margin-bottom: 24px; text-align: center;">⭐ 中度适合</h3>
    <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;">
      ${mediumCareers.map(career => `
        <span style="padding: 12px 24px; background: linear-gradient(135deg, rgba(8, 145, 178, 0.15), rgba(8, 145, 178, 0.05)); color: #0891B2; border-radius: 12px; font-size: 16px; font-weight: 500; border: 1px solid rgba(8, 145, 178, 0.3);">
          ${career.title}
        </span>
      `).join('')}
    </div>
  `;

  careerPage.innerHTML = careerHTML;
  container.appendChild(careerPage);
  await addPage(careerPage);
  container.removeChild(careerPage);

  // 成长建议页
  const growthPage = document.createElement('div');
  let growthHTML = `
    <h2 style="color: #000; font-size: 32px; font-weight: bold; margin-bottom: 40px; text-align: center; border-bottom: 3px solid #0891B2; padding-bottom: 16px;">个人成长建议</h2>
    <div style="max-width: 650px; margin: 0 auto;">
  `;

  profile.growthAdvice.forEach(advice => {
    const priorityColors = {
      high: { bg: 'linear-gradient(135deg, rgba(255, 127, 102, 0.15), rgba(255, 127, 102, 0.05))', color: '#FF7F66', text: '高优先级', icon: '🔥' },
      medium: { bg: 'linear-gradient(135deg, rgba(8, 145, 178, 0.15), rgba(8, 145, 178, 0.05))', color: '#0891B2', text: '中优先级', icon: '⭐' },
      low: { bg: 'linear-gradient(135deg, rgba(150, 150, 150, 0.15), rgba(150, 150, 150, 0.05))', color: '#969696', text: '低优先级', icon: '💡' },
    };

    const style = priorityColors[advice.priority];

    growthHTML += `
      <div style="margin-bottom: 24px; padding: 20px; background: ${style.bg}; border-radius: 12px; border-left: 4px solid ${style.color};">
        <div style="display: flex; align-items: center; margin-bottom: 12px;">
          <span style="font-size: 20px; margin-right: 8px;">${style.icon}</span>
          <span style="color: ${style.color}; font-weight: bold; font-size: 16px;">
            ${style.text}
          </span>
        </div>
        <p style="font-size: 15px; line-height: 1.8; color: #333; margin: 0; text-indent: 2em;">
          ${advice.advice}
        </p>
      </div>
    `;
  });

  growthHTML += `
    </div>
    <div style="text-align: center; margin-top: 60px; padding-top: 30px; border-top: 2px solid #E6E6E6;">
      <p style="font-size: 14px; color: #999; margin: 0;">MBTI Insight © 2026 · 探索你的内在性格</p>
    </div>
  `;

  growthPage.innerHTML = growthHTML;
  container.appendChild(growthPage);
  await addPage(growthPage);
  container.removeChild(growthPage);

  // 清理临时容器
  document.body.removeChild(container);

  // 保存PDF
  const fileName = `MBTI报告_${result.mbtiType}_${new Date().toLocaleDateString('zh-CN').replace(/\//g, '-')}.pdf`;
  pdf.save(fileName);
}

// 辅助函数：获取分类中文名称
function getCategoryName(category: string): string {
  const names: Record<string, string> = {
    analyst: '分析师',
    diplomat: '外交官',
    sentinel: '守护者',
    explorer: '探险家',
  };
  return names[category] || category;
}
