import type { PropsWithChildren } from 'react';
import { Alert, Animated, StyleSheet, View } from 'react-native';
import type { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';

import { Routes } from '../../app/navigation/routes';
import type { MainTabParamList } from '../../app/navigation/types';
import { useTheme } from '../../app/theme';
import { formatSar } from '../../shared/lib/formatCurrency';
import { a11y } from '../../shared/resources/accessibility';
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
import { useHomeDashboard } from './model/useHomeDashboard';

type HomeNavigation = BottomTabNavigationProp<MainTabParamList>;

/** Staggered fade + slide-up for each dashboard section. */
function DashboardSection({
  index,
  children,
}: PropsWithChildren<{ index: number }>) {
  const theme = useTheme();
  const entranceStyle = useEntranceAnimation(index * theme.motion.stagger);

  return <Animated.View style={entranceStyle}>{children}</Animated.View>;
}

function showAddExpenseComingSoon() {
  Alert.alert(strings.common.comingSoon, strings.home.addExpenseSoon);
}

export function HomeScreen() {
  const theme = useTheme();
  const navigation = useNavigation<HomeNavigation>();
  const dashboard = useHomeDashboard();

  if (dashboard.status === 'loading') {
    return (
      <AppScreen edges={['bottom']}>
        <LoadingState />
      </AppScreen>
    );
  }

  if (dashboard.status === 'empty') {
    return (
      <AppScreen edges={['bottom']}>
        <EmptyState
          title={strings.home.empty.title}
          body={strings.home.empty.body}
          actionLabel={strings.home.quickActions.addExpense}
          onAction={showAddExpenseComingSoon}
        />
      </AppScreen>
    );
  }

  if (dashboard.status === 'error') {
    return (
      <AppScreen edges={['bottom']}>
        <EmptyState
          title={strings.home.error.title}
          body={strings.home.error.body}
          actionLabel={strings.home.error.retry}
          onAction={dashboard.retry}
        />
      </AppScreen>
    );
  }

  return (
    <AppScreen edges={['bottom']} scroll>
      <View style={{ gap: theme.spacing.md, paddingTop: theme.spacing.lg }}>
        <DashboardSection index={0}>
          <View style={styles.headerRow}>
            <View style={{ gap: theme.spacing.xs }}>
              <AppText variant="title">{dashboard.greeting}</AppText>
              <AppText color="secondary">{strings.home.subtitle}</AppText>
            </View>
            <StatusBadge label={strings.home.demoBadge} tone="neutral" />
          </View>
        </DashboardSection>

        <DashboardSection index={1}>
          <BalanceCard balance={dashboard.balance} />
        </DashboardSection>

        <DashboardSection index={2}>
          <View style={[styles.tileRow, { gap: theme.spacing.md }]}>
            <AppCard style={styles.tile}>
              <View
                accessible
                accessibilityLabel={a11y.home.spentThisMonth.label(
                  formatSar(dashboard.spentThisMonth),
                  dashboard.spentPercentOfIncome,
                )}
                style={{ gap: theme.spacing.xs }}
              >
                <AppText variant="label" color="secondary">
                  {strings.home.spentThisMonth}
                </AppText>
                <AmountText amount={dashboard.spentThisMonth} />
                <AppText variant="caption" color="secondary">
                  {strings.home.percentOfIncome(
                    dashboard.spentPercentOfIncome,
                  )}
                </AppText>
              </View>
            </AppCard>
            <AppCard style={styles.tile}>
              <View
                accessible
                accessibilityLabel={a11y.home.incomeThisMonth.label(
                  formatSar(dashboard.incomeThisMonth),
                )}
                style={{ gap: theme.spacing.xs }}
              >
                <AppText variant="label" color="secondary">
                  {strings.home.incomeThisMonth}
                </AppText>
                <AmountText amount={dashboard.incomeThisMonth} tone="positive" />
              </View>
            </AppCard>
          </View>
        </DashboardSection>

        <DashboardSection index={3}>
          <SectionHeader title={strings.home.sections.budgets} />
          <View style={{ gap: theme.spacing.md }}>
            {dashboard.budgets.map((budget) => (
              <BudgetProgressCard
                key={budget.id}
                category={budget.categoryLabel}
                spent={budget.spent}
                limit={budget.limit}
              />
            ))}
          </View>
        </DashboardSection>

        <DashboardSection index={4}>
          <SectionHeader
            title={strings.home.sections.recentTransactions}
            actionLabel={strings.home.seeAll}
            onActionPress={() => navigation.navigate(Routes.Transactions)}
            actionAccessibilityLabel={a11y.home.seeAllTransactions.label}
            actionAccessibilityHint={a11y.home.seeAllTransactions.hint}
          />
          <AppCard>
            {dashboard.recentTransactions.map((transaction) => (
              <TransactionListItem
                key={transaction.id}
                title={transaction.title}
                category={transaction.categoryLabel}
                dateLabel={transaction.dateLabel}
                amount={transaction.amount}
              />
            ))}
          </AppCard>
        </DashboardSection>

        <DashboardSection index={5}>
          <InsightPreviewCard message={dashboard.insight} />
        </DashboardSection>

        <DashboardSection index={6}>
          <View style={{ gap: theme.spacing.md, marginTop: theme.spacing.md }}>
            <PrimaryButton
              label={strings.home.quickActions.addExpense}
              onPress={showAddExpenseComingSoon}
              accessibilityLabel={a11y.home.addExpense.label}
              accessibilityHint={a11y.home.addExpense.hint}
            />
            <View style={[styles.tileRow, { gap: theme.spacing.md }]}>
              <View style={styles.tile}>
                <SecondaryButton
                  label={strings.home.quickActions.viewAnalytics}
                  onPress={() => navigation.navigate(Routes.Analytics)}
                  accessibilityLabel={a11y.home.viewAnalytics.label}
                  accessibilityHint={a11y.home.viewAnalytics.hint}
                />
              </View>
              <View style={styles.tile}>
                <SecondaryButton
                  label={strings.home.quickActions.viewTransactions}
                  onPress={() => navigation.navigate(Routes.Transactions)}
                  accessibilityLabel={a11y.home.viewTransactions.label}
                  accessibilityHint={a11y.home.viewTransactions.hint}
                />
              </View>
            </View>
          </View>
        </DashboardSection>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  tileRow: {
    flexDirection: 'row',
  },
  tile: {
    flex: 1,
  },
});
