import { StyleSheet, View } from 'react-native';

import { useTheme } from '../../app/theme';
import { formatSar } from '../../shared/lib/formatCurrency';
import { a11y } from '../../shared/resources/accessibility';
import { strings } from '../../shared/resources/strings';
import { AmountText, AppText } from '../../shared/ui';

interface TransactionListItemProps {
  title: string;
  category: string;
  dateLabel: string;
  /** Negative for expenses, positive for income. */
  amount: number;
}

export function TransactionListItem({
  title,
  category,
  dateLabel,
  amount,
}: TransactionListItemProps) {
  const theme = useTheme();

  return (
    <View
      accessible
      accessibilityLabel={a11y.widgets.transaction.label(
        title,
        category,
        dateLabel,
        formatSar(amount),
      )}
      style={[
        styles.row,
        {
          paddingVertical: theme.spacing.md,
          gap: theme.spacing.md,
        },
      ]}
    >
      <View style={[styles.details, { gap: theme.spacing.xs }]}>
        <AppText variant="bodyStrong" numberOfLines={1}>
          {title}
        </AppText>
        <AppText variant="caption" color="secondary" numberOfLines={1}>
          {strings.widgets.transaction.subtitle(category, dateLabel)}
        </AppText>
      </View>
      <AmountText
        amount={amount}
        variant="bodyStrong"
        tone={amount > 0 ? 'positive' : 'neutral'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  details: {
    flex: 1,
  },
});
