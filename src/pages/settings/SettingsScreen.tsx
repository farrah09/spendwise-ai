import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';

import { Routes } from '../../app/navigation/routes';
import type { RootStackParamList } from '../../app/navigation/types';
import { useTheme } from '../../app/theme';
import { a11y } from '../../shared/resources/accessibility';
import { strings } from '../../shared/resources/strings';
import { AppScreen, PlaceholderView, SecondaryButton } from '../../shared/ui';

export function SettingsScreen() {
  const theme = useTheme();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <AppScreen edges={['bottom']}>
      <PlaceholderView
        title={strings.settings.placeholderTitle}
        body={strings.settings.placeholderBody}
      />
      {__DEV__ ? (
        <View style={{ marginBottom: theme.spacing.lg }}>
          <SecondaryButton
            label={strings.gallery.open}
            onPress={() => navigation.navigate(Routes.Gallery)}
            accessibilityLabel={a11y.gallery.open.label}
            accessibilityHint={a11y.gallery.open.hint}
          />
        </View>
      ) : null}
    </AppScreen>
  );
}
