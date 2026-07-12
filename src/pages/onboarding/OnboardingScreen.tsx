import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Routes } from '../../app/navigation/routes';
import type { RootStackParamList } from '../../app/navigation/types';
import { useTheme } from '../../app/theme';
import { a11y } from '../../shared/resources/accessibility';
import { strings } from '../../shared/resources/strings';
import { ScreenContainer } from '../../shared/ui/ScreenContainer';

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

export function OnboardingScreen({ navigation }: Props) {
  const theme = useTheme();

  return (
    <ScreenContainer>
      <View style={styles.content}>
        <Text
          style={[
            theme.typography.display,
            { color: theme.colors.textPrimary, marginBottom: theme.spacing.md },
          ]}
        >
          {strings.onboarding.title}
        </Text>
        <Text
          style={[theme.typography.body, { color: theme.colors.textSecondary }]}
        >
          {strings.onboarding.subtitle}
        </Text>
      </View>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={a11y.onboarding.getStarted.label}
        accessibilityHint={a11y.onboarding.getStarted.hint}
        onPress={() => navigation.replace(Routes.MainTabs, { screen: Routes.Home })}
        style={({ pressed }) => [
          styles.cta,
          {
            backgroundColor: pressed
              ? theme.colors.primaryPressed
              : theme.colors.primary,
            borderRadius: theme.radius.lg,
            paddingVertical: theme.spacing.lg,
            marginBottom: theme.spacing.lg,
          },
        ]}
      >
        <Text style={[theme.typography.bodyStrong, { color: theme.colors.onPrimary }]}>
          {strings.onboarding.getStarted}
        </Text>
      </Pressable>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  cta: {
    alignItems: 'center',
  },
});
