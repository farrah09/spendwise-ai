import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from '../theme';
import { a11y } from '../../shared/resources/accessibility';
import { strings } from '../../shared/resources/strings';
import { AnalyticsScreen } from '../../pages/analytics/AnalyticsScreen';
import { HomeScreen } from '../../pages/home/HomeScreen';
import { SettingsScreen } from '../../pages/settings/SettingsScreen';
import { TransactionsScreen } from '../../pages/transactions/TransactionsScreen';
import { Routes } from './routes';
import type { MainTabParamList } from './types';

const Tab = createBottomTabNavigator<MainTabParamList>();

export function MainTabNavigator() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.background },
        headerTitleStyle: {
          color: theme.colors.textPrimary,
          fontSize: theme.typography.headline.fontSize,
          fontWeight: theme.typography.headline.fontWeight,
        },
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: theme.colors.surface,
          borderTopColor: theme.colors.border,
        },
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textSecondary,
        tabBarIconStyle: { display: 'none' },
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          fontSize: theme.typography.body.fontSize,
          fontWeight: theme.typography.bodyStrong.fontWeight,
        },
      }}
    >
      <Tab.Screen
        name={Routes.Home}
        component={HomeScreen}
        options={{
          title: strings.tabs.home,
          tabBarAccessibilityLabel: a11y.tabs.home.label,
        }}
      />
      <Tab.Screen
        name={Routes.Transactions}
        component={TransactionsScreen}
        options={{
          title: strings.tabs.transactions,
          tabBarAccessibilityLabel: a11y.tabs.transactions.label,
        }}
      />
      <Tab.Screen
        name={Routes.Analytics}
        component={AnalyticsScreen}
        options={{
          title: strings.tabs.analytics,
          tabBarAccessibilityLabel: a11y.tabs.analytics.label,
        }}
      />
      <Tab.Screen
        name={Routes.Settings}
        component={SettingsScreen}
        options={{
          title: strings.tabs.settings,
          tabBarAccessibilityLabel: a11y.tabs.settings.label,
        }}
      />
    </Tab.Navigator>
  );
}
