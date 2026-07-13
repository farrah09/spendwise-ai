import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { useTheme } from '../../app/theme';

/**
 * Fade + slide-up entrance for content arriving on screen. Communicates
 * "this just loaded" — use for cards and sections, not chrome.
 */
export function useEntranceAnimation(delay = 0) {
  const theme = useTheme();
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: theme.motion.duration.base,
      delay,
      easing: theme.motion.easing.decelerate,
      useNativeDriver: true,
    }).start();
  }, [progress, delay, theme.motion]);

  return {
    opacity: progress,
    transform: [
      {
        translateY: progress.interpolate({
          inputRange: [0, 1],
          outputRange: [theme.motion.entranceOffset, 0],
        }),
      },
    ],
  };
}

/**
 * Subtle scale-down while pressed. Feedback that a touch registered —
 * attach the handlers to a Pressable and the style to the inner view.
 */
export function usePressFeedback() {
  const theme = useTheme();
  const scale = useRef(new Animated.Value(1)).current;

  const animateTo = (toValue: number) =>
    Animated.timing(scale, {
      toValue,
      duration: theme.motion.duration.instant,
      easing: theme.motion.easing.standard,
      useNativeDriver: true,
    }).start();

  return {
    pressStyle: { transform: [{ scale }] },
    onPressIn: () => animateTo(theme.motion.scale.pressed),
    onPressOut: () => animateTo(1),
  };
}
