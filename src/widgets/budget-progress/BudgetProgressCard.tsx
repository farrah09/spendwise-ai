import { Animated, StyleSheet, View } from 'react-native';

import { useTheme } from '../../app/theme';
import { formatSar } from '../../shared/lib/formatCurrency';
import { a11y } from '../../shared/resources/accessibility';
import { strings } from '../../shared/resources/strings';
import {
  AppCard,
  AppText,
  StatusBadge,
  useProgressAnimation,
} from '../../shared/ui';

interface BudgetProgressCardProps {
  category: string;
  spent: number;
  limit: number;
}

export function BudgetProgressCard({
  category,
  spent,
  limit,
}: BudgetProgressCardProps) {
  const theme = useTheme();
  const ratio = limit > 0 ? spent / limit : 0;
  const isOver = ratio > 1;
  const barRatio = Math.min(Math.max(ratio, 0), 1);
  const animatedWidth = useProgressAnimation(barRatio);

  return (
    <AppCard>
      <View
        accessible
        accessibilityLabel={a11y.widgets.budget.label(
          category,
          formatSar(spent),
          formatSar(limit),
        )}
        style={{ gap: theme.spacing.sm }}
      >
        <View style={styles.row}>
          <AppText variant="bodyStrong">{category}</AppText>
          {isOver ? (
            <StatusBadge label={strings.widgets.budget.overBudget} tone="danger" />
          ) : null}
        </View>
        <View
          style={[
            styles.track,
            {
              backgroundColor: theme.colors.surfaceMuted,
              borderRadius: theme.radius.pill,
            },
          ]}
        >
          <Animated.View
            style={{
              width: animatedWidth,
              height: '100%',
              borderRadius: theme.radius.pill,
              backgroundColor: isOver ? theme.colors.danger : theme.colors.primary,
            }}
          />
        </View>
        <AppText variant="caption" color="secondary">
          {strings.widgets.budget.progress(formatSar(spent), formatSar(limit))}
        </AppText>
      </View>
    </AppCard>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  track: {
    height: 8,
    overflow: 'hidden',
  },
});
