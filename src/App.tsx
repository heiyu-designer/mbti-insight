import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TestProvider } from './contexts/TestContext';
import Home from './pages/Home';
import Test from './pages/Test';
import Result from './pages/Result';
import TestPage from './pages/TestPage';
import TestDebug from './pages/TestDebug';
import './index.css';

function App() {
  return (
    <TestProvider>
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/test/:level" element={<Test />} />
            <Route path="/result" element={<Result />} />
            <Route path="/test-core" element={<TestPage />} />
            <Route path="/test-debug/:level" element={<TestDebug />} />
          </Routes>
        </div>
      </Router>
    </TestProvider>
  );
}

export default App;
