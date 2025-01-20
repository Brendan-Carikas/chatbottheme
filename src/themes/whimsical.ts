import { type Theme } from './types';

export const whimsicalTheme: Theme = {
  name: 'whimsical',
  logo: '/logo2.png', // Logo shown in chat header
  colors: {
    primary: '181 100% 26%', // User message bubbles, send button
    background: '174 57% 90%', // Chat dialog background
    foreground: '0 0% 0%', // Main text color
    card: '0 0% 100%', // Chat dialog card background
    cardForeground: '0 0% 0%', // Text color in chat dialog card
    popover: '0 0% 100%', // Dropdown menus background
    popoverForeground: '0 0% 0%', // Text in dropdown menus
    muted: '60 50% 96%', // 
    mutedForeground: '0 0% 0%', // 
  },
  fonts: {
    sans: ['Quicksand', 'sans-serif'], // Main chat font
  },
  borderRadius: {
    userMessage: '20px 20px 4px 20px', // User message bubble corners
    botMessage: '20px 20px 20px 4px', // Bot message bubble corners
    input: '12px', // Chat input field corners
    button: '12px', // Send button corners
  },
  messageStyles: {
    maxWidth: '70%', // Maximum width of message bubbles
    padding: '16px', // Padding inside message bubbles
    shadow: 'none', // No shadow on message bubbles
    fontSize: {
      message: 'sm', // Message text size
      timestamp: 'xs' // Timestamp text size
    }
  },
  buttonStyles: {
    primary: {
      background: 'bg-primary', // Send button background
      hover: 'hover:bg-primary/80', // Send button hover effect
      text: 'text-white', // Send button text color
    },
    ghost: {
      background: 'bg-primary/10', // Secondary buttons background
      hover: 'hover:bg-primary/20', // Secondary buttons hover effect
      text: 'text-primary', // Secondary buttons text color
    },
  },
};
