export interface ThemeColors {
  background: string;
  surface: string;
  surfaceMuted: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  primary: string;
  primaryPressed: string;
  onPrimary: string;
  success: string;
  warning: string;
  danger: string;
}

export const lightColors: ThemeColors = {
  background: '#F6F7F9',
  surface: '#FFFFFF',
  surfaceMuted: '#EEF1F4',
  textPrimary: '#0F172A',
  textSecondary: '#64748B',
  border: '#E2E8F0',
  primary: '#0E7A5F',
  primaryPressed: '#0A5C47',
  onPrimary: '#FFFFFF',
  success: '#16A34A',
  warning: '#D97706',
  danger: '#DC2626',
};

export const darkColors: ThemeColors = {
  background: '#0C1117',
  surface: '#151C24',
  surfaceMuted: '#1D2630',
  textPrimary: '#F1F5F9',
  textSecondary: '#94A3B8',
  border: '#273240',
  primary: '#2FBF9A',
  primaryPressed: '#57CFAF',
  onPrimary: '#06281F',
  success: '#4ADE80',
  warning: '#FBBF24',
  danger: '#F87171',
};
