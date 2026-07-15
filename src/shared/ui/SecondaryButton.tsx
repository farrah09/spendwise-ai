import { ButtonBase, type ButtonProps } from './ButtonBase';

export function SecondaryButton(props: ButtonProps) {
  return <ButtonBase {...props} variant="secondary" />;
}
