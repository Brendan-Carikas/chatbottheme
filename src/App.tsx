import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { TooltipProvider } from './components/ui/tooltip';
import { Toaster } from './components/ui/toaster';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import Index from './pages/Index';

const queryClient = new QueryClient();

const App = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <ThemeSwitcher />
          <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <Index />
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
