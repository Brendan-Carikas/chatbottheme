import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { TooltipProvider } from './components/ui/tooltip';
import { Toaster } from './components/ui/toaster';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Index from './pages/Index';
import Spec from './pages/Spec';
import Voobot from './pages/Voobot';
import { cn } from '@/lib/utils';

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  
  // Only show theme switcher on the index page
  const showThemeSwitcher = location.pathname === '/' || location.pathname === '/chatbottheme/';
  const isSpecPage = location.pathname === '/spec';
  const isVoobotPage = location.pathname === '/voobot';

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          {showThemeSwitcher && <ThemeSwitcher />}
          <div className={cn(
            "min-h-screen",
            isSpecPage ? "bg-background" : 
            isVoobotPage ? "bg-white" :
            "bg-gradient-to-b from-blue-50 to-white"
          )}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/spec" element={<Spec />} />
              <Route path="/voobot" element={<Voobot />} />
            </Routes>
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
