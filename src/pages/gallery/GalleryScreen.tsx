import { Animated, View } from 'react-native';

import { useTheme } from '../../app/theme';
import { strings } from '../../shared/resources/strings';
import {
  AmountText,
  AppCard,
  AppScreen,
  AppText,
  EmptyState,
  LoadingState,
  PrimaryButton,
  SecondaryButton,
  SectionHeader,
  StatusBadge,
  useEntranceAnimation,
} from '../../shared/ui';
import { BalanceCard } from '../../widgets/balance-card/BalanceCard';
import { BudgetProgressCard } from '../../widgets/budget-progress/BudgetProgressCard';
import { InsightPreviewCard } from '../../widgets/insight-preview/InsightPreviewCard';
import { TransactionListItem } from '../../widgets/transaction-list/TransactionListItem';
import { galleryPreviewData as preview } from './galleryPreviewData';

const noop = () => undefined;

export function GalleryScreen() {
  const theme = useTheme();
  const entrance = useEntranceAnimation();
  const sections = strings.gallery.sections;

  return (
    <AppScreen edges={['bottom']} scroll>
      <Animated.View style={entrance}>
        <SectionHeader title={sections.typography} />
        <AppCard style={{ gap: theme.spacing.sm }}>
          <AppText variant="display">{preview.textSample}</AppText>
          <AppText variant="headline">{preview.textSample}</AppText>
          <AppText>{preview.textSample}</AppText>
          <AppText variant="caption" color="secondary">
            {preview.textSample}
          </AppText>
          <AmountText amount={preview.balance} variant="title" />
        </AppCard>

        <SectionHeader title={sections.buttons} />
        <View style={{ gap: theme.spacing.md }}>
          <PrimaryButton label={strings.onboarding.getStarted} onPress={noop} />
          <SecondaryButton label={strings.gallery.open} onPress={noop} />
          <PrimaryButton
            label={strings.common.comingSoon}
            onPress={noop}
            disabled
          />
        </View>

        <SectionHeader title={sections.badges} />
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: theme.spacing.sm,
          }}
        >
          <StatusBadge label={strings.common.comingSoon} />
          <StatusBadge label={strings.widgets.insight.badge} tone="accent" />
          <StatusBadge label={strings.widgets.budget.overBudget} tone="danger" />
        </View>

        <SectionHeader title={sections.states} />
        <AppCard style={{ minHeight: 160 }}>
          <LoadingState />
        </AppCard>
        <AppCard style={{ minHeight: 200, marginTop: theme.spacing.md }}>
          <EmptyState
            title={preview.emptyState.title}
            body={preview.emptyState.body}
            actionLabel={preview.emptyState.actionLabel}
            onAction={noop}
          />
        </AppCard>

        <SectionHeader title={sections.fintech} />
        <View style={{ gap: theme.spacing.md }}>
          <BalanceCard balance={preview.balance} />
          <BudgetProgressCard {...preview.budget} />
          <BudgetProgressCard {...preview.budgetOver} />
          <InsightPreviewCard message={preview.insight} />
          <AppCard>
            {preview.transactions.map((transaction) => (
              <TransactionListItem
                key={transaction.id}
                title={transaction.title}
                category={transaction.category}
                dateLabel={transaction.dateLabel}
                amount={transaction.amount}
              />
            ))}
          </AppCard>
        </View>
      </Animated.View>
    </AppScreen>
  );
}
