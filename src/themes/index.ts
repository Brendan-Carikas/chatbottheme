export * from './types';
export * from './modern';
export * from './whimsical';
export * from './bot';

// Re-export the themes object for easy access
import { modernTheme } from './modern';
import { whimsicalTheme } from './whimsical';
import { botTheme } from './bot';

export const themes = {
  modern: modernTheme,
  whimsical: whimsicalTheme,
  bot: botTheme,
} as const;

export type ThemeName = keyof typeof themes;
