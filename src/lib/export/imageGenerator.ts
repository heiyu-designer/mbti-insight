import html2canvas from 'html2canvas';

/**
 * 生成分享卡片图片
 * @param elementId 要截图的元素ID
 * @returns Promise<Blob> 图片Blob对象
 */
export async function generateShareImage(elementId: string): Promise<Blob> {
  const element = document.getElementById(elementId);
  if (!element) {
    throw new Error(`Element with id "${elementId}" not found`);
  }

  const canvas = await html2canvas(element, {
    backgroundColor: '#ffffff',
    scale: 2, // 提高清晰度
    logging: false,
    useCORS: true,
  });

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Failed to generate image blob'));
        }
      },
      'image/png',
      1.0
    );
  });
}

/**
 * 下载图片
 * @param blob 图片Blob对象
 * @param filename 文件名
 */
export function downloadImage(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

/**
 * 使用Web Share API分享图片（移动端）
 * @param blob 图片Blob对象
 * @param title 分享标题
 * @param text 分享文本
 */
export async function shareImage(blob: Blob, title: string, text: string): Promise<boolean> {
  if (!navigator.share) {
    return false; // 浏览器不支持Web Share API
  }

  try {
    const file = new File([blob], 'mbti-result.png', { type: 'image/png' });
    await navigator.share({
      title,
      text,
      files: [file],
    });
    return true;
  } catch (error) {
    // 用户取消分享或发生错误
    console.error('Share failed:', error);
    return false;
  }
}

/**
 * 复制图片到剪贴板
 * @param blob 图片Blob对象
 */
export async function copyImageToClipboard(blob: Blob): Promise<boolean> {
  if (!navigator.clipboard || !ClipboardItem) {
    return false; // 浏览器不支持Clipboard API
  }

  try {
    const item = new ClipboardItem({ 'image/png': blob });
    await navigator.clipboard.write([item]);
    return true;
  } catch (error) {
    console.error('Copy to clipboard failed:', error);
    return false;
  }
}
