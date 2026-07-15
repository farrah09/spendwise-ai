import { Easing } from 'react-native';

/**
 * Animation foundations only. Screens must consume these tokens instead of
 * inlining durations/easings, so every animation added later (see
 * docs/roadmap.md) stays consistent. Animations must support usability,
 * state change, or feedback — never decoration.
 */
export const motion = {
  duration: {
    instant: 100,
    fast: 150,
    base: 250,
    slow: 400,
    /** Number count-ups and other value reveals. */
    slower: 700,
  },
  easing: {
    standard: Easing.bezier(0.2, 0, 0, 1),
    decelerate: Easing.out(Easing.cubic),
    accelerate: Easing.in(Easing.cubic),
  },
  scale: {
    pressed: 0.97,
  },
  /** Entrance slide distance, matched to the spacing scale. */
  entranceOffset: 12,
  /** Delay step between staggered sibling entrances (index * stagger). */
  stagger: 70,
} as const;
