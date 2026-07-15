import { ButtonBase, type ButtonProps } from './ButtonBase';

export function PrimaryButton(props: ButtonProps) {
  return <ButtonBase {...props} variant="primary" />;
}
