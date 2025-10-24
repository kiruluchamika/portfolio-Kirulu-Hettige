import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import { motion, AnimatePresence } from 'framer-motion';
import MouseTrail from './components/MouseTrail';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen relative overflow-hidden">
          {/* Animated Background with Gradient Orbs */}
          <div className="fixed inset-0 z-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-50 dark:from-black dark:via-blue-950 dark:to-indigo-950 transition-colors duration-500" />
          
          {/* Animated Floating Orbs */}
          <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Large Blue Orb */}
            <div className="absolute top-20 -left-20 w-96 h-96 bg-blue-400/30 dark:bg-blue-500/20 rounded-full blur-3xl animate-float" />
            
            {/* Cyan Orb */}
            <div className="absolute top-1/3 right-10 w-80 h-80 bg-cyan-400/30 dark:bg-cyan-500/20 rounded-full blur-3xl animate-float-delayed" />
            
            {/* Indigo Orb */}
            <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-indigo-400/30 dark:bg-indigo-500/20 rounded-full blur-3xl animate-float-slow" />
            
            {/* Purple Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-400/20 dark:bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow" />
            
            {/* Small Accent Orbs */}
            <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-blue-300/40 dark:bg-blue-400/25 rounded-full blur-2xl animate-float-reverse" />
            <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-cyan-300/40 dark:bg-cyan-400/25 rounded-full blur-2xl animate-float" />
          </div>
          
          {/* Gradient Mesh Overlay */}
          <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-transparent via-blue-100/20 to-transparent dark:via-blue-900/10 pointer-events-none" />

          {/* Mouse particle trail (non-interactive overlay) */}
          <MouseTrail />
          
          {/* Content */}
          <div className="relative z-10">
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="/skills" element={<PageWrapper><Skills /></PageWrapper>} />
                <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
              </Routes>
            </AnimatePresence>
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default App;
