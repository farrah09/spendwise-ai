import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';

import { Routes } from '../../app/navigation/routes';
import type { RootStackParamList } from '../../app/navigation/types';
import { useTheme } from '../../app/theme';
import { a11y } from '../../shared/resources/accessibility';
import { strings } from '../../shared/resources/strings';
import { AppScreen, AppText, PrimaryButton } from '../../shared/ui';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

export function OnboardingScreen({ navigation }: Props) {
  const theme = useTheme();

  return (
    <AppScreen>
      <View style={[styles.content, { gap: theme.spacing.md }]}>
        <AppText variant="display">{strings.onboarding.title}</AppText>
        <AppText color="secondary">{strings.onboarding.subtitle}</AppText>
      </View>
      <View style={{ marginBottom: theme.spacing.lg }}>
        <PrimaryButton
          label={strings.onboarding.getStarted}
          onPress={() =>
            navigation.replace(Routes.MainTabs, { screen: Routes.Home })
          }
          accessibilityLabel={a11y.onboarding.getStarted.label}
          accessibilityHint={a11y.onboarding.getStarted.hint}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});
