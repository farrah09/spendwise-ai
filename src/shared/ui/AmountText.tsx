import type { TypographyVariant } from '../../app/theme';
import { formatSar } from '../lib/formatCurrency';
import { AppText } from './AppText';

type AmountTone = 'neutral' | 'positive' | 'negative';

interface AmountTextProps {
  amount: number;
  variant?: TypographyVariant;
  /** positive = income (success color), negative = alert (danger color). */
  tone?: AmountTone;
}

const toneToColor = {
  neutral: 'primary',
  positive: 'success',
  negative: 'danger',
} as const;

export function AmountText({
  amount,
  variant = 'headline',
  tone = 'neutral',
}: AmountTextProps) {
  return (
    <AppText variant={variant} color={toneToColor[tone]}>
      {formatSar(amount)}
    </AppText>
  );
}
