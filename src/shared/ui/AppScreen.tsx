import type { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView, type Edge } from 'react-native-safe-area-context';

import { useTheme } from '../../app/theme';

interface AppScreenProps extends PropsWithChildren {
  /** Tab screens render under a header, so they usually skip the top edge. */
  edges?: readonly Edge[];
  /** Wrap content in a ScrollView for screens taller than the viewport. */
  scroll?: boolean;
}

export function AppScreen({
  children,
  edges = ['top', 'bottom'],
  scroll = false,
}: AppScreenProps) {
  const theme = useTheme();

  return (
    <SafeAreaView
      edges={edges}
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {scroll ? (
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: theme.spacing.lg,
            paddingBottom: theme.spacing.xl,
          }}
          showsVerticalScrollIndicator={false}
        >
          {children}
        </ScrollView>
      ) : (
        <View
          style={[styles.container, { paddingHorizontal: theme.spacing.lg }]}
        >
          {children}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
