# ArtoChat Product Specification

## Overview
ArtoChat is a modern, themeable chat interface built with React, TypeScript, and Tailwind CSS. It provides a customizable chat experience with multiple themes and a focus on user feedback and interaction.

## Functional Specifications

### Core Chat Functionality
- Real-time message display with user and bot messages
- Message input with support for:
  - Multi-line text input
  - Enter to send (Shift+Enter for new line)
  - Character limit handling
- Loading state indication with animated dots
- Timestamp display for each message
- Message persistence across sessions

### User Feedback System
- Thumbs up/down feedback buttons on bot messages
- Feedback form for negative responses
- Feedback submission with text input
- Confirmation display after feedback submission

### Theme Management
- Theme switching via dropdown menu
- Persistent theme selection
- Real-time theme application without page reload

## Non-Functional Specifications

### Performance
- Initial load time < 2 seconds
- Message response time < 100ms
- Smooth animations (60fps)
- Efficient DOM updates using React

### Accessibility
- ARIA labels for interactive elements
- Keyboard navigation support
- High contrast ratios for text
- Screen reader compatibility

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile devices
- Minimum viewport width: 320px

### Security
- Input sanitization
- XSS protection
- No sensitive data exposure

## Theme System

### Theme Structure
```typescript
interface Theme {
  name: string;
  logo: string;
  colors: {
    primary: string;
    background: string;
    foreground: string;
    card: string;
    cardForeground: string;
    popover: string;
    popoverForeground: string;
    secondary: string;
    secondaryForeground: string;
  };
  fonts: {
    sans: string[];
  };
  borderRadius: {
    userMessage: string;
    botMessage: string;
    input: string;
    button: string;
  };
  messageStyles: {
    maxWidth: string;
    padding: string;
    shadow: string;
  };
  buttonStyles: {
    primary: {
      background: string;
      hover: string;
      text: string;
    };
    ghost: {
      background: string;
      hover: string;
      text: string;
    };
  };
}
```

### Available Themes

#### Modern Theme
- Clean, professional appearance
- Navy blue primary color
- Square corners
- Libre Franklin font
- Subtle shadows
- Standard padding (24px)

#### Whimsical Theme
- Playful, friendly appearance
- Teal primary color
- Rounded corners
- Quicksand font
- No shadows
- Comfortable padding (16px)

#### Bot Theme
- Similar to Whimsical but with bot avatar
- Robot icon for bot messages
- Rounded message bubbles
- Teal color scheme
- Quicksand font

## Component Architecture

### Core Components

#### ChatDialog
- Main chat interface container
- Manages message state and interactions
- Handles message submission
- Implements feedback system
- Props:
  - `onClose?: () => void`

#### Message Display
- Renders individual messages
- Supports user and bot message styles
- Includes timestamp and feedback buttons
- Handles message alignment and spacing

#### Input Area
- Multi-line text input
- Send button
- Character limit display
- Enter key handling

#### Feedback System
- Thumbs up/down buttons
- Feedback form for negative responses
- Submit button for feedback
- Success confirmation display

### UI Components

#### Button
- Variants: primary, ghost
- Sizes: default, icon
- States: hover, active, disabled

#### Textarea
- Auto-expanding
- Character limit
- Focus styles
- Placeholder text

#### Icons
- Lucide React icons
- Material UI icons (for bot avatar)
- Consistent sizing
- Color inheritance

## State Management
- React Context for theme
- Local state for messages
- Local storage for theme persistence
- Query client for API interactions

## Styling System
- Tailwind CSS for utility classes
- CSS variables for theme values
- CSS modules for component styles
- Dynamic class composition with `cn` utility

## Future Considerations
1. Additional themes
2. Message search functionality
3. File attachment support
4. Voice input/output
5. Internationalization
6. Message grouping by time
7. Rich text formatting
8. Custom avatar upload
