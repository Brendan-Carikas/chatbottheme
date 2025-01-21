export interface Theme {
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
    border: string;
    focusRing: string; // Color for focus indicators
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
    fontSize: {
      message: string;
      timestamp: string;
    };
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
