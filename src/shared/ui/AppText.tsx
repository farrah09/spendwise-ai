import { Text, type TextProps } from 'react-native';

import { useTheme, type TypographyVariant } from '../../app/theme';

type TextColor =
  | 'primary'
  | 'secondary'
  | 'onPrimary'
  | 'accent'
  | 'success'
  | 'warning'
  | 'danger';

interface AppTextProps extends TextProps {
  variant?: TypographyVariant;
  color?: TextColor;
}

export function AppText({
  variant = 'body',
  color = 'primary',
  style,
  ...rest
}: AppTextProps) {
  const theme = useTheme();
  const colorValue: Record<TextColor, string> = {
    primary: theme.colors.textPrimary,
    secondary: theme.colors.textSecondary,
    onPrimary: theme.colors.onPrimary,
    accent: theme.colors.primary,
    success: theme.colors.success,
    warning: theme.colors.warning,
    danger: theme.colors.danger,
  };

  return (
    <Text
      style={[theme.typography[variant], { color: colorValue[color] }, style]}
      {...rest}
    />
  );
}
