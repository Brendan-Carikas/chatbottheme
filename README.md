# ArtoChat Theme System

A modern, customizable chat interface built with React, TypeScript, and Tailwind CSS. 
View spec version: https://brendan-carikas.github.io/chatbottheme/#/spec

View the live demo at [https://brendan-carikas.github.io/chatbottheme/](https://brendan-carikas.github.io/chatbottheme/)

## Features

### Functional Requirements

- **Theme Switching**: Dynamic theme switching with persistent user preferences
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Message Types**: Support for user and bot messages with different styling
- **Customizable Components**: Modular components that can be styled through themes
- **Input System**: Text input with send button and keyboard shortcuts
- **Accessibility**: ARIA labels and keyboard navigation support

### Non-Functional Requirements

- **Performance**: Fast theme switching with no visible lag
- **Maintainability**: Modular code structure with clear separation of concerns
- **Scalability**: Easy to add new themes and components
- **Browser Support**: Works on modern browsers (Chrome, Firefox, Safari, Edge)
- **Code Quality**: TypeScript for type safety and better developer experience

## Theme System

### Available Themes

1. **Modern Theme**
   - Clean, professional design
   - Primary Color: HSL(242, 65%, 24%)
   - Secondary Color: HSL(0, 0%, 92%)
   - Rounded corners and subtle shadows

2. **Bot Theme**
   - Playful, AI-focused design
   - Primary Color: HSL(242, 65%, 24%)
   - Secondary Color: HSL(174, 57%, 90%)
   - Larger border radius for message bubbles

3. **Whimsical Theme**
   - Fun, casual design
   - Primary Color: HSL(181, 100%, 26%)
   - Secondary Color: HSL(174, 57%, 90%)
   - Unique message bubble shapes

### Theme Properties

- **colors**: HSL color system for consistent styling
- **fonts**: Configurable font families
- **borderRadius**: Customizable border radius for various components
- **messageStyles**: Message-specific styling options
- **buttonStyles**: Button appearance configuration

## Components

### Core Components

1. **ChatDialog**
   - Main chat interface container
   - Handles message display and input
   - Supports theme context

2. **ThemeSwitcher**
   - Theme selection dropdown
   - Persists user preferences
   - Real-time theme preview

### UI Components

- **Button**: Customizable button with various states
- **Input**: Text input field with focus states
- **Card**: Container for chat interface
- **Avatar**: User and bot avatars
- **Icons**: Lucide React icons integration

## Getting Started

1. **Installation**
   ```bash
   npm install
   ```

2. **Development**
   ```bash
   npm run dev
   ```

3. **Build**
   ```bash
   npm run build
   ```

## Customization

### Adding a New Theme

1. Create a new theme file in `src/themes/`
2. Implement the `Theme` interface
3. Add the theme to `src/themes/index.ts`
4. Theme will be automatically available in the switcher

### Modifying Existing Themes

- Edit color values in HSL format
- Adjust border radius and padding
- Customize message bubble appearance
- Configure button styles

## Technical Stack

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **State Management**: React Context
- **Package Manager**: npm

## Contributing

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## License

MIT License - See LICENSE file for moredetails
