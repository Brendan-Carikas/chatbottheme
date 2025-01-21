import React, { useState } from 'react';
import { X, Send, ThumbsUp, ThumbsDown, Check, Palette } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Textarea } from './ui/textarea';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';
import { themes } from '@/themes';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import AssistantIcon from '@mui/icons-material/Assistant';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface ChatDialogProps {
  onClose?: () => void;
}

const LoadingDots = () => {
  return (
    <div className="flex space-x-1 h-3">
      <div className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-[bounce_1.4s_infinite_0.2s]" />
      <div className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-[bounce_1.4s_infinite_0.4s]" />
      <div className="w-2 h-2 bg-muted-foreground/40 rounded-full animate-[bounce_1.4s_infinite_0.6s]" />
    </div>
  );
};

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  feedback?: {
    isPositive?: boolean;
    reason?: string;
    submitted?: boolean;
  };
}

const ChatDialog = ({ onClose }: ChatDialogProps) => {
  const { theme } = useTheme();
  const currentTheme = themes[theme];
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi, I am Arto how can help?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackText, setFeedbackText] = useState<{ [key: string]: string }>({});

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Thank you for your message. I understand your query and I will help you with that.',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleFeedback = (messageId: string, isPositive: boolean) => {
    setMessages((prev) =>
      prev.map((message) => {
        if (message.id === messageId) {
          return {
            ...message,
            feedback: {
              ...message.feedback,
              isPositive,
            },
          };
        }
        return message;
      })
    );
  };

  const handleFeedbackText = (messageId: string, reason: string) => {
    setMessages((prev) =>
      prev.map((message) => {
        if (message.id === messageId) {
          return {
            ...message,
            feedback: {
              ...message.feedback,
              reason,
            },
          };
        }
        return message;
      })
    );
  };

  const handleFeedbackSubmit = (messageId: string) => {
    setMessages((prev) =>
      prev.map((message) => {
        if (message.id === messageId) {
          return {
            ...message,
            feedback: {
              ...message.feedback,
              submitted: true,
            },
          };
        }
        return message;
      })
    );
  };

  const handleClose = () => {
    console.log('ChatDialog: Close button clicked');
    if (onClose) {
      console.log('ChatDialog: Calling onClose callback');
      onClose();
    } else {
      console.log('ChatDialog: No onClose callback provided');
    }
  };

  return (
    <Card className="h-[600px] w-full max-w-full sm:max-w-[448px] flex flex-col overflow-hidden border border-[#E5E7EB] shadow-[0_4px_12px_0_rgba(0,0,0,0.12)]" role="dialog" aria-label="Chat Dialog">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="h-[56px] w-auto">
            <img 
              src={themes[theme].logo}
              alt="Logo" 
              className="h-full w-auto"
            />
          </div>
        </div>
        {onClose && (
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary-foreground/10 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            onClick={onClose}
            aria-label="Close chat"
            tabIndex={1}
          >
            <X className="h-[1.4rem] w-[1.4rem]" />
          </Button>
        )}
      </div>

      {/* Assistant Label */}
      <div className="flex items-center gap-2 px-4 py-2 bg-secondary/30">
        <AssistantIcon className="h-[17.5px] w-[17.5px] text-primary" sx={{ stroke: 'none' }} />
        <span className="text-xs">AI Assistant</span>
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <button 
                className="p-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
                aria-label="Information about AI Assistant"
                tabIndex={2}
              >
                <InfoOutlinedIcon className="h-4 w-4 text-primary" sx={{ fontSize: 16 }} />
              </button>
            </TooltipTrigger>
            <TooltipContent side="bottom" align="start" className="text-xs max-w-[280px]">
              <div className="flex gap-2 items-start">
                <InfoOutlinedIcon className="h-4 w-4 shrink-0" sx={{ fontSize: 16 }} />
                <span>
                  These answers are generated using artificial intelligence. This is an experimental technology, and information may occasionally be incorrect or misleading.
                </span>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* Chat Content */}
      <div className="flex flex-col h-[calc(100%-4rem)]">
        <div 
          className="flex-1 overflow-y-auto p-4 space-y-4"
          role="log"
          aria-label="Chat messages"
          tabIndex={0}
        >
          {messages.map((message, index) => (
            <div
              key={message.id}
              className={cn(
                "flex flex-col space-y-1",
                message.sender === 'user' ? "ml-auto" : "mr-auto",
                `max-w-[${currentTheme.messageStyles.maxWidth}]`
              )}
              role="article"
              aria-label={`${message.sender} message`}
            >
              <div className={cn(
                "flex items-end gap-2",
                message.sender === 'user' ? "justify-end" : "justify-start",
                "w-full"
              )}>
                {message.sender === 'bot' && currentTheme.name === 'bot' && (
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <img 
                      src="/chatbottheme/Arto-icon.svg"
                      alt="Bot"
                      className="h-5 w-5"
                    />
                  </div>
                )}
                <div
                  className={cn(
                    "whitespace-pre-wrap break-words",
                    message.sender === 'user'
                      ? `bg-primary text-primary-foreground rounded-[${currentTheme.borderRadius.userMessage}]`
                      : `bg-secondary rounded-[${currentTheme.borderRadius.botMessage}]`,
                    `p-[${currentTheme.messageStyles.padding}]`,
                    `shadow-${currentTheme.messageStyles.shadow}`,
                    `text-${currentTheme.messageStyles.fontSize.message}`,
                    "max-w-full"
                  )}
                  style={{ 
                    wordBreak: 'break-word',
                    padding: currentTheme.messageStyles.padding,
                    maxWidth: currentTheme.messageStyles.maxWidth,
                    borderRadius: message.sender === 'user' 
                      ? currentTheme.borderRadius.userMessage 
                      : currentTheme.borderRadius.botMessage
                  }}
                >
                  {message.text}
                </div>
              </div>
              <div className={cn(
                "flex items-center gap-2",
                message.sender === 'user' ? "justify-end" : "justify-start",
              )}>
                <span className={cn(
                  "text-muted-foreground",
                  `text-${currentTheme.messageStyles.fontSize.timestamp}`
                )}>
                  {message.timestamp.toLocaleTimeString()}
                </span>
                {message.sender === 'bot' && !message.feedback && (
                  <div className="flex gap-1" role="group" aria-label="Message feedback">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      onClick={() => handleFeedback(message.id, true)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleFeedback(message.id, true);
                        }
                      }}
                      tabIndex={3 + (index * 2)}
                      aria-label="Positive feedback"
                    >
                      <ThumbsUp className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                      onClick={() => handleFeedback(message.id, false)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleFeedback(message.id, false);
                        }
                      }}
                      tabIndex={4 + (index * 2)}
                      aria-label="Negative feedback"
                    >
                      <ThumbsDown className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
              {message.sender === 'bot' &&
                message.feedback &&
                message.feedback.isPositive === false && (
                  <div className="w-full mt-2">
                    {!message.feedback.submitted ? (
                      <>
                        <div className="flex gap-2">
                          <Textarea
                            placeholder="What was wrong with this response?"
                            value={message.feedback.reason || ''}
                            onChange={(e) => handleFeedbackText(message.id, e.target.value)}
                            className={cn(
                              "min-h-[60px] text-sm",
                              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            )}
                            rows={2}
                          />
                          <Button
                            onClick={() => handleFeedbackSubmit(message.id)}
                            size="icon"
                            className="h-8 w-8 self-end focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-width-2"
                            disabled={!message.feedback.reason}
                          >
                            <Send className="h-4 w-4" />
                          </Button>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4" />
                        Thank you for your feedback
                      </div>
                    )}
                  </div>
                )}
            </div>
          ))}
          {isLoading && (
            <div className="flex flex-col max-w-[80%] mr-auto items-start space-y-1">
              <div className="px-4 py-2 bg-muted rounded-[12px_12px_12px_0px]">
                <LoadingDots />
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Textarea
              placeholder="Ask a question..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
                if (e.key === 'Escape') {
                  onClose?.();
                }
              }}
              className={cn(
                "min-h-[34px] flex-1 resize-none py-3 leading-[1.4] mb-0",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
              )}
              rows={1}
              aria-label="Chat input"
              tabIndex={messages.length * 2 + 3}
            />
            <Button 
              onClick={handleSendMessage}
              aria-label="Send message"
              className="focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              tabIndex={messages.length * 2 + 4}
              disabled={!inputMessage.trim()}
            >
              <Send className={cn(
                "h-8 w-8",
                !inputMessage.trim() && "opacity-50"
              )} />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ChatDialog;