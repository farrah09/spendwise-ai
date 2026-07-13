import { StyleSheet, View } from 'react-native';

import { useTheme } from '../../app/theme';
import { AppText } from './AppText';
import { SecondaryButton } from './SecondaryButton';

interface EmptyStateProps {
  title: string;
  body: string;
  actionLabel?: string;
  onAction?: () => void;
}

export function EmptyState({ title, body, actionLabel, onAction }: EmptyStateProps) {
  const theme = useTheme();

  return (
    <View style={[styles.container, { gap: theme.spacing.sm }]}>
      <AppText variant="headline">{title}</AppText>
      <AppText color="secondary" style={styles.body}>
        {body}
      </AppText>
      {actionLabel && onAction ? (
        <View style={{ marginTop: theme.spacing.md }}>
          <SecondaryButton label={actionLabel} onPress={onAction} />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    textAlign: 'center',
  },
});
