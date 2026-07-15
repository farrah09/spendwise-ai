import { Pressable, StyleSheet, View } from 'react-native';

import { useTheme } from '../../app/theme';
import { AppText } from './AppText';

interface SectionHeaderProps {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
  /** Screen-reader label when the visible action label lacks context. */
  actionAccessibilityLabel?: string;
  actionAccessibilityHint?: string;
}

export function SectionHeader({
  title,
  actionLabel,
  onActionPress,
  actionAccessibilityLabel,
  actionAccessibilityHint,
}: SectionHeaderProps) {
  const theme = useTheme();

  return (
    <View
      style={[
        styles.row,
        { marginTop: theme.spacing.xl, marginBottom: theme.spacing.md },
      ]}
    >
      <AppText variant="bodyStrong">{title}</AppText>
      {actionLabel && onActionPress ? (
        <Pressable
          onPress={onActionPress}
          accessibilityRole="button"
          accessibilityLabel={actionAccessibilityLabel ?? actionLabel}
          accessibilityHint={actionAccessibilityHint}
        >
          <AppText variant="label" color="accent">
            {actionLabel}
          </AppText>
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
