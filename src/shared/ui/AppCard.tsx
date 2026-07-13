import type { PropsWithChildren } from 'react';
import {
  Animated,
  Pressable,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import { useTheme } from '../../app/theme';
import { usePressFeedback } from './animations';

interface AppCardProps extends PropsWithChildren {
  onPress?: () => void;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  style?: StyleProp<ViewStyle>;
}

export function AppCard({
  children,
  onPress,
  accessibilityLabel,
  accessibilityHint,
  style,
}: AppCardProps) {
  const theme = useTheme();
  const { pressStyle, onPressIn, onPressOut } = usePressFeedback();

  const cardStyle: StyleProp<ViewStyle> = [
    {
      backgroundColor: theme.colors.surface,
      borderRadius: theme.radius.lg,
      padding: theme.spacing.lg,
      borderWidth: 1,
      borderColor: theme.colors.border,
      ...theme.shadows.card,
    },
    style,
  ];

  if (!onPress) {
    return <View style={cardStyle}>{children}</View>;
  }

  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
    >
      <Animated.View style={[cardStyle, pressStyle]}>{children}</Animated.View>
    </Pressable>
  );
}
