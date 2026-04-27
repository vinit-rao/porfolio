import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';

// 1. Lazy load the pages instead of standard imports
const Home = lazy(() => import('./pages/Home'));
const ProjectsArchive = lazy(() => import('./pages/ProjectsArchive'));
const Resume = lazy(() => import('./pages/Resume'));
const Contact = lazy(() => import('./pages/Contact'));
const BennysProject = lazy(() => import('./pages/projects/BennysProject'));

function App() {
  return (
    <Router>
      <Navbar />
      {/* 2. Wrap Routes in Suspense. The fallback shows while the next page's code downloads (usually milliseconds) */}
      <Suspense fallback={<div style={{ height: '100vh', background: '#0a0a0c' }}></div>}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsArchive />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bennys-adventure" element={<BennysProject />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;