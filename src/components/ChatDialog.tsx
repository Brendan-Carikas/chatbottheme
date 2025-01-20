import React, { useState } from 'react';
import { X, Minus, Send, ThumbsUp, ThumbsDown, Check, Palette } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Textarea } from './ui/textarea';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { cn } from '@/lib/utils';
import { useTheme } from '@/contexts/ThemeContext';
import { themes } from '@/themes';
import SmartToyIcon from '@mui/icons-material/SmartToy';

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
  const [isMinimized, setIsMinimized] = useState(false);
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

  return (
    <Card
      className={cn(
        "fixed bottom-4 right-4 w-full max-w-md shadow-lg transition-all duration-300",
        isMinimized ? "h-16" : "h-[600px]"
      )}
    >
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between rounded-t-lg">
        <div className="flex items-center gap-3">
          <div className="h-[44px] w-auto">
            <img 
              src={themes[theme].logo}
              alt="Logo" 
              className="h-full w-auto object-contain"
            />
          </div>
          <div></div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="hover:bg-primary-foreground/10"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            <Minus className="h-4 w-4" />
          </Button>
          {onClose && (
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary-foreground/10"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      {/* Chat Content */}
      {!isMinimized && (
        <div className="flex flex-col h-[calc(100%-4rem)]">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex flex-col space-y-1",
                  message.sender === 'user' ? "ml-auto" : "mr-auto",
                  `max-w-[${currentTheme.messageStyles.maxWidth}]`
                )}
              >
                <div className={cn(
                  "flex items-end gap-2",
                  message.sender === 'user' ? "justify-end" : "justify-start",
                  "w-full"
                )}>
                  {message.sender === 'bot' && currentTheme.name === 'bot' && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-1">
                      <SmartToyIcon className="text-primary w-5 h-5" />
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
                  message.sender === 'bot' && currentTheme.name === 'bot' ? "pl-10" : ""
                )}>
                  <span className={cn(
                    "text-muted-foreground",
                    `text-${currentTheme.messageStyles.fontSize.timestamp}`
                  )}>
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                  {message.sender === 'bot' && !message.feedback && (
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => handleFeedback(message.id, true)}
                      >
                        <ThumbsUp className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-6 w-6"
                        onClick={() => handleFeedback(message.id, false)}
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
                              className="min-h-[60px] text-sm"
                              rows={2}
                            />
                            <Button
                              onClick={() => handleFeedbackSubmit(message.id)}
                              size="icon"
                              className="h-8 w-8 self-end"
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
                }}
                className="min-h-[44px] flex-1 resize-none py-3 leading-[1.15]"
                rows={1}
              />
              <Button onClick={handleSendMessage}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-secondary-foreground mt-2 py-2 pt-4">
              Your use of this chatbot is governed by this disclaimer.
            </p>
          </div>
        </div>
      )}
    </Card>
  );
};

export default ChatDialog;