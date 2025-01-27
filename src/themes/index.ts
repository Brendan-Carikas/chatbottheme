export * from './types';
export * from './modern';
export * from './whimsical';
export * from './bot';
export * from './artotheme';
export * from './voobottheme';

// Re-export the themes object for easy access
import { modernTheme } from './modern';
import { whimsicalTheme } from './whimsical';
import { botTheme } from './bot';
import { artotheme } from './artotheme';
import { voobottheme } from './voobottheme';

export const themes = {
  modern: modernTheme,
  whimsical: whimsicalTheme,
  bot: botTheme,
  artotheme: artotheme,
  voobottheme: voobottheme,
} as const;

export type ThemeName = keyof typeof themes;
