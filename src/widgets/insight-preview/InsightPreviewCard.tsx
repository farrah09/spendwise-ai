import { View } from 'react-native';

import { useTheme } from '../../app/theme';
import { a11y } from '../../shared/resources/accessibility';
import { strings } from '../../shared/resources/strings';
import { AppCard, AppText, StatusBadge } from '../../shared/ui';

interface InsightPreviewCardProps {
  message: string;
}

export function InsightPreviewCard({ message }: InsightPreviewCardProps) {
  const theme = useTheme();

  return (
    <AppCard>
      <View
        accessible
        accessibilityLabel={a11y.widgets.insight.label(message)}
        style={{ gap: theme.spacing.sm }}
      >
        <StatusBadge label={strings.widgets.insight.badge} tone="accent" />
        <AppText>{message}</AppText>
      </View>
    </AppCard>
  );
}
