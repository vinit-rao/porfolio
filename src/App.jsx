import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import DynamicBackground from './components/DynamicBackground';
import ScrollToTop from './components/ScrollToTop';
import CommandPalette from './components/CommandPalette';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load the pages so each route only downloads its own code
const Home = lazy(() => import('./pages/Home'));
const ProjectsArchive = lazy(() => import('./pages/ProjectsArchive'));
const Resume = lazy(() => import('./pages/Resume'));
const Contact = lazy(() => import('./pages/Contact'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));
const BennysProject = lazy(() => import('./pages/projects/BennysProject'));

function App() {
  return (
    <ThemeProvider>
      <Router>
        {/* Global chrome — rendered once, persists across route changes */}
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <DynamicBackground />
        <ScrollToTop />
        <CommandPalette />

        {/* The fallback shows while the next page's code downloads (usually milliseconds) */}
        <Suspense fallback={<div style={{ height: '100vh', background: 'var(--bg-main)' }}></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsArchive />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project/:slug" element={<ProjectDetail />} />
            <Route path="/bennys-adventure" element={<BennysProject />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
