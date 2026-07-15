import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { useTheme } from '../../app/theme';
import { strings } from '../resources/strings';
import { AppText } from './AppText';

interface LoadingStateProps {
  label?: string;
}

export function LoadingState({ label = strings.common.loading }: LoadingStateProps) {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, { gap: theme.spacing.md }]}
      accessibilityRole="progressbar"
      accessibilityLabel={label}
    >
      <ActivityIndicator size="large" color={theme.colors.primary} />
      <AppText variant="caption" color="secondary">
        {label}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
