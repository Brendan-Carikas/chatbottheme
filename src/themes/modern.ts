import { type Theme } from './types';

export const modernTheme: Theme = {
  name: 'modern',
  logo: '/chatbottheme/logo1.png', // Logo shown in chat header
  colors: {
    primary: '242 65% 24%', // User message bubbles, send button
    background: 'hsl(0 0% 100%)', // Chat dialog background
    foreground: 'hsl(222.2 84% 4.9%)', // Main text color
    card: 'hsl(0 0% 100%)', // Chat dialog card background
    cardForeground: '222.2 84% 4.9%', // Text color in chat dialog card
    popover: '0 0% 100%', // Dropdown menus background
    popoverForeground: '222.2 84% 4.9%', // Text in dropdown menus
    secondary: '0 0% 92%', // Bot message bubbles background (#e0e0e0)
    secondaryForeground: '222.2 47.4% 11.2%', // Bot message text color
    muted: '210 40% 96.1%', // Timestamps, secondary text
    mutedForeground: '215.4 16.3% 46.9%', // Timestamp text color
  },
  fonts: {
    sans: ['Libre Franklin', 'sans-serif'], // Main chat font
  },
  borderRadius: {
    userMessage: '4px 4px 4px 0px', // User message bubble corners
    botMessage: '4px 4px 0px 4px', // Bot message bubble corners
    input: '6px', // Chat input field corners
    button: '6px', // Send button corners
  },
  messageStyles: {
    maxWidth: '80%', // Maximum width of message bubbles
    padding: '12px', // Padding inside message bubbles
    fontSize: {
      message: 'sm', // Message text size
      timestamp: 'xs' // Timestamp text size
    }
  },
  buttonStyles: {
    primary: {
      background: 'bg-primary', // Send button background
      hover: 'hover:bg-primary/90', // Send button hover effect
      text: 'text-primary-foreground', // Send button text color
    },
    ghost: {
      background: 'bg-transparent', // Secondary buttons background
      hover: 'hover:bg-primary/10', // Secondary buttons hover effect
      text: 'text-primary', // Secondary buttons text color
    },
  },
};
