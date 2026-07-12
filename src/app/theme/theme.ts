import { darkColors, lightColors, type ThemeColors } from './colors';
import { motion } from './motion';
import { radius } from './radius';
import { shadows } from './shadows';
import { spacing } from './spacing';
import { typography } from './typography';

export interface Theme {
  scheme: 'light' | 'dark';
  colors: ThemeColors;
  typography: typeof typography;
  spacing: typeof spacing;
  radius: typeof radius;
  shadows: typeof shadows;
  motion: typeof motion;
}

export const lightTheme: Theme = {
  scheme: 'light',
  colors: lightColors,
  typography,
  spacing,
  radius,
  shadows,
  motion,
};

export const darkTheme: Theme = {
  ...lightTheme,
  scheme: 'dark',
  colors: darkColors,
};
