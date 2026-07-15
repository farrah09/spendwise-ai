import { useEffect, useRef, useState } from 'react';
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

/**
 * Counts a number up from zero to `target` on mount (and when the target
 * changes). Communicates "this value just arrived". The returned number is
 * for display only — accessibility labels must use the final target so
 * screen readers never announce mid-animation values.
 */
export function useCountUp(target: number) {
  const theme = useTheme();
  const progress = useRef(new Animated.Value(0)).current;
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const listener = progress.addListener(({ value }) =>
      setDisplay(value * target),
    );
    progress.setValue(0);
    Animated.timing(progress, {
      toValue: 1,
      duration: theme.motion.duration.slower,
      easing: theme.motion.easing.decelerate,
      useNativeDriver: false, // drives a rendered text value, not a transform
    }).start(() => setDisplay(target));
    return () => progress.removeListener(listener);
  }, [progress, target, theme.motion]);

  return display;
}

/**
 * Animates a progress bar fill from empty to `ratio` (0–1, caller clamps).
 * Communicates the state change of "this much is used". Returns a width
 * value for an Animated.View inside a fixed-height track.
 */
export function useProgressAnimation(ratio: number) {
  const theme = useTheme();
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: ratio,
      duration: theme.motion.duration.slow,
      easing: theme.motion.easing.decelerate,
      useNativeDriver: false, // animates layout width
    }).start();
  }, [progress, ratio, theme.motion]);

  return progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });
}
