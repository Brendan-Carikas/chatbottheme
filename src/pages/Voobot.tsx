import { useState } from 'react';
import { Button } from "@/components/ui/button";
import ChatDialog from '@/components/ChatDialog';

const Voobot = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleClose = () => {
    setIsChatOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Chat Dialog */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 w-full max-w-[448px]">
          <ChatDialog onClose={handleClose} theme="voobottheme" />
        </div>
      )}

      {/* FAB Button */}
      {!isChatOpen && (
        <div className="fixed bottom-4 right-4">
          <Button
            onClick={() => setIsChatOpen(true)}
            className="rounded-full w-12 h-12 md:w-[56px] md:h-[56px] bg-black hover:bg-black/80 p-0 flex items-center justify-center"
            size="icon"
          >
            <img 
              src="/chatbottheme/AI-SparkIcon.png"
              alt="Chat"
              className="h-4 w-4 md:h-5 md:w-5"
            />
          </Button>
        </div>
      )}
    </div>
  );
};

export default Voobot;