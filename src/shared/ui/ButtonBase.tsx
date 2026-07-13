import { Animated, Pressable, StyleSheet } from 'react-native';

import { useTheme } from '../../app/theme';
import { AppText } from './AppText';
import { usePressFeedback } from './animations';

export interface ButtonProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  accessibilityLabel?: string;
  accessibilityHint?: string;
}

interface ButtonBaseProps extends ButtonProps {
  variant: 'primary' | 'secondary';
}

export function ButtonBase({
  label,
  onPress,
  disabled = false,
  accessibilityLabel,
  accessibilityHint,
  variant,
}: ButtonBaseProps) {
  const theme = useTheme();
  const { pressStyle, onPressIn, onPressOut } = usePressFeedback();
  const isPrimary = variant === 'primary';

  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityHint={accessibilityHint}
    >
      {({ pressed }) => (
        <Animated.View
          style={[
            styles.base,
            {
              borderRadius: theme.radius.lg,
              paddingVertical: theme.spacing.lg,
              paddingHorizontal: theme.spacing.xl,
              backgroundColor: isPrimary
                ? pressed
                  ? theme.colors.primaryPressed
                  : theme.colors.primary
                : pressed
                  ? theme.colors.surfaceMuted
                  : theme.colors.surface,
              borderWidth: isPrimary ? 0 : 1,
              borderColor: theme.colors.border,
              opacity: disabled ? 0.5 : 1,
            },
            pressStyle,
          ]}
        >
          <AppText variant="bodyStrong" color={isPrimary ? 'onPrimary' : 'accent'}>
            {label}
          </AppText>
        </Animated.View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
