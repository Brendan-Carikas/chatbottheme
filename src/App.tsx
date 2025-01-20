import { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { TooltipProvider } from './components/ui/tooltip';
import { Toaster } from './components/ui/toaster';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import ChatDialog from './components/ChatDialog';

const queryClient = new QueryClient();

const App = () => {
  const [isChatOpen, setIsChatOpen] = useState(true);

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <ThemeSwitcher />
          <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
            <div className="fixed bottom-6 right-6 w-[400px] z-50">
              <ChatDialog onClose={() => setIsChatOpen(false)} />
            </div>
          </div>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
