import { type Theme } from './types';

export const voobottheme: Theme = {
  name: 'voobottheme',
  logo: '/chatbottheme/vooba-logo.png', // Logo shown in chat header
  colors: {
    primary: '0 0% 0%', // Black
    'primary-foreground': '0 0% 100%', // White
    secondary: '0 0% 96.1%',
    'secondary-foreground': '0 0% 9%',
    background: '0 0% 100%', // White
    foreground: '0 0% 3.9%',
    muted: '0 0% 96.1%',
    'muted-foreground': '0 0% 45.1%',
    accent: '0 0% 96.1%',
    'accent-foreground': '0 0% 9%',
    destructive: '0 84.2% 60.2%',
    'destructive-foreground': '0 0% 98%',
    border: '0 0% 89.8%',
    input: '0 0% 89.8%',
    ring: '0 0% 3.9%',
  },
  fonts: {
    sans: ['Inter', 'sans-serif'], // Modern, clean font
  },
  borderRadius: {
    userMessage: '16px', // Consistent, modern border radius
    botMessage: '16px',
    input: '12px',
    button: '12px',
  },
  messageStyles: {
    maxWidth: '70%',
    padding: '14px',
    shadow: 'sm', // Subtle shadow for depth
    fontSize: {
      message: 'sm',
      timestamp: 'xs'
    },
    showFeedback: false,
    hideAssistantInfo: true
  },
  buttonStyles: {
    primary: {
      background: 'bg-black',
      hover: 'hover:bg-black/80',
      text: 'text-white',
    },
    ghost: {
      background: 'bg-black/5',
      hover: 'hover:bg-black/10',
      text: 'text-black',
    },
  },
};
