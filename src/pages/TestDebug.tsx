import { useParams } from 'react-router-dom';

export default function TestDebug() {
  const { level } = useParams();

  const handleClick = () => {
    console.log('Button clicked!');
    alert('按钮可以点击！');
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-2xl mx-auto space-y-4">
        <h1 className="text-2xl font-bold">调试页面</h1>
        <p>Level: {level}</p>

        <button
          onClick={handleClick}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          测试按钮
        </button>

        <button
          onClick={() => console.log('Arrow function works')}
          className="px-4 py-2 bg-green-500 text-white rounded block"
        >
          测试箭头函数
        </button>
      </div>
    </div>
  );
}
