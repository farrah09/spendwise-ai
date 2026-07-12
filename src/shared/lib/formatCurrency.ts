import { appConfig } from '../config/appConfig';

const sarFormatter = new Intl.NumberFormat(appConfig.defaultLocale, {
  style: 'currency',
  currency: appConfig.defaultCurrency,
});

export function formatSar(amount: number): string {
  return sarFormatter.format(amount);
}
