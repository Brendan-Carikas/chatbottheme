export * from './types';
export * from './modern';
export * from './whimsical';
export * from './bot';
export * from './artotheme';

// Re-export the themes object for easy access
import { modernTheme } from './modern';
import { whimsicalTheme } from './whimsical';
import { botTheme } from './bot';
import { artotheme } from './artotheme';

export const themes = {
  modern: modernTheme,
  whimsical: whimsicalTheme,
  bot: botTheme,
  artotheme: artotheme,
} as const;

export type ThemeName = keyof typeof themes;
