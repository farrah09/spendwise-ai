export interface ThemeColors {
  background: string;
  surface: string;
  surfaceMuted: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  primary: string;
  primaryPressed: string;
  primarySoft: string;
  onPrimary: string;
  success: string;
  successSoft: string;
  warning: string;
  warningSoft: string;
  danger: string;
  dangerSoft: string;
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
  primarySoft: '#E4F2ED',
  onPrimary: '#FFFFFF',
  success: '#16A34A',
  successSoft: '#E6F6EC',
  warning: '#D97706',
  warningSoft: '#FBF0DD',
  danger: '#DC2626',
  dangerSoft: '#FCE9E9',
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
  primarySoft: '#123229',
  onPrimary: '#06281F',
  success: '#4ADE80',
  successSoft: '#12351F',
  warning: '#FBBF24',
  warningSoft: '#382D12',
  danger: '#F87171',
  dangerSoft: '#3A1919',
};
