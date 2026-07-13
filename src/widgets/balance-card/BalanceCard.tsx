import { View } from 'react-native';

import { useTheme } from '../../app/theme';
import { formatSar } from '../../shared/lib/formatCurrency';
import { a11y } from '../../shared/resources/accessibility';
import { strings } from '../../shared/resources/strings';
import { AmountText, AppCard, AppText } from '../../shared/ui';

interface BalanceCardProps {
  balance: number;
}

export function BalanceCard({ balance }: BalanceCardProps) {
  const theme = useTheme();

  return (
    <AppCard>
      <View
        accessible
        accessibilityLabel={a11y.widgets.balance.label(formatSar(balance))}
        style={{ gap: theme.spacing.xs }}
      >
        <AppText variant="label" color="secondary">
          {strings.widgets.balance.label}
        </AppText>
        <AmountText amount={balance} variant="display" />
      </View>
    </AppCard>
  );
}
