import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { TooltipProvider } from './components/ui/tooltip';
import { Toaster } from './components/ui/toaster';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Index from './pages/Index';
import Spec from './pages/Spec';
import { cn } from '@/lib/utils';

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const showThemeSwitcher = location.pathname !== '/spec';
  const isSpecPage = location.pathname === '/spec';

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          {showThemeSwitcher && <ThemeSwitcher />}
          <div className={cn(
            "min-h-screen",
            isSpecPage ? "bg-background" : "bg-gradient-to-b from-blue-50 to-white"
          )}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/spec" element={<Spec />} />
            </Routes>
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <Router basename="/chatbottheme">
      <AppContent />
    </Router>
  );
};

export default App;
