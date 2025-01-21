import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import ChatDialog from '@/components/ChatDialog';
import { useContext } from 'react';

const Spec = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Debug logs for state changes
  useEffect(() => {
    console.log('Chat dialog state changed:', { isChatOpen });
  }, [isChatOpen]);

  const handleClose = () => {
    console.log('Attempting to close chat dialog');
    setIsChatOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="max-w-4xl mx-auto">
        {/* Chat Dialog Container */}
        <div className={`fixed bottom-4 right-4 z-50 min-w-[448px] ${isChatOpen ? 'block' : 'hidden'}`}>
          <ChatDialog onClose={handleClose} theme="artotheme" />
        </div>

        {/* FAB Button */}
        <div className={`fixed bottom-4 right-4 z-50 ${isChatOpen ? 'hidden' : 'block'}`}>
          <Button
            onClick={() => {
              console.log('Opening chat dialog');
              setIsChatOpen(true);
            }}
            className="rounded-full w-12 h-12 md:w-14 md:h-14 p-0 flex items-center justify-center"
            size="icon"
          >
            <img 
              src="/chatbottheme/Arto-icon-Reverse.svg"
              alt="Chat"
              className="h-6 w-6 md:h-9 md:w-9"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Spec;
