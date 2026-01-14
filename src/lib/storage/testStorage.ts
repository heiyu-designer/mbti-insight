import type { TestSession } from '@/types/test';

const STORAGE_KEY = 'mbti_test_session';
const STORAGE_VERSION = 1;

interface StorageData {
  version: number;
  data: TestSession;
}

/**
 * 保存测试进度到localStorage
 */
export function saveTestSession(session: TestSession): void {
  const data: StorageData = {
    version: STORAGE_VERSION,
    data: {
      ...session,
      lastSaveTime: Date.now(),
    },
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

/**
 * 从localStorage加载测试进度
 */
export function loadTestSession(): TestSession | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;

    const data = JSON.parse(stored) as StorageData;

    // 检查版本号
    if (data.version !== STORAGE_VERSION) {
      clearTestSession();
      return null;
    }

    // 检查是否过期（24小时）
    const elapsed = Date.now() - data.data.lastSaveTime;
    const EXPIRY_TIME = 24 * 60 * 60 * 1000; // 24小时

    if (elapsed > EXPIRY_TIME) {
      clearTestSession();
      return null;
    }

    return data.data;
  } catch (error) {
    console.error('加载测试进度失败:', error);
    clearTestSession();
    return null;
  }
}

/**
 * 清除测试进度
 */
export function clearTestSession(): void {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * 检查是否有未完成的测试
 */
export function hasUnfinishedTest(): boolean {
  const session = loadTestSession();
  return session !== null && !session.completed;
}
