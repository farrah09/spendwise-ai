import { StyleSheet, View } from 'react-native';

import { useTheme } from '../../app/theme';
import { AppText } from './AppText';

type BadgeTone = 'neutral' | 'accent' | 'success' | 'warning' | 'danger';

interface StatusBadgeProps {
  label: string;
  tone?: BadgeTone;
}

export function StatusBadge({ label, tone = 'neutral' }: StatusBadgeProps) {
  const theme = useTheme();
  const toneStyles: Record<BadgeTone, { background: string; text: string }> = {
    neutral: {
      background: theme.colors.surfaceMuted,
      text: theme.colors.textSecondary,
    },
    accent: { background: theme.colors.primarySoft, text: theme.colors.primary },
    success: { background: theme.colors.successSoft, text: theme.colors.success },
    warning: { background: theme.colors.warningSoft, text: theme.colors.warning },
    danger: { background: theme.colors.dangerSoft, text: theme.colors.danger },
  };

  return (
    <View
      style={[
        styles.badge,
        {
          backgroundColor: toneStyles[tone].background,
          borderRadius: theme.radius.pill,
          paddingHorizontal: theme.spacing.md,
          paddingVertical: theme.spacing.xs,
        },
      ]}
    >
      <AppText variant="caption" style={{ color: toneStyles[tone].text }}>
        {label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: 'flex-start',
  },
});
