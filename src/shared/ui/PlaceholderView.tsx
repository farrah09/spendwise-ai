import { StyleSheet, Text, View } from 'react-native';

import { useTheme } from '../../app/theme';
import { strings } from '../resources/strings';

interface PlaceholderViewProps {
  title: string;
  body: string;
}

/**
 * Temporary empty-state used while screens are skeletons. Replaced as
 * real widgets land (see docs/roadmap.md).
 */
export function PlaceholderView({ title, body }: PlaceholderViewProps) {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text
        style={[
          theme.typography.headline,
          { color: theme.colors.textPrimary, marginBottom: theme.spacing.sm },
        ]}
      >
        {title}
      </Text>
      <Text
        style={[
          theme.typography.body,
          styles.body,
          { color: theme.colors.textSecondary, marginBottom: theme.spacing.lg },
        ]}
      >
        {body}
      </Text>
      <View
        style={{
          backgroundColor: theme.colors.surfaceMuted,
          borderRadius: theme.radius.pill,
          paddingHorizontal: theme.spacing.md,
          paddingVertical: theme.spacing.xs,
        }}
      >
        <Text
          style={[theme.typography.caption, { color: theme.colors.textSecondary }]}
        >
          {strings.common.comingSoon}
        </Text>
      </View>
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
