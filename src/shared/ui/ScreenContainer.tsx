import type { PropsWithChildren } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView, type Edge } from 'react-native-safe-area-context';

import { useTheme } from '../../app/theme';

interface ScreenContainerProps extends PropsWithChildren {
  /** Tab screens render under a header, so they usually skip the top edge. */
  edges?: readonly Edge[];
}

export function ScreenContainer({
  children,
  edges = ['top', 'bottom'],
}: ScreenContainerProps) {
  const theme = useTheme();

  return (
    <SafeAreaView
      edges={edges}
      style={[
        styles.container,
        {
          backgroundColor: theme.colors.background,
          paddingHorizontal: theme.spacing.lg,
        },
      ]}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
